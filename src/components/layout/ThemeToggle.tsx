import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className={`
        relative p-2 rounded-xl 
        bg-slate-900/60 dark:bg-slate-800/60 
        hover:bg-slate-800 dark:hover:bg-slate-700/80 
        border border-slate-700/50 dark:border-slate-700/50 
        text-slate-300 hover:text-cyan-400 
        transition-all duration-200 
        focus:outline-none focus:ring-2 focus:ring-cyan-500/50
        ${className}
      `}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 text-amber-400 hover:rotate-90 transition-transform duration-300" />
      ) : (
        <Moon className="w-4 h-4 text-cyan-600 hover:-rotate-45 transition-transform duration-300" />
      )}
    </button>
  );
};
