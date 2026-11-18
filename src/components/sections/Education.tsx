import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { BentoCard } from '../ui/BentoCard';
import { portfolioData } from '../../data/portfolio';
import { GraduationCap, Award, Calendar, MapPin, BookOpen, CheckCircle2 } from 'lucide-react';

export const Education: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Academic Background"
          title="Education & Credentials"
          subtitle="Formal computer science foundation in algorithms, systems engineering, and network architecture."
        />

        <div className="max-w-4xl mx-auto">
          {education.map((edu, idx) => (
            <BentoCard key={idx} glowColor="cyan" className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-slate-800/80">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shrink-0">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-100">
                      {edu.degree}
                    </h3>
                    <p className="text-cyan-400 font-medium text-sm sm:text-base">
                      {edu.field}
                    </p>
                    <p className="text-slate-300 text-sm font-medium">
                      {edu.institution}
                    </p>
                    {edu.location && (
                      <p className="text-xs text-slate-400 flex items-center gap-1 pt-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        {edu.location}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Graduated: {edu.period}</span>
                  </span>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono font-bold text-sm">
                    <Award className="w-4 h-4" />
                    <span>{edu.grade}</span>
                  </div>
                </div>
              </div>

              {edu.highlights && (
                <div className="space-y-2.5">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Academic Highlights & Core Pillars</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {edu.highlights.map((highlight, hIdx) => (
                      <div
                        key={hIdx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/40 border border-slate-800 text-xs text-slate-300"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </BentoCard>
          ))}
        </div>
      </div>
    </section>
  );
};
