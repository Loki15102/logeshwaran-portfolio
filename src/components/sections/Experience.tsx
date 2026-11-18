import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { BentoCard } from '../ui/BentoCard';
import { portfolioData } from '../../data/portfolio';
import { 
  Building2, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Zap, 
  ShieldCheck, 
  Layers, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

export const Experience: React.FC = () => {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Career Journey"
          title="Work Experience"
          subtitle="Continuous delivery in high-stakes enterprise SD-WAN management and cloud storage infrastructure."
        />

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Timeline Guide Line */}
          <div className="hidden md:block absolute left-8 top-6 bottom-6 w-[2px] bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={exp.id} className="relative md:pl-20">
                {/* Timeline Node Dot */}
                <div className="hidden md:flex absolute left-5 top-7 -translate-x-1/2 w-6 h-6 rounded-full bg-slate-950 border-2 border-cyan-400 items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.8)] z-10">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                </div>

                <BentoCard glowColor="cyan" className="space-y-6">
                  {/* Header: Company, Role, Location, Date */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-slate-800/80">
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xl sm:text-2xl font-bold text-slate-100">
                          {exp.role}
                        </span>
                        {exp.isCurrent && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-mono text-emerald-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Current Role
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
                        <span className="font-semibold text-cyan-400 flex items-center gap-1.5">
                          <Building2 className="w-4 h-4 text-cyan-400" />
                          {exp.company}
                        </span>
                        <span className="text-slate-600">•</span>
                        <span className="flex items-center gap-1.5 text-slate-400 text-xs">
                          <MapPin className="w-3.5 h-3.5 text-slate-500" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 self-start">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-slate-300 leading-relaxed font-sans">
                    {exp.summary}
                  </p>

                  {/* Key Contributions & Metrics Banner */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-xs text-slate-200 flex items-start gap-2.5">
                      <Zap className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-cyan-300 block">35% API Speedup</span>
                        <span className="text-slate-400 text-[11px]">GraphQL resolver & query tuning</span>
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-xs text-slate-200 flex items-start gap-2.5">
                      <Layers className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-purple-300 block">25% Cycle Reduction</span>
                        <span className="text-slate-400 text-[11px]">Reusable React component system</span>
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-slate-200 flex items-start gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-emerald-300 block">100+ Enterprise Scale</span>
                        <span className="text-slate-400 text-[11px]">Zero-trust SD-WAN & storage suite</span>
                      </div>
                    </div>
                  </div>

                  {/* Responsibilities list */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Core Responsibilities & Technical Contributions</span>
                    </h4>

                    <div className="grid grid-cols-1 gap-2.5">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <div
                          key={rIdx}
                          className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-900/40 hover:bg-slate-900/70 border border-slate-800/60 transition-colors"
                        >
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-slate-300 leading-normal">
                            {resp}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies tags */}
                  <div className="pt-4 border-t border-slate-800/80">
                    <p className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-2.5">
                      Technologies Leveraged in Production:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 border border-slate-800 text-xs font-mono hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </BentoCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
