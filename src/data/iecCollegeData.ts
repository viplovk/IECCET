export interface IecDepartment {
  name: string;
  hod: string;
  description: string;
  labHighlights: string[];
}

export interface OfficialPortalLink {
  title: string;
  category: 'AKTU Official' | 'IEC Campus' | 'Academics & PYQs' | 'Results & ERP';
  url: string;
  description: string;
  badge?: string;
}

export const IEC_COLLEGE_INFO = {
  name: 'IEC College of Engineering and Technology',
  shortName: 'IEC-CET',
  location: 'Knowledge Park-I, Greater Noida, Uttar Pradesh 201310',
  aktuCode: '090',
  affiliation: 'Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow',
  approval: 'AICTE Approved & NBA Accredited Programs',
  established: '1999',
  creatorCredit: {
    name: 'Viplov',
    year: '2nd Year B.Tech',
    college: 'IEC College of Engineering & Technology',
    role: 'Creator & Lead Developer',
    quote: 'Built to empower fellow IECians across all 4 years with instant syllabus clarity, AI study copilot, Quantum pointers, and exam prep shortcuts!'
  },
  highlights: [
    'Premier Engineering & Technology Institution in Delhi-NCR (Greater Noida Knowledge Park)',
    'Full spectrum B.Tech, M.Tech, MCA & MBA curriculum under Dr. A.P.J. Abdul Kalam Technical University',
    'Advanced Center of Excellence Labs in AI/ML, Cloud Computing, IoT, Embedded Systems & Robotics',
    'Active student technical chapters: IEEE Student Branch, Coding Clubs, Cultural & Tech Fests'
  ],
  academicSystem: {
    sessional1: 'Class Test 1 (CT-1) covering Units 1 & 2 (30/50 Marks)',
    sessional2: 'Class Test 2 (CT-2) / Pre-University Test (PUT) covering all 5 Units (Full Pattern)',
    internalEvaluation: 'Teacher Assessment (TA): Attendance (5M) + Class Assignments (5M) + CT Average (20M)',
    aktuEndSem: 'AKTU University Semester Exam (70/100 Marks, 3 Hours, Sections A, B & C)',
    attendanceCriterion: '75% Mandatory Attendance as per AKTU Circulars for University Admit Card eligibility'
  }
};

export const OFFICIAL_PORTAL_LINKS: OfficialPortalLink[] = [
  {
    title: 'AKTU Official Syllabus Repository',
    category: 'AKTU Official',
    url: 'https://aktu.ac.in/syllabus.html',
    description: 'Direct AKTU university syllabus archive for B.Tech, M.Tech, MBA, MCA and all courses.',
    badge: 'Official Syllabus'
  },
  {
    title: 'AKTU One View (Result Portal)',
    category: 'Results & ERP',
    url: 'https://erp.aktu.ac.in/WebPages/OneView/OneView.aspx',
    description: 'Instant semester result marksheets, SGPA, carryover status, and grade history.',
    badge: 'Check Results'
  },
  {
    title: 'AKTU Student ERP Login',
    category: 'AKTU Official',
    url: 'https://erp.aktu.ac.in/',
    description: 'Exam form submission, admit card download, challenge evaluation, and verification.',
    badge: 'Admit Card & Forms'
  },
  {
    title: 'AKTU Circulars & Exam Notices',
    category: 'AKTU Official',
    url: 'https://aktu.ac.in/circulars.html',
    description: 'Latest exam date sheets, center lists, carryover guidelines, and academic calendars.',
    badge: 'Exam Dates'
  },
  {
    title: 'IEC-CET Official Website',
    category: 'IEC Campus',
    url: 'https://www.iec.edu.in/',
    description: 'College portal for department updates, faculty contacts, notices, and events.',
    badge: 'College Portal'
  },
  {
    title: 'AKTU Previous Year Question Papers (PYQ Vault)',
    category: 'Academics & PYQs',
    url: 'https://aktu.ac.in/syllabus.html',
    description: 'Question papers of past 5 years for all branches across semesters 1 to 8.',
    badge: 'PYQs & Solutions'
  },
  {
    title: 'AKTU Digital Library & NPTEL Access',
    category: 'Academics & PYQs',
    url: 'https://aktu.ac.in/',
    description: 'Access to e-books, research journals, Springer links, and NPTEL video courses.',
    badge: 'E-Resources'
  }
];

export const IEC_EXAM_TIPS = [
  {
    title: 'Master the AKTU 3-Section Format',
    content: 'AKTU question papers strictly follow 3 Sections: Section A (10 x 2 Marks = 20M short conceptual definitions), Section B (3 x 10 Marks = 30M medium analytical/numerical), Section C (5 x 10 Marks with internal choices = 50M in-depth theory/derivations/code). Always attempt Section A first with crisp 3-4 line answers!'
  },
  {
    title: 'Diagrams & Neat Handwriting Score High',
    content: 'In AKTU answer sheets, clear block diagrams, flowcharts, state transitions, and step-by-step boxed mathematical formulas fetch 8.5+ SGPA. Use pencil for diagrams and underline key technical terms.'
  },
  {
    title: 'Quantum Series + Syllabus Mapping',
    content: 'Solve the last 3-4 years AKTU PYQs from Quantum series for each unit. Focus especially on Unit 1, Unit 3, and Unit 5 as they frequently contain guaranteed 10-mark repeated numericals and derivations.'
  },
  {
    title: 'Maintain 75% Attendance Buffer',
    content: 'AKTU ERP strictly monitors attendance uploads. Keep your attendance above 80% before CT-2 so you have stress-free prep time during preparatory leave without detention risk.'
  }
];
