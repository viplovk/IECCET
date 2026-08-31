import React from 'react';
import { 
  School, 
  ExternalLink, 
  Heart, 
  BookOpen, 
  CheckCircle2, 
  GraduationCap, 
  Award, 
  MapPin, 
  Globe, 
  FileText, 
  Sparkles, 
  Flame,
  Layers,
  HelpCircle
} from 'lucide-react';
import { IEC_COLLEGE_INFO, OFFICIAL_PORTAL_LINKS, IEC_EXAM_TIPS } from '../data/iecCollegeData';

export const IecCampusHub: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* College Hero Card */}
      <div className="relative overflow-hidden rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-slate-900 via-indigo-950/60 to-slate-900 p-6 sm:p-8 shadow-2xl">
        <div className="absolute right-0 top-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 space-y-4 max-w-4xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 text-xs font-bold flex items-center gap-1.5">
              <School className="w-3.5 h-3.5 text-indigo-400" />
              AKTU College Code: {IEC_COLLEGE_INFO.aktuCode}
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-medium">
              Established {IEC_COLLEGE_INFO.established} • {IEC_COLLEGE_INFO.approval}
            </span>
          </div>

          <div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {IEC_COLLEGE_INFO.name} ({IEC_COLLEGE_INFO.shortName})
            </h2>
            <p className="text-sm sm:text-base text-indigo-200 mt-1 flex items-center gap-1.5 font-medium">
              <MapPin className="w-4 h-4 text-indigo-400 flex-shrink-0" />
              {IEC_COLLEGE_INFO.location}
            </p>
          </div>

          <div className="space-y-1.5">
            {IEC_COLLEGE_INFO.highlights.map((h, i) => (
              <p key={i} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                <span>{h}</span>
              </p>
            ))}
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href="https://www.iec.edu.in/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md transition-colors"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Official IEC Portal (iec.edu.in)</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <a
              href="https://aktu.ac.in/syllabus.html"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs border border-slate-700 transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
              <span>AKTU Syllabus Repository</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Official Portals & Direct Links Grid */}
      <div className="space-y-3">
        <h3 className="text-sm font-bold text-white flex items-center gap-2">
          <Globe className="w-4 h-4 text-indigo-400" />
          <span>Official AKTU & IEC Student Portals</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {OFFICIAL_PORTAL_LINKS.map((portal, idx) => (
            <a
              key={idx}
              href={portal.url}
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-xl border border-slate-800 bg-slate-900/80 hover:border-indigo-500/50 hover:bg-slate-900 transition-all flex flex-col justify-between gap-3 group shadow-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {portal.title}
                  </h4>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-indigo-400 transition-colors" />
                </div>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  {portal.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
                <span className="text-[10px] px-2 py-0.5 rounded bg-slate-950 text-indigo-300 border border-slate-800 font-mono">
                  {portal.badge || portal.category}
                </span>
                <span className="text-[11px] font-mono text-indigo-400/80 group-hover:text-indigo-300 transition-colors truncate max-w-[140px]">
                  {portal.url.replace('https://', '').split('/')[0]}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Creator Tribute & Message Card from Viplov */}
      <div className="bg-gradient-to-r from-amber-950/40 via-slate-900 to-indigo-950/40 border border-amber-500/30 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-amber-500/20">
            V
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 text-xs font-semibold border border-amber-500/20">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>Project Creator & Lead Architect</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              Crafted with Pride by {IEC_COLLEGE_INFO.creatorCredit.name}
            </h3>
            <p className="text-xs text-slate-300">
              {IEC_COLLEGE_INFO.creatorCredit.year}, {IEC_COLLEGE_INFO.creatorCredit.college}, Greater Noida
            </p>
          </div>
        </div>

        <div className="text-xs sm:text-sm text-slate-200 leading-relaxed space-y-2 border-t border-slate-800 pt-3">
          <p className="italic text-indigo-200 font-medium">
            "{IEC_COLLEGE_INFO.creatorCredit.quote}"
          </p>
          <p>
            This hub is engineered to serve every branch across 1st Year (Common Engineering Sciences), 2nd Year (Core Data Structures, Discrete Maths, COA, Operating Systems, TAFL), 3rd Year, and 4th Year.
          </p>
        </div>

        <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
          <span className="px-3 py-1 rounded-md bg-slate-950 text-slate-300 border border-slate-800">
            🎓 B.Tech 2nd Year Batch
          </span>
          <span className="px-3 py-1 rounded-md bg-slate-950 text-slate-300 border border-slate-800">
            📍 IEC Knowledge Park-I, Greater Noida
          </span>
          <span className="px-3 py-1 rounded-md bg-slate-950 text-slate-300 border border-slate-800">
            ⚡ Dr. A.P.J. Abdul Kalam Technical University (Code: 090)
          </span>
        </div>
      </div>

      {/* AKTU Exam Pattern & Paper Structure */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 sm:p-6 space-y-4 shadow-md">
        <h3 className="text-sm font-bold text-white flex items-center gap-2">
          <Award className="w-4 h-4 text-indigo-400" />
          <span>AKTU 100-Mark & 70-Mark University Paper Blueprint</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-lg bg-slate-950 border border-slate-800 space-y-2">
            <span className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-bold text-[11px]">
              Section A (20 Marks)
            </span>
            <h4 className="text-sm font-bold text-white">10 Compulsory Short Questions</h4>
            <p className="text-slate-300 leading-relaxed">
              Contains 10 questions of 2 marks each covering all 5 units (2 questions per unit). Write exact definitions, formulas, or circuit pin names.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-950 border border-slate-800 space-y-2">
            <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold text-[11px]">
              Section B (30 Marks)
            </span>
            <h4 className="text-sm font-bold text-white">Attempt Any 3 out of 5 Questions</h4>
            <p className="text-slate-300 leading-relaxed">
              Contains 5 long questions (10 marks each) from Units 1 to 5. Attempt the 3 questions with the cleanest derivations or numerical problems.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-950 border border-slate-800 space-y-2">
            <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold text-[11px]">
              Section C (20/50 Marks)
            </span>
            <h4 className="text-sm font-bold text-white">Unit-Wise Internal Choice</h4>
            <p className="text-slate-300 leading-relaxed">
              One question per unit with an internal 'OR' choice (e.g. Q3(a) OR Q3(b)). Select the option that allows step-by-step diagrams and code.
            </p>
          </div>
        </div>
      </div>

      {/* Answer Sheet Presentation Tips by Viplov */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 sm:p-6 space-y-3 shadow-md">
        <h3 className="text-sm font-bold text-white flex items-center gap-2">
          <Flame className="w-4 h-4 text-rose-400" />
          <span>AKTU 32-Page Copy Writing & Presentation Guidelines</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
          {IEC_EXAM_TIPS.map((tip, idx) => (
            <div key={idx} className="p-3.5 rounded-lg bg-slate-950/60 border border-slate-800/80 space-y-1">
              <span className="font-bold text-indigo-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                {tip.title}
              </span>
              <p className="text-slate-300 leading-relaxed pl-5">
                {tip.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
