import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  AlertCircle, 
  Plus, 
  Trash2, 
  Info, 
  Sparkles,
  Flame
} from 'lucide-react';

interface SubjectAttendance {
  id: string;
  name: string;
  code: string;
  attended: number;
  total: number;
}

export const AttendanceCalculator: React.FC = () => {
  const [targetPercentage, setTargetPercentage] = useState<number>(75);

  // Subject-wise attendance list
  const [subjects, setSubjects] = useState<SubjectAttendance[]>(() => {
    try {
      const saved = localStorage.getItem('iec_aktu_attendance_subjects');
      return saved ? JSON.parse(saved) : [
        { id: '1', name: 'Data Structures (KCS301)', code: 'BCS301', attended: 28, total: 32 },
        { id: '2', name: 'Computer Org. & Arch (KCS302)', code: 'BCS302', attended: 24, total: 30 },
        { id: '3', name: 'Discrete Structures & Logic', code: 'BCS303', attended: 22, total: 30 },
        { id: '4', name: 'Universal Human Values', code: 'KVE301', attended: 18, total: 20 },
        { id: '5', name: 'Mathematics-IV', code: 'BAS303', attended: 20, total: 28 },
      ];
    } catch {
      return [
        { id: '1', name: 'Data Structures (KCS301)', code: 'BCS301', attended: 28, total: 32 },
      ];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('iec_aktu_attendance_subjects', JSON.stringify(subjects));
    } catch (e) {
      console.log(e);
    }
  }, [subjects]);

  const totalAttended = subjects.reduce((sum, s) => sum + s.attended, 0);
  const totalConducted = subjects.reduce((sum, s) => sum + s.total, 0);
  const overallPercentage = totalConducted > 0 ? (totalAttended / totalConducted) * 100 : 0;

  // Single calculation helper
  const calculateMargin = (attended: number, total: number, target: number) => {
    if (total === 0) return { status: 'safe', margin: 0, text: 'No lectures recorded yet.' };
    const pct = (attended / total) * 100;
    const targetFrac = target / 100;

    if (pct >= target) {
      // Classes can bunk: attended / (total + x) >= targetFrac => x = (attended - targetFrac * total) / targetFrac
      const bunkClasses = Math.floor((attended - targetFrac * total) / targetFrac);
      return {
        status: 'safe',
        margin: bunkClasses,
        text: `You can safely miss the next ${bunkClasses} ${bunkClasses === 1 ? 'class' : 'classes'} and still stay above ${target}%.`,
      };
    } else {
      // Classes must attend: (attended + y) / (total + y) >= targetFrac => y = (targetFrac * total - attended) / (1 - targetFrac)
      const needClasses = Math.ceil((targetFrac * total - attended) / (1 - targetFrac));
      return {
        status: 'danger',
        margin: needClasses,
        text: `You must attend the next ${needClasses} consecutive ${needClasses === 1 ? 'class' : 'classes'} to reach ${target}%.`,
      };
    }
  };

  const overallMargin = calculateMargin(totalAttended, totalConducted, targetPercentage);

  const handleUpdate = (id: string, field: 'name' | 'code' | 'attended' | 'total', val: any) => {
    setSubjects(prev => prev.map(s => {
      if (s.id === id) {
        const updated = { ...s, [field]: val };
        if (field === 'attended' && updated.attended > updated.total) {
          updated.total = updated.attended;
        }
        return updated;
      }
      return s;
    }));
  };

  const handleAdd = () => {
    const newId = Date.now().toString();
    setSubjects(prev => [
      ...prev,
      { id: newId, name: 'New Subject', code: 'SUB101', attended: 15, total: 20 }
    ]);
  };

  const handleRemove = (id: string) => {
    if (subjects.length <= 1) return;
    setSubjects(prev => prev.filter(s => s.id !== id));
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-white dark:bg-[#181A20] border border-[#E2E2E2] dark:border-[#2D323F] rounded-sm p-4 sm:p-6 shadow-sm transition-colors">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-black dark:bg-[#282C38] text-white text-[10px] uppercase font-bold tracking-widest font-mono mb-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>AKTU Mandatory 75% Attendance Compliance Rule</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-black text-[#1A1A1A] dark:text-[#F3F4F6] tracking-tight uppercase">
              75% Attendance Guard & Bunk Margin Planner
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-serif italic mt-0.5">
              Never get debarred from AKTU End-Semesters or IEC-CET sessionals. Track exact classes you can safely skip or must attend.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Target:</span>
            {[75, 80, 85].map(t => (
              <button
                key={t}
                onClick={() => setTargetPercentage(t)}
                className={`px-3 py-1.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  targetPercentage === t
                    ? 'bg-[#8B0000] dark:bg-[#EF4444] text-white shadow-sm'
                    : 'bg-[#F5F5F5] dark:bg-[#12141A] text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white border border-[#E2E2E2] dark:border-[#2D323F]'
                }`}
              >
                {t}% {t === 75 && '(Minimum)'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Overall Score Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 rounded-sm bg-white dark:bg-[#181A20] border border-[#E2E2E2] dark:border-[#2D323F] space-y-1 shadow-sm transition-colors">
          <span className="text-[10px] text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest">Overall Attendance</span>
          <div className="flex items-baseline gap-2">
            <span className={`font-serif text-4xl font-black ${overallPercentage >= targetPercentage ? 'text-emerald-700 dark:text-emerald-400' : 'text-[#8B0000] dark:text-[#EF4444]'}`}>
              {overallPercentage.toFixed(1)}%
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">({totalAttended}/{totalConducted} classes)</span>
          </div>
          <div className="w-full h-2 bg-[#FAF9F6] dark:bg-[#12141A] border border-[#E2E2E2] dark:border-[#2D323F] rounded-none mt-2 overflow-hidden">
            <div 
              className={`h-full transition-all duration-300 ${overallPercentage >= targetPercentage ? 'bg-emerald-600 dark:bg-emerald-500' : 'bg-[#8B0000] dark:bg-[#EF4444]'}`}
              style={{ width: `${Math.min(100, overallPercentage)}%` }}
            />
          </div>
        </div>

        <div className={`p-5 rounded-sm border md:col-span-2 flex items-center gap-4 shadow-sm transition-colors ${
          overallPercentage >= targetPercentage 
            ? 'bg-white dark:bg-[#181A20] border-l-4 border-emerald-600 dark:border-emerald-500 border-y border-r border-[#E2E2E2] dark:border-[#2D323F]' 
            : 'bg-white dark:bg-[#181A20] border-l-4 border-[#8B0000] dark:border-[#EF4444] border-y border-r border-[#E2E2E2] dark:border-[#2D323F]'
        }`}>
          <div className={`w-12 h-12 rounded-sm flex items-center justify-center flex-shrink-0 ${
            overallPercentage >= targetPercentage ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300' : 'bg-rose-100 dark:bg-rose-950/60 text-[#8B0000] dark:text-[#EF4444]'
          }`}>
            {overallPercentage >= targetPercentage ? (
              <CheckCircle2 className="w-6 h-6" />
            ) : (
              <AlertTriangle className="w-6 h-6" />
            )}
          </div>

          <div>
            <h3 className="font-serif text-base font-bold text-[#1A1A1A] dark:text-[#F3F4F6]">
              {overallPercentage >= targetPercentage ? 'Safe Zone • Eligible for AKTU University Admit Card' : 'Shortage Alert • Debarment Risk Under AKTU Ordinance'}
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 font-serif italic mt-0.5 leading-relaxed">
              {overallMargin.text}
            </p>
          </div>
        </div>
      </div>

      {/* Subject-wise Ledger */}
      <div className="bg-white dark:bg-[#181A20] border border-[#E2E2E2] dark:border-[#2D323F] rounded-sm p-4 sm:p-6 shadow-sm space-y-4 transition-colors">
        <div className="flex items-center justify-between border-b border-black dark:border-white/20 pb-2">
          <h3 className="font-serif text-base font-bold text-[#1A1A1A] dark:text-[#F3F4F6] flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#8B0000] dark:text-[#EF4444]" />
            <span>Subject-by-Subject Attendance Tracker</span>
          </h3>

          <button
            onClick={handleAdd}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-sm bg-[#8B0000] dark:bg-[#EF4444] hover:bg-black dark:hover:bg-red-600 text-white text-xs font-bold uppercase tracking-wider shadow-sm cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Subject</span>
          </button>
        </div>

        <div className="space-y-3">
          {subjects.map((sub) => {
            const pct = sub.total > 0 ? (sub.attended / sub.total) * 100 : 0;
            const margin = calculateMargin(sub.attended, sub.total, targetPercentage);
            const isSafe = pct >= targetPercentage;

            return (
              <div
                key={sub.id}
                className={`p-4 rounded-sm border transition-all ${
                  isSafe 
                    ? 'border-[#E2E2E2] dark:border-[#2D323F] bg-[#FAF9F6] dark:bg-[#12141A]' 
                    : 'border-rose-300 dark:border-rose-900/60 bg-rose-50/50 dark:bg-rose-950/20'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  {/* Left: Subject Info */}
                  <div className="flex-1 space-y-1">
                    <input
                      type="text"
                      value={sub.name}
                      onChange={(e) => handleUpdate(sub.id, 'name', e.target.value)}
                      className="font-serif font-bold text-[#1A1A1A] dark:text-[#F3F4F6] text-sm bg-transparent focus:outline-none focus:bg-white dark:focus:bg-[#20242F] px-1 py-0.5 rounded-sm border border-transparent focus:border-black dark:focus:border-white w-full"
                    />
                    <div className="flex items-center gap-2 text-xs">
                      <span className={`font-mono font-bold px-2 py-0.5 rounded-sm text-[10px] ${
                        isSafe ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300' : 'bg-rose-100 dark:bg-rose-950/60 text-[#8B0000] dark:text-[#EF4444]'
                      }`}>
                        {pct.toFixed(1)}%
                      </span>
                      <span className="text-gray-600 dark:text-gray-400 font-serif italic text-xs">{margin.text}</span>
                    </div>
                  </div>

                  {/* Right: Counter Controls */}
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 text-xs">
                      <div>
                        <span className="block text-[9px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Attended:</span>
                        <input
                          type="number"
                          min="0"
                          value={sub.attended}
                          onChange={(e) => handleUpdate(sub.id, 'attended', Math.max(0, Number(e.target.value)))}
                          className="w-16 px-2 py-1.5 rounded-sm bg-white dark:bg-[#181A20] border border-[#E2E2E2] dark:border-[#2D323F] text-center font-bold text-[#1A1A1A] dark:text-[#F3F4F6] text-xs focus:outline-none focus:border-black dark:focus:border-white"
                        />
                      </div>
                      <span className="text-gray-400 dark:text-gray-500 pt-3">/</span>
                      <div>
                        <span className="block text-[9px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Total:</span>
                        <input
                          type="number"
                          min="1"
                          value={sub.total}
                          onChange={(e) => handleUpdate(sub.id, 'total', Math.max(1, Number(e.target.value)))}
                          className="w-16 px-2 py-1.5 rounded-sm bg-white dark:bg-[#181A20] border border-[#E2E2E2] dark:border-[#2D323F] text-center font-bold text-[#1A1A1A] dark:text-[#F3F4F6] text-xs focus:outline-none focus:border-black dark:focus:border-white"
                        />
                      </div>
                    </div>

                    <button
                      onClick={() => handleRemove(sub.id)}
                      disabled={subjects.length <= 1}
                      className="p-2 rounded-sm text-gray-400 hover:text-[#8B0000] dark:hover:text-[#EF4444] hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-20 mt-3 cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
