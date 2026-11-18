import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { portfolioData } from '../../data/portfolio';
import { triggerConfetti } from '../../utils/confetti';
import { 
  Download, 
  Maximize2, 
  Minimize2, 
  Printer, 
  FileText
} from 'lucide-react';

export const ResumeViewer: React.FC = () => {
  const { personal, experiences, skillCategories, projects, education, achievements } = portfolioData;
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleDownload = () => {
    triggerConfetti();
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Curriculum Vitae"
          title="Resume & Credentials"
          subtitle="View, inspect in fullscreen, or download the verified professional resume."
        />

        {/* Action Bar */}
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400">
              <FileText className="w-5 h-5" />
            </span>
            <div>
              <p className="text-sm font-bold text-slate-900 dark:text-slate-100">{personal.resumeFileName}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">Original Document • Updated 2026</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm"
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400" /> : <Maximize2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />}
              <span>{isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm"
            >
              <Printer className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span>Print / Save PDF</span>
            </button>

            <a
              href={personal.resumeUrl}
              download={personal.resumeFileName}
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 transition-all active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>Download Original Resume</span>
            </a>
          </div>
        </div>

        {/* Embedded Interactive Resume Sheet */}
        <div
          className={`
            mx-auto transition-all duration-300
            ${isFullscreen ? 'fixed inset-0 z-50 p-4 sm:p-8 bg-slate-950/95 overflow-y-auto' : 'max-w-4xl'}
          `}
        >
          {isFullscreen && (
            <div className="max-w-4xl mx-auto flex justify-end pb-4">
              <button
                onClick={() => setIsFullscreen(false)}
                className="px-4 py-2 rounded-xl bg-slate-800 text-white font-mono text-xs hover:bg-slate-700 transition-colors"
              >
                Close Fullscreen (Esc)
              </button>
            </div>
          )}

          <div className="rounded-2xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-[#0a0f1d] shadow-2xl p-6 sm:p-10 md:p-12 text-slate-800 dark:text-slate-200 space-y-8 font-sans">
            {/* Header: Name and Contact info */}
            <div className="border-b border-slate-200 dark:border-slate-700 pb-6 text-center space-y-2">
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                {personal.name.toUpperCase()}
              </h1>
              <p className="text-sm sm:text-base font-semibold text-cyan-700 dark:text-cyan-400 font-mono">
                {personal.designation}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs text-slate-600 dark:text-slate-300 pt-1 font-mono">
                <a href={`mailto:${personal.email}`} className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  {personal.email}
                </a>
                <span>|</span>
                <a href={`tel:${personal.phone}`} className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  {personal.phone}
                </a>
                <span>|</span>
                <a href={personal.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  {personal.linkedin.replace('https://', '')}
                </a>
                <span>|</span>
                <span>{personal.location}</span>
              </div>
            </div>

            {/* Summary */}
            <div className="space-y-2">
              <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-700 dark:text-cyan-400 font-bold border-b border-slate-200 dark:border-slate-800 pb-1">
                Professional Summary
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
                {personal.summary}
              </p>
            </div>

            {/* Professional Experience */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-700 dark:text-cyan-400 font-bold border-b border-slate-200 dark:border-slate-800 pb-1">
                Professional Experience
              </h3>
              {experiences.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                        {exp.company}
                      </h4>
                      <p className="text-xs font-semibold text-cyan-700 dark:text-cyan-300 font-mono">
                        {exp.role}
                      </p>
                    </div>
                    <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      <span>{exp.period}</span> • <span>{exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 list-disc list-inside">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="leading-relaxed">
                        <span className="-ml-1">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Technical Skills */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-700 dark:text-cyan-400 font-bold border-b border-slate-200 dark:border-slate-800 pb-1">
                Technical Skills
              </h3>
              <div className="space-y-2 text-xs sm:text-sm">
                {skillCategories.map((cat) => (
                  <div key={cat.title} className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-2">
                    <span className="sm:col-span-3 font-semibold text-slate-800 dark:text-slate-200">
                      {cat.title}:
                    </span>
                    <span className="sm:col-span-9 text-slate-600 dark:text-slate-300 font-mono text-xs">
                      {cat.skills.map((s) => s.name).join(', ')}
                    </span>
                  </div>
                ))}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-2">
                  <span className="sm:col-span-3 font-semibold text-slate-800 dark:text-slate-200">
                    Languages:
                  </span>
                  <span className="sm:col-span-9 text-slate-600 dark:text-slate-300 font-mono text-xs">
                    {portfolioData.languages.join(', ')}
                  </span>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-700 dark:text-cyan-400 font-bold border-b border-slate-200 dark:border-slate-800 pb-1">
                Featured Projects
              </h3>
              <div className="space-y-3.5">
                {projects.map((proj) => (
                  <div key={proj.id} className="space-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                      <span className="font-bold text-slate-900 dark:text-white">
                        {proj.title}
                      </span>
                      <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                        {proj.period}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300">
                      {proj.description}
                    </p>
                    <p className="text-[11px] font-mono text-cyan-700 dark:text-cyan-400/90 font-medium">
                      Technologies: {proj.technologies.join(', ')}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="space-y-2">
              <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-700 dark:text-cyan-400 font-bold border-b border-slate-200 dark:border-slate-800 pb-1">
                Education
              </h3>
              {education.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs sm:text-sm">
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white">{edu.degree} – {edu.field}</span>
                    <p className="text-xs text-slate-600 dark:text-slate-300">{edu.institution}</p>
                  </div>
                  <div className="text-right font-mono text-xs text-slate-500 dark:text-slate-400">
                    <p>{edu.period}</p>
                    <p className="text-emerald-600 dark:text-emerald-400 font-bold">{edu.grade}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <div className="space-y-2">
              <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-700 dark:text-cyan-400 font-bold border-b border-slate-200 dark:border-slate-800 pb-1">
                Key Achievements
              </h3>
              <ul className="space-y-1 text-xs sm:text-sm text-slate-700 dark:text-slate-300 list-disc list-inside">
                {achievements.map((ach) => (
                  <li key={ach.id} className="leading-relaxed">
                    <span className="font-semibold text-slate-900 dark:text-slate-100">{ach.metric}:</span>{' '}
                    <span>{ach.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
