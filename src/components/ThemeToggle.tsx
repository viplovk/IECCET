import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  showLabel?: boolean;
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ showLabel = true, className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      title={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-sm transition-all cursor-pointer select-none font-mono text-[11px] font-bold uppercase tracking-wider shadow-xs
        ${isDark 
          ? 'bg-[#20242F] text-amber-300 border border-[#2D323F] hover:border-amber-400 hover:bg-[#282E3D]' 
          : 'bg-white text-[#1A1A1A] border border-[#D4D4D8] hover:border-black hover:bg-gray-50'} 
        ${className}`}
    >
      <div className="relative w-3.5 h-3.5 flex items-center justify-center">
        {isDark ? (
          <Moon className="w-3.5 h-3.5 text-amber-300 transform transition-transform duration-300 rotate-0" />
        ) : (
          <Sun className="w-3.5 h-3.5 text-amber-600 transform transition-transform duration-300 rotate-0" />
        )}
      </div>

      {showLabel && (
        <span>
          {isDark ? 'Dark' : 'Light'}
        </span>
      )}
    </button>
  );
};

