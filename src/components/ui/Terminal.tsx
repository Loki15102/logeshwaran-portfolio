import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft, Sparkles } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import { triggerConfetti } from '../../utils/confetti';
import { useTheme } from '../../context/ThemeContext';

interface TerminalProps {
  onNavigate?: (sectionId: string) => void;
  isOpenDefault?: boolean;
}

interface CommandHistoryItem {
  id: string;
  command: string;
  output: React.ReactNode;
  time: string;
}

export const Terminal: React.FC<TerminalProps> = ({ onNavigate }) => {
  const [input, setInput] = useState('');
  const [isMaximized, setIsMaximized] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const { theme, toggleTheme } = useTheme();

  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      id: 'welcome',
      command: 'welcome',
      output: (
        <div className="space-y-1.5 text-slate-300">
          <p className="text-cyan-400 font-semibold">
            ⚡ Logeshwaran N - Interactive Developer Console v2.4.0
          </p>
          <p className="text-xs text-slate-400">
            Type <span className="text-cyan-300 font-bold">help</span> to see available commands or click the shortcut chips below.
          </p>
        </div>
      ),
      time: '12:00:00'
    }
  ]);

  const [commandIndex, setCommandIndex] = useState(-1);
  const [userCommands, setUserCommands] = useState<string[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    setUserCommands(prev => [...prev, rawCmd]);
    setCommandIndex(-1);

    const now = new Date().toLocaleTimeString();
    let response: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        response = (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs py-1">
            <div><span className="text-cyan-400 font-bold">about</span> - Read professional summary & bio</div>
            <div><span className="text-cyan-400 font-bold">skills</span> - List categorized technical competencies</div>
            <div><span className="text-cyan-400 font-bold">experience</span> - Show AmZetta Technologies career timeline</div>
            <div><span className="text-cyan-400 font-bold">projects</span> - Display enterprise & full-stack projects</div>
            <div><span className="text-cyan-400 font-bold">education</span> - Show academic qualifications</div>
            <div><span className="text-cyan-400 font-bold">achievements</span> - View quantified engineering milestones</div>
            <div><span className="text-cyan-400 font-bold">contact</span> - Display email, phone & LinkedIn links</div>
            <div><span className="text-cyan-400 font-bold">resume</span> - Open resume viewer & download info</div>
            <div><span className="text-cyan-400 font-bold">theme</span> - Toggle between Dark and Light mode</div>
            <div><span className="text-cyan-400 font-bold">clear</span> - Clear the terminal output</div>
          </div>
        );
        break;

      case 'about':
      case 'whoami':
        response = (
          <div className="space-y-1.5 text-xs text-slate-200">
            <p className="font-bold text-cyan-300">{portfolioData.personal.name} — {portfolioData.personal.designation}</p>
            <p className="text-slate-400 leading-relaxed">{portfolioData.personal.summary}</p>
            <div className="flex gap-4 pt-1 text-slate-400">
              <span>📍 {portfolioData.personal.location}</span>
              <span>📧 {portfolioData.personal.email}</span>
            </div>
          </div>
        );
        if (onNavigate) onNavigate('about');
        break;

      case 'skills':
        response = (
          <div className="space-y-2 text-xs">
            {portfolioData.skillCategories.map(cat => (
              <div key={cat.title}>
                <span className="text-cyan-400 font-semibold">{cat.title}:</span>{' '}
                <span className="text-slate-300">
                  {cat.skills.map(s => s.name).join(', ')}
                </span>
              </div>
            ))}
          </div>
        );
        if (onNavigate) onNavigate('skills');
        break;

      case 'experience':
        response = (
          <div className="space-y-2 text-xs">
            {portfolioData.experiences.map(exp => (
              <div key={exp.id} className="border-l-2 border-cyan-500 pl-3 py-1">
                <p className="font-bold text-slate-100">{exp.role} @ {exp.company}</p>
                <p className="text-cyan-400/80">{exp.period} | {exp.location}</p>
                <p className="text-slate-400 mt-1">{exp.summary}</p>
              </div>
            ))}
          </div>
        );
        if (onNavigate) onNavigate('experience');
        break;

      case 'projects':
        response = (
          <div className="space-y-2 text-xs">
            {portfolioData.projects.map(proj => (
              <div key={proj.id} className="bg-slate-800/40 p-2 rounded border border-slate-700/50">
                <p className="font-bold text-cyan-300">{proj.title} <span className="text-slate-400 font-normal">({proj.period})</span></p>
                <p className="text-slate-300 mt-0.5">{proj.tagline}</p>
                <p className="text-slate-400 text-[11px] mt-1">Tech: {proj.technologies.join(', ')}</p>
              </div>
            ))}
          </div>
        );
        if (onNavigate) onNavigate('projects');
        break;

      case 'education':
        response = (
          <div className="space-y-1.5 text-xs text-slate-300">
            {portfolioData.education.map((edu, idx) => (
              <div key={idx}>
                <p className="font-bold text-cyan-300">{edu.degree} - {edu.field}</p>
                <p className="text-slate-300">{edu.institution} ({edu.period})</p>
                <p className="text-emerald-400 font-semibold">{edu.grade}</p>
              </div>
            ))}
          </div>
        );
        if (onNavigate) onNavigate('education');
        break;

      case 'achievements':
        response = (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {portfolioData.achievements.map(ach => (
              <div key={ach.id} className="bg-slate-800/50 p-2 rounded border border-cyan-500/20">
                <p className="font-bold text-emerald-400">{ach.metric}</p>
                <p className="text-slate-200 font-medium">{ach.title}</p>
                <p className="text-slate-400 text-[11px] mt-0.5">{ach.description}</p>
              </div>
            ))}
          </div>
        );
        if (onNavigate) onNavigate('achievements');
        break;

      case 'contact':
        response = (
          <div className="space-y-1 text-xs text-slate-300">
            <p>📧 Email: <a href={`mailto:${portfolioData.personal.email}`} className="text-cyan-400 underline">{portfolioData.personal.email}</a></p>
            <p>📱 Phone: <a href={`tel:${portfolioData.personal.phone}`} className="text-cyan-400 underline">{portfolioData.personal.phone}</a></p>
            <p>🔗 LinkedIn: <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="text-cyan-400 underline">{portfolioData.personal.linkedin}</a></p>
            <p>📍 Location: {portfolioData.personal.location}</p>
          </div>
        );
        if (onNavigate) onNavigate('contact');
        break;

      case 'resume':
      case 'download':
        triggerConfetti();
        response = (
          <div className="text-xs space-y-1">
            <p className="text-emerald-400 font-semibold">📄 Resume is available for download!</p>
            <p className="text-slate-300">Opening file download...</p>
            <a
              href={portfolioData.personal.resumeUrl}
              download={portfolioData.personal.resumeFileName}
              className="inline-block mt-1 px-3 py-1 bg-cyan-500 text-slate-950 font-bold rounded text-xs hover:bg-cyan-400 transition-colors"
            >
              Click Here to Download Resume
            </a>
          </div>
        );
        if (onNavigate) onNavigate('resume');
        break;

      case 'theme':
        toggleTheme();
        response = (
          <p className="text-xs text-amber-400">
            Switched interface theme to: <span className="font-bold">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
          </p>
        );
        break;

      case 'clear':
        setHistory([]);
        return;

      case 'sudo':
        response = (
          <p className="text-xs text-rose-400 font-mono">
            Permission denied: User 'visitor' is not in the sudoers file. This incident will be reported to Logeshwaran. 😉
          </p>
        );
        break;

      default:
        response = (
          <p className="text-xs text-rose-400">
            Command not recognized: '<span className="text-white">{rawCmd}</span>'. Type <span className="text-cyan-300 font-bold">help</span> to view all commands.
          </p>
        );
        break;
    }

    setHistory(prev => [
      ...prev,
      {
        id: Math.random().toString(),
        command: rawCmd,
        output: response,
        time: now,
      }
    ]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (userCommands.length === 0) return;
      const nextIdx = commandIndex + 1;
      if (nextIdx < userCommands.length) {
        setCommandIndex(nextIdx);
        setInput(userCommands[userCommands.length - 1 - nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (commandIndex > 0) {
        const nextIdx = commandIndex - 1;
        setCommandIndex(nextIdx);
        setInput(userCommands[userCommands.length - 1 - nextIdx]);
      } else if (commandIndex === 0) {
        setCommandIndex(-1);
        setInput('');
      }
    }
  };

  const quickCommands = ['help', 'about', 'skills', 'experience', 'projects', 'resume', 'contact'];

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-cyan-500 text-slate-950 shadow-2xl shadow-cyan-500/50 hover:bg-cyan-400 transition-all duration-300 flex items-center gap-2 font-mono text-sm font-bold group"
      >
        <TerminalIcon className="w-5 h-5 group-hover:rotate-12 transition-transform" />
        <span className="hidden sm:inline">Open Terminal</span>
      </button>
    );
  }

  return (
    <div
      className={`
        rounded-2xl border border-slate-200 dark:border-slate-800/80 
        bg-slate-950/95 dark:bg-[#070b14]/95 
        shadow-2xl shadow-slate-300/50 dark:shadow-cyan-500/10 
        backdrop-blur-xl overflow-hidden font-mono text-sm 
        transition-all duration-300
        ${isMaximized ? 'w-full my-6' : 'w-full my-6 max-w-4xl mx-auto'}
      `}
    >
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-900/80 border-b border-slate-800 select-none">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <div className="h-4 w-[1px] bg-slate-700 mx-2" />
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-semibold text-slate-300">bash — logeshwaran@anti-g:~</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsMaximized(!isMaximized)}
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            title={isMaximized ? 'Restore' : 'Maximize'}
          >
            {isMaximized ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 rounded text-slate-400 hover:text-rose-400 hover:bg-slate-800 transition-colors"
            title="Minimize"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Quick Command Chips */}
      <div className="flex flex-wrap items-center gap-1.5 px-4 py-2.5 bg-slate-900/40 border-b border-slate-800/60 overflow-x-auto text-[11px]">
        <span className="text-slate-500 flex items-center gap-1 mr-1">
          <Sparkles className="w-3 h-3 text-cyan-400" /> shortcuts:
        </span>
        {quickCommands.map(cmd => (
          <button
            key={cmd}
            onClick={() => {
              handleCommand(cmd);
              inputRef.current?.focus();
            }}
            className="px-2.5 py-0.5 rounded-full bg-slate-800/80 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-slate-700/60 transition-colors duration-150"
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Terminal Body */}
      <div
        className="p-4 overflow-y-auto space-y-3 font-mono text-xs max-h-[340px] sm:max-h-[420px]"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map(item => (
          <div key={item.id} className="space-y-1">
            <div className="flex items-center gap-2 text-slate-400">
              <span className="text-cyan-400 font-bold">logeshwaran@anti-g:~$</span>
              <span className="text-slate-100 font-semibold">{item.command}</span>
              <span className="text-[10px] text-slate-600 ml-auto">{item.time}</span>
            </div>
            <div className="pl-4 text-slate-300 border-l border-cyan-500/30">
              {item.output}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Terminal Input Bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-slate-900/60 border-t border-slate-800">
        <span className="text-cyan-400 font-bold select-none text-xs">logeshwaran@anti-g:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a command (try 'help')..."
          className="flex-1 bg-transparent text-slate-100 placeholder-slate-600 outline-none text-xs font-mono"
        />
        <button
          onClick={() => {
            handleCommand(input);
            setInput('');
          }}
          disabled={!input.trim()}
          className="text-slate-400 hover:text-cyan-400 disabled:opacity-30 transition-colors"
          title="Execute"
        >
          <CornerDownLeft className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
