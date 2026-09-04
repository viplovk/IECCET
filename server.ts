import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import { GoogleGenAI, Type } from '@google/genai';
import { 
  getSqlDatabase, 
  authenticateStudent, 
  registerStudent, 
  getAllStudents, 
  getStudentByRoll, 
  persistDatabase 
} from './src/server/db.ts';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Set request payload limits to handle uploaded lecture PDFs, notes, and slides
app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));

// Lazy-initialized Gemini AI client
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.warn('Warning: GEMINI_API_KEY is not set. Mock/fallback responses will be used if needed.');
    }
    aiClient = new GoogleGenAI({
      apiKey: apiKey || 'dummy-key-for-init',
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return aiClient;
}

const COPILOT_SYSTEM_INSTRUCTION = `You are "Campus & Syllabus Copilot," an intelligent academic assistant built for university students. Your goal is to help students navigate their courses, understand complex syllabus topics, extract practical summaries from uploaded lecture materials, and prepare for exams.

### Operating Rules & Capabilities:
1. Grounded Answers: When the user uploads course materials (PDFs, slides, lecture notes, syllabus outlines, or text excerpts), base your primary responses on that content. If information is not in the document, clearly state that before providing general academic knowledge (e.g., "Note: This specific detail was not present in your uploaded material, but based on standard curriculum...").
2. Direct & Structured Communication: Avoid fluff or verbose introductory setups. Use clear formatting (bullet points, bold key terms, short paragraphs, markdown tables).
3. Modes of Operation (adapt strictly based on user command or requested mode):
   - /summarize: Provide a high-yield summary focusing on core concepts, formulas, and definitions. Include a quick reference table or bulleted breakdown of high-impact exam takeaways.
   - /quiz: Generate a targeted 5-question practice quiz (mix of conceptual multiple-choice and short-answer questions). Provide clear questions first, followed by detailed answer keys and explanations at the end.
   - /studyplan: Break down the provided syllabus or topic into a realistic, week-by-week or day-by-day revision schedule with clear milestones, daily focus areas, and rapid self-test checkpoints.
   - /explain [concept]: Explain complex terms using simple analogies, real-world examples, and step-by-step logic.
4. University & Engineering Context: When relevant, align with standard university engineering and academic grading patterns (e.g. AKTU / University B.Tech curriculums, 2-mark definitions, and 10-mark analytical blueprints).
5. Tone: Encouraging, concise, structured, and student-focused.`;

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    app: 'Campus & Syllabus Copilot',
    college: 'IEC College of Engineering & Technology (AKTU Code: 090)',
    creator: 'Viplov (2nd Year B.Tech)',
    database: 'SQLite (sql.js WASM Relational Database)',
  });
});

// ======================== SQL STUDENT AUTHENTICATION ROUTES ========================

// Login endpoint: Authenticate with Roll Number & Date of Birth (DDMMYYYY)
app.post('/api/auth/login', async (req, res) => {
  try {
    const { rollNumber, dob } = req.body;
    if (!rollNumber || !dob) {
      return res.status(400).json({
        success: false,
        error: 'Roll Number (Username) and Date of Birth (Password in DDMMYYYY) are required.',
      });
    }

    const userAgent = req.headers['user-agent'] || 'Browser';
    const authResult = await authenticateStudent(rollNumber, dob, userAgent);

    if (!authResult.success) {
      return res.status(401).json(authResult);
    }

    res.json({
      success: true,
      message: `Welcome back, ${authResult.student?.name}!`,
      student: authResult.student,
    });
  } catch (error: any) {
    console.error('Error during student login:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Internal server error during authentication.',
    });
  }
});

// Register / Enroll new student into SQL database
app.post('/api/auth/register', async (req, res) => {
  try {
    const { roll_number, dob, name, branch, year, semester, section, email, phone } = req.body;

    if (!roll_number || !dob || !name || !branch) {
      return res.status(400).json({
        success: false,
        error: 'Roll Number, Date of Birth (DDMMYYYY), Full Name, and Branch are required.',
      });
    }

    const registerResult = await registerStudent({
      roll_number,
      dob,
      name,
      branch,
      year: Number(year) || 2,
      semester: Number(semester) || 3,
      section: section || 'A',
      email: email || '',
      phone: phone || '',
    });

    if (!registerResult.success) {
      return res.status(400).json(registerResult);
    }

    res.json({
      success: true,
      message: `Successfully enrolled ${registerResult.student?.name} in SQL database!`,
      student: registerResult.student,
    });
  } catch (error: any) {
    console.error('Error during student registration:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Internal server error during student registration.',
    });
  }
});

// List enrolled students from SQL database (for demo quick selection)
app.get('/api/auth/students', async (req, res) => {
  try {
    const students = await getAllStudents();
    res.json({
      success: true,
      count: students.length,
      students,
    });
  } catch (error: any) {
    console.error('Error fetching students:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to fetch student directory.',
    });
  }
});

// Get individual student profile from SQL database
app.get('/api/auth/student/:rollNumber', async (req, res) => {
  try {
    const student = await getStudentByRoll(req.params.rollNumber);
    if (!student) {
      return res.status(404).json({ success: false, error: 'Student not found in SQL database.' });
    }
    // Omit DOB from profile response
    const { dob, ...safeProfile } = student;
    res.json({ success: true, student: safeProfile });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Update student attendance or target in SQL database
app.post('/api/auth/update-attendance', async (req, res) => {
  try {
    const { rollNumber, attendancePercentage, targetAttendance } = req.body;
    if (!rollNumber) {
      return res.status(400).json({ success: false, error: 'Roll number required.' });
    }

    const db = await getSqlDatabase();
    db.run(
      'UPDATE students SET attendance_percentage = ?, target_attendance = ? WHERE UPPER(roll_number) = ?',
      [Number(attendancePercentage) || 75.0, Number(targetAttendance) || 75.0, rollNumber.trim().toUpperCase()]
    );
    persistDatabase();

    const updated = await getStudentByRoll(rollNumber);
    res.json({ success: true, student: updated });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Unified Command Execution Endpoint (/summarize, /quiz, /studyplan, /explain, or general query)
app.post('/api/copilot/execute', async (req, res) => {
  try {
    const { 
      command, 
      prompt, 
      subjectName, 
      subjectCode, 
      unitNumber, 
      uploadedMaterial 
    } = req.body;
    const ai = getGeminiClient();

    let commandPrompt = '';
    const materialContext = uploadedMaterial?.content 
      ? `\n\n--- UPLOADED COURSE MATERIAL (${uploadedMaterial.name}) ---\n${uploadedMaterial.content.slice(0, 40000)}\n--- END OF MATERIAL ---\n`
      : '';

    switch (command) {
      case 'summarize':
        commandPrompt = `COMMAND: /summarize
Target Subject/Topic: ${subjectName || ''} ${subjectCode ? `(${subjectCode})` : ''} ${unitNumber ? `Unit ${unitNumber}` : ''}
User Specific Query: ${prompt || 'Provide a high-yield summary of this subject/material'}
${materialContext}

Requirement: Provide a direct, high-yield summary focusing on:
1. 📌 **Core Concepts & Key Definitions** (Crisp, high-impact definitions with bold key terms)
2. 📐 **Essential Formulas, Equations & Time/Space Complexities** (Clear markdown table or block)
3. ⚡ **Key Takeaways & High-Yield Exam Points**
4. ⚠️ **Common Traps & Edge Cases**

Format directly with clean markdown and bold terminology. Avoid conversational filler.`;
        break;

      case 'quiz':
        commandPrompt = `COMMAND: /quiz
Target Subject/Topic: ${subjectName || ''} ${subjectCode ? `(${subjectCode})` : ''} ${unitNumber ? `Unit ${unitNumber}` : ''}
User Query: ${prompt || 'Generate a targeted 5-question practice quiz'}
${materialContext}

Requirement: Generate a targeted 5-question practice quiz (mix of conceptual multiple-choice and short-answer questions).
Format as follows:
### 📝 Practice Quiz (5 Targeted Questions)
- Questions 1 to 3: Multiple Choice (with options A, B, C, D)
- Questions 4 & 5: Conceptual / Short-Answer Questions

---
### 🔑 Detailed Answer Key & Explanations
- Provide the correct answer for each question with step-by-step reasoning and why distractors are incorrect.`;
        break;

      case 'studyplan':
        commandPrompt = `COMMAND: /studyplan
Target Subject/Topic: ${subjectName || ''} ${subjectCode ? `(${subjectCode})` : ''} ${unitNumber ? `Unit ${unitNumber}` : ''}
User Query / Timeline: ${prompt || 'Generate a structured week-by-week or day-by-day revision schedule'}
${materialContext}

Requirement: Break down the provided syllabus or topic into a realistic, structured week-by-week or day-by-day revision schedule.
Include:
1. 🎯 **Strategic Goal & Priority Matrix** (High-yield units/topics vs rapid-scoring topics)
2. 📅 **Structured Timetable / Daily Breakdown** (Specific topics, estimated hours, and revision blocks)
3. ⚡ **Active Recall & Practice Checkpoints** (What to test yourself on each phase)
4. 📝 **Last 24-Hours Final Checklist & Formula Review**`;
        break;

      case 'explain':
      default:
        commandPrompt = `COMMAND: /explain
Target Subject/Topic: ${subjectName || ''} ${subjectCode ? `(${subjectCode})` : ''} ${unitNumber ? `Unit ${unitNumber}` : ''}
Concept/Query: ${prompt}
${materialContext}

Requirement: Explain the concept directly using:
1. 💡 **Intuitive Analogy & Real-World Example** (Simple, relatable mental model)
2. 📌 **Technical Definition & Core Principles** (Standard engineering/academic formulation)
3. ⚙️ **Step-by-Step Logic & Working Mechanism** (Numbered sequence or ASCII/markdown flowchart)
4. 📝 **Exam Answer Structuring** (How to write this effectively in a university exam for full credit)`;
        break;
    }

    // Build parts for multimodal or text
    const parts: any[] = [];
    if (uploadedMaterial?.base64 && uploadedMaterial?.mimeType === 'application/pdf') {
      parts.push({
        inlineData: {
          mimeType: 'application/pdf',
          data: uploadedMaterial.base64,
        },
      });
    }
    parts.push({ text: commandPrompt });

    const response = await ai.models.generateContent({
      model: 'gemini-3.7-flash',
      contents: [
        {
          role: 'user',
          parts,
        },
      ],
      config: {
        systemInstruction: COPILOT_SYSTEM_INSTRUCTION,
        temperature: 0.3,
      },
    });

    res.json({
      success: true,
      command,
      output: response.text || 'No response generated. Please try again.',
      groundedInDocument: Boolean(uploadedMaterial),
    });
  } catch (error: any) {
    console.error('Error in /api/copilot/execute:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to process copilot command.',
    });
  }
});

// Topic Explainer Legacy Route
app.post('/api/copilot/explain', async (req, res) => {
  try {
    const { subjectCode, subjectName, unitNumber, topicName, customQuery, uploadedMaterial } = req.body;
    const ai = getGeminiClient();

    const materialText = uploadedMaterial?.content 
      ? `\n\nUploaded Course Material Reference:\n${uploadedMaterial.content.slice(0, 30000)}\n`
      : '';

    const prompt = `COMMAND: /explain
Subject: ${subjectName} (${subjectCode || 'University Subject'})
Unit: ${unitNumber ? `Unit ${unitNumber}` : 'General'}
Topic to Explain: ${topicName || customQuery}
${materialText}

Explain using:
1. 💡 **Intuitive Analogy & Real-World Example**
2. 📌 **Formal Definition & Core Principles**
3. ⚙️ **Step-by-Step Logic / Working Principle / Code / Equations**
4. 📝 **High-Yield Exam Model Answer Structure**
5. ⚠️ **Common Pitfalls & Mistakes**`;

    const parts: any[] = [];
    if (uploadedMaterial?.base64 && uploadedMaterial?.mimeType === 'application/pdf') {
      parts.push({
        inlineData: {
          mimeType: 'application/pdf',
          data: uploadedMaterial.base64,
        },
      });
    }
    parts.push({ text: prompt });

    const response = await ai.models.generateContent({
      model: 'gemini-3.7-flash',
      contents: [{ role: 'user', parts }],
      config: {
        systemInstruction: COPILOT_SYSTEM_INSTRUCTION,
        temperature: 0.3,
      },
    });

    res.json({
      success: true,
      explanation: response.text || 'No response generated. Please try again.',
    });
  } catch (error: any) {
    console.error('Error in /api/copilot/explain:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to generate explanation.',
    });
  }
});

// Predict Questions & 10-Mark Blueprint
app.post('/api/copilot/predict-questions', async (req, res) => {
  try {
    const { subjectName, subjectCode, unitNumber, yearLevel } = req.body;
    const ai = getGeminiClient();

    const prompt = `Generate a high-yield University Predicted Question Paper and Answer Blueprint for:
Subject: ${subjectName} (${subjectCode})
Target: ${unitNumber ? `Unit ${unitNumber}` : 'All 5 Units'}
Year: ${yearLevel ? `Year ${yearLevel}` : '2nd Year'} B.Tech

Include:
### Part 1: Section A (2-Mark Short Questions) - 5 High-Probability Questions with Model Answers
### Part 2: Section B & C (10-Mark Analytical / Long Questions) - 3 Predicted Questions with In-Depth Solutions
### Part 3: High-Frequency Repeated Topics Analysis`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.7-flash',
      contents: prompt,
      config: {
        systemInstruction: COPILOT_SYSTEM_INSTRUCTION,
        temperature: 0.3,
      },
    });

    res.json({
      success: true,
      questions: response.text || 'Unable to generate questions.',
    });
  } catch (error: any) {
    console.error('Error in /api/copilot/predict-questions:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to predict questions.',
    });
  }
});

// Generate Interactive Quiz (Structured JSON)
app.post('/api/copilot/generate-quiz', async (req, res) => {
  try {
    const { subjectName, subjectCode, unitNumber, difficulty, uploadedMaterial } = req.body;
    const ai = getGeminiClient();

    const materialText = uploadedMaterial?.content 
      ? `\nBase quiz questions on this uploaded document content:\n${uploadedMaterial.content.slice(0, 25000)}\n`
      : '';

    const prompt = `Generate 5 targeted practice quiz questions (multiple choice with detailed explanations) for:
Subject: ${subjectName} (${subjectCode})
Unit: ${unitNumber ? `Unit ${unitNumber}` : 'Comprehensive'}
Difficulty: ${difficulty || 'Moderate / University Exam Standard'}
${materialText}

Return strict JSON array with each item having:
- id: number (1 to 5)
- question: string
- options: array of 4 string choices
- correctAnswerIndex: number (0, 1, 2, or 3)
- explanation: string (step-by-step reason why the option is correct)
- unitNumber: number`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.7-flash',
      contents: prompt,
      config: {
        systemInstruction: COPILOT_SYSTEM_INSTRUCTION,
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.INTEGER },
              question: { type: Type.STRING },
              options: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
              },
              correctAnswerIndex: { type: Type.INTEGER },
              explanation: { type: Type.STRING },
              unitNumber: { type: Type.INTEGER },
            },
            required: ['id', 'question', 'options', 'correctAnswerIndex', 'explanation'],
          },
        },
      },
    });

    let questions = [];
    try {
      questions = JSON.parse(response.text || '[]');
    } catch {
      questions = [];
    }

    res.json({
      success: true,
      questions,
    });
  } catch (error: any) {
    console.error('Error in /api/copilot/generate-quiz:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to generate quiz.',
    });
  }
});

// Study Plan / Exam Cram Schedule Generator
app.post('/api/copilot/study-plan', async (req, res) => {
  try {
    const { subjectName, subjectCode, daysLeft, dailyHours, examType } = req.body;
    const ai = getGeminiClient();

    const prompt = `COMMAND: /studyplan
Subject: ${subjectName} (${subjectCode})
Days Left: ${daysLeft || 7} Days
Target Exam: ${examType || 'University End-Semester Exam'}
Daily Study Time: ${dailyHours || 4} Hours per day

Provide:
1. 🎯 **Strategic Goal & Priority Matrix**
2. 📅 **Day-by-Day Master Revision Schedule**
3. ⚡ **Active Recall & Rapid Problem Solving Checkpoints**
4. 📝 **Last 24 Hours Final Revision & Formula Checklist**`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.7-flash',
      contents: prompt,
      config: {
        systemInstruction: COPILOT_SYSTEM_INSTRUCTION,
        temperature: 0.3,
      },
    });

    res.json({
      success: true,
      plan: response.text || 'Unable to generate study plan.',
    });
  } catch (error: any) {
    console.error('Error in /api/copilot/study-plan:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to generate study plan.',
    });
  }
});

// Conversational Chat with Copilot & Document Grounding
app.post('/api/copilot/chat', async (req, res) => {
  try {
    const { messages, currentSubject, uploadedMaterial } = req.body;
    const ai = getGeminiClient();

    let docNote = '';
    if (uploadedMaterial) {
      docNote = `\nActive Uploaded Document: "${uploadedMaterial.name}". Base your answers strictly on this document when relevant. If a requested detail is not found in this document, explicitly mention: "Note: This is not explicitly detailed in ${uploadedMaterial.name}, but according to standard curriculum..."`;
    }

    const formattedHistory = (messages || []).map((m: any) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }],
    }));

    const lastUserMessage = formattedHistory.pop()?.parts[0]?.text || 'Hello Copilot!';

    let fullPrompt = lastUserMessage;
    if (uploadedMaterial?.content) {
      fullPrompt = `[Attached Material Excerpt: ${uploadedMaterial.name}]\n${uploadedMaterial.content.slice(0, 20000)}\n\nStudent Question/Command: ${lastUserMessage}`;
    }

    const chat = ai.chats.create({
      model: 'gemini-3.7-flash',
      config: {
        systemInstruction: `${COPILOT_SYSTEM_INSTRUCTION}
Context: The student is studying "${currentSubject?.name || 'Academic Course'}" (${currentSubject?.code || 'University'}).
${docNote}`,
      },
      history: formattedHistory,
    });

    const response = await chat.sendMessage({
      message: fullPrompt,
    });

    res.json({
      success: true,
      reply: response.text || 'I am here to help you navigate your course and master your exams!',
      groundedInDocument: Boolean(uploadedMaterial),
    });
  } catch (error: any) {
    console.error('Error in /api/copilot/chat:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to respond to chat.',
    });
  }
});

// Setup Vite development middleware or production static files
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Campus & Syllabus Copilot server running on http://localhost:${PORT}`);
  });
}

startServer();
