import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  CheckSquare, 
  Sparkles, 
  HelpCircle, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  Award, 
  AlertCircle,
  Clock,
  ChevronRight,
  RefreshCw,
  Trophy
} from 'lucide-react';
import { AKTU_SUBJECTS } from '../data/aktuSyllabus';
import { Subject, QuizQuestion } from '../types';

interface MockQuizProps {
  initialSubject?: Subject;
}

export const MockQuiz: React.FC<MockQuizProps> = ({ initialSubject }) => {
  const [selectedSubject, setSelectedSubject] = useState<Subject>(
    initialSubject || AKTU_SUBJECTS[0] // Data Structures
  );
  const [selectedUnitNum, setSelectedUnitNum] = useState<number | 'ALL'>('ALL');
  const [difficulty, setDifficulty] = useState<string>('Standard AKTU Exam Level');

  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Trigger Gemini API to generate 5 AKTU Mock Questions
  const handleGenerateQuiz = async () => {
    setIsLoading(true);
    setErrorMsg(null);
    setQuestions([]);
    setUserAnswers({});
    setIsSubmitted(false);
    setCurrentQuestionIndex(0);

    try {
      const res = await fetch('/api/copilot/generate-quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subjectName: selectedSubject.name,
          subjectCode: selectedSubject.code,
          unitNumber: selectedUnitNum === 'ALL' ? undefined : selectedUnitNum,
          difficulty,
        }),
      });

      const data = await res.json();
      if (data.success && Array.isArray(data.questions) && data.questions.length > 0) {
        setQuestions(data.questions);
      } else {
        setErrorMsg(data.error || 'Unable to generate quiz questions. Please retry.');
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Network error fetching quiz.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectOption = (questionId: number, optionIdx: number) => {
    if (isSubmitted) return;
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: optionIdx,
    }));
  };

  const handleSubmitQuiz = () => {
    setIsSubmitted(true);

    // Calculate score
    const score = questions.reduce((acc, q) => {
      return userAnswers[q.id] === q.correctAnswerIndex ? acc + 1 : acc;
    }, 0);

    const percentage = (score / questions.length) * 100;
    if (percentage >= 60) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch (e) {
        console.log(e);
      }
    }
  };

  const score = questions.reduce((acc, q) => {
    return userAnswers[q.id] === q.correctAnswerIndex ? acc + 1 : acc;
  }, 0);

  const answeredCount = Object.keys(userAnswers).length;

  return (
    <div className="space-y-6">
      {/* Quiz Config Banner */}
      <div className="bg-white dark:bg-[#181A20] border border-[#E2E2E2] dark:border-[#2D323F] rounded-sm p-4 sm:p-6 shadow-sm space-y-4 transition-colors">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-black dark:bg-[#282C38] text-white text-[10px] uppercase font-bold tracking-widest font-mono mb-1.5">
              <CheckSquare className="w-3.5 h-3.5" />
              <span>AKTU University Exam Mock Test & Lab Viva Prep</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-black text-[#1A1A1A] dark:text-[#F3F4F6] tracking-tight uppercase">
              Interactive AKTU Knowledge Check
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-serif italic mt-0.5">
              Test your grasp of definitions, complexity classes, formulas, and syllabus concepts with instant grading.
            </p>
          </div>

          <button
            onClick={handleGenerateQuiz}
            disabled={isLoading}
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-sm bg-[#8B0000] dark:bg-[#EF4444] hover:bg-black dark:hover:bg-red-600 disabled:opacity-50 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all whitespace-nowrap cursor-pointer"
          >
            {isLoading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Crafting Quiz...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Generate New Quiz</span>
              </>
            )}
          </button>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-[#E2E2E2] dark:border-[#2D323F]">
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-1">
              Subject:
            </label>
            <select
              value={selectedSubject.id}
              onChange={(e) => {
                const sub = AKTU_SUBJECTS.find((s) => s.id === e.target.value);
                if (sub) {
                  setSelectedSubject(sub);
                  setSelectedUnitNum('ALL');
                }
              }}
              className="w-full px-3 py-2 rounded-sm bg-[#FAF9F6] dark:bg-[#12141A] border border-[#E2E2E2] dark:border-[#2D323F] text-sm text-[#1A1A1A] dark:text-[#F3F4F6] font-semibold focus:outline-none focus:border-black dark:focus:border-white cursor-pointer"
            >
              {AKTU_SUBJECTS.map((sub) => (
                <option key={sub.id} value={sub.id} className="dark:bg-[#181A20]">
                  {sub.code} - {sub.name} (Year {sub.year})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-1">
              Unit Coverage:
            </label>
            <select
              value={selectedUnitNum}
              onChange={(e) => {
                const v = e.target.value;
                setSelectedUnitNum(v === 'ALL' ? 'ALL' : Number(v));
              }}
              className="w-full px-3 py-2 rounded-sm bg-[#FAF9F6] dark:bg-[#12141A] border border-[#E2E2E2] dark:border-[#2D323F] text-sm text-[#1A1A1A] dark:text-[#F3F4F6] font-semibold focus:outline-none focus:border-black dark:focus:border-white cursor-pointer"
            >
              <option value="ALL" className="dark:bg-[#181A20]">All 5 Units (Comprehensive Exam)</option>
              {selectedSubject.units.map((u) => (
                <option key={u.unitNumber} value={u.unitNumber} className="dark:bg-[#181A20]">
                  Unit {u.unitNumber}: {u.unitTitle.slice(0, 32)}...
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-1">
              Exam Standard:
            </label>
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="w-full px-3 py-2 rounded-sm bg-[#FAF9F6] dark:bg-[#12141A] border border-[#E2E2E2] dark:border-[#2D323F] text-sm text-[#1A1A1A] dark:text-[#F3F4F6] font-semibold focus:outline-none focus:border-black dark:focus:border-white cursor-pointer"
            >
              <option value="Standard AKTU Exam Level" className="dark:bg-[#181A20]">Standard AKTU University Exam</option>
              <option value="AKTU Section A (2-Mark Definitions & Formulas)" className="dark:bg-[#181A20]">AKTU Section A (2-Mark Quick MCQs)</option>
              <option value="Lab Viva Voce & Conceptual" className="dark:bg-[#181A20]">Lab Viva Voce & Conceptual</option>
            </select>
          </div>
        </div>
      </div>

      {/* Quiz Area */}
      {isLoading ? (
        <div className="bg-white dark:bg-[#181A20] border border-[#E2E2E2] dark:border-[#2D323F] rounded-sm p-12 text-center space-y-4 shadow-sm transition-colors">
          <div className="w-12 h-12 rounded-full border-2 border-gray-300 dark:border-gray-700 border-t-[#8B0000] dark:border-t-[#EF4444] animate-spin mx-auto" />
          <h3 className="font-serif text-lg font-bold text-[#1A1A1A] dark:text-[#F3F4F6]">
            AI is Generating AKTU Examination Questions...
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 font-serif italic max-w-sm mx-auto">
            Extracting core topics and PYQ formats for {selectedSubject.name}...
          </p>
        </div>
      ) : errorMsg ? (
        <div className="p-4 rounded-sm bg-rose-50 dark:bg-rose-950/40 border-l-4 border-rose-600 dark:border-rose-500 text-rose-800 dark:text-rose-200 text-xs">
          <p className="font-bold">{errorMsg}</p>
          <button
            onClick={handleGenerateQuiz}
            className="mt-2 px-3 py-1.5 rounded-sm bg-rose-700 dark:bg-rose-600 text-white text-xs font-bold uppercase tracking-wider cursor-pointer"
          >
            Retry Generation
          </button>
        </div>
      ) : questions.length > 0 ? (
        <div className="space-y-4">
          {/* Score Header if Submitted */}
          {isSubmitted && (
            <div className="bg-white dark:bg-[#181A20] border-l-4 border-[#8B0000] dark:border-[#EF4444] border-y border-r border-[#E2E2E2] dark:border-[#2D323F] rounded-sm p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-sm bg-black dark:bg-[#282C38] flex items-center justify-center text-white font-serif">
                  <Trophy className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#1A1A1A] dark:text-[#F3F4F6]">
                    Quiz Completed: You Scored {score} / {questions.length} (
                    {Math.round((score / questions.length) * 100)}%)
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 font-serif italic mt-0.5">
                    {score === questions.length
                      ? '🌟 Outstanding! You are on track for 9+ SGPA in this subject.'
                      : score >= 3
                      ? '👍 Good job! Review the explanations below to master the missed points.'
                      : '⚠️ Review the unit notes in the Syllabus Explorer tab to strengthen concepts.'}
                  </p>
                </div>
              </div>

              <button
                onClick={handleGenerateQuiz}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-[#8B0000] dark:bg-[#EF4444] hover:bg-black dark:hover:bg-red-600 text-white font-bold text-xs uppercase tracking-wider shadow-sm cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Try Another Quiz</span>
              </button>
            </div>
          )}

          {/* Question Navigator Bar */}
          <div className="bg-white dark:bg-[#181A20] border border-[#E2E2E2] dark:border-[#2D323F] rounded-sm p-3 flex items-center justify-between text-xs shadow-sm transition-colors">
            <div className="flex items-center gap-2">
              <span className="font-bold uppercase tracking-widest text-[10px] text-gray-500 dark:text-gray-400">Questions:</span>
              <div className="flex items-center gap-1.5">
                {questions.map((q, idx) => {
                  const isAnswered = userAnswers[q.id] !== undefined;
                  const isCurrent = currentQuestionIndex === idx;
                  const isCorrect = isSubmitted && userAnswers[q.id] === q.correctAnswerIndex;
                  const isWrong = isSubmitted && isAnswered && !isCorrect;

                  return (
                    <button
                      key={q.id}
                      onClick={() => setCurrentQuestionIndex(idx)}
                      className={`w-7 h-7 rounded-sm text-xs font-bold transition-all cursor-pointer ${
                        isCurrent
                          ? 'bg-black dark:bg-white text-white dark:text-black ring-2 ring-black dark:ring-white'
                          : isCorrect
                          ? 'bg-emerald-600 text-white'
                          : isWrong
                          ? 'bg-[#8B0000] dark:bg-[#EF4444] text-white'
                          : isAnswered
                          ? 'bg-gray-700 dark:bg-gray-600 text-white'
                          : 'bg-[#F5F5F5] dark:bg-[#12141A] text-gray-700 dark:text-gray-300 border border-[#E2E2E2] dark:border-[#2D323F]'
                      }`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="text-gray-600 dark:text-gray-400 text-xs font-mono">
              Answered: <strong className="text-black dark:text-white font-bold">{answeredCount}</strong> / {questions.length}
            </div>
          </div>

          {/* Active Question Card */}
          {questions[currentQuestionIndex] && (() => {
            const currentQ = questions[currentQuestionIndex];
            const selectedOpt = userAnswers[currentQ.id];

            return (
              <div className="bg-white dark:bg-[#181A20] border border-[#E2E2E2] dark:border-[#2D323F] rounded-sm p-5 sm:p-6 shadow-sm space-y-5 transition-colors">
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span className="px-2.5 py-0.5 rounded-sm bg-black dark:bg-[#282C38] text-white text-[10px] uppercase font-bold tracking-widest font-mono">
                    Question {currentQuestionIndex + 1} of {questions.length}
                  </span>
                  {currentQ.unitNumber && (
                    <span className="text-gray-500 dark:text-gray-400 font-serif italic text-xs font-semibold">Unit {currentQ.unitNumber}</span>
                  )}
                </div>

                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1A1A1A] dark:text-[#F3F4F6] leading-snug">
                  {currentQ.question}
                </h3>

                {/* 4 Choices */}
                <div className="space-y-2.5">
                  {currentQ.options.map((opt, optIdx) => {
                    const isSelected = selectedOpt === optIdx;
                    const isCorrectAnswer = optIdx === currentQ.correctAnswerIndex;

                    let btnStyle = 'bg-[#FAF9F6] dark:bg-[#12141A] border-[#E2E2E2] dark:border-[#2D323F] hover:border-black dark:hover:border-white text-[#1A1A1A] dark:text-[#F3F4F6]';
                    if (isSubmitted) {
                      if (isCorrectAnswer) {
                        btnStyle = 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-600 dark:border-emerald-500 text-emerald-950 dark:text-emerald-200 font-bold';
                      } else if (isSelected && !isCorrectAnswer) {
                        btnStyle = 'bg-rose-50 dark:bg-rose-950/40 border-[#8B0000] dark:border-[#EF4444] text-rose-950 dark:text-rose-200';
                      }
                    } else if (isSelected) {
                      btnStyle = 'bg-white dark:bg-[#20242F] border-black dark:border-white text-[#1A1A1A] dark:text-[#F3F4F6] font-bold ring-2 ring-black dark:ring-white shadow-sm';
                    }

                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleSelectOption(currentQ.id, optIdx)}
                        disabled={isSubmitted}
                        className={`w-full text-left p-3.5 rounded-sm border transition-all flex items-start gap-3 cursor-pointer ${btnStyle}`}
                      >
                        <span
                          className={`w-6 h-6 rounded-sm text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            isSelected
                              ? 'bg-black dark:bg-white text-white dark:text-black'
                              : 'bg-[#F5F5F5] dark:bg-[#20242F] text-gray-700 dark:text-gray-300 border border-[#E2E2E2] dark:border-[#2D323F]'
                          }`}
                        >
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span className="flex-1 text-sm">{opt}</span>
                        {isSubmitted && isCorrectAnswer && (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                        )}
                        {isSubmitted && isSelected && !isCorrectAnswer && (
                          <XCircle className="w-5 h-5 text-[#8B0000] dark:text-[#EF4444] flex-shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation Card upon submission */}
                {isSubmitted && (
                  <div className="p-4 rounded-sm bg-[#FAF9F6] dark:bg-[#12141A] border-l-4 border-[#8B0000] dark:border-[#EF4444] border-y border-r border-[#E2E2E2] dark:border-[#2D323F] text-xs space-y-1.5">
                    <span className="font-bold text-[#8B0000] dark:text-[#EF4444] uppercase tracking-wider text-[11px] flex items-center gap-1.5 font-mono">
                      <HelpCircle className="w-3.5 h-3.5" />
                      Official Explanation & Textbook Grounding:
                    </span>
                    <p className="text-gray-800 dark:text-gray-200 font-serif leading-relaxed text-sm">{currentQ.explanation}</p>
                  </div>
                )}

                {/* Bottom Navigation */}
                <div className="flex items-center justify-between pt-4 border-t border-[#E2E2E2] dark:border-[#2D323F]">
                  <button
                    onClick={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}
                    disabled={currentQuestionIndex === 0}
                    className="px-4 py-2 rounded-sm bg-[#F5F5F5] dark:bg-[#12141A] hover:bg-gray-200 dark:hover:bg-[#20242F] disabled:opacity-30 text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 border border-[#E2E2E2] dark:border-[#2D323F] cursor-pointer"
                  >
                    Previous
                  </button>

                  <div className="flex items-center gap-2">
                    {!isSubmitted && (
                      <button
                        onClick={handleSubmitQuiz}
                        disabled={answeredCount === 0}
                        className="px-5 py-2 rounded-sm bg-emerald-700 hover:bg-black disabled:opacity-40 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all cursor-pointer"
                      >
                        Submit & View Score
                      </button>
                    )}

                    <button
                      onClick={() =>
                        setCurrentQuestionIndex((prev) =>
                          Math.min(questions.length - 1, prev + 1)
                        )
                      }
                      disabled={currentQuestionIndex === questions.length - 1}
                      className="inline-flex items-center gap-1 px-4 py-2 rounded-sm bg-black dark:bg-[#282C38] hover:bg-gray-800 dark:hover:bg-gray-700 disabled:opacity-30 text-xs font-bold uppercase tracking-wider text-white cursor-pointer"
                    >
                      <span>Next</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white dark:bg-[#181A20] border border-[#E2E2E2] dark:border-[#2D323F] rounded-sm p-12 text-center space-y-3 shadow-sm transition-colors">
          <Award className="w-12 h-12 text-gray-400 dark:text-gray-500 mx-auto" />
          <h3 className="font-serif text-lg font-bold text-[#1A1A1A] dark:text-[#F3F4F6]">
            Generate your first AKTU Mock Test
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 font-serif italic max-w-md mx-auto">
            Choose a subject and unit from above, then click 'Generate New Quiz' to practice real university exam questions.
          </p>
          <button
            onClick={handleGenerateQuiz}
            className="mt-2 inline-flex items-center gap-1.5 px-5 py-2.5 rounded-sm bg-[#8B0000] dark:bg-[#EF4444] hover:bg-black dark:hover:bg-red-600 text-white font-bold text-xs uppercase tracking-wider shadow-sm cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Start {selectedSubject.shortName} Quiz</span>
          </button>
        </div>
      )}
    </div>
  );
};
