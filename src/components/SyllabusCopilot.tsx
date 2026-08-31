import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import { 
  Sparkles, 
  Send, 
  BookOpen, 
  FileText, 
  Calendar, 
  MessageSquare, 
  Copy, 
  Check, 
  Flame, 
  Lightbulb, 
  AlertCircle, 
  RefreshCw,
  Award,
  Zap,
  Upload,
  FileCheck,
  X,
  HelpCircle,
  ListOrdered,
  FileCode,
  Terminal,
  Paperclip
} from 'lucide-react';
import { AKTU_SUBJECTS } from '../data/aktuSyllabus';
import { Subject, SyllabusUnit, CopilotMessage, UploadedMaterial } from '../types';

interface SyllabusCopilotProps {
  initialSubject?: Subject;
  initialUnit?: SyllabusUnit;
  initialTopic?: string;
  initialMode?: 'explain' | 'questions' | 'quiz' | 'plan' | 'summarize';
}

const SAMPLE_COURSE_MATERIALS: { name: string; type: string; summary: string; content: string }[] = [
  {
    name: 'OS_Unit3_Deadlocks_Synchronization.txt',
    type: 'Lecture Notes',
    summary: 'Covers Deadlock 4 Coffman conditions, Resource Allocation Graphs, Banker\'s Algorithm safety state, and Semaphore synchronization.',
    content: `OPERATING SYSTEMS - UNIT 3: PROCESS SYNCHRONIZATION & DEADLOCKS
1. Critical Section Problem: Requirements are Mutual Exclusion, Progress, and Bounded Waiting.
2. Peterson's Solution: Software-based solution for two processes using turn and flag array variables.
3. Semaphores: Counting and Binary (Mutex). Wait(P) operation: while (S <= 0); S--; Signal(V) operation: S++;
4. Classical Problems: Producer-Consumer (Bounded Buffer), Readers-Writers Problem, Dining Philosophers.
5. Deadlock Definition: A situation where a set of processes are blocked because each process is holding a resource and waiting for another resource acquired by some other process.
6. Four Necessary Coffman Conditions:
   - Mutual Exclusion: Only one process can use the resource at a time.
   - Hold and Wait: A process holds at least one resource and waits for others.
   - No Preemption: Resources cannot be forcibly taken from a process.
   - Circular Wait: A closed chain of processes exists where each process holds resources needed by the next.
7. Deadlock Handling Strategies:
   - Deadlock Prevention: Invalidate at least one of the 4 Coffman conditions.
   - Deadlock Avoidance: Banker's Algorithm (Check Safety State using Work, Available, Allocation, Need matrices. Need = Max - Allocation).
   - Deadlock Detection and Recovery: Resource Allocation Graph (RAG) cycle detection and Process Termination / Resource Preemption.
   - Ostrich Algorithm (Ignore the problem).`
  },
  {
    name: 'DSA_Unit2_Trees_BST_AVL.txt',
    type: 'Curriculum Handout',
    summary: 'Covers Binary Tree properties, Traversals (Inorder, Preorder, Postorder), BST Operations, and AVL Tree Rotations (LL, RR, LR, RL).',
    content: `DATA STRUCTURES - UNIT 2: TREES, BST & BALANCED SEARCH TREES
1. Tree Terminology: Root, Depth, Height, Degree, Internal/Leaf Nodes. For a Binary Tree of height h: Max nodes = 2^(h+1) - 1.
2. Binary Tree Traversals:
   - Inorder (L-Root-R): Produces sorted order for Binary Search Trees (BST).
   - Preorder (Root-L-R): Useful for cloning/serialization of tree structure.
   - Postorder (L-R-Root): Useful for deleting trees and evaluating postfix expressions.
   - Level Order (BFS): Uses Queue data structure; Time O(n), Space O(w) where w is maximum width.
3. Binary Search Tree (BST):
   - Property: Left subtree keys < Root key < Right subtree keys.
   - Search/Insert/Delete Time Complexity: Best/Average O(log n), Worst Case O(n) for skewed degenerate trees.
4. AVL Trees (Self-Balancing BST):
   - Balance Factor (BF) = Height(Left Subtree) - Height(Right Subtree). Permissible values: {-1, 0, +1}.
   - Rotations for Rebalancing:
     * LL Rotation (Single Right Rotation) when BF > 1 and inserted in left-left.
     * RR Rotation (Single Left Rotation) when BF < -1 and inserted in right-right.
     * LR Rotation (Left-Right Double Rotation): Left rotate left child, then Right rotate node.
     * RL Rotation (Right-Left Double Rotation): Right rotate right child, then Left rotate node.
   - Search/Insert/Delete Time Complexity: Strictly O(log n) worst-case.`
  },
  {
    name: 'CN_Unit4_Transport_TCP_Congestion.txt',
    type: 'Slide Summary',
    summary: 'Transport layer protocols (TCP vs UDP), 3-Way Handshake, TCP Flow Control (Sliding Window), and Congestion Control (AIMD).',
    content: `COMPUTER NETWORKS - UNIT 4: TRANSPORT LAYER & TCP/IP
1. Transport Layer Duties: End-to-End delivery, Process-to-Process addressing (Ports), Multiplexing/Demultiplexing, Connection Management.
2. TCP vs UDP:
   - TCP: Connection-oriented, Reliable, Byte-stream, Flow control, Congestion control, Overhead 20-60 bytes.
   - UDP: Connectionless, Unreliable best-effort, Message-oriented, Minimal header overhead 8 bytes.
3. TCP 3-Way Handshake:
   - Step 1: Client sends SYN (seq = x)
   - Step 2: Server replies SYN-ACK (seq = y, ack = x + 1)
   - Step 3: Client sends ACK (ack = y + 1)
4. Flow Control: Receiver Advertised Window (rwnd) prevents overflowing receiver's buffer.
5. TCP Congestion Control Mechanisms:
   - Slow Start: Congestion Window (cwnd) doubles every RTT (exponential growth) until cwnd reaches ssthresh.
   - Congestion Avoidance: Once cwnd >= ssthresh, cwnd increases by 1 MSS per RTT (Additive Increase).
   - Fast Retransmit: Triggered upon receiving 3 duplicate ACKs before timeout.
   - Fast Recovery: Sets ssthresh = cwnd / 2 and skips slow start to resume additive growth.`
  }
];

export const SyllabusCopilot: React.FC<SyllabusCopilotProps> = ({
  initialSubject,
  initialUnit,
  initialTopic,
  initialMode = 'explain',
}) => {
  const [selectedSubject, setSelectedSubject] = useState<Subject>(
    initialSubject || AKTU_SUBJECTS[0]
  );
  const [selectedUnitNum, setSelectedUnitNum] = useState<number | 'ALL'>(
    initialUnit ? initialUnit.unitNumber : 1
  );

  // Active command mode
  const [activeCommand, setActiveCommand] = useState<'summarize' | 'quiz' | 'studyplan' | 'explain' | 'chat'>(
    initialMode === 'quiz' ? 'quiz' : initialMode === 'plan' ? 'studyplan' : initialMode === 'summarize' ? 'summarize' : 'explain'
  );

  // Input states
  const [promptInput, setPromptInput] = useState(initialTopic || '');
  const [chatInput, setChatInput] = useState('');
  const [showSlashHints, setShowSlashHints] = useState(false);
  const [slashFilter, setSlashFilter] = useState('');

  // Course Material Upload state
  const [uploadedMaterial, setUploadedMaterial] = useState<UploadedMaterial | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Chat conversation
  const [chatMessages, setChatMessages] = useState<CopilotMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: `👋 **Welcome to Campus & Syllabus Copilot!**\n\nI am your intelligent academic assistant built for university courses, lecture materials, and exam mastery.\n\n### Quick Slash Commands:\n- \`/summarize\` → High-yield summaries with core concepts, formulas, and definitions.\n- \`/quiz\` → Targeted 5-question practice quiz (conceptual MCQs + short answers with full keys).\n- \`/studyplan\` → Week-by-week or day-by-day revision schedule with priority checkpoints.\n- \`/explain [concept]\` → Plain analogies, real-world examples, and step-by-step logic.\n\n*Tip: You can upload your lecture slides or notes above for 100% grounded explanations!*`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  // Structured response output
  const [structuredOutput, setStructuredOutput] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [isGroundedInDoc, setIsGroundedInDoc] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const chatEndRef = useRef<HTMLDivElement>(null);

  // Sync props if changed
  useEffect(() => {
    if (initialSubject) setSelectedSubject(initialSubject);
    if (initialUnit) setSelectedUnitNum(initialUnit.unitNumber);
    if (initialTopic) setPromptInput(initialTopic);
  }, [initialSubject, initialUnit, initialTopic]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages, isLoading]);

  const handleCopy = () => {
    navigator.clipboard.writeText(structuredOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Handle file uploads (PDF, TXT, MD)
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    processFile(file);
  };

  const processFile = (file: File) => {
    setIsUploading(true);
    const reader = new FileReader();

    if (file.type === 'application/pdf') {
      reader.onload = (event) => {
        const result = event.target?.result as string;
        const base64Data = result.split(',')[1];
        setUploadedMaterial({
          id: Date.now().toString(),
          name: file.name,
          size: file.size,
          mimeType: 'application/pdf',
          base64: base64Data,
          uploadedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        });
        setIsUploading(false);
      };
      reader.readAsDataURL(file);
    } else {
      // Plain text, markdown, or code
      reader.onload = (event) => {
        const textContent = event.target?.result as string;
        setUploadedMaterial({
          id: Date.now().toString(),
          name: file.name,
          size: file.size,
          mimeType: file.type || 'text/plain',
          content: textContent,
          uploadedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        });
        setIsUploading(false);
      };
      reader.readAsText(file);
    }
  };

  const handleSelectSampleMaterial = (sample: typeof SAMPLE_COURSE_MATERIALS[0]) => {
    setUploadedMaterial({
      id: Date.now().toString(),
      name: sample.name,
      size: sample.content.length,
      mimeType: 'text/plain',
      content: sample.content,
      uploadedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    });
  };

  const handleClearMaterial = () => {
    setUploadedMaterial(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  // Execute a specific command mode
  const executeCommand = async (
    cmd: 'summarize' | 'quiz' | 'studyplan' | 'explain',
    customPrompt?: string
  ) => {
    const query = customPrompt !== undefined ? customPrompt : promptInput;
    setIsLoading(true);
    setErrorMsg(null);
    setStructuredOutput('');
    setActiveCommand(cmd);

    try {
      const res = await fetch('/api/copilot/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          command: cmd,
          prompt: query,
          subjectName: selectedSubject.name,
          subjectCode: selectedSubject.code,
          unitNumber: selectedUnitNum === 'ALL' ? undefined : selectedUnitNum,
          uploadedMaterial,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setStructuredOutput(data.output);
        setIsGroundedInDoc(Boolean(data.groundedInDocument));
      } else {
        setErrorMsg(data.error || 'Failed to process command. Please check server configuration.');
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Network error connecting to Campus & Syllabus Copilot.');
    } finally {
      setIsLoading(false);
    }
  };

  // Handle conversational chat input & slash commands in chat
  const handleSendChat = async (overrideText?: string) => {
    const rawInput = overrideText || chatInput;
    if (!rawInput.trim()) return;

    // Check if input is a slash command
    const trimmed = rawInput.trim();
    if (trimmed.startsWith('/')) {
      const parts = trimmed.split(' ');
      const slash = parts[0].toLowerCase();
      const rest = parts.slice(1).join(' ');

      if (slash === '/summarize') {
        setChatInput('');
        setShowSlashHints(false);
        setActiveCommand('summarize');
        await executeCommand('summarize', rest || undefined);
        return;
      }
      if (slash === '/quiz') {
        setChatInput('');
        setShowSlashHints(false);
        setActiveCommand('quiz');
        await executeCommand('quiz', rest || undefined);
        return;
      }
      if (slash === '/studyplan') {
        setChatInput('');
        setShowSlashHints(false);
        setActiveCommand('studyplan');
        await executeCommand('studyplan', rest || undefined);
        return;
      }
      if (slash === '/explain') {
        setChatInput('');
        setShowSlashHints(false);
        setActiveCommand('explain');
        await executeCommand('explain', rest || promptInput);
        return;
      }
    }

    const userMsg: CopilotMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: rawInput,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      attachedMaterialName: uploadedMaterial ? uploadedMaterial.name : undefined,
    };

    const newHistory = [...chatMessages, userMsg];
    setChatMessages(newHistory);
    setChatInput('');
    setShowSlashHints(false);
    setIsLoading(true);

    try {
      const res = await fetch('/api/copilot/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newHistory,
          currentSubject: selectedSubject,
          uploadedMaterial,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setChatMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            role: 'assistant',
            content: data.reply,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            metadata: {
              subjectName: selectedSubject.name,
              groundedInDocument: data.groundedInDocument,
            },
          },
        ]);
      } else {
        setChatMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            role: 'assistant',
            content: `⚠️ **Error**: ${data.error || 'Failed to get answer.'}`,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          },
        ]);
      }
    } catch (err: any) {
      setChatMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: `⚠️ **Connection Error**: ${err.message || 'Unable to connect to server.'}`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChatInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setChatInput(val);
    if (val.startsWith('/')) {
      setShowSlashHints(true);
      setSlashFilter(val.slice(1).toLowerCase());
    } else {
      setShowSlashHints(false);
    }
  };

  const slashCommandsList = [
    { cmd: '/summarize', label: 'Summarize Material', desc: 'High-yield summary of concepts, formulas & key definitions.' },
    { cmd: '/quiz', label: '5-Question Practice Quiz', desc: 'Targeted mix of MCQs and conceptual short-answers with answer keys.' },
    { cmd: '/studyplan', label: 'Generate Revision Schedule', desc: 'Structured week-by-week or day-by-day timetable with checkpoints.' },
    { cmd: '/explain', label: 'Explain Concept', desc: 'Step-by-step logic, analogies, and real-world intuition.' },
  ];

  const filteredSlash = slashCommandsList.filter(
    (s) => s.cmd.toLowerCase().includes(slashFilter) || s.label.toLowerCase().includes(slashFilter)
  );

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-white dark:bg-[#181A20] border border-[#E2E2E2] dark:border-[#2D323F] rounded-sm p-4 sm:p-6 shadow-sm transition-colors">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-black dark:bg-[#282C38] text-white text-[10px] uppercase font-bold tracking-widest font-mono mb-2">
              <Sparkles className="w-3 h-3 text-amber-300" />
              <span>Campus & Syllabus Copilot</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-black text-[#1A1A1A] dark:text-[#F3F4F6] tracking-tight uppercase">
              Intelligent Academic Assistant
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-serif italic mt-0.5">
              Navigate course curriculums, master complex syllabus topics, extract practical summaries from uploaded lecture notes, and crack university exams.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] px-3 py-1 bg-[#F5F5F5] dark:bg-[#20242F] border-l-4 border-[#8B0000] dark:border-[#EF4444] border-y border-r border-[#E2E2E2] dark:border-[#2D323F] text-gray-800 dark:text-gray-200 font-bold uppercase tracking-wider">
              IEC-CET Official Code: 090
            </span>
            <span className="text-[10px] px-2.5 py-1 bg-[#FAF9F6] dark:bg-[#12141A] border border-[#E2E2E2] dark:border-[#2D323F] text-gray-600 dark:text-gray-400 font-mono">
              Lead Architect: Viplov (2nd Year)
            </span>
          </div>
        </div>
      </div>

      {/* Course & Uploaded Material Context Bar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Course / Subject Selector */}
        <div className="lg:col-span-6 bg-white dark:bg-[#181A20] border border-[#E2E2E2] dark:border-[#2D323F] rounded-sm p-4 shadow-sm space-y-3 transition-colors">
          <div className="flex items-center justify-between border-b border-black dark:border-white/20 pb-2">
            <span className="font-serif text-xs font-bold uppercase tracking-wider text-[#1A1A1A] dark:text-[#F3F4F6] flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-[#8B0000] dark:text-[#EF4444]" />
              Active Academic Subject
            </span>
            <span className="font-mono text-[10px] font-bold text-[#8B0000] dark:text-[#EF4444]">
              {selectedSubject.code}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div>
              <label className="block text-[9px] uppercase font-bold tracking-widest text-gray-500 dark:text-gray-400 mb-1">
                Subject
              </label>
              <select
                value={selectedSubject.id}
                onChange={(e) => {
                  const s = AKTU_SUBJECTS.find((sub) => sub.id === e.target.value);
                  if (s) setSelectedSubject(s);
                }}
                className="w-full px-2.5 py-1.5 rounded-sm bg-[#FAF9F6] dark:bg-[#12141A] border border-[#E2E2E2] dark:border-[#2D323F] text-[#1A1A1A] dark:text-[#F3F4F6] text-xs font-serif font-bold focus:outline-none focus:border-black dark:focus:border-white cursor-pointer"
              >
                {AKTU_SUBJECTS.map((sub) => (
                  <option key={sub.id} value={sub.id} className="dark:bg-[#181A20]">
                    {sub.code} - {sub.name} (Yr {sub.year})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[9px] uppercase font-bold tracking-widest text-gray-500 dark:text-gray-400 mb-1">
                Target Unit
              </label>
              <select
                value={selectedUnitNum}
                onChange={(e) => {
                  const val = e.target.value;
                  setSelectedUnitNum(val === 'ALL' ? 'ALL' : Number(val));
                }}
                className="w-full px-2.5 py-1.5 rounded-sm bg-[#FAF9F6] dark:bg-[#12141A] border border-[#E2E2E2] dark:border-[#2D323F] text-[#1A1A1A] dark:text-[#F3F4F6] text-xs font-semibold focus:outline-none focus:border-black dark:focus:border-white cursor-pointer"
              >
                <option value="ALL" className="dark:bg-[#181A20]">All 5 Units (Comprehensive)</option>
                {selectedSubject.units.map((u) => (
                  <option key={u.unitNumber} value={u.unitNumber} className="dark:bg-[#181A20]">
                    Unit {u.unitNumber}: {u.unitTitle}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Upload Lecture Materials / Course Notes */}
        <div className="lg:col-span-6 bg-white dark:bg-[#181A20] border border-[#E2E2E2] dark:border-[#2D323F] rounded-sm p-4 shadow-sm space-y-3 transition-colors">
          <div className="flex items-center justify-between border-b border-black dark:border-white/20 pb-2">
            <span className="font-serif text-xs font-bold uppercase tracking-wider text-[#1A1A1A] dark:text-[#F3F4F6] flex items-center gap-1.5">
              <Upload className="w-3.5 h-3.5 text-[#8B0000] dark:text-[#EF4444]" />
              Course Material Grounding (PDF, Slides, Notes)
            </span>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              accept=".pdf,.txt,.md,.doc,.docx"
              className="hidden"
              id="material-upload"
            />
            <label
              htmlFor="material-upload"
              className="cursor-pointer text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-black dark:bg-[#282C38] hover:bg-gray-800 dark:hover:bg-gray-700 text-white rounded-sm transition-colors inline-flex items-center gap-1"
            >
              <Paperclip className="w-2.5 h-2.5" />
              <span>Upload Document</span>
            </label>
          </div>

          {uploadedMaterial ? (
            <div className="p-2.5 bg-[#FAF9F6] dark:bg-[#12141A] border border-emerald-300 dark:border-emerald-700 rounded-sm flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 overflow-hidden">
                <FileCheck className="w-4 h-4 text-emerald-700 dark:text-emerald-400 flex-shrink-0" />
                <div className="truncate">
                  <span className="block font-bold text-xs text-[#1A1A1A] dark:text-[#F3F4F6] truncate font-mono">
                    {uploadedMaterial.name}
                  </span>
                  <span className="text-[10px] text-gray-500 dark:text-gray-400">
                    Active Grounding Active • {(uploadedMaterial.size / 1024).toFixed(1)} KB
                  </span>
                </div>
              </div>
              <button
                onClick={handleClearMaterial}
                className="p-1 rounded text-gray-400 hover:text-[#8B0000] dark:hover:text-[#EF4444] hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                title="Remove attached document"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="text-[11px] text-gray-500 dark:text-gray-400 font-serif italic flex items-center justify-between">
                <span>Upload lecture notes/PDF or load a curated sample:</span>
                {isUploading && <span className="text-[#8B0000] dark:text-[#EF4444] font-mono text-[10px]">Processing file...</span>}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {SAMPLE_COURSE_MATERIALS.map((sample, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectSampleMaterial(sample)}
                    className="text-[10px] px-2 py-1 bg-[#FAF9F6] dark:bg-[#12141A] hover:bg-gray-100 dark:hover:bg-[#20242F] border border-[#E2E2E2] dark:border-[#2D323F] rounded-sm text-gray-800 dark:text-gray-200 font-mono font-medium transition-colors text-left truncate max-w-[200px] cursor-pointer"
                    title={sample.summary}
                  >
                    📄 {sample.name.split('_')[0]}_{sample.name.split('_')[1]}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mode Selector & Quick Slash Commands */}
      <div className="bg-white dark:bg-[#181A20] border border-[#E2E2E2] dark:border-[#2D323F] rounded-sm p-4 shadow-sm space-y-4 transition-colors">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E2E2E2] dark:border-[#2D323F] pb-3">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCommand('summarize')}
              className={`px-3 py-1.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
                activeCommand === 'summarize'
                  ? 'bg-[#8B0000] dark:bg-[#EF4444] text-white shadow-sm'
                  : 'bg-[#FAF9F6] dark:bg-[#12141A] text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white border border-[#E2E2E2] dark:border-[#2D323F]'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>/summarize</span>
            </button>

            <button
              onClick={() => setActiveCommand('quiz')}
              className={`px-3 py-1.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
                activeCommand === 'quiz'
                  ? 'bg-[#8B0000] dark:bg-[#EF4444] text-white shadow-sm'
                  : 'bg-[#FAF9F6] dark:bg-[#12141A] text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white border border-[#E2E2E2] dark:border-[#2D323F]'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>/quiz (5 Questions)</span>
            </button>

            <button
              onClick={() => setActiveCommand('studyplan')}
              className={`px-3 py-1.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
                activeCommand === 'studyplan'
                  ? 'bg-[#8B0000] dark:bg-[#EF4444] text-white shadow-sm'
                  : 'bg-[#FAF9F6] dark:bg-[#12141A] text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white border border-[#E2E2E2] dark:border-[#2D323F]'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>/studyplan</span>
            </button>

            <button
              onClick={() => setActiveCommand('explain')}
              className={`px-3 py-1.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
                activeCommand === 'explain'
                  ? 'bg-[#8B0000] dark:bg-[#EF4444] text-white shadow-sm'
                  : 'bg-[#FAF9F6] dark:bg-[#12141A] text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white border border-[#E2E2E2] dark:border-[#2D323F]'
              }`}
            >
              <Lightbulb className="w-3.5 h-3.5" />
              <span>/explain</span>
            </button>

            <button
              onClick={() => setActiveCommand('chat')}
              className={`px-3 py-1.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
                activeCommand === 'chat'
                  ? 'bg-black dark:bg-[#282C38] text-white shadow-sm'
                  : 'bg-[#FAF9F6] dark:bg-[#12141A] text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white border border-[#E2E2E2] dark:border-[#2D323F]'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Freeform Chat</span>
            </button>
          </div>

          {uploadedMaterial && (
            <div className="flex items-center gap-1.5 text-xs text-emerald-800 dark:text-emerald-300 font-mono bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-700 px-2 py-0.5 rounded-sm">
              <Check className="w-3 h-3" />
              <span>Grounded in: {uploadedMaterial.name}</span>
            </div>
          )}
        </div>

        {/* Command Form Area */}
        {activeCommand !== 'chat' ? (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                value={promptInput}
                onChange={(e) => setPromptInput(e.target.value)}
                placeholder={
                  activeCommand === 'summarize'
                    ? `Enter topic or leave blank to summarize ${selectedSubject.name} (${selectedUnitNum === 'ALL' ? 'Full Syllabus' : `Unit ${selectedUnitNum}`})...`
                    : activeCommand === 'quiz'
                    ? `Enter target topic for 5-question practice quiz (e.g. Banker's Algorithm, AVL Rotations, TCP Handshake)...`
                    : activeCommand === 'studyplan'
                    ? `Enter exam type or timeline (e.g. 7 days for AKTU End-Sem, 3 days for Sessional CT-1)...`
                    : `Enter concept to explain with analogies & step-by-step logic (e.g. Dining Philosophers, Paging vs Segmentation)...`
                }
                onKeyDown={(e) => {
                  if (e.key === 'Enter') executeCommand(activeCommand);
                }}
                className="flex-1 px-3 py-2 rounded-sm bg-[#FAF9F6] dark:bg-[#12141A] border border-[#E2E2E2] dark:border-[#2D323F] text-[#1A1A1A] dark:text-[#F3F4F6] font-serif text-sm focus:outline-none focus:border-black dark:focus:border-white"
              />
              <button
                onClick={() => executeCommand(activeCommand)}
                disabled={isLoading}
                className="px-5 py-2 rounded-sm bg-black dark:bg-[#282C38] hover:bg-gray-800 dark:hover:bg-gray-700 disabled:opacity-50 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                {isLoading ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <Zap className="w-3.5 h-3.5 text-amber-300" />
                    <span>Run /{activeCommand}</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick Topic Chips from Subject */}
            <div className="flex flex-wrap items-center gap-1.5 text-xs">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 font-mono">
                Suggested Topics:
              </span>
              {selectedSubject.units
                .filter((u) => selectedUnitNum === 'ALL' || u.unitNumber === selectedUnitNum)
                .flatMap((u) => u.importantPyqTopics)
                .slice(0, 5)
                .map((topic, tIdx) => (
                  <button
                    key={tIdx}
                    onClick={() => {
                      setPromptInput(topic);
                      executeCommand(activeCommand, topic);
                    }}
                    className="px-2 py-0.5 rounded-sm bg-[#FAF9F6] dark:bg-[#12141A] hover:bg-gray-200 dark:hover:bg-[#20242F] text-[#8B0000] dark:text-[#EF4444] border border-[#E2E2E2] dark:border-[#2D323F] text-[10px] font-serif transition-colors cursor-pointer"
                  >
                    • {topic}
                  </button>
                ))}
            </div>

            {/* Output Display Card */}
            {isLoading && (
              <div className="p-8 text-center bg-[#FAF9F6] dark:bg-[#12141A] border border-[#E2E2E2] dark:border-[#2D323F] rounded-sm space-y-3">
                <RefreshCw className="w-6 h-6 animate-spin text-[#8B0000] dark:text-[#EF4444] mx-auto" />
                <p className="font-serif italic text-sm text-gray-600 dark:text-gray-300">
                  Campus & Syllabus Copilot is synthesizing grounded response for <span className="font-bold text-black dark:text-white">{selectedSubject.code}</span>...
                </p>
              </div>
            )}

            {errorMsg && (
              <div className="p-4 bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-800 rounded-sm text-rose-800 dark:text-rose-200 text-xs flex items-start gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-bold">Execution Notice:</strong>
                  <span>{errorMsg}</span>
                </div>
              </div>
            )}

            {structuredOutput && !isLoading && (
              <div className="p-5 sm:p-6 bg-white dark:bg-[#181A20] border border-[#E2E2E2] dark:border-[#2D323F] rounded-sm shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-black dark:border-white/20 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 bg-black dark:bg-[#282C38] text-white">
                      /{activeCommand} Output
                    </span>
                    {isGroundedInDoc && (
                      <span className="font-mono text-[10px] font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-700 px-2 py-0.5">
                        🔒 Grounded in Course Material
                      </span>
                    )}
                  </div>

                  <button
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-sm bg-[#FAF9F6] dark:bg-[#12141A] hover:bg-gray-100 dark:hover:bg-[#20242F] text-xs font-mono border border-[#E2E2E2] dark:border-[#2D323F] transition-colors cursor-pointer text-gray-700 dark:text-gray-300"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-700 dark:text-emerald-400" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 text-gray-500 dark:text-gray-400" />
                        <span>Copy Markdown</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="prose dark:prose-invert prose-sm max-w-none text-[#1A1A1A] dark:text-[#F3F4F6] font-serif leading-relaxed space-y-3">
                  <ReactMarkdown>{structuredOutput}</ReactMarkdown>
                </div>

                <div className="pt-3 border-t border-[#E2E2E2] dark:border-[#2D323F] flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-mono text-gray-500 dark:text-gray-400">
                    Generated by Campus & Syllabus Copilot • IEC-CET Academic Engine
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => executeCommand('quiz', promptInput)}
                      className="text-[10px] px-2.5 py-1 bg-[#FAF9F6] dark:bg-[#12141A] hover:bg-gray-100 dark:hover:bg-[#20242F] border border-[#E2E2E2] dark:border-[#2D323F] text-[#8B0000] dark:text-[#EF4444] font-bold uppercase tracking-wider rounded-sm cursor-pointer"
                    >
                      Take Quiz on this Topic
                    </button>
                    <button
                      onClick={() => executeCommand('studyplan', promptInput)}
                      className="text-[10px] px-2.5 py-1 bg-[#FAF9F6] dark:bg-[#12141A] hover:bg-gray-100 dark:hover:bg-[#20242F] border border-[#E2E2E2] dark:border-[#2D323F] text-gray-800 dark:text-gray-200 font-bold uppercase tracking-wider rounded-sm cursor-pointer"
                    >
                      Make Revision Plan
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Freeform Conversational Mode */
          <div className="space-y-4">
            <div className="h-[420px] overflow-y-auto p-4 bg-[#FAF9F6] dark:bg-[#12141A] border border-[#E2E2E2] dark:border-[#2D323F] rounded-sm space-y-3">
              {chatMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${
                    msg.role === 'user' ? 'items-end' : 'items-start'
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-sm p-4 text-xs ${
                      msg.role === 'user'
                        ? 'bg-black dark:bg-[#282C38] text-white shadow-sm'
                        : 'bg-white dark:bg-[#181A20] border border-[#E2E2E2] dark:border-[#2D323F] text-[#1A1A1A] dark:text-[#F3F4F6] shadow-sm'
                    }`}
                  >
                    {msg.attachedMaterialName && (
                      <div className="mb-1.5 pb-1 border-b border-gray-700 text-[10px] text-emerald-300 font-mono flex items-center gap-1">
                        <FileCheck className="w-2.5 h-2.5" />
                        <span>Attached: {msg.attachedMaterialName}</span>
                      </div>
                    )}
                    <div className="prose dark:prose-invert prose-sm max-w-none font-serif leading-relaxed">
                      <ReactMarkdown>{msg.content}</ReactMarkdown>
                    </div>
                  </div>
                  <span className="text-[9px] text-gray-400 dark:text-gray-500 font-mono mt-1 px-1">
                    {msg.role === 'user' ? 'You' : 'Campus Copilot'} • {msg.timestamp}
                  </span>
                </div>
              ))}
              {isLoading && (
                <div className="flex items-center gap-2 p-3 bg-white dark:bg-[#181A20] border border-[#E2E2E2] dark:border-[#2D323F] rounded-sm text-xs font-serif italic text-gray-600 dark:text-gray-300">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#8B0000] dark:text-[#EF4444]" />
                  <span>Copilot is formulating grounded academic answer...</span>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Chat Input & Slash Hints */}
            <div className="relative">
              {showSlashHints && filteredSlash.length > 0 && (
                <div className="absolute bottom-full mb-1 left-0 w-full sm:w-96 bg-white dark:bg-[#181A20] border border-black dark:border-[#2D323F] shadow-lg rounded-sm p-1.5 z-20 space-y-1">
                  <div className="text-[9px] uppercase tracking-widest font-bold text-gray-500 dark:text-gray-400 px-2 py-0.5 border-b border-[#E2E2E2] dark:border-[#2D323F]">
                    Available Slash Commands
                  </div>
                  {filteredSlash.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setChatInput(`${item.cmd} `);
                        setShowSlashHints(false);
                      }}
                      className="w-full text-left px-2 py-1.5 hover:bg-[#FAF9F6] dark:hover:bg-[#20242F] rounded-sm text-xs transition-colors cursor-pointer flex flex-col"
                    >
                      <span className="font-mono font-bold text-[#8B0000] dark:text-[#EF4444]">{item.cmd}</span>
                      <span className="text-[10px] text-gray-500 dark:text-gray-400 font-serif">{item.desc}</span>
                    </button>
                  ))}
                </div>
              )}

              <div className="flex gap-2">
                <input
                  type="text"
                  value={chatInput}
                  onChange={handleChatInputChange}
                  placeholder="Ask any syllabus doubt, or type /summarize, /quiz, /studyplan, /explain..."
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSendChat();
                  }}
                  className="flex-1 px-3 py-2.5 rounded-sm bg-[#FAF9F6] dark:bg-[#12141A] border border-[#E2E2E2] dark:border-[#2D323F] text-[#1A1A1A] dark:text-[#F3F4F6] font-serif text-xs focus:outline-none focus:border-black dark:focus:border-white"
                />
                <button
                  onClick={() => handleSendChat()}
                  disabled={isLoading || !chatInput.trim()}
                  className="px-5 py-2.5 rounded-sm bg-black dark:bg-[#282C38] hover:bg-gray-800 dark:hover:bg-gray-700 disabled:opacity-40 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Operating Rules & Command Cheat Sheet */}
      <div className="bg-white dark:bg-[#181A20] border border-[#E2E2E2] dark:border-[#2D323F] rounded-sm p-4 sm:p-5 shadow-sm space-y-3 transition-colors">
        <div className="flex items-center justify-between border-b border-black dark:border-white/20 pb-2">
          <span className="font-serif text-sm font-bold text-[#1A1A1A] dark:text-[#F3F4F6] flex items-center gap-2">
            <Terminal className="w-4 h-4 text-[#8B0000] dark:text-[#EF4444]" />
            <span>Campus & Syllabus Copilot Operating Guide</span>
          </span>
          <span className="text-[10px] font-mono text-gray-500 dark:text-gray-400 uppercase tracking-widest">
            Rules of Engagement
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
          <div className="p-3 bg-[#FAF9F6] dark:bg-[#12141A] border border-[#E2E2E2] dark:border-[#2D323F] rounded-sm space-y-1">
            <span className="font-mono font-bold text-[#8B0000] dark:text-[#EF4444] text-[11px] block">/summarize</span>
            <p className="text-gray-600 dark:text-gray-400 font-serif">
              High-yield summary focusing on core concepts, formulas, definitions, and high-impact takeaways.
            </p>
          </div>

          <div className="p-3 bg-[#FAF9F6] dark:bg-[#12141A] border border-[#E2E2E2] dark:border-[#2D323F] rounded-sm space-y-1">
            <span className="font-mono font-bold text-[#8B0000] dark:text-[#EF4444] text-[11px] block">/quiz</span>
            <p className="text-gray-600 dark:text-gray-400 font-serif">
              5 targeted practice questions (conceptual MCQs + short answers) with comprehensive keys and explanations.
            </p>
          </div>

          <div className="p-3 bg-[#FAF9F6] dark:bg-[#12141A] border border-[#E2E2E2] dark:border-[#2D323F] rounded-sm space-y-1">
            <span className="font-mono font-bold text-[#8B0000] dark:text-[#EF4444] text-[11px] block">/studyplan</span>
            <p className="text-gray-600 dark:text-gray-400 font-serif">
              Realistic, week-by-week or day-by-day revision schedule with active recall checkpoints.
            </p>
          </div>

          <div className="p-3 bg-[#FAF9F6] dark:bg-[#12141A] border border-[#E2E2E2] dark:border-[#2D323F] rounded-sm space-y-1">
            <span className="font-mono font-bold text-[#8B0000] dark:text-[#EF4444] text-[11px] block">/explain [concept]</span>
            <p className="text-gray-600 dark:text-gray-400 font-serif">
              Deconstructs complex terms using relatable analogies, real-world examples, and step-by-step logic.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
