import React, { useState } from 'react';
import { 
  UserCheck, 
  Lock, 
  KeyRound, 
  Calendar, 
  Sparkles, 
  AlertCircle, 
  CheckCircle2, 
  X, 
  Database, 
  GraduationCap, 
  LogOut, 
  UserPlus, 
  ArrowRight,
  ShieldCheck,
  Eye,
  EyeOff
} from 'lucide-react';
import { useAuth, StudentUser } from '../context/AuthContext';

export const StudentLoginModal: React.FC = () => {
  const { 
    user, 
    isAuthenticated, 
    isLoading, 
    isLoginModalOpen, 
    closeLoginModal, 
    login, 
    register, 
    logout 
  } = useAuth();

  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [successMsg, setSuccessMsg] = useState<string>('');

  // Login form state
  const [rollNumber, setRollNumber] = useState<string>('');
  const [dob, setDob] = useState<string>('');

  // Register form state
  const [regRoll, setRegRoll] = useState<string>('');
  const [regDob, setRegDob] = useState<string>('');
  const [regName, setRegName] = useState<string>('');
  const [regBranch, setRegBranch] = useState<string>('CSE');
  const [regYear, setRegYear] = useState<number>(2);
  const [regSemester, setRegSemester] = useState<number>(3);
  const [regEmail, setRegEmail] = useState<string>('');

  if (!isLoginModalOpen) return null;

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    if (!rollNumber.trim()) {
      setErrorMsg('Please enter your University Roll Number.');
      return;
    }

    if (!dob.trim()) {
      setErrorMsg('Please enter your Date of Birth in DDMMYYYY format.');
      return;
    }

    if (!/^\d{8}$/.test(dob.trim())) {
      setErrorMsg('Date of Birth must be exactly 8 digits (DDMMYYYY). Example: 15082003 for 15 Aug 2003.');
      return;
    }

    const res = await login(rollNumber.trim(), dob.trim());
    if (!res.success) {
      setErrorMsg(res.error || 'Login failed. Check your credentials in the SQL database.');
    }
  };

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    if (!regRoll.trim() || !regDob.trim() || !regName.trim()) {
      setErrorMsg('Roll Number, Date of Birth (DDMMYYYY), and Full Name are mandatory.');
      return;
    }

    if (!/^\d{8}$/.test(regDob.trim())) {
      setErrorMsg('Date of Birth must be exactly 8 digits in DDMMYYYY format (e.g. 14042004).');
      return;
    }

    const res = await register({
      roll_number: regRoll.trim(),
      dob: regDob.trim(),
      name: regName.trim(),
      branch: regBranch,
      year: Number(regYear),
      semester: Number(regSemester),
      email: regEmail.trim(),
    });

    if (!res.success) {
      setErrorMsg(res.error || 'Failed to enroll student in SQL database.');
    } else {
      setSuccessMsg('Successfully enrolled in SQL database! Welcome to IEC Portal.');
    }
  };

  const fillDemoCredentials = (demoRoll: string, demoDob: string) => {
    setRollNumber(demoRoll);
    setDob(demoDob);
    setErrorMsg('');
    setSuccessMsg('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-white dark:bg-[#181A20] border border-[#E2E2E2] dark:border-[#2D323F] rounded-sm shadow-2xl overflow-hidden transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Strip */}
        <div className="bg-[#FAF9F6] dark:bg-[#12141A] border-b border-[#E2E2E2] dark:border-[#2D323F] px-4 sm:px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-sm bg-[#8B0000] dark:bg-[#EF4444] flex items-center justify-center text-white">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-base sm:text-lg font-black text-[#1A1A1A] dark:text-[#F3F4F6] tracking-tight">
                {isAuthenticated ? 'Student Portal Profile' : 'AKTU Student Portal Login'}
              </h3>
              <p className="text-[10px] text-gray-500 dark:text-gray-400 font-mono">
                IEC College of Engineering & Technology • Code: 090
              </p>
            </div>
          </div>

          <button
            onClick={closeLoginModal}
            className="p-1 rounded-sm text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#20242F] transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 space-y-4 max-h-[80vh] overflow-y-auto">
          {isAuthenticated && user ? (
            /* Logged-In Student Profile View */
            <div className="space-y-4">
              <div className="bg-[#FAF9F6] dark:bg-[#20242F] border border-[#E2E2E2] dark:border-[#2D323F] rounded-sm p-4 space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="inline-block px-1.5 py-0.5 bg-[#8B0000] dark:bg-[#EF4444] text-white text-[9px] uppercase font-bold tracking-wider font-mono mb-1">
                      Enrolled Student
                    </span>
                    <h4 className="font-serif text-lg font-bold text-[#1A1A1A] dark:text-[#F3F4F6]">
                      {user.name}
                    </h4>
                    <p className="text-xs font-mono text-gray-600 dark:text-gray-300">
                      Roll Number: <span className="font-bold text-[#1A1A1A] dark:text-white">{user.roll_number}</span>
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono text-gray-400 uppercase">Section</span>
                    <p className="text-sm font-bold text-[#1A1A1A] dark:text-white">{user.section || 'A'}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-[#E2E2E2] dark:border-[#2D323F] text-xs">
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase font-mono">Branch</span>
                    <p className="font-bold text-[#1A1A1A] dark:text-[#F3F4F6]">{user.branch}</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase font-mono">Year / Sem</span>
                    <p className="font-bold text-[#1A1A1A] dark:text-[#F3F4F6]">Year {user.year} (Sem {user.semester})</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase font-mono">Attendance</span>
                    <p className={`font-bold ${user.attendance_percentage >= user.target_attendance ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}`}>
                      {user.attendance_percentage.toFixed(1)}%
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase font-mono">SGPA (CGPA)</span>
                    <p className="font-bold text-[#8B0000] dark:text-[#EF4444]">{user.sgpa_current.toFixed(2)}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-sm bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/40 text-emerald-800 dark:text-emerald-300 text-xs">
                <div className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                  <span>Authenticated via <strong>SQLite Relational Database</strong> record.</span>
                </div>
                <span className="font-mono text-[10px] uppercase font-bold text-emerald-600 dark:text-emerald-400">Live Synced</span>
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={logout}
                  className="inline-flex items-center gap-2 px-4 py-2 border border-red-300 dark:border-red-900/50 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Log Out</span>
                </button>

                <button
                  type="button"
                  onClick={closeLoginModal}
                  className="px-5 py-2 bg-[#8B0000] dark:bg-[#EF4444] text-white hover:bg-black dark:hover:bg-red-600 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
                >
                  Continue Studying
                </button>
              </div>
            </div>
          ) : (
            /* Login & Registration Tabs */
            <div className="space-y-4">
              {/* Tab Switcher */}
              <div className="flex border-b border-[#E2E2E2] dark:border-[#2D323F]">
                <button
                  type="button"
                  onClick={() => { setMode('login'); setErrorMsg(''); }}
                  className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider text-center border-b-2 transition-colors cursor-pointer ${
                    mode === 'login'
                      ? 'border-[#8B0000] dark:border-[#EF4444] text-[#8B0000] dark:text-[#EF4444]'
                      : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white'
                  }`}
                >
                  Sign In (Roll No + DOB)
                </button>
                <button
                  type="button"
                  onClick={() => { setMode('register'); setErrorMsg(''); }}
                  className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider text-center border-b-2 transition-colors cursor-pointer ${
                    mode === 'register'
                      ? 'border-[#8B0000] dark:border-[#EF4444] text-[#8B0000] dark:text-[#EF4444]'
                      : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white'
                  }`}
                >
                  New Enrollment (Register)
                </button>
              </div>

              {/* Alert Feedback */}
              {errorMsg && (
                <div className="p-3 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50 rounded-sm flex items-start gap-2 text-red-700 dark:text-red-400 text-xs">
                  <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {successMsg && (
                <div className="p-3 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/50 rounded-sm flex items-start gap-2 text-emerald-700 dark:text-emerald-400 text-xs">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>{successMsg}</span>
                </div>
              )}

              {mode === 'login' ? (
                /* Login Form */
                <form onSubmit={handleLoginSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1">
                      Username / AKTU Roll Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        value={rollNumber}
                        onChange={(e) => setRollNumber(e.target.value)}
                        placeholder="e.g. 2200900100042"
                        className="w-full pl-9 pr-3 py-2 bg-[#FAF9F6] dark:bg-[#20242F] border border-[#E2E2E2] dark:border-[#2D323F] rounded-sm text-sm text-[#1A1A1A] dark:text-[#F3F4F6] font-mono focus:outline-none focus:border-[#8B0000] dark:focus:border-[#EF4444] transition-colors"
                        required
                      />
                    </div>
                    <span className="text-[10px] text-gray-500 dark:text-gray-400 font-serif italic mt-0.5 block">
                      Use your 13-digit AKTU Roll Number as given by IEC college.
                    </span>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1">
                      Password / Date of Birth (DDMMYYYY)
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <Lock className="w-4 h-4" />
                      </div>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        placeholder="e.g. 14042004"
                        maxLength={8}
                        className="w-full pl-9 pr-10 py-2 bg-[#FAF9F6] dark:bg-[#20242F] border border-[#E2E2E2] dark:border-[#2D323F] rounded-sm text-sm text-[#1A1A1A] dark:text-[#F3F4F6] font-mono tracking-widest focus:outline-none focus:border-[#8B0000] dark:focus:border-[#EF4444] transition-colors"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-black dark:hover:text-white cursor-pointer"
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                    <div className="flex items-center justify-between text-[10px] text-gray-500 dark:text-gray-400 font-mono mt-0.5">
                      <span>Format: DDMMYYYY (8 digits)</span>
                      <span>e.g., 14042004 for 14 Apr 2004</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-2.5 bg-[#8B0000] dark:bg-[#EF4444] hover:bg-black dark:hover:bg-red-600 text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-all shadow-sm cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <span>Verifying with SQL Database...</span>
                    ) : (
                      <>
                        <UserCheck className="w-4 h-4" />
                        <span>Sign In to Student Portal</span>
                      </>
                    )}
                  </button>

                  {/* One-Click Demo Student Profiles */}
                  <div className="pt-2 border-t border-[#E2E2E2] dark:border-[#2D323F]">
                    <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1.5">
                      ⚡ Quick-Fill Seeded College Credentials (Pre-stored in SQL):
                    </span>
                    <div className="grid grid-cols-2 gap-1.5 text-left">
                      <button
                        type="button"
                        onClick={() => fillDemoCredentials('2200900100042', '14042004')}
                        className="p-1.5 bg-[#FAF9F6] dark:bg-[#20242F] border border-[#E2E2E2] dark:border-[#2D323F] hover:border-[#8B0000] dark:hover:border-[#EF4444] rounded-sm transition-colors text-left cursor-pointer"
                      >
                        <p className="text-[11px] font-bold text-[#1A1A1A] dark:text-[#F3F4F6] truncate">Viplov Sharma (Creator)</p>
                        <p className="text-[9px] font-mono text-gray-500 dark:text-gray-400 truncate">Roll: 2200900100042 • 2nd Yr</p>
                      </button>

                      <button
                        type="button"
                        onClick={() => fillDemoCredentials('2200900100018', '25112004')}
                        className="p-1.5 bg-[#FAF9F6] dark:bg-[#20242F] border border-[#E2E2E2] dark:border-[#2D323F] hover:border-[#8B0000] dark:hover:border-[#EF4444] rounded-sm transition-colors text-left cursor-pointer"
                      >
                        <p className="text-[11px] font-bold text-[#1A1A1A] dark:text-[#F3F4F6] truncate">Ananya Verma</p>
                        <p className="text-[9px] font-mono text-gray-500 dark:text-gray-400 truncate">Roll: 2200900100018 • 2nd Yr</p>
                      </button>

                      <button
                        type="button"
                        onClick={() => fillDemoCredentials('2100900100055', '08062003')}
                        className="p-1.5 bg-[#FAF9F6] dark:bg-[#20242F] border border-[#E2E2E2] dark:border-[#2D323F] hover:border-[#8B0000] dark:hover:border-[#EF4444] rounded-sm transition-colors text-left cursor-pointer"
                      >
                        <p className="text-[11px] font-bold text-[#1A1A1A] dark:text-[#F3F4F6] truncate">Rahul Kumar</p>
                        <p className="text-[9px] font-mono text-gray-500 dark:text-gray-400 truncate">Roll: 2100900100055 • 3rd Yr IT</p>
                      </button>

                      <button
                        type="button"
                        onClick={() => fillDemoCredentials('2300900100088', '19092005')}
                        className="p-1.5 bg-[#FAF9F6] dark:bg-[#20242F] border border-[#E2E2E2] dark:border-[#2D323F] hover:border-[#8B0000] dark:hover:border-[#EF4444] rounded-sm transition-colors text-left cursor-pointer"
                      >
                        <p className="text-[11px] font-bold text-[#1A1A1A] dark:text-[#F3F4F6] truncate">Priya Singh</p>
                        <p className="text-[9px] font-mono text-gray-500 dark:text-gray-400 truncate">Roll: 2300900100088 • 1st Yr AIML</p>
                      </button>
                    </div>
                  </div>
                </form>
              ) : (
                /* Registration Form */
                <form onSubmit={handleRegisterSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-[11px] font-mono font-bold uppercase text-gray-700 dark:text-gray-300 mb-0.5">
                        Roll Number *
                      </label>
                      <input
                        type="text"
                        value={regRoll}
                        onChange={(e) => setRegRoll(e.target.value)}
                        placeholder="e.g. 2300900100099"
                        className="w-full px-2.5 py-1.5 bg-[#FAF9F6] dark:bg-[#20242F] border border-[#E2E2E2] dark:border-[#2D323F] rounded-sm text-xs font-mono text-[#1A1A1A] dark:text-white"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono font-bold uppercase text-gray-700 dark:text-gray-300 mb-0.5">
                        DOB (DDMMYYYY) *
                      </label>
                      <input
                        type="text"
                        value={regDob}
                        onChange={(e) => setRegDob(e.target.value)}
                        placeholder="e.g. 15082004"
                        maxLength={8}
                        className="w-full px-2.5 py-1.5 bg-[#FAF9F6] dark:bg-[#20242F] border border-[#E2E2E2] dark:border-[#2D323F] rounded-sm text-xs font-mono text-[#1A1A1A] dark:text-white"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono font-bold uppercase text-gray-700 dark:text-gray-300 mb-0.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={regName}
                      onChange={(e) => setRegName(e.target.value)}
                      placeholder="e.g. Harsh Kumar"
                      className="w-full px-2.5 py-1.5 bg-[#FAF9F6] dark:bg-[#20242F] border border-[#E2E2E2] dark:border-[#2D323F] rounded-sm text-xs text-[#1A1A1A] dark:text-white"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <label className="block text-[10px] font-mono font-bold uppercase text-gray-700 dark:text-gray-300 mb-0.5">
                        Branch
                      </label>
                      <select
                        value={regBranch}
                        onChange={(e) => setRegBranch(e.target.value)}
                        className="w-full px-2 py-1.5 bg-[#FAF9F6] dark:bg-[#20242F] border border-[#E2E2E2] dark:border-[#2D323F] rounded-sm text-xs text-[#1A1A1A] dark:text-white"
                      >
                        <option value="CSE">CSE</option>
                        <option value="CSE_AIML">CSE (AI/ML)</option>
                        <option value="CSE_DS">CSE (Data Science)</option>
                        <option value="IT">IT</option>
                        <option value="ECE">ECE</option>
                        <option value="EE">EE</option>
                        <option value="ME">ME</option>
                        <option value="CE">Civil</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono font-bold uppercase text-gray-700 dark:text-gray-300 mb-0.5">
                        Year
                      </label>
                      <select
                        value={regYear}
                        onChange={(e) => setRegYear(Number(e.target.value))}
                        className="w-full px-2 py-1.5 bg-[#FAF9F6] dark:bg-[#20242F] border border-[#E2E2E2] dark:border-[#2D323F] rounded-sm text-xs text-[#1A1A1A] dark:text-white"
                      >
                        <option value={1}>1st Year</option>
                        <option value={2}>2nd Year</option>
                        <option value={3}>3rd Year</option>
                        <option value={4}>4th Year</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono font-bold uppercase text-gray-700 dark:text-gray-300 mb-0.5">
                        Semester
                      </label>
                      <select
                        value={regSemester}
                        onChange={(e) => setRegSemester(Number(e.target.value))}
                        className="w-full px-2 py-1.5 bg-[#FAF9F6] dark:bg-[#20242F] border border-[#E2E2E2] dark:border-[#2D323F] rounded-sm text-xs text-[#1A1A1A] dark:text-white"
                      >
                        <option value={1}>Sem 1</option>
                        <option value={2}>Sem 2</option>
                        <option value={3}>Sem 3</option>
                        <option value={4}>Sem 4</option>
                        <option value={5}>Sem 5</option>
                        <option value={6}>Sem 6</option>
                        <option value={7}>Sem 7</option>
                        <option value={8}>Sem 8</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono font-bold uppercase text-gray-700 dark:text-gray-300 mb-0.5">
                      College / Personal Email (Optional)
                    </label>
                    <input
                      type="email"
                      value={regEmail}
                      onChange={(e) => setRegEmail(e.target.value)}
                      placeholder="student@iec.edu.in"
                      className="w-full px-2.5 py-1.5 bg-[#FAF9F6] dark:bg-[#20242F] border border-[#E2E2E2] dark:border-[#2D323F] rounded-sm text-xs text-[#1A1A1A] dark:text-white font-mono"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-2 bg-[#8B0000] dark:bg-[#EF4444] hover:bg-black dark:hover:bg-red-600 text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-all shadow-sm cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    <UserPlus className="w-3.5 h-3.5" />
                    <span>Store Record in SQL Database & Sign In</span>
                  </button>
                </form>
              )}
            </div>
          )}

          {/* SQL Storage Notice */}
          <div className="pt-2 border-t border-[#E2E2E2] dark:border-[#2D323F] flex items-center justify-between text-[10px] text-gray-500 dark:text-gray-400 font-mono">
            <span className="flex items-center gap-1">
              <Database className="w-3 h-3 text-[#8B0000] dark:text-[#EF4444]" />
              <span>SQL Relational DB Engine Active</span>
            </span>
            <span>Password: DOB (DDMMYYYY)</span>
          </div>
        </div>
      </div>
    </div>
  );
};
