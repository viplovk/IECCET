import React, { useState } from 'react';
import { 
  FolderGit2, 
  BookOpen, 
  Tv, 
  ExternalLink, 
  Search, 
  Sparkles, 
  FileText, 
  GraduationCap, 
  CheckCircle2,
  Flame,
  Award,
  Layers
} from 'lucide-react';
import { AKTU_SUBJECTS } from '../data/aktuSyllabus';

export const QuantumResourceVault: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'ALL' | 'CHANNELS' | 'QUANTUM' | 'PYQ_TIPS'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const YOUTUBE_CURATION = [
    {
      name: 'Gate Smashers',
      instructor: 'Varun Singla Sir',
      subjects: ['Data Structures', 'Operating Systems', 'DBMS', 'DAA', 'TAFL / TOC', 'Computer Networks', 'AI'],
      description: 'The golden standard for AKTU students. Crystal clear explanations in Hindi with real exam-oriented examples and animations.',
      badge: 'Highly Recommended for AKTU',
      tags: ['CSE', 'IT', 'AIML', 'DS']
    },
    {
      name: 'Neso Academy',
      instructor: 'Neso Team',
      subjects: ['C Programming (PPS)', 'Digital Electronics', '8085 Microprocessor', 'Computer Organization'],
      description: 'In-depth, beautifully diagrammed lectures perfect for building foundational concepts and scoring 9+ SGPA.',
      badge: 'Best Visuals & Notes',
      tags: ['1st Year', '2nd Year', 'ECE', 'EE']
    },
    {
      name: 'Knowledge Gate',
      instructor: 'Sanchit Jain Sir',
      subjects: ['Discrete Structures (DSTL)', 'Theory of Automata', 'Compiler Design', 'Operating Systems'],
      description: 'Exceptional mathematical rigor for DSTL (Group Theory, Posets, Lattices) and Automata (PDA, Turing Machines).',
      badge: 'Top for Math & Logic',
      tags: ['2nd Year', '3rd Year']
    },
    {
      name: 'Engineering Funda',
      instructor: 'Dr. Hitesh Dholakiya',
      subjects: ['8085 & 8086 Microprocessors', '8051 Microcontrollers', 'COA', 'Digital Signal Processing'],
      description: 'Complete pin-by-pin architecture explanations and assembly language programming (ALP) solutions.',
      badge: 'Best for Hardware & MP',
      tags: ['2nd Year', 'ECE', 'EE']
    },
    {
      name: 'Bhagwan Singh Vishwakarma',
      instructor: 'BSV Maths',
      subjects: ['Engineering Maths-I', 'Engineering Maths-II', 'Mathematics-IV'],
      description: 'Solves actual AKTU university question papers step-by-step for Matrices, Leibnitz theorem, Multiple Integrals, and PDE.',
      badge: 'AKTU Maths Specialist',
      tags: ['1st Year', '2nd Year']
    },
    {
      name: 'Dr. Gajendra Purohit',
      instructor: 'GP Sir',
      subjects: ['Vector Calculus', 'Matrices', 'Differential Equations', 'Complex Analysis'],
      description: 'Shortcut tricks, concept intuition, and university question paper solving patterns.',
      badge: 'Mathematics Guru',
      tags: ['1st Year', '2nd Year']
    },
    {
      name: 'CodeWithHarry',
      instructor: 'Haris Ali Khan',
      subjects: ['C Programming', 'Python Programming', 'Web Technologies', 'DSA in C/C++'],
      description: 'Great practical programming tutorials with source code, cheat sheets, and handwritten notes.',
      badge: 'Coding & Projects',
      tags: ['1st Year', '2nd Year', '3rd Year']
    },
  ];

  const QUANTUM_STRATEGIES = [
    {
      title: 'AKTU Quantum Series: The 80/20 Rule',
      points: [
        'Each unit in Quantum Series typically contains 15-20 questions. However, 80% of AKTU exam marks come from just 4-5 recurring core questions.',
        'Prioritize questions marked with multiple year tags (e.g. 2023-24, 2022-23, 2021-22, 2019-20).',
        'Always practice drawing the diagrams in pencil and writing derivations without looking at the book.'
      ]
    },
    {
      title: 'How to Attempt Section A (2-Mark Definitions)',
      points: [
        'Section A carries 20 critical marks (10 questions x 2 marks).',
        'Write 2 to 4 crisp sentences with the mathematical formula or symbol.',
        'Never write a full-page essay for a 2-mark question; keep it concise to save time for 10-mark numericals.'
      ]
    },
    {
      title: 'Scoring Full Marks in 10-Mark Questions (Sections B & C)',
      points: [
        'Always structure your answer: 1) Formal Definition, 2) Block Diagram / Architecture, 3) Working Principle, 4) Step-by-Step Algorithm or Derivation, 5) Numerical Example or Code, 6) Complexity.',
        'In AKTU, evaluation is heading-driven. Underline keywords and put formulas in neat rectangular boxes.'
      ]
    }
  ];

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-white dark:bg-[#181A20] border border-[#E2E2E2] dark:border-[#2D323F] rounded-sm p-4 sm:p-6 shadow-sm transition-colors">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-black dark:bg-[#282C38] text-white text-[10px] uppercase font-bold tracking-widest font-mono mb-1.5">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>AKTU Quantum, PYQ & Video Vault</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-black text-[#1A1A1A] dark:text-[#F3F4F6] tracking-tight uppercase">
              Curated AKTU Study Vault & YouTube Channels
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-serif italic mt-0.5">
              Top curated learning channels, Quantum exam strategy, and subject-wise reference materials compiled by Viplov.
            </p>
          </div>

          <a
            href="https://aktu.ac.in/syllabus.html"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-sm bg-black dark:bg-[#282C38] hover:bg-gray-800 dark:hover:bg-gray-700 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-colors cursor-pointer"
          >
            <span>Official AKTU Syllabus</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* YouTube Directory */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-black dark:border-white/20 pb-2">
          <h3 className="font-serif text-base font-bold text-[#1A1A1A] dark:text-[#F3F4F6] flex items-center gap-2">
            <Tv className="w-4 h-4 text-[#8B0000] dark:text-[#EF4444]" />
            <span>Recommended YouTube Channels for AKTU Engineering Subjects</span>
          </h3>
          <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500 dark:text-gray-400 font-mono">
            {YOUTUBE_CURATION.length} Curated Channels
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {YOUTUBE_CURATION.map((ch, idx) => (
            <div
              key={idx}
              className="p-5 rounded-sm border border-[#E2E2E2] dark:border-[#2D323F] bg-white dark:bg-[#181A20] hover:border-black dark:hover:border-white/50 transition-all space-y-3 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-serif text-lg font-bold text-[#1A1A1A] dark:text-[#F3F4F6]">{ch.name}</h4>
                    <span className="px-2 py-0.5 rounded-sm bg-[#FAF9F6] dark:bg-[#12141A] text-[#8B0000] dark:text-[#EF4444] text-[9px] font-bold uppercase tracking-wider border border-[#E2E2E2] dark:border-[#2D323F]">
                      {ch.badge}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400 font-serif italic">Instructor: {ch.instructor}</span>
                </div>
              </div>

              <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed font-serif">
                {ch.description}
              </p>

              <div className="space-y-1.5 pt-2 border-t border-[#E2E2E2] dark:border-[#2D323F]">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 block">Covered Subjects:</span>
                <div className="flex flex-wrap gap-1.5">
                  {ch.subjects.map((sub, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded-sm bg-[#FAF9F6] dark:bg-[#12141A] text-[10px] text-gray-800 dark:text-gray-200 border border-[#E2E2E2] dark:border-[#2D323F] font-mono font-medium"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quantum Series & Exam Cracking Strategies */}
      <div className="bg-white dark:bg-[#181A20] border border-[#E2E2E2] dark:border-[#2D323F] rounded-sm p-5 sm:p-6 space-y-4 shadow-sm transition-colors">
        <h3 className="font-serif text-base font-bold text-[#1A1A1A] dark:text-[#F3F4F6] flex items-center gap-2 border-b border-black dark:border-white/20 pb-2">
          <Flame className="w-4 h-4 text-[#8B0000] dark:text-[#EF4444]" />
          <span>AKTU Quantum Series Exam Strategy (Guide to Scoring 9+ SGPA)</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {QUANTUM_STRATEGIES.map((strat, idx) => (
            <div key={idx} className="p-4 rounded-sm bg-[#FAF9F6] dark:bg-[#12141A] border border-[#E2E2E2] dark:border-[#2D323F] space-y-2">
              <h4 className="text-xs font-bold text-[#8B0000] dark:text-[#EF4444] uppercase tracking-wider flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#8B0000] dark:text-[#EF4444]" />
                <span>{strat.title}</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-gray-700 dark:text-gray-300 font-serif">
                {strat.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-1.5">
                    <span className="text-[#8B0000] dark:text-[#EF4444] font-bold font-mono">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
