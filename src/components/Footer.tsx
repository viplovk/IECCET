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

interface FooterProps {
  setActiveTab: (tab: NavTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  return (
    <footer className="mt-16 border-t border-[#E2E2E2] bg-white text-[#1A1A1A] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: About & College Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-sm bg-[#8B0000] flex items-center justify-center text-white font-serif font-black text-sm">
                IEC
              </div>
              <span className="font-serif text-base font-black text-[#1A1A1A] tracking-tight">
                IEC College Study Hub & AKTU Syllabus Copilot
              </span>
            </div>
            <p className="text-gray-600 text-xs leading-relaxed max-w-md">
              A comprehensive student utility and AI-powered curriculum companion built for students of <strong>IEC College of Engineering & Technology, Greater Noida</strong> (AKTU Code: 090), affiliated to Dr. A.P.J. Abdul Kalam Technical University, Lucknow.
            </p>
            <div className="p-3 bg-[#F5F5F5] border-l-4 border-[#8B0000] rounded-sm text-xs text-gray-700">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#8B0000] mb-0.5">Project Lead & Developer</p>
              <p className="font-bold text-sm text-[#1A1A1A]">Viplov</p>
              <p className="text-[11px] text-gray-500 font-serif italic">B.Tech 2nd Year, IEC College of Engineering & Technology</p>
            </div>
          </div>

          {/* Col 2: Quick Features */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-xs uppercase tracking-widest text-black border-b border-black pb-1.5">
              Academic Modules
            </h4>
            <ul className="space-y-2 font-medium text-xs">
              <li>
                <button
                  onClick={() => setActiveTab('syllabus')}
                  className="text-gray-600 hover:text-[#8B0000] transition-colors text-left"
                >
                  • AKTU Syllabus Explorer
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('copilot')}
                  className="text-gray-600 hover:text-[#8B0000] transition-colors text-left"
                >
                  • AI 10M Blueprint Copilot
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('quiz')}
                  className="text-gray-600 hover:text-[#8B0000] transition-colors text-left"
                >
                  • Mock Test & Quiz Engine
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('calculator')}
                  className="text-gray-600 hover:text-[#8B0000] transition-colors text-left"
                >
                  • SGPA & Percentage Tool
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('attendance')}
                  className="text-gray-600 hover:text-[#8B0000] transition-colors text-left"
                >
                  • 75% Attendance Guard
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Official Portals */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-xs uppercase tracking-widest text-black border-b border-black pb-1.5">
              University Portals
            </h4>
            <ul className="space-y-2 font-medium text-xs">
              <li>
                <a
                  href="https://aktu.ac.in/syllabus.html"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 hover:text-[#8B0000] transition-colors flex items-center gap-1"
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
                  className="text-gray-600 hover:text-[#8B0000] transition-colors flex items-center gap-1"
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
                  className="text-gray-600 hover:text-[#8B0000] transition-colors flex items-center gap-1"
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
                  className="text-gray-600 hover:text-[#8B0000] transition-colors flex items-center gap-1"
                >
                  <span>• IEC College Official Site</span>
                  <ExternalLink className="w-3 h-3 text-gray-400" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-[#E2E2E2] flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
          <span>IEC College of Engineering & Technology (Code: 090)</span>
          <span className="text-[#8B0000]">Designed & Built by Viplov</span>
          <span>AKTU Edition</span>
        </div>
      </div>
    </footer>
  );
};
