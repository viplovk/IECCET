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
  User,
  UserCheck,
  ChevronRight
} from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useAuth } from '../context/AuthContext';

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
  const { user, isAuthenticated, openLoginModal } = useAuth();

  const navItems = [
    { id: 'syllabus', label: 'AKTU Syllabus', shortLabel: 'Syllabus', icon: BookOpen, tag: '5 Units' },
    { id: 'copilot', label: 'Campus Copilot', shortLabel: 'AI Copilot', icon: Sparkles, tag: 'AI' },
    { id: 'quiz', label: 'Mock Test & Quiz', shortLabel: 'Mock Quiz', icon: CheckSquare, tag: 'Exam' },
    { id: 'calculator', label: 'SGPA & % Calc', shortLabel: 'SGPA Calc', icon: Calculator },
    { id: 'attendance', label: '75% Attendance Guard', shortLabel: 'Attendance', icon: ShieldCheck, tag: '75%' },
    { id: 'vault', label: 'Quantum & PYQ Vault', shortLabel: 'Quantum Vault', icon: FolderGit2, tag: 'PYQ' },
    { id: 'campus', label: 'IEC Campus Hub', shortLabel: 'Campus Hub', icon: GraduationCap, tag: '090' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full max-w-full border-b border-[#E2E2E2] dark:border-[#2D323F] bg-white/95 dark:bg-[#181A20]/95 backdrop-blur-md transition-colors duration-300 shadow-xs">
      {/* Top Editorial Micro-Ticker */}
      <div className="bg-[#FAF9F6] dark:bg-[#12141A] border-b border-[#E2E2E2] dark:border-[#2D323F] px-3 sm:px-6 lg:px-8 py-1 text-[11px] text-[#1A1A1A] dark:text-[#F3F4F6] transition-colors">
        <div className="max-w-[1360px] 2xl:max-w-[1440px] mx-auto flex items-center justify-between gap-3 overflow-hidden">
          <div className="flex items-center gap-2 truncate">
            <span className="bg-black dark:bg-[#282C38] text-white text-[9px] px-1.5 py-0.5 uppercase font-bold tracking-widest font-mono flex-shrink-0">
              IEC-CET • CODE: 090
            </span>
            <span className="hidden md:inline text-xs text-gray-500 dark:text-gray-400 font-serif italic truncate">
              Academic Curriculum Repository & Study Copilot • Affiliated with AKTU Lucknow
            </span>
          </div>

          <div className="flex items-center gap-2.5 flex-shrink-0">
            <a 
              href="https://aktu.ac.in/syllabus.html" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-1 text-[#8B0000] dark:text-[#EF4444] hover:text-black dark:hover:text-white transition-colors text-[10px] sm:text-xs font-bold uppercase tracking-wider underline-offset-4 hover:underline"
            >
              <span>AKTU Syllabus Repo</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <div className="h-2.5 w-px bg-gray-300 dark:bg-gray-700 hidden sm:block" />

            <div className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-sm bg-[#F5F5F5] dark:bg-[#20242F] border border-[#E2E2E2] dark:border-[#2D323F] text-[10px] text-gray-700 dark:text-gray-300">
              <span className="font-bold uppercase tracking-widest text-[#8B0000] dark:text-[#EF4444]">Creator:</span>
              <span className="font-bold text-[#1A1A1A] dark:text-[#F3F4F6]">Viplov</span>
              <span className="text-[9px] text-gray-500 dark:text-gray-400 hidden sm:inline">(2nd Year)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Primary Masthead: Logo & Student Auth Actions */}
      <div className="max-w-[1360px] 2xl:max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-13 sm:h-14 gap-3">
          {/* Logo & College Identity */}
          <div 
            onClick={() => setActiveTab('syllabus')}
            className="flex items-center gap-2 sm:gap-2.5 cursor-pointer group select-none flex-shrink-0"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-sm bg-black dark:bg-[#20242F] group-hover:bg-[#8B0000] dark:group-hover:bg-[#EF4444] transition-colors flex items-center justify-center text-white shadow-sm border border-transparent dark:border-[#2D323F]">
              <span className="font-serif text-sm sm:text-base font-black tracking-tight">IEC</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-base sm:text-lg font-black text-[#1A1A1A] dark:text-[#F3F4F6] tracking-tight leading-none group-hover:text-[#8B0000] dark:group-hover:text-[#EF4444] transition-colors">
                  IEC HUB.
                </span>
                <span className="bg-[#8B0000] dark:bg-[#EF4444] text-white text-[8px] sm:text-[9px] px-1 py-0.2 uppercase font-bold tracking-wider rounded-none">
                  AKTU
                </span>
              </div>
              <p className="text-[8px] sm:text-[9px] uppercase tracking-widest text-gray-500 dark:text-gray-400 font-bold mt-0.5 hidden xs:block">
                College of Engg & Tech
              </p>
            </div>
          </div>

          {/* Right Action Controls: Student Login / Profile + Theme + Copilot */}
          <div className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0">
            {/* Student Login / Profile Button */}
            {isAuthenticated && user ? (
              <button
                type="button"
                onClick={openLoginModal}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-sm bg-[#FAF9F6] dark:bg-[#20242F] border border-[#E2E2E2] dark:border-[#2D323F] hover:border-[#8B0000] dark:hover:border-[#EF4444] text-[#1A1A1A] dark:text-[#F3F4F6] text-xs font-mono transition-all cursor-pointer shadow-2xs group"
                title="View Student Portal Profile"
              >
                <div className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[9px] font-bold">
                  ✓
                </div>
                <div className="text-left hidden sm:block">
                  <span className="block text-[11px] font-bold font-sans leading-none">{user.name.split(' ')[0]}</span>
                  <span className="block text-[9px] text-gray-500 dark:text-gray-400 leading-none mt-0.5">{user.roll_number}</span>
                </div>
                <span className="sm:hidden text-[10px] font-bold">Roll: {user.roll_number.slice(-4)}</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={openLoginModal}
                className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-sm bg-white dark:bg-[#20242F] border border-gray-300 dark:border-[#2D323F] hover:border-[#8B0000] dark:hover:border-[#EF4444] text-gray-800 dark:text-gray-200 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-2xs"
                title="Login with Roll Number & Date of Birth (DDMMYYYY)"
              >
                <User className="w-3.5 h-3.5 text-[#8B0000] dark:text-[#EF4444]" />
                <span className="hidden xs:inline">Student Login</span>
                <span className="xs:hidden">Login</span>
              </button>
            )}

            {/* High-Contrast Theme Toggle */}
            <ThemeToggle showLabel={true} />

            {/* Ask AI Copilot Button */}
            <button
              onClick={() => setActiveTab('copilot')}
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 bg-[#8B0000] hover:bg-black dark:bg-[#EF4444] dark:hover:bg-red-700 text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-colors shadow-sm cursor-pointer rounded-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span className="hidden md:inline">Ask AI Copilot</span>
              <span className="md:hidden">Copilot</span>
            </button>
          </div>
        </div>
      </div>

      {/* Dedicated Navigation Bar: NEVER collides because it has its own clean, dedicated row */}
      <div className="border-t border-[#E2E2E2] dark:border-[#2D323F] bg-[#FAF9F6]/95 dark:bg-[#141720]/95 backdrop-blur-sm">
        <div className="max-w-[1360px] 2xl:max-w-[1440px] mx-auto px-2 sm:px-4 lg:px-8">
          <nav className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto no-scrollbar py-1.5 scroll-smooth">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id as NavTab)}
                  className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap rounded-sm cursor-pointer flex-shrink-0 ${
                    isActive
                      ? 'bg-[#8B0000] dark:bg-[#EF4444] text-white shadow-sm'
                      : 'text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 flex-shrink-0 ${isActive ? 'text-white' : 'text-[#8B0000] dark:text-[#EF4444]'}`} />
                  <span className="hidden sm:inline">{item.label}</span>
                  <span className="sm:hidden">{item.shortLabel}</span>
                  {item.tag && (
                    <span className={`text-[8px] px-1 py-0.2 uppercase font-mono font-bold tracking-tighter rounded-sm hidden lg:inline ${
                      isActive 
                        ? 'bg-black/20 text-white' 
                        : 'bg-black/5 dark:bg-white/10 text-gray-600 dark:text-gray-400'
                    }`}>
                      {item.tag}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};
