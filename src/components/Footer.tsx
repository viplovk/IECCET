import React from 'react';
import { 
  School, 
  Heart, 
  ExternalLink, 
  BookOpen, 
  Sparkles, 
  ShieldCheck, 
  GraduationCap 
} from 'lucide-react';
import { NavTab } from './Navbar';
import { ThemeToggle } from './ThemeToggle';

interface FooterProps {
  setActiveTab: (tab: NavTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  return (
    <footer className="mt-16 border-t border-[#E2E2E2] dark:border-[#2D323F] bg-white dark:bg-[#181A20] text-[#1A1A1A] dark:text-[#F3F4F6] text-xs transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: About & College Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-sm bg-[#8B0000] dark:bg-[#EF4444] flex items-center justify-center text-white font-serif font-black text-sm shadow-sm">
                IEC
              </div>
              <span className="font-serif text-base font-black text-[#1A1A1A] dark:text-[#F3F4F6] tracking-tight">
                IEC College Study Hub & AKTU Syllabus Copilot
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed max-w-md">
              A comprehensive student utility and AI-powered curriculum companion built for students of <strong>IEC College of Engineering & Technology, Greater Noida</strong> (AKTU Code: 090), affiliated to Dr. A.P.J. Abdul Kalam Technical University, Lucknow.
            </p>
            <div className="p-3 bg-[#F5F5F5] dark:bg-[#20242F] border-l-4 border-[#8B0000] dark:border-[#EF4444] rounded-sm text-xs text-gray-700 dark:text-gray-300">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#8B0000] dark:text-[#EF4444] mb-0.5">Project Lead & Developer</p>
              <p className="font-bold text-sm text-[#1A1A1A] dark:text-[#F3F4F6]">Viplov</p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 font-serif italic">B.Tech 2nd Year, IEC College of Engineering & Technology</p>
            </div>
          </div>

          {/* Col 2: Quick Features */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-xs uppercase tracking-widest text-black dark:text-white border-b border-black dark:border-[#2D323F] pb-1.5">
              Academic Modules
            </h4>
            <ul className="space-y-2 font-medium text-xs">
              <li>
                <button
                  onClick={() => setActiveTab('syllabus')}
                  className="text-gray-600 dark:text-gray-400 hover:text-[#8B0000] dark:hover:text-[#EF4444] transition-colors text-left cursor-pointer"
                >
                  • AKTU Syllabus Explorer
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('copilot')}
                  className="text-gray-600 dark:text-gray-400 hover:text-[#8B0000] dark:hover:text-[#EF4444] transition-colors text-left cursor-pointer"
                >
                  • AI Campus & Syllabus Copilot
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('quiz')}
                  className="text-gray-600 dark:text-gray-400 hover:text-[#8B0000] dark:hover:text-[#EF4444] transition-colors text-left cursor-pointer"
                >
                  • Mock Test & Quiz Engine
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('calculator')}
                  className="text-gray-600 dark:text-gray-400 hover:text-[#8B0000] dark:hover:text-[#EF4444] transition-colors text-left cursor-pointer"
                >
                  • SGPA & Percentage Tool
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('attendance')}
                  className="text-gray-600 dark:text-gray-400 hover:text-[#8B0000] dark:hover:text-[#EF4444] transition-colors text-left cursor-pointer"
                >
                  • 75% Attendance Guard
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Official Portals */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-xs uppercase tracking-widest text-black dark:text-white border-b border-black dark:border-[#2D323F] pb-1.5">
              University Portals
            </h4>
            <ul className="space-y-2 font-medium text-xs">
              <li>
                <a
                  href="https://aktu.ac.in/syllabus.html"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#8B0000] dark:hover:text-[#EF4444] transition-colors flex items-center gap-1"
                >
                  <span>• AKTU Official Syllabus</span>
                  <ExternalLink className="w-3 h-3 text-gray-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://erp.aktu.ac.in/WebPages/OneView/OneView.aspx"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#8B0000] dark:hover:text-[#EF4444] transition-colors flex items-center gap-1"
                >
                  <span>• AKTU One View Result</span>
                  <ExternalLink className="w-3 h-3 text-gray-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://erp.aktu.ac.in"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#8B0000] dark:hover:text-[#EF4444] transition-colors flex items-center gap-1"
                >
                  <span>• AKTU Student ERP</span>
                  <ExternalLink className="w-3 h-3 text-gray-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.ieccollege.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#8B0000] dark:hover:text-[#EF4444] transition-colors flex items-center gap-1"
                >
                  <span>• IEC College Official Site</span>
                  <ExternalLink className="w-3 h-3 text-gray-400" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-[#E2E2E2] dark:border-[#2D323F] flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
          <span>IEC College of Engineering & Technology (Code: 090)</span>
          <span className="text-[#8B0000] dark:text-[#EF4444]">Designed & Built by Viplov</span>
          <div className="flex items-center gap-3">
            <ThemeToggle showLabel />
            <span>AKTU Edition</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
