export type YearLevel = 1 | 2 | 3 | 4;

export type SemesterNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type BranchCode = 
  | 'CSE'
  | 'CSE_AIML'
  | 'CSE_DS'
  | 'IT'
  | 'ECE'
  | 'EE'
  | 'ME'
  | 'CE'
  | 'COMMON_FIRST_YEAR';

export interface BranchInfo {
  code: BranchCode;
  name: string;
  shortName: string;
  iconName: string;
  description: string;
}

export interface SyllabusUnit {
  unitNumber: number;
  unitTitle: string;
  lectureHours: number;
  topics: string[];
  importantPyqTopics: string[];
  weightageLevel: 'Very High' | 'High' | 'Medium';
}

export interface Subject {
  id: string;
  code: string;
  name: string;
  shortName: string;
  semester: SemesterNumber;
  year: YearLevel;
  branches: BranchCode[];
  credits: number;
  ltp: string; // e.g. "3-1-0" or "3-0-2"
  category: 'Core' | 'Elective' | 'Science & Math' | 'Humanities' | 'Lab';
  description: string;
  units: SyllabusUnit[];
  textbooks: string[];
  referenceBooks: string[];
  quantumReference: string;
  recommendedPlaylists: {
    channelName: string;
    topicCoverage: string;
    url?: string;
  }[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  unitNumber?: number;
}

export interface AktuGrade {
  gradeLetter: string;
  gradePoint: number;
  marksRange: string;
  description: string;
}

export interface SubjectCreditCalcItem {
  id: string;
  name: string;
  code: string;
  credits: number;
  gradePoint: number;
}

export interface CopilotMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: string;
  commandMode?: 'summarize' | 'quiz' | 'studyplan' | 'explain' | 'chat';
  attachedMaterialName?: string;
  metadata?: {
    subjectName?: string;
    unitNumber?: number;
    mode?: 'explain' | 'questions' | 'quiz' | 'plan' | 'chat' | 'summarize';
    groundedInDocument?: boolean;
  };
}

export interface UploadedMaterial {
  id: string;
  name: string;
  size: number;
  mimeType: string;
  content?: string;
  base64?: string;
  uploadedAt: string;
}

export interface AttendanceRecord {
  totalConducted: number;
  totalAttended: number;
  targetPercentage: number;
}
