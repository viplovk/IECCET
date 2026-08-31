import React from 'react';
import { 
  School, 
  ExternalLink, 
  BookOpen, 
  CheckCircle2, 
  MapPin, 
  Globe, 
  Sparkles, 
  Flame,
  Award
} from 'lucide-react';
import { IEC_COLLEGE_INFO, OFFICIAL_PORTAL_LINKS, IEC_EXAM_TIPS } from '../data/iecCollegeData';

export const IecCampusHub: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* College Hero Card */}
      <div className="bg-white dark:bg-[#181A20] border border-[#E2E2E2] dark:border-[#2D323F] rounded-sm p-6 sm:p-8 shadow-sm transition-colors space-y-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-1 rounded-sm bg-black dark:bg-[#282C38] text-white text-[10px] uppercase font-bold tracking-widest font-mono flex items-center gap-1.5">
            <School className="w-3.5 h-3.5" />
            AKTU College Code: {IEC_COLLEGE_INFO.aktuCode}
          </span>
          <span className="px-2.5 py-1 rounded-sm bg-[#FAF9F6] dark:bg-[#12141A] text-gray-800 dark:text-gray-200 border border-[#E2E2E2] dark:border-[#2D323F] text-[10px] uppercase font-bold tracking-wider">
            Established {IEC_COLLEGE_INFO.established} • {IEC_COLLEGE_INFO.approval}
          </span>
        </div>

        <div>
          <h2 className="font-serif text-2xl sm:text-4xl font-black text-[#1A1A1A] dark:text-[#F3F4F6] tracking-tight uppercase">
            {IEC_COLLEGE_INFO.name} ({IEC_COLLEGE_INFO.shortName})
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1 flex items-center gap-1.5 font-serif italic">
            <MapPin className="w-4 h-4 text-[#8B0000] dark:text-[#EF4444] flex-shrink-0" />
            {IEC_COLLEGE_INFO.location}
          </p>
        </div>

        <div className="space-y-2 pt-2 border-t border-[#E2E2E2] dark:border-[#2D323F]">
          {IEC_COLLEGE_INFO.highlights.map((h, i) => (
            <p key={i} className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2 font-serif">
              <CheckCircle2 className="w-4 h-4 text-[#8B0000] dark:text-[#EF4444] flex-shrink-0 mt-0.5" />
              <span>{h}</span>
            </p>
          ))}
        </div>

        <div className="pt-2 flex flex-wrap items-center gap-3">
          <a
            href="https://www.iec.edu.in/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-sm bg-[#8B0000] dark:bg-[#EF4444] hover:bg-black dark:hover:bg-red-600 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-colors cursor-pointer"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Official IEC Portal (iec.edu.in)</span>
            <ExternalLink className="w-3 h-3" />
          </a>

          <a
            href="https://aktu.ac.in/syllabus.html"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-sm bg-black dark:bg-[#282C38] hover:bg-gray-800 dark:hover:bg-gray-700 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-colors cursor-pointer"
          >
            <BookOpen className="w-3.5 h-3.5 text-white" />
            <span>AKTU Syllabus Repository</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Official Portals & Direct Links Grid */}
      <div className="space-y-3">
        <div className="flex items-center justify-between border-b border-black dark:border-white/20 pb-2">
          <h3 className="font-serif text-base font-bold text-[#1A1A1A] dark:text-[#F3F4F6] flex items-center gap-2">
            <Globe className="w-4 h-4 text-[#8B0000] dark:text-[#EF4444]" />
            <span>Official AKTU & IEC Student Portals</span>
          </h3>
          <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500 dark:text-gray-400 font-mono">
            {OFFICIAL_PORTAL_LINKS.length} Verified Links
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {OFFICIAL_PORTAL_LINKS.map((portal, idx) => (
            <a
              key={idx}
              href={portal.url}
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-sm border border-[#E2E2E2] dark:border-[#2D323F] bg-white dark:bg-[#181A20] hover:border-black dark:hover:border-white/50 transition-all flex flex-col justify-between gap-3 group shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-[#1A1A1A] dark:text-[#F3F4F6] font-serif group-hover:text-[#8B0000] dark:group-hover:text-[#EF4444] transition-colors">
                    {portal.title}
                  </h4>
                  <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 leading-relaxed font-serif">
                  {portal.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-[#E2E2E2] dark:border-[#2D323F]">
                <span className="text-[10px] px-2 py-0.5 rounded-sm bg-[#FAF9F6] dark:bg-[#12141A] text-[#8B0000] dark:text-[#EF4444] border border-[#E2E2E2] dark:border-[#2D323F] font-mono font-bold uppercase tracking-wider">
                  {portal.badge || portal.category}
                </span>
                <span className="text-[11px] font-mono text-gray-500 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors truncate max-w-[140px]">
                  {portal.url.replace('https://', '').split('/')[0]}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Creator Tribute & Message Card from Viplov */}
      <div className="bg-white dark:bg-[#181A20] border-l-4 border-[#8B0000] dark:border-[#EF4444] border-y border-r border-[#E2E2E2] dark:border-[#2D323F] rounded-sm p-6 sm:p-8 space-y-4 shadow-sm transition-colors">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-sm bg-black dark:bg-[#282C38] flex items-center justify-center text-white font-serif font-black text-xl">
            V
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-sm bg-[#FAF9F6] dark:bg-[#12141A] text-[#8B0000] dark:text-[#EF4444] text-[10px] font-bold uppercase tracking-widest border border-[#E2E2E2] dark:border-[#2D323F] font-mono">
              <Sparkles className="w-3 h-3 text-[#8B0000] dark:text-[#EF4444]" />
              <span>Project Creator & Lead Architect</span>
            </div>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1A1A1A] dark:text-[#F3F4F6] tracking-tight uppercase">
              Crafted with Pride by {IEC_COLLEGE_INFO.creatorCredit.name}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-serif italic">
              {IEC_COLLEGE_INFO.creatorCredit.year}, {IEC_COLLEGE_INFO.creatorCredit.college}, Greater Noida
            </p>
          </div>
        </div>

        <div className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-serif leading-relaxed space-y-2 border-t border-[#E2E2E2] dark:border-[#2D323F] pt-3">
          <p className="italic text-[#8B0000] dark:text-[#EF4444] font-semibold">
            "{IEC_COLLEGE_INFO.creatorCredit.quote}"
          </p>
          <p>
            This hub is engineered to serve every branch across 1st Year (Common Engineering Sciences), 2nd Year (Core Data Structures, Discrete Maths, COA, Operating Systems, TAFL), 3rd Year, and 4th Year.
          </p>
        </div>

        <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
          <span className="px-2.5 py-1 rounded-sm bg-[#FAF9F6] dark:bg-[#12141A] text-gray-800 dark:text-gray-200 border border-[#E2E2E2] dark:border-[#2D323F] text-[10px] font-bold uppercase tracking-wider">
            🎓 B.Tech 2nd Year Batch
          </span>
          <span className="px-2.5 py-1 rounded-sm bg-[#FAF9F6] dark:bg-[#12141A] text-gray-800 dark:text-gray-200 border border-[#E2E2E2] dark:border-[#2D323F] text-[10px] font-bold uppercase tracking-wider">
            📍 IEC Knowledge Park-I, Greater Noida
          </span>
          <span className="px-2.5 py-1 rounded-sm bg-[#FAF9F6] dark:bg-[#12141A] text-gray-800 dark:text-gray-200 border border-[#E2E2E2] dark:border-[#2D323F] text-[10px] font-bold uppercase tracking-wider">
            ⚡ Dr. A.P.J. Abdul Kalam Technical University (Code: 090)
          </span>
        </div>
      </div>

      {/* AKTU Exam Pattern & Paper Structure */}
      <div className="bg-white dark:bg-[#181A20] border border-[#E2E2E2] dark:border-[#2D323F] rounded-sm p-5 sm:p-6 space-y-4 shadow-sm transition-colors">
        <h3 className="font-serif text-base font-bold text-[#1A1A1A] dark:text-[#F3F4F6] flex items-center gap-2 border-b border-black dark:border-white/20 pb-2">
          <Award className="w-4 h-4 text-[#8B0000] dark:text-[#EF4444]" />
          <span>AKTU 100-Mark & 70-Mark University Paper Blueprint</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-sm bg-[#FAF9F6] dark:bg-[#12141A] border border-[#E2E2E2] dark:border-[#2D323F] space-y-2">
            <span className="px-2 py-0.5 rounded-sm bg-black dark:bg-[#282C38] text-white font-mono font-bold text-[10px] uppercase tracking-wider">
              Section A (20 Marks)
            </span>
            <h4 className="font-serif text-sm font-bold text-[#1A1A1A] dark:text-[#F3F4F6]">10 Compulsory Short Questions</h4>
            <p className="text-gray-700 dark:text-gray-300 font-serif leading-relaxed">
              Contains 10 questions of 2 marks each covering all 5 units (2 questions per unit). Write exact definitions, formulas, or circuit pin names.
            </p>
          </div>

          <div className="p-4 rounded-sm bg-[#FAF9F6] dark:bg-[#12141A] border border-[#E2E2E2] dark:border-[#2D323F] space-y-2">
            <span className="px-2 py-0.5 rounded-sm bg-[#8B0000] dark:bg-[#EF4444] text-white font-mono font-bold text-[10px] uppercase tracking-wider">
              Section B (30 Marks)
            </span>
            <h4 className="font-serif text-sm font-bold text-[#1A1A1A] dark:text-[#F3F4F6]">Attempt Any 3 out of 5 Questions</h4>
            <p className="text-gray-700 dark:text-gray-300 font-serif leading-relaxed">
              Contains 5 long questions (10 marks each) from Units 1 to 5. Attempt the 3 questions with the cleanest derivations or numerical problems.
            </p>
          </div>

          <div className="p-4 rounded-sm bg-[#FAF9F6] dark:bg-[#12141A] border border-[#E2E2E2] dark:border-[#2D323F] space-y-2">
            <span className="px-2 py-0.5 rounded-sm bg-black dark:bg-[#282C38] text-white font-mono font-bold text-[10px] uppercase tracking-wider">
              Section C (20/50 Marks)
            </span>
            <h4 className="font-serif text-sm font-bold text-[#1A1A1A] dark:text-[#F3F4F6]">Unit-Wise Internal Choice</h4>
            <p className="text-gray-700 dark:text-gray-300 font-serif leading-relaxed">
              One question per unit with an internal 'OR' choice (e.g. Q3(a) OR Q3(b)). Select the option that allows step-by-step diagrams and code.
            </p>
          </div>
        </div>
      </div>

      {/* Answer Sheet Presentation Tips by Viplov */}
      <div className="bg-white dark:bg-[#181A20] border border-[#E2E2E2] dark:border-[#2D323F] rounded-sm p-5 sm:p-6 space-y-3 shadow-sm transition-colors">
        <h3 className="font-serif text-base font-bold text-[#1A1A1A] dark:text-[#F3F4F6] flex items-center gap-2 border-b border-black dark:border-white/20 pb-2">
          <Flame className="w-4 h-4 text-[#8B0000] dark:text-[#EF4444]" />
          <span>AKTU 32-Page Copy Writing & Presentation Guidelines</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-700 dark:text-gray-300">
          {IEC_EXAM_TIPS.map((tip, idx) => (
            <div key={idx} className="p-3.5 rounded-sm bg-[#FAF9F6] dark:bg-[#12141A] border border-[#E2E2E2] dark:border-[#2D323F] space-y-1">
              <span className="font-bold text-[#8B0000] dark:text-[#EF4444] flex items-center gap-1.5 font-serif text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                {tip.title}
              </span>
              <p className="text-gray-700 dark:text-gray-300 font-serif leading-relaxed pl-5 text-xs">
                {tip.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
