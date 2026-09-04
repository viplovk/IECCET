import React, { useState, useEffect } from 'react';
import { 
  UserCheck, 
  Lock, 
  AlertCircle, 
  CheckCircle2, 
  X, 
  Database, 
  GraduationCap, 
  LogOut, 
  Eye, 
  EyeOff,
  Edit3,
  Save,
  Info,
  ChevronDown,
  ChevronUp,
  FileCode,
  HardDrive
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const StudentLoginModal: React.FC = () => {
  const { 
    user, 
    isAuthenticated, 
    isLoading, 
    isLoginModalOpen, 
    closeLoginModal, 
    login, 
    logout,
    updateProfile
  } = useAuth();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [successMsg, setSuccessMsg] = useState<string>('');
  const [showStorageGuide, setShowStorageGuide] = useState<boolean>(false);

  // Login form state
  const [rollNumber, setRollNumber] = useState<string>('');
  const [dob, setDob] = useState<string>('');

  // Edit profile state (for logged-in student)
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editName, setEditName] = useState<string>('');
  const [editBranch, setEditBranch] = useState<string>('CSE');
  const [editYear, setEditYear] = useState<number>(2);
  const [editSemester, setEditSemester] = useState<number>(3);
  const [editSection, setEditSection] = useState<string>('A');
  const [editEmail, setEditEmail] = useState<string>('');
  const [editPhone, setEditPhone] = useState<string>('');
  const [editTargetAtt, setEditTargetAtt] = useState<number>(75);
  const [editSgpa, setEditSgpa] = useState<number>(8.5);

  // Initialize edit fields when user logs in or switches
  useEffect(() => {
    if (user) {
      setEditName(user.name || '');
      setEditBranch(user.branch || 'CSE');
      setEditYear(user.year || 2);
      setEditSemester(user.semester || 3);
      setEditSection(user.section || 'A');
      setEditEmail(user.email || '');
      setEditPhone(user.phone || '');
      setEditTargetAtt(user.target_attendance || 75);
      setEditSgpa(user.sgpa_current || 8.0);
    }
  }, [user]);

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
      setErrorMsg('Date of Birth must be exactly 8 digits (DDMMYYYY). Example: 14042004 for 14 Apr 2004.');
      return;
    }

    const res = await login(rollNumber.trim(), dob.trim());
    if (!res.success) {
      setErrorMsg(res.error || 'Login failed. Check your credentials in the SQL database.');
    }
  };

  const handleProfileSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    if (!editName.trim()) {
      setErrorMsg('Student name cannot be empty.');
      return;
    }

    const res = await updateProfile({
      name: editName.trim(),
      branch: editBranch.trim(),
      year: Number(editYear),
      semester: Number(editSemester),
      section: editSection.trim(),
      email: editEmail.trim(),
      phone: editPhone.trim(),
      target_attendance: Number(editTargetAtt),
      sgpa_current: Number(editSgpa),
    });

    if (res.success) {
      setSuccessMsg('Your student data was successfully updated and saved in SQLite database!');
      setIsEditing(false);
    } else {
      setErrorMsg(res.error || 'Failed to update student profile.');
    }
  };

  const fillDemoCredentials = (demoRoll: string, demoDob: string) => {
    setRollNumber(demoRoll);
    setDob(demoDob);
    setErrorMsg('');
    setSuccessMsg('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-white dark:bg-[#181A20] border border-[#E2E2E2] dark:border-[#2D323F] rounded-sm shadow-2xl overflow-hidden transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Strip */}
        <div className="bg-[#FAF9F6] dark:bg-[#12141A] border-b border-[#E2E2E2] dark:border-[#2D323F] px-4 sm:px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-sm bg-[#8B0000] dark:bg-[#EF4444] flex items-center justify-center text-white shadow-sm">
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
          {/* Feedback messages */}
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

          {isAuthenticated && user ? (
            /* Logged-In Student Profile View */
            <div className="space-y-4">
              {!isEditing ? (
                /* Normal Profile View */
                <div className="space-y-3.5">
                  <div className="bg-[#FAF9F6] dark:bg-[#20242F] border border-[#E2E2E2] dark:border-[#2D323F] rounded-sm p-4 space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="inline-block px-1.5 py-0.5 bg-[#8B0000] dark:bg-[#EF4444] text-white text-[9px] uppercase font-bold tracking-wider font-mono mb-1">
                          Verified Student Record
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

                    {(user.email || user.phone) && (
                      <div className="pt-2 border-t border-[#E2E2E2] dark:border-[#2D323F] grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <span className="text-[10px] text-gray-400 uppercase font-mono">Email</span>
                          <p className="text-gray-700 dark:text-gray-300 font-mono text-[11px] truncate">{user.email || 'Not specified'}</p>
                        </div>
                        <div>
                          <span className="text-[10px] text-gray-400 uppercase font-mono">Contact Phone</span>
                          <p className="text-gray-700 dark:text-gray-300 font-mono text-[11px] truncate">{user.phone || 'Not specified'}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Actions: Edit Profile & Logout */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => {
                        setIsEditing(true);
                        setErrorMsg('');
                        setSuccessMsg('');
                      }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FAF9F6] dark:bg-[#20242F] border border-[#8B0000]/30 dark:border-[#EF4444]/30 text-[#8B0000] dark:text-[#EF4444] hover:bg-[#8B0000] hover:text-white dark:hover:bg-[#EF4444] text-xs font-bold uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                      <span>Edit My Data</span>
                    </button>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={logout}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-red-200 dark:border-red-900/50 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
                      >
                        <LogOut className="w-3.5 h-3.5" />
                        <span>Log Out</span>
                      </button>

                      <button
                        type="button"
                        onClick={closeLoginModal}
                        className="px-4 py-1.5 bg-[#8B0000] dark:bg-[#EF4444] text-white hover:bg-black dark:hover:bg-red-600 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                /* In-Place Edit Profile Form */
                <form onSubmit={handleProfileSave} className="space-y-3 bg-[#FAF9F6] dark:bg-[#20242F] p-4 border border-[#E2E2E2] dark:border-[#2D323F] rounded-sm">
                  <div className="flex items-center justify-between border-b border-[#E2E2E2] dark:border-[#2D323F] pb-2">
                    <h4 className="font-serif text-sm font-bold text-[#1A1A1A] dark:text-white flex items-center gap-1.5">
                      <Edit3 className="w-4 h-4 text-[#8B0000] dark:text-[#EF4444]" />
                      <span>Edit Student Profile in SQL Database</span>
                    </h4>
                    <span className="text-[10px] font-mono text-gray-500 dark:text-gray-400">
                      Roll: {user.roll_number}
                    </span>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono font-bold uppercase text-gray-700 dark:text-gray-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      required
                      className="w-full px-2.5 py-1.5 bg-white dark:bg-[#181A20] border border-[#E2E2E2] dark:border-[#2D323F] rounded-sm text-xs text-[#1A1A1A] dark:text-white focus:outline-none focus:border-[#8B0000] dark:focus:border-[#EF4444]"
                    />
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    <div>
                      <label className="block text-[10px] font-mono font-bold uppercase text-gray-700 dark:text-gray-300 mb-1">
                        Branch
                      </label>
                      <select
                        value={editBranch}
                        onChange={(e) => setEditBranch(e.target.value)}
                        className="w-full px-2 py-1.5 bg-white dark:bg-[#181A20] border border-[#E2E2E2] dark:border-[#2D323F] rounded-sm text-xs text-[#1A1A1A] dark:text-white"
                      >
                        <option value="CSE">CSE</option>
                        <option value="CSE_AIML">CSE (AI/ML)</option>
                        <option value="CSE_DS">CSE (Data Sci)</option>
                        <option value="IT">IT</option>
                        <option value="ECE">ECE</option>
                        <option value="EE">EE</option>
                        <option value="ME">ME</option>
                        <option value="CE">Civil</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono font-bold uppercase text-gray-700 dark:text-gray-300 mb-1">
                        Year
                      </label>
                      <select
                        value={editYear}
                        onChange={(e) => setEditYear(Number(e.target.value))}
                        className="w-full px-2 py-1.5 bg-white dark:bg-[#181A20] border border-[#E2E2E2] dark:border-[#2D323F] rounded-sm text-xs text-[#1A1A1A] dark:text-white"
                      >
                        <option value={1}>Year 1</option>
                        <option value={2}>Year 2</option>
                        <option value={3}>Year 3</option>
                        <option value={4}>Year 4</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono font-bold uppercase text-gray-700 dark:text-gray-300 mb-1">
                        Semester
                      </label>
                      <select
                        value={editSemester}
                        onChange={(e) => setEditSemester(Number(e.target.value))}
                        className="w-full px-2 py-1.5 bg-white dark:bg-[#181A20] border border-[#E2E2E2] dark:border-[#2D323F] rounded-sm text-xs text-[#1A1A1A] dark:text-white"
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

                    <div>
                      <label className="block text-[10px] font-mono font-bold uppercase text-gray-700 dark:text-gray-300 mb-1">
                        Section
                      </label>
                      <input
                        type="text"
                        value={editSection}
                        onChange={(e) => setEditSection(e.target.value)}
                        placeholder="A"
                        className="w-full px-2 py-1.5 bg-white dark:bg-[#181A20] border border-[#E2E2E2] dark:border-[#2D323F] rounded-sm text-xs text-[#1A1A1A] dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[10px] font-mono font-bold uppercase text-gray-700 dark:text-gray-300 mb-1">
                        Current SGPA / CGPA
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        min="0"
                        max="10"
                        value={editSgpa}
                        onChange={(e) => setEditSgpa(parseFloat(e.target.value) || 0)}
                        className="w-full px-2.5 py-1.5 bg-white dark:bg-[#181A20] border border-[#E2E2E2] dark:border-[#2D323F] rounded-sm text-xs text-[#1A1A1A] dark:text-white font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono font-bold uppercase text-gray-700 dark:text-gray-300 mb-1">
                        Target Attendance (%)
                      </label>
                      <input
                        type="number"
                        min="50"
                        max="100"
                        value={editTargetAtt}
                        onChange={(e) => setEditTargetAtt(parseInt(e.target.value) || 75)}
                        className="w-full px-2.5 py-1.5 bg-white dark:bg-[#181A20] border border-[#E2E2E2] dark:border-[#2D323F] rounded-sm text-xs text-[#1A1A1A] dark:text-white font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[10px] font-mono font-bold uppercase text-gray-700 dark:text-gray-300 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={editEmail}
                        onChange={(e) => setEditEmail(e.target.value)}
                        placeholder="student@iec.edu.in"
                        className="w-full px-2.5 py-1.5 bg-white dark:bg-[#181A20] border border-[#E2E2E2] dark:border-[#2D323F] rounded-sm text-xs text-[#1A1A1A] dark:text-white font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono font-bold uppercase text-gray-700 dark:text-gray-300 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={editPhone}
                        onChange={(e) => setEditPhone(e.target.value)}
                        placeholder="9876543210"
                        className="w-full px-2.5 py-1.5 bg-white dark:bg-[#181A20] border border-[#E2E2E2] dark:border-[#2D323F] rounded-sm text-xs text-[#1A1A1A] dark:text-white font-mono"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-2 pt-2 border-t border-[#E2E2E2] dark:border-[#2D323F]">
                    <button
                      type="button"
                      onClick={() => setIsEditing(false)}
                      className="px-3 py-1.5 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#8B0000] dark:bg-[#EF4444] text-white hover:bg-black dark:hover:bg-red-600 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors cursor-pointer disabled:opacity-50"
                    >
                      <Save className="w-3.5 h-3.5" />
                      <span>{isLoading ? 'Saving...' : 'Save to SQL Database'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          ) : (
            /* Dedicated Login Form (No Enrollment Tab) */
            <div className="space-y-4">
              <div className="bg-[#FAF9F6] dark:bg-[#20242F] p-3 border border-[#E2E2E2] dark:border-[#2D323F] rounded-sm">
                <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                  Sign in with your University Roll Number and Date of Birth to access your personalized attendance metrics, notes, and academic planner.
                </p>
              </div>

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
                    Use your 13-digit AKTU Roll Number as registered in the college database.
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

                {/* Pre-stored College Credentials in SQLite */}
                <div className="pt-2 border-t border-[#E2E2E2] dark:border-[#2D323F]">
                  <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1.5">
                    ⚡ Quick-Fill Seeded College Credentials (Stored in SQL):
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
            </div>
          )}

          {/* Collapsible Storage & Manual Editing Guide */}
          <div className="border border-[#E2E2E2] dark:border-[#2D323F] rounded-sm overflow-hidden bg-[#FAF9F6] dark:bg-[#12141A]">
            <button
              type="button"
              onClick={() => setShowStorageGuide(!showStorageGuide)}
              className="w-full px-3 py-2 flex items-center justify-between text-left text-xs font-mono font-bold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#20242F] transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <Database className="w-3.5 h-3.5 text-[#8B0000] dark:text-[#EF4444]" />
                <span>Where is data saved & how to manually add/edit?</span>
              </div>
              {showStorageGuide ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
            </button>

            {showStorageGuide && (
              <div className="px-3 pb-3 pt-1 text-xs text-gray-600 dark:text-gray-300 space-y-2 border-t border-[#E2E2E2] dark:border-[#2D323F] font-sans">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 font-bold font-mono text-[11px] text-[#1A1A1A] dark:text-white">
                    <HardDrive className="w-3.5 h-3.5 text-[#8B0000] dark:text-[#EF4444]" />
                    <span>1. Storage Location</span>
                  </div>
                  <p className="text-[11px] leading-relaxed pl-5">
                    Your student profiles, login logs, and notes are saved on the server in an SQLite relational database located at:
                    <br />
                    <code className="bg-gray-200 dark:bg-[#20242F] text-[#8B0000] dark:text-[#EF4444] px-1 py-0.5 rounded font-mono text-[10px]">
                      data/iec_students.sqlite
                    </code>
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 font-bold font-mono text-[11px] text-[#1A1A1A] dark:text-white">
                    <Edit3 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>2. How to Edit Directly via UI</span>
                  </div>
                  <p className="text-[11px] leading-relaxed pl-5">
                    Sign in with your Roll Number & DOB, then click <strong>"Edit My Data"</strong> right in this portal to change your Name, Branch, Year, Semester, Section, SGPA, Target Attendance, Email, or Phone. Clicking <strong>Save to SQL Database</strong> immediately commits your changes to the database on disk.
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 font-bold font-mono text-[11px] text-[#1A1A1A] dark:text-white">
                    <FileCode className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    <span>3. How to Manually Add/Edit via Code</span>
                  </div>
                  <p className="text-[11px] leading-relaxed pl-5">
                    Open the file <code className="bg-gray-200 dark:bg-[#20242F] text-blue-600 dark:text-blue-400 px-1 py-0.5 rounded font-mono text-[10px]">src/server/db.ts</code> and locate the <code className="font-mono text-[10px]">seedStudents</code> array. You can add your own student object with your custom Roll Number, DOB (password), name, and branch!
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Footer status bar */}
          <div className="flex items-center justify-between text-[10px] text-gray-500 dark:text-gray-400 font-mono pt-1">
            <span className="flex items-center gap-1">
              <Database className="w-3 h-3 text-[#8B0000] dark:text-[#EF4444]" />
              <span>SQLite Engine Active</span>
            </span>
            <span>Password: DOB (DDMMYYYY)</span>
          </div>
        </div>
      </div>
    </div>
  );
};
