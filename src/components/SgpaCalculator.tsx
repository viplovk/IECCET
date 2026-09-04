import React, { useState } from 'react';
import { 
  Calculator, 
  Plus, 
  Trash2, 
  RotateCcw, 
  Award, 
  Info, 
  CheckCircle2, 
  GraduationCap, 
  Sparkles 
} from 'lucide-react';
import { AKTU_GRADING_SCALE, AKTU_SUBJECTS } from '../data/aktuSyllabus';
import { SubjectCreditCalcItem } from '../types';

export const SgpaCalculator: React.FC = () => {
  // Preset list of subjects initialized with 2nd Year Sem 3 CSE
  const [subjects, setSubjects] = useState<SubjectCreditCalcItem[]>([
    { id: '1', code: 'BCS301', name: 'Data Structures', credits: 4, gradePoint: 9 },
    { id: '2', code: 'BCS302', name: 'Computer Organization & Arch.', credits: 4, gradePoint: 9 },
    { id: '3', code: 'BCS303', name: 'Discrete Structures & Logic', credits: 4, gradePoint: 8 },
    { id: '4', code: 'KVE301', name: 'Universal Human Values', credits: 3, gradePoint: 9 },
    { id: '5', code: 'BAS303', name: 'Mathematics-IV', credits: 4, gradePoint: 8 },
    { id: '6', code: 'BCS351', name: 'Data Structures Lab', credits: 1, gradePoint: 10 },
    { id: '7', code: 'BCS352', name: 'COA Lab', credits: 1, gradePoint: 10 },
  ]);

  // Multi-semester CGPA states
  const [semesterSgpas, setSemesterSgpas] = useState<{ sem: number; sgpa: number; credits: number }[]>([
    { sem: 1, sgpa: 8.4, credits: 19.5 },
    { sem: 2, sgpa: 8.6, credits: 19.5 },
    { sem: 3, sgpa: 8.8, credits: 21.0 },
  ]);

  // Calculate current SGPA
  const totalCredits = subjects.reduce((sum, s) => sum + s.credits, 0);
  const totalWeightedPoints = subjects.reduce((sum, s) => sum + s.credits * s.gradePoint, 0);
  const currentSgpa = totalCredits > 0 ? (totalWeightedPoints / totalCredits) : 0;

  // AKTU Official Percentage Formula: (CGPA - 0.75) * 10
  const aktuPercentage = currentSgpa >= 0.75 ? ((currentSgpa - 0.75) * 10).toFixed(2) : '0.00';
  const standardPercentage = (currentSgpa * 9.5).toFixed(2);

  // Multi-semester CGPA
  const multiTotalCredits = semesterSgpas.reduce((acc, curr) => acc + curr.credits, 0);
  const multiWeighted = semesterSgpas.reduce((acc, curr) => acc + curr.sgpa * curr.credits, 0);
  const cumulativeCgpa = multiTotalCredits > 0 ? (multiWeighted / multiTotalCredits).toFixed(2) : '0.00';
  const cumulativePercentage = Number(cumulativeCgpa) >= 0.75 ? ((Number(cumulativeCgpa) - 0.75) * 10).toFixed(2) : '0.00';

  const handleUpdateSubject = (id: string, field: keyof SubjectCreditCalcItem, value: any) => {
    setSubjects(prev => prev.map(s => s.id === id ? { ...s, [field]: value } : s));
  };

  const handleAddSubject = () => {
    const newId = Date.now().toString();
    setSubjects(prev => [
      ...prev,
      { id: newId, code: 'NEW101', name: 'New Subject', credits: 3, gradePoint: 8 }
    ]);
  };

  const handleRemoveSubject = (id: string) => {
    if (subjects.length <= 1) return;
    setSubjects(prev => prev.filter(s => s.id !== id));
  };

  const loadPresetSemester = (sem: number) => {
    const semSubjects = AKTU_SUBJECTS.filter(s => s.semester === sem);
    if (semSubjects.length > 0) {
      const items: SubjectCreditCalcItem[] = semSubjects.map((s, idx) => ({
        id: (idx + 1).toString(),
        code: s.code.split('/')[0].trim(),
        name: s.name,
        credits: s.credits,
        gradePoint: 8
      }));
      setSubjects(items);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-white dark:bg-[#181A20] border border-[#E2E2E2] dark:border-[#2D323F] rounded-sm p-4 sm:p-6 shadow-sm transition-colors">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-black dark:bg-[#282C38] text-white text-[10px] uppercase font-bold tracking-widest font-mono mb-1.5">
              <Calculator className="w-3.5 h-3.5" />
              <span>Official AKTU Ordinance Grading Standard</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-black text-[#1A1A1A] dark:text-[#F3F4F6] tracking-tight uppercase">
              AKTU SGPA, CGPA & Percentage Calculator
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-serif italic mt-0.5">
              Calculate semester SGPA and converted percentage using the official formula: <code className="text-[#8B0000] dark:text-[#EF4444] font-mono font-bold bg-[#F5F5F5] dark:bg-[#20242F] px-1.5 py-0.5 border border-[#E2E2E2] dark:border-[#2D323F]">Percentage = (CGPA - 0.75) × 10</code>.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] px-3 py-1 bg-[#F5F5F5] dark:bg-[#20242F] border-l-4 border-[#8B0000] dark:border-[#EF4444] border-y border-r border-[#E2E2E2] dark:border-[#2D323F] text-gray-800 dark:text-gray-200 font-bold uppercase tracking-wider">
              IEC-CET Grade Portal
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Subject Grade Table */}
        <div className="lg:col-span-8 bg-white dark:bg-[#181A20] border border-[#E2E2E2] dark:border-[#2D323F] rounded-sm p-4 sm:p-6 shadow-sm space-y-4 transition-colors">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black dark:border-white/20 pb-2">
            <h3 className="font-serif text-base font-bold text-[#1A1A1A] dark:text-[#F3F4F6] flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#8B0000] dark:text-[#EF4444]" />
              <span>Semester Course Grade Sheet</span>
            </h3>

            {/* Quick Pre-fill by Semester */}
            <div className="flex items-center gap-1.5 text-xs">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Pre-fill:</span>
              {[1, 2, 3, 4, 5, 7].map(sem => (
                <button
                  key={sem}
                  onClick={() => loadPresetSemester(sem)}
                  className="px-2.5 py-1 rounded-sm bg-[#F5F5F5] dark:bg-[#12141A] hover:bg-gray-200 dark:hover:bg-[#20242F] text-gray-800 dark:text-gray-200 text-[10px] font-bold uppercase tracking-wider border border-[#E2E2E2] dark:border-[#2D323F] transition-colors cursor-pointer"
                >
                  Sem {sem}
                </button>
              ))}
            </div>
          </div>

          {/* Subjects Table */}
          <div className="overflow-x-auto w-full -mx-4 sm:mx-0 px-4 sm:px-0">
            <table className="w-full min-w-[520px] text-xs text-left">
              <thead>
                <tr className="border-b border-[#E2E2E2] dark:border-[#2D323F] text-gray-600 dark:text-gray-400 bg-[#FAF9F6] dark:bg-[#12141A] font-bold uppercase tracking-wider text-[10px]">
                  <th className="py-2.5 px-3">Subject Name & Code</th>
                  <th className="py-2.5 px-3 w-28">Credits</th>
                  <th className="py-2.5 px-3 w-40">AKTU Grade</th>
                  <th className="py-2.5 px-3 w-20 text-center">Pts</th>
                  <th className="py-2.5 px-2 w-10 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E2E2] dark:divide-[#2D323F]">
                {subjects.map((sub) => (
                  <tr key={sub.id} className="hover:bg-[#FAF9F6] dark:hover:bg-[#12141A] transition-colors">
                    <td className="py-2 px-3">
                      <div className="space-y-1">
                        <input
                          type="text"
                          value={sub.name}
                          onChange={(e) => handleUpdateSubject(sub.id, 'name', e.target.value)}
                          className="w-full bg-transparent font-serif font-semibold text-[#1A1A1A] dark:text-[#F3F4F6] focus:outline-none focus:bg-white dark:focus:bg-[#20242F] px-1 py-0.5 rounded-sm border border-transparent focus:border-black dark:focus:border-white"
                        />
                        <input
                          type="text"
                          value={sub.code}
                          onChange={(e) => handleUpdateSubject(sub.id, 'code', e.target.value)}
                          className="w-28 bg-[#F5F5F5] dark:bg-[#20242F] font-mono text-[10px] text-[#8B0000] dark:text-[#EF4444] font-bold focus:outline-none focus:bg-white dark:focus:bg-[#20242F] px-1.5 py-0.5 rounded-sm border border-[#E2E2E2] dark:border-[#2D323F] uppercase"
                        />
                      </div>
                    </td>

                    <td className="py-2 px-3">
                      <select
                        value={sub.credits}
                        onChange={(e) => handleUpdateSubject(sub.id, 'credits', Number(e.target.value))}
                        className="w-full px-2 py-1.5 rounded-sm bg-[#FAF9F6] dark:bg-[#12141A] border border-[#E2E2E2] dark:border-[#2D323F] text-[#1A1A1A] dark:text-[#F3F4F6] font-semibold focus:outline-none focus:border-black dark:focus:border-white cursor-pointer"
                      >
                        {[1, 2, 3, 4, 5].map((c) => (
                          <option key={c} value={c} className="dark:bg-[#181A20]">
                            {c} {c === 1 ? 'Credit' : 'Credits'}
                          </option>
                        ))}
                      </select>
                    </td>

                    <td className="py-2 px-3">
                      <select
                        value={sub.gradePoint}
                        onChange={(e) => handleUpdateSubject(sub.id, 'gradePoint', Number(e.target.value))}
                        className="w-full px-2 py-1.5 rounded-sm bg-[#FAF9F6] dark:bg-[#12141A] border border-[#E2E2E2] dark:border-[#2D323F] text-[#1A1A1A] dark:text-[#F3F4F6] font-semibold focus:outline-none focus:border-black dark:focus:border-white cursor-pointer"
                      >
                        {AKTU_GRADING_SCALE.map((g) => (
                          <option key={g.gradeLetter} value={g.gradePoint} className="dark:bg-[#181A20]">
                            {g.gradeLetter} ({g.gradePoint} pts - {g.marksRange})
                          </option>
                        ))}
                      </select>
                    </td>

                    <td className="py-2 px-3 text-center font-bold text-[#8B0000] dark:text-[#EF4444] font-mono text-sm">
                      {sub.credits * sub.gradePoint}
                    </td>

                    <td className="py-2 px-2 text-center">
                      <button
                        onClick={() => handleRemoveSubject(sub.id)}
                        disabled={subjects.length <= 1}
                        className="p-1.5 rounded-sm text-gray-400 hover:text-[#8B0000] dark:hover:text-[#EF4444] hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-20 transition-colors cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-[#E2E2E2] dark:border-[#2D323F]">
            <button
              onClick={handleAddSubject}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-sm bg-black dark:bg-[#282C38] hover:bg-gray-800 dark:hover:bg-gray-700 text-white text-xs font-bold uppercase tracking-wider shadow-sm cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5 text-white" />
              <span>Add Subject / Lab</span>
            </button>

            <span className="text-xs text-gray-600 dark:text-gray-400 font-mono">
              Total Credits: <strong className="text-black dark:text-white font-bold text-sm">{totalCredits}</strong>
            </span>
          </div>
        </div>

        {/* Right Column: Calculated Results & AKTU Metrics */}
        <div className="lg:col-span-4 space-y-4">
          {/* Main SGPA Scorecard */}
          <div className="bg-white dark:bg-[#181A20] border-l-4 border-[#8B0000] dark:border-[#EF4444] border-y border-r border-[#E2E2E2] dark:border-[#2D323F] rounded-sm p-5 shadow-sm space-y-4 transition-colors">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-[#8B0000] dark:text-[#EF4444]" />
              Calculated Semester SGPA
            </span>

            <div className="flex items-baseline gap-3">
              <span className="font-serif text-5xl font-black text-[#1A1A1A] dark:text-[#F3F4F6] tracking-tight">
                {currentSgpa.toFixed(2)}
              </span>
              <span className="text-gray-400 dark:text-gray-500 text-sm font-serif italic">/ 10.00</span>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#E2E2E2] dark:border-[#2D323F] text-xs">
              <div className="p-3 rounded-sm bg-[#FAF9F6] dark:bg-[#12141A] border border-[#E2E2E2] dark:border-[#2D323F]">
                <span className="text-gray-500 dark:text-gray-400 block text-[9px] uppercase tracking-wider font-bold">AKTU Official %</span>
                <span className="font-serif text-lg font-black text-emerald-700 dark:text-emerald-400">{aktuPercentage}%</span>
              </div>

              <div className="p-3 rounded-sm bg-[#FAF9F6] dark:bg-[#12141A] border border-[#E2E2E2] dark:border-[#2D323F]">
                <span className="text-gray-500 dark:text-gray-400 block text-[9px] uppercase tracking-wider font-bold">General % (×9.5)</span>
                <span className="font-serif text-lg font-black text-[#8B0000] dark:text-[#EF4444]">{standardPercentage}%</span>
              </div>
            </div>

            {/* Division Status */}
            <div className="p-3 rounded-sm bg-[#F5F5F5] dark:bg-[#12141A] border border-[#E2E2E2] dark:border-[#2D323F] text-xs space-y-1">
              <span className="font-bold text-[#1A1A1A] dark:text-[#F3F4F6] block uppercase tracking-wider text-[10px]">AKTU Division Estimation:</span>
              <p className="text-gray-800 dark:text-gray-200 font-serif italic">
                {currentSgpa >= 7.5 ? (
                  <span className="text-emerald-800 dark:text-emerald-300 font-bold not-italic">
                    🏆 First Division with Honours (CGPA ≥ 7.5)
                  </span>
                ) : currentSgpa >= 6.0 ? (
                  <span className="text-[#1A1A1A] dark:text-[#F3F4F6] font-bold not-italic">
                    ✓ First Division (CGPA ≥ 6.0)
                  </span>
                ) : currentSgpa >= 5.0 ? (
                  <span className="text-amber-800 dark:text-amber-300 font-bold not-italic">
                    • Second Division (CGPA ≥ 5.0)
                  </span>
                ) : (
                  <span className="text-[#8B0000] dark:text-[#EF4444] font-bold not-italic">
                    ⚠️ Pass Division / Carryover alert
                  </span>
                )}
              </p>
            </div>
          </div>

          {/* AKTU Official Grading Guide Card */}
          <div className="bg-white dark:bg-[#181A20] border border-[#E2E2E2] dark:border-[#2D323F] rounded-sm p-4 text-xs space-y-3 shadow-sm transition-colors">
            <span className="font-serif text-sm font-bold text-[#1A1A1A] dark:text-[#F3F4F6] flex items-center gap-1.5 border-b border-black dark:border-white/20 pb-1.5">
              <Info className="w-3.5 h-3.5 text-[#8B0000] dark:text-[#EF4444]" />
              AKTU University Grading Scale (Reference)
            </span>

            <div className="grid grid-cols-2 gap-1.5 text-[11px]">
              {AKTU_GRADING_SCALE.map((g) => (
                <div
                  key={g.gradeLetter}
                  className="flex items-center justify-between p-2 rounded-sm bg-[#FAF9F6] dark:bg-[#12141A] border border-[#E2E2E2] dark:border-[#2D323F]"
                >
                  <span className="font-bold text-[#8B0000] dark:text-[#EF4444] font-mono">{g.gradeLetter}</span>
                  <span className="text-gray-600 dark:text-gray-400 font-mono text-[10px]">{g.gradePoint} pts</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
