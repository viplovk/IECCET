import React, { useState, useMemo, useEffect } from 'react';
import { 
  Search, 
  BookOpen, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  Award, 
  Layers, 
  GraduationCap,
  ExternalLink,
  Flame,
  Check,
  RotateCcw,
  BookMarked
} from 'lucide-react';
import { AKTU_SUBJECTS, BRANCHES_DATA } from '../data/aktuSyllabus';
import { Subject, SyllabusUnit, YearLevel, BranchCode } from '../types';

interface SyllabusExplorerProps {
  onSelectForCopilot: (subject: Subject, unit?: SyllabusUnit, topic?: string, mode?: 'explain' | 'questions' | 'quiz') => void;
}

export const SyllabusExplorer: React.FC<SyllabusExplorerProps> = ({ onSelectForCopilot }) => {
  const [selectedYear, setSelectedYear] = useState<YearLevel | 'ALL'>('ALL');
  const [selectedBranch, setSelectedBranch] = useState<BranchCode | 'ALL'>('CSE');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSubjectId, setExpandedSubjectId] = useState<string | null>('kcs301-ds');
  const [expandedUnitKey, setExpandedUnitKey] = useState<string | null>('kcs301-ds-u1');

  // Saved completion status in localStorage
  const [completedUnits, setCompletedUnits] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('iec_aktu_completed_units');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const toggleUnitCompletion = (subjectId: string, unitNum: number) => {
    const key = `${subjectId}-u${unitNum}`;
    setCompletedUnits(prev => {
      const updated = { ...prev, [key]: !prev[key] };
      localStorage.setItem('iec_aktu_completed_units', JSON.stringify(updated));
      return updated;
    });
  };

  // Filter subjects
  const filteredSubjects = useMemo(() => {
    return AKTU_SUBJECTS.filter((sub) => {
      const matchYear = selectedYear === 'ALL' || sub.year === selectedYear;
      const matchBranch = 
        selectedBranch === 'ALL' || 
        sub.branches.includes(selectedBranch) || 
        sub.branches.includes('COMMON_FIRST_YEAR');

      if (!searchQuery.trim()) {
        return matchYear && matchBranch;
      }

      const q = searchQuery.toLowerCase();
      const matchName = sub.name.toLowerCase().includes(q) || sub.code.toLowerCase().includes(q) || sub.shortName.toLowerCase().includes(q);
      const matchUnit = sub.units.some(u => 
        u.unitTitle.toLowerCase().includes(q) || 
        u.topics.some(t => t.toLowerCase().includes(q)) ||
        u.importantPyqTopics.some(p => p.toLowerCase().includes(q))
      );

      return (matchYear && matchBranch) && (matchName || matchUnit);
    });
  }, [selectedYear, selectedBranch, searchQuery]);

  return (
    <div className="space-y-6">
      {/* Hero Welcome Banner */}
      <div className="relative overflow-hidden rounded-sm border border-[#E2E2E2] bg-white p-6 sm:p-8 shadow-sm">
        <div className="relative z-10 max-w-4xl">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="bg-black text-white text-[10px] px-2 py-0.5 uppercase font-bold tracking-widest font-mono">
              IEC-CET Knowledge Park-I
            </span>
            <span className="text-xs font-serif italic text-[#8B0000]">
              Official AKTU Curriculum Repository & Exam Pattern
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-black text-[#1A1A1A] tracking-tight uppercase leading-tight">
            AKTU B.Tech Syllabus <br className="hidden sm:inline" />
            <span className="text-gray-400 font-normal italic">& Course Blueprints</span>
          </h2>

          <p className="mt-3 text-sm text-gray-600 leading-relaxed font-sans max-w-3xl">
            Explore 5-unit official university syllabi, lecture hours, standard textbooks, Quantum references, and 1-click AI Copilot 10-mark exam blueprints across all B.Tech branches.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3 text-xs">
            <div className="px-3 py-1.5 rounded-sm bg-[#F5F5F5] border border-[#E2E2E2] text-gray-800 flex items-center gap-1.5 font-bold uppercase tracking-wider text-[10px]">
              <BookOpen className="w-3.5 h-3.5 text-[#8B0000]" />
              <span>{AKTU_SUBJECTS.length} Subjects Indexed</span>
            </div>
            <div className="px-3 py-1.5 rounded-sm bg-[#F5F5F5] border-l-2 border-[#8B0000] border-y border-r border-[#E2E2E2] text-gray-800 flex items-center gap-1.5 font-bold uppercase tracking-wider text-[10px]">
              <Flame className="w-3.5 h-3.5 text-[#8B0000]" />
              <span>Lead: Viplov (2nd Year Batch) & All Semesters</span>
            </div>
            <a
              href="https://aktu.ac.in/syllabus.html"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 rounded-sm bg-[#8B0000] hover:bg-black text-white flex items-center gap-1.5 font-bold uppercase tracking-wider text-[10px] transition-colors"
            >
              <span>AKTU.AC.IN Official</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Filters and Search Bar */}
      <div className="bg-white border border-[#E2E2E2] rounded-sm p-4 sm:p-5 shadow-sm space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search topic or code (e.g. 'Dijkstra', 'Paging', 'Deadlock', 'Booth Algorithm', 'Leibnitz', 'KCS301')..."
            className="w-full pl-10 pr-12 py-2.5 rounded-sm bg-[#FAF9F6] border border-[#E2E2E2] text-sm text-[#1A1A1A] placeholder-gray-400 font-serif italic focus:outline-none focus:border-black"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold uppercase tracking-widest text-[#8B0000] hover:text-black cursor-pointer"
            >
              Clear
            </button>
          )}
        </div>

        {/* Year and Branch Selectors */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-[#E2E2E2]">
          {/* Year Buttons */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mr-1">Year:</span>
            {(['ALL', 1, 2, 3, 4] as const).map((year) => {
              const isSelected = selectedYear === year;
              return (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-3 py-1.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#8B0000] text-white shadow-sm'
                      : 'bg-[#F5F5F5] text-gray-700 hover:text-black hover:bg-gray-200 border border-[#E2E2E2]'
                  }`}
                >
                  {year === 'ALL' ? 'All Years' : `${year}${year === 1 ? 'st' : year === 2 ? 'nd' : year === 3 ? 'rd' : 'th'} Year`}
                  {year === 2 && <span className="ml-1 text-[10px] text-white/90">★</span>}
                </button>
              );
            })}
          </div>

          {/* Branch Buttons */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mr-1">Branch:</span>
            <button
              onClick={() => setSelectedBranch('ALL')}
              className={`px-2.5 py-1.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedBranch === 'ALL'
                  ? 'bg-black text-white'
                  : 'bg-[#F5F5F5] text-gray-700 hover:text-black border border-[#E2E2E2]'
              }`}
            >
              All Branches
            </button>
            {BRANCHES_DATA.map((b) => {
              const isSelected = selectedBranch === b.code;
              return (
                <button
                  key={b.code}
                  onClick={() => setSelectedBranch(b.code)}
                  className={`px-2.5 py-1.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-black text-white'
                      : 'bg-[#F5F5F5] text-gray-700 hover:text-black border border-[#E2E2E2]'
                  }`}
                >
                  {b.shortName}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Results Count & Active Filter Indicator */}
      <div className="flex items-center justify-between text-xs text-gray-500 px-1">
        <span>
          Showing <strong className="text-[#1A1A1A]">{filteredSubjects.length}</strong> subjects matching filters
        </span>
        {searchQuery && (
          <span className="text-[#8B0000] font-serif italic">
            Filtered by query: "{searchQuery}"
          </span>
        )}
      </div>

      {/* Subjects List */}
      <div className="space-y-4">
        {filteredSubjects.length === 0 ? (
          <div className="text-center py-12 bg-white border border-[#E2E2E2] rounded-sm p-8">
            <AlertCircle className="w-10 h-10 text-gray-400 mx-auto mb-3" />
            <h3 className="text-base font-serif font-bold text-[#1A1A1A]">No subjects found</h3>
            <p className="text-xs text-gray-500 mt-1 max-w-sm mx-auto">
              Try adjusting your year, branch filter or search keywords to find the AKTU syllabus unit you are looking for.
            </p>
            <button
              onClick={() => {
                setSelectedYear('ALL');
                setSelectedBranch('ALL');
                setSearchQuery('');
              }}
              className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-sm bg-[#8B0000] text-white text-xs font-bold uppercase tracking-wider hover:bg-black transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          </div>
        ) : (
          filteredSubjects.map((subject) => {
            const isExpanded = expandedSubjectId === subject.id;
            
            // Calculate completion progress
            const completedCount = subject.units.filter(u => completedUnits[`${subject.id}-u${u.unitNumber}`]).length;
            const progressPercent = Math.round((completedCount / subject.units.length) * 100);

            return (
              <div
                key={subject.id}
                className={`rounded-sm border transition-all duration-200 ${
                  isExpanded
                    ? 'border-black bg-white shadow-md'
                    : 'border-[#E2E2E2] bg-white hover:border-gray-400'
                }`}
              >
                {/* Subject Header Card */}
                <div
                  onClick={() => setExpandedSubjectId(isExpanded ? null : subject.id)}
                  className="p-4 sm:p-5 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 select-none"
                >
                  <div className="space-y-1.5 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2 py-0.5 rounded-none bg-black text-white font-mono text-xs font-bold">
                        {subject.code}
                      </span>
                      <span className="px-2 py-0.5 rounded-sm bg-[#F5F5F5] border border-[#E2E2E2] text-gray-700 text-xs font-semibold">
                        Year {subject.year} • Sem {subject.semester}
                      </span>
                      <span className="px-2 py-0.5 rounded-sm bg-[#FAF9F6] border border-[#E2E2E2] text-[#8B0000] text-xs font-bold">
                        {subject.credits} Credits ({subject.ltp})
                      </span>
                      <span className="text-xs text-gray-500 font-serif italic hidden sm:inline">
                        {subject.category}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-[#1A1A1A] tracking-tight flex items-center gap-2">
                      {subject.name}
                      <span className="text-xs font-sans font-normal text-gray-500">({subject.shortName})</span>
                    </h3>

                    <p className="text-xs text-gray-600 line-clamp-1 max-w-2xl font-sans">
                      {subject.description}
                    </p>
                  </div>

                  {/* Right Side: Progress & Toggle */}
                  <div className="flex items-center justify-between sm:justify-end gap-4 border-t sm:border-t-0 pt-3 sm:pt-0 border-[#E2E2E2]">
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
                          Prep: <span className="text-[#8B0000]">{progressPercent}%</span>
                        </div>
                        <div className="w-24 h-1.5 bg-[#F1F1F1] rounded-none mt-1 overflow-hidden">
                          <div
                            className="h-full bg-[#8B0000] transition-all duration-300"
                            style={{ width: `${progressPercent}%` }}
                          />
                        </div>
                      </div>

                      <div className="w-8 h-8 rounded-sm bg-[#F5F5F5] border border-[#E2E2E2] flex items-center justify-center text-gray-700">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expanded Subject Units and Resources */}
                {isExpanded && (
                  <div className="px-4 sm:px-6 pb-6 pt-2 border-t border-[#E2E2E2] space-y-6 bg-[#FAF9F6]">
                    {/* Subject Meta Details Bar */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-4 rounded-sm bg-white border border-[#E2E2E2] text-xs">
                      <div>
                        <span className="font-bold uppercase tracking-wider text-[10px] text-gray-500 block mb-1">Standard AKTU Textbooks:</span>
                        <ul className="list-disc list-inside space-y-0.5 text-gray-800">
                          {subject.textbooks.map((tb, idx) => (
                            <li key={idx} className="truncate">{tb}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <span className="font-bold uppercase tracking-wider text-[10px] text-gray-500 block mb-1">Quantum Series & Lecture Notes:</span>
                        <p className="text-[#8B0000] font-serif font-bold italic">{subject.quantumReference}</p>
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {subject.recommendedPlaylists.map((pl, idx) => (
                            <span key={idx} className="px-2 py-0.5 rounded-sm bg-[#F5F5F5] text-[11px] text-gray-800 border border-[#E2E2E2]">
                              📺 {pl.channelName}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* 5 Units Accordion List */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between border-b border-black pb-1.5">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[#1A1A1A] flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5 text-[#8B0000]" />
                          5-Unit Official Syllabus Breakdown
                        </h4>
                        <span className="text-[10px] uppercase tracking-wider text-gray-500">
                          Check box to mark unit done
                        </span>
                      </div>

                      {subject.units.map((unit) => {
                        const unitKey = `${subject.id}-u${unit.unitNumber}`;
                        const isUnitExpanded = expandedUnitKey === unitKey;
                        const isCompleted = !!completedUnits[unitKey];

                        return (
                          <div
                            key={unit.unitNumber}
                            className={`rounded-sm border transition-all ${
                              isCompleted
                                ? 'border-emerald-300 bg-emerald-50/40'
                                : 'border-[#E2E2E2] bg-white hover:border-gray-400'
                            }`}
                          >
                            <div className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                              <div className="flex items-start gap-3 flex-1">
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleUnitCompletion(subject.id, unit.unitNumber);
                                  }}
                                  className={`mt-0.5 w-5 h-5 rounded-none flex items-center justify-center flex-shrink-0 transition-colors cursor-pointer ${
                                    isCompleted
                                      ? 'bg-black text-white font-bold'
                                      : 'border border-gray-400 hover:border-black text-transparent'
                                  }`}
                                  title="Mark as completed"
                                >
                                  <Check className="w-3.5 h-3.5" />
                                </button>

                                <div 
                                  onClick={() => setExpandedUnitKey(isUnitExpanded ? null : unitKey)}
                                  className="cursor-pointer flex-1 select-none"
                                >
                                  <div className="flex flex-wrap items-center gap-2">
                                    <span className="font-bold text-xs text-[#8B0000] uppercase tracking-wider font-mono">
                                      Unit {unit.unitNumber}
                                    </span>
                                    <span className="text-xs text-gray-500 font-serif italic">• {unit.lectureHours} Lectures</span>
                                    <span className={`text-[9px] px-1.5 py-0.2 uppercase font-bold tracking-wider ${
                                      unit.weightageLevel === 'Very High' 
                                        ? 'bg-[#8B0000] text-white' 
                                        : unit.weightageLevel === 'High'
                                        ? 'bg-black text-white'
                                        : 'bg-gray-200 text-gray-800'
                                    }`}>
                                      {unit.weightageLevel} Weightage
                                    </span>
                                  </div>
                                  <p className={`font-serif text-base font-bold mt-0.5 ${isCompleted ? 'text-gray-400 line-through' : 'text-[#1A1A1A]'}`}>
                                    {unit.unitTitle}
                                  </p>
                                </div>
                              </div>

                              {/* Unit Quick Actions */}
                              <div className="flex items-center gap-2 flex-wrap">
                                <button
                                  onClick={() => onSelectForCopilot(subject, unit, undefined, 'explain')}
                                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#8B0000] hover:bg-black text-white text-[11px] font-bold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
                                  title="Explain this unit with AI"
                                >
                                  <Sparkles className="w-3 h-3" />
                                  <span>AI Explain</span>
                                </button>

                                <button
                                  onClick={() => onSelectForCopilot(subject, unit, undefined, 'questions')}
                                  className="inline-flex items-center gap-1 px-3 py-1.5 border border-black hover:bg-black hover:text-white text-[#1A1A1A] text-[11px] font-bold uppercase tracking-wider transition-colors bg-white cursor-pointer"
                                  title="Predict 10-mark questions"
                                >
                                  <Award className="w-3 h-3" />
                                  <span>10M Questions</span>
                                </button>

                                <button
                                  onClick={() => setExpandedUnitKey(isUnitExpanded ? null : unitKey)}
                                  className="p-1 rounded-sm bg-[#F5F5F5] border border-[#E2E2E2] text-gray-700 hover:text-black cursor-pointer"
                                >
                                  {isUnitExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                                </button>
                              </div>
                            </div>

                            {/* Expanded Unit Topics & PYQs */}
                            {isUnitExpanded && (
                              <div className="p-4 border-t border-[#E2E2E2] bg-[#FAF9F6] text-xs space-y-4">
                                <div>
                                  <span className="font-bold uppercase tracking-wider text-[10px] text-gray-600 block mb-2">
                                    Prescribed Syllabus Topics:
                                  </span>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-2">
                                    {unit.topics.map((top, idx) => (
                                      <div key={idx} className="flex items-start gap-1.5 text-gray-800">
                                        <span className="text-[#8B0000] font-bold mt-0.5">•</span>
                                        <span 
                                          onClick={() => onSelectForCopilot(subject, unit, top, 'explain')}
                                          className="hover:text-[#8B0000] hover:underline cursor-pointer font-medium"
                                          title="Click to explain this topic with AI"
                                        >
                                          {top}
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                <div className="p-3.5 bg-white border-l-4 border-[#8B0000] border-y border-r border-[#E2E2E2]">
                                  <span className="font-bold uppercase tracking-wider text-[10px] text-[#8B0000] flex items-center gap-1 mb-1.5">
                                    <Flame className="w-3.5 h-3.5 text-[#8B0000]" />
                                    High-Yield Repeated AKTU PYQ Topics (10-Mark Section B & C):
                                  </span>
                                  <ul className="list-disc list-inside space-y-1 text-gray-800 pl-1 font-serif italic">
                                    {unit.importantPyqTopics.map((pyq, idx) => (
                                      <li key={idx}>
                                        <strong className="font-bold text-[#1A1A1A] not-italic">{pyq}</strong>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
