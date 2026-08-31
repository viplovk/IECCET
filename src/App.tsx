import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar, NavTab } from './components/Navbar';
import { SyllabusExplorer } from './components/SyllabusExplorer';
import { SyllabusCopilot } from './components/SyllabusCopilot';
import { MockQuiz } from './components/MockQuiz';
import { SgpaCalculator } from './components/SgpaCalculator';
import { AttendanceCalculator } from './components/AttendanceCalculator';
import { QuantumResourceVault } from './components/QuantumResourceVault';
import { IecCampusHub } from './components/IecCampusHub';
import { Footer } from './components/Footer';
import { Subject, SyllabusUnit } from './types';
import { AKTU_SUBJECTS } from './data/aktuSyllabus';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('syllabus');

  // State to hold parameters when jumping from Syllabus to Copilot or Quiz
  const [copilotContext, setCopilotContext] = useState<{
    subject: Subject;
    unit?: SyllabusUnit;
    topic?: string;
    mode?: 'explain' | 'questions' | 'quiz';
  }>({
    subject: AKTU_SUBJECTS[0], // Default: Data Structures (KCS301/BCS301)
  });

  const handleSelectForCopilot = (
    subject: Subject,
    unit?: SyllabusUnit,
    topic?: string,
    mode: 'explain' | 'questions' | 'quiz' = 'explain'
  ) => {
    setCopilotContext({
      subject,
      unit,
      topic,
      mode,
    });

    if (mode === 'quiz') {
      setActiveTab('quiz');
    } else {
      setActiveTab('copilot');
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#FAF9F6] dark:bg-[#0F1117] text-[#1A1A1A] dark:text-[#F3F4F6] flex flex-col selection:bg-[#8B0000] dark:selection:bg-[#EF4444] selection:text-white font-sans antialiased transition-colors duration-300">
        {/* Top Navbar */}
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Main Content Area */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
          {activeTab === 'syllabus' && (
            <SyllabusExplorer onSelectForCopilot={handleSelectForCopilot} />
          )}

          {activeTab === 'copilot' && (
            <SyllabusCopilot
              initialSubject={copilotContext.subject}
              initialUnit={copilotContext.unit}
              initialTopic={copilotContext.topic}
              initialMode={copilotContext.mode === 'quiz' ? 'explain' : copilotContext.mode}
            />
          )}

          {activeTab === 'quiz' && (
            <MockQuiz initialSubject={copilotContext.subject} />
          )}

          {activeTab === 'calculator' && (
            <SgpaCalculator />
          )}

          {activeTab === 'attendance' && (
            <AttendanceCalculator />
          )}

          {activeTab === 'vault' && (
            <QuantumResourceVault />
          )}

          {activeTab === 'campus' && (
            <IecCampusHub />
          )}
        </main>

        {/* Footer */}
        <Footer setActiveTab={setActiveTab} />
      </div>
    </ThemeProvider>
  );
}
