import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface StudentUser {
  id: number;
  roll_number: string;
  name: string;
  branch: string;
  year: number;
  semester: number;
  section: string;
  email: string;
  phone: string;
  attendance_percentage: number;
  target_attendance: number;
  sgpa_current: number;
  created_at: string;
  last_login?: string;
}

interface AuthContextType {
  user: StudentUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  isLoginModalOpen: boolean;
  openLoginModal: () => void;
  closeLoginModal: () => void;
  login: (rollNumber: string, dob: string) => Promise<{ success: boolean; error?: string }>;
  register: (studentData: {
    roll_number: string;
    dob: string;
    name: string;
    branch: string;
    year: number;
    semester: number;
    section?: string;
    email?: string;
    phone?: string;
  }) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  updateAttendance: (attendance: number, target: number) => Promise<void>;
  updateProfile: (updatedData: Partial<StudentUser>) => Promise<{ success: boolean; error?: string }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const STORAGE_KEY = 'iec_student_session';

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<StudentUser | null>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);

  // Sync session with local storage
  useEffect(() => {
    if (user) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
      } catch {
        // ignore
      }
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [user]);

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  const login = async (rollNumber: string, dob: string): Promise<{ success: boolean; error?: string }> => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rollNumber, dob }),
      });
      const data = await response.json();

      if (response.ok && data.success && data.student) {
        setUser(data.student);
        setIsLoginModalOpen(false);
        return { success: true };
      } else {
        return { success: false, error: data.error || 'Authentication failed' };
      }
    } catch (err: any) {
      return { success: false, error: err.message || 'Connection error with student database' };
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (studentData: {
    roll_number: string;
    dob: string;
    name: string;
    branch: string;
    year: number;
    semester: number;
    section?: string;
    email?: string;
    phone?: string;
  }): Promise<{ success: boolean; error?: string }> => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(studentData),
      });
      const data = await response.json();

      if (response.ok && data.success && data.student) {
        setUser(data.student);
        setIsLoginModalOpen(false);
        return { success: true };
      } else {
        return { success: false, error: data.error || 'Registration failed' };
      }
    } catch (err: any) {
      return { success: false, error: err.message || 'Connection error with student database' };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
  };

  const updateAttendance = async (attendance: number, target: number) => {
    if (!user) return;
    try {
      const response = await fetch('/api/auth/update-attendance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          rollNumber: user.roll_number,
          attendancePercentage: attendance,
          targetAttendance: target,
        }),
      });
      const data = await response.json();
      if (response.ok && data.student) {
        setUser(data.student);
      }
    } catch (e) {
      console.error('Failed to sync attendance to SQL:', e);
    }
  };

  const updateProfile = async (updatedData: Partial<StudentUser>): Promise<{ success: boolean; error?: string }> => {
    if (!user) return { success: false, error: 'No student is currently signed in.' };
    setIsLoading(true);
    try {
      const response = await fetch('/api/auth/update-profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          rollNumber: user.roll_number,
          ...updatedData,
        }),
      });
      const data = await response.json();
      if (response.ok && data.success && data.student) {
        setUser(data.student);
        return { success: true };
      } else {
        return { success: false, error: data.error || 'Failed to update student profile.' };
      }
    } catch (err: any) {
      return { success: false, error: err.message || 'Connection error while saving profile.' };
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        isLoginModalOpen,
        openLoginModal,
        closeLoginModal,
        login,
        register,
        logout,
        updateAttendance,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
