import React from 'react';
import { ArrowUp, Heart, Linkedin, Mail, Phone, MapPin, Terminal as TerminalIcon } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-800/80 bg-slate-950/90 dark:bg-[#040810]/95 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1: Bio */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-600 p-[1.5px]">
                <div className="w-full h-full rounded-[10px] bg-slate-950 flex items-center justify-center">
                  <span className="font-mono font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 text-sm">
                    LN
                  </span>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-100">{portfolioData.personal.name}</h3>
                <p className="text-xs text-cyan-400 font-mono">{portfolioData.personal.designation}</p>
              </div>
            </div>

            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Full-Stack Developer building high-resilience web applications, optimized GraphQL/REST APIs, and enterprise cloud storage and SD-WAN solutions.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Available for Full-Stack Opportunities</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-200 mb-4 font-mono">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">About Me</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-400 transition-colors">Technical Skills</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-cyan-400 transition-colors">Work Experience</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition-colors">Featured Projects</a>
              </li>
              <li>
                <a href="#education" className="hover:text-cyan-400 transition-colors">Education & Academics</a>
              </li>
              <li>
                <a href="#resume" className="hover:text-cyan-400 transition-colors">Resume & Credentials</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Connect */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-200 mb-4 font-mono">
              Direct Connect
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`mailto:${portfolioData.personal.email}`} className="hover:text-cyan-400 transition-colors truncate">
                  {portfolioData.personal.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${portfolioData.personal.phone}`} className="hover:text-emerald-400 transition-colors">
                  {portfolioData.personal.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Linkedin className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  LinkedIn Profile
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
                <span>{portfolioData.personal.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="flex items-center gap-1.5">
            Designed & Engineered by <span className="text-slate-200 font-semibold">{portfolioData.personal.name}</span> with
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
            using React & TypeScript
          </p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-400">
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span>Production Build v2.4</span>
            </span>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
