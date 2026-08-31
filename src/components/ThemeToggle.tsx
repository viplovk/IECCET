import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  showLabel?: boolean;
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ showLabel = false, className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      title={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
      className={`relative inline-flex items-center gap-2 px-2.5 py-1.5 rounded-sm transition-all cursor-pointer select-none
        ${isDark 
          ? 'bg-[#20242F] text-amber-300 border border-[#2D323F] hover:border-amber-400/50 hover:bg-[#282E3D]' 
          : 'bg-[#FAF9F6] text-gray-800 border border-[#E2E2E2] hover:border-black hover:bg-gray-100'} 
        ${className}`}
    >
      <div className="relative w-4 h-4 flex items-center justify-center overflow-hidden">
        {isDark ? (
          <Moon className="w-3.5 h-3.5 text-amber-300 transform transition-transform duration-300 rotate-0 scale-100" />
        ) : (
          <Sun className="w-3.5 h-3.5 text-amber-600 transform transition-transform duration-300 rotate-0 scale-100" />
        )}
      </div>

      {showLabel ? (
        <span className="text-xs font-mono font-bold tracking-wider uppercase">
          {isDark ? 'Dark Mode' : 'Light Mode'}
        </span>
      ) : (
        <span className="hidden sm:inline text-[10px] font-mono font-bold tracking-wider uppercase">
          {isDark ? 'Dark' : 'Light'}
        </span>
      )}
    </button>
  );
};
