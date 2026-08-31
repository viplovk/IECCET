import React from 'react';
import { 
  BookOpen, 
  Sparkles, 
  CheckSquare, 
  Calculator, 
  ShieldCheck, 
  FolderGit2, 
  GraduationCap, 
  ExternalLink,
  Heart,
  School
} from 'lucide-react';
import { IEC_COLLEGE_INFO } from '../data/iecCollegeData';

export type NavTab = 
  | 'syllabus' 
  | 'copilot' 
  | 'quiz' 
  | 'calculator' 
  | 'attendance' 
  | 'vault' 
  | 'campus';

interface NavbarProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'syllabus', label: 'AKTU Syllabus', icon: BookOpen, tag: 'All Years' },
    { id: 'copilot', label: 'Campus Copilot', icon: Sparkles, tag: '/commands' },
    { id: 'quiz', label: 'Mock Test & Quiz', icon: CheckSquare, tag: 'Exam Prep' },
    { id: 'calculator', label: 'SGPA & Percentage', icon: Calculator },
    { id: 'attendance', label: '75% Attendance Guard', icon: ShieldCheck },
    { id: 'vault', label: 'Quantum & PYQ Vault', icon: FolderGit2 },
    { id: 'campus', label: 'IEC Campus Hub', icon: GraduationCap, tag: 'Code: 090' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#E2E2E2] bg-white/95 backdrop-blur-md">
      {/* Top Editorial Notification Bar */}
      <div className="bg-[#FAF9F6] border-b border-[#E2E2E2] px-4 py-1.5 text-xs text-[#1A1A1A]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-black text-white text-[10px] px-2 py-0.5 uppercase font-bold tracking-widest font-mono">
              IEC-CET • CODE: 090
            </span>
            <span className="hidden sm:inline text-xs text-gray-500 font-serif italic">
              Official Syllabus & Study Copilot • Affiliated with AKTU Lucknow
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="https://aktu.ac.in/syllabus.html" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-1 text-[#8B0000] hover:text-black transition-colors text-xs font-bold uppercase tracking-wider underline-offset-4 hover:underline"
            >
              <span>AKTU Syllabus Repo</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <div className="h-3 w-px bg-gray-300 hidden md:block" />

            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-sm bg-[#F5F5F5] border border-[#E2E2E2] text-xs text-gray-700">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#8B0000]">Creator:</span>
              <span className="font-bold text-[#1A1A1A]">Viplov</span>
              <span className="text-[10px] text-gray-500">(2nd Year B.Tech)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo & Branding */}
          <div 
            onClick={() => setActiveTab('syllabus')}
            className="flex items-center gap-3 cursor-pointer group select-none flex-shrink-0"
          >
            <div className="w-10 h-10 rounded-sm bg-black group-hover:bg-[#8B0000] transition-colors flex items-center justify-center text-white shadow-sm">
              <span className="font-serif text-lg font-black tracking-tight">IEC</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-serif text-xl font-black text-[#1A1A1A] tracking-tight leading-none group-hover:text-[#8B0000] transition-colors">
                  IEC HUB.
                </h1>
                <span className="bg-[#8B0000] text-white text-[9px] px-1.5 py-0.5 uppercase font-bold tracking-wider rounded-none">
                  AKTU
                </span>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mt-0.5">
                College of Engineering & Technology
              </p>
            </div>
          </div>

          {/* Navigation Tabs for Desktop */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id as NavTab)}
                  className={`relative flex items-center gap-1.5 px-3 py-2 text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap border-b-2 ${
                    isActive
                      ? 'border-[#8B0000] text-[#8B0000] bg-[#8B0000]/5'
                      : 'border-transparent text-gray-600 hover:text-black hover:bg-gray-50'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#8B0000]' : 'text-gray-400'}`} />
                  <span>{item.label}</span>
                  {item.tag && (
                    <span className={`text-[9px] px-1.5 py-0.2 uppercase font-mono font-bold tracking-tighter ${
                      isActive ? 'bg-[#8B0000] text-white' : 'bg-gray-200 text-gray-700'
                    }`}>
                      {item.tag}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Quick Action Button */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('copilot')}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#8B0000] hover:bg-black text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Ask AI Copilot</span>
              <span className="sm:hidden">Copilot</span>
            </button>
          </div>
        </div>

        {/* Mobile / Tablet Horizontal Scroll Nav */}
        <div className="lg:hidden flex items-center gap-1 pb-2.5 overflow-x-auto no-scrollbar border-t border-[#E2E2E2] pt-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as NavTab)}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap flex-shrink-0 border ${
                  isActive
                    ? 'border-[#8B0000] bg-[#8B0000] text-white shadow-sm'
                    : 'border-[#E2E2E2] bg-white text-gray-600 hover:text-black'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
