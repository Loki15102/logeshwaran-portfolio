import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { BentoCard } from '../ui/BentoCard';
import { portfolioData } from '../../data/portfolio';
import { Zap, TrendingUp, Award, CheckCircle2, Trophy, Sparkles } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Zap,
  TrendingUp,
  Award,
  CheckCircle2,
};

export const Achievements: React.FC = () => {
  const { achievements } = portfolioData;

  if (!achievements || achievements.length === 0) {
    return null;
  }

  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Milestones"
          title="Key Achievements"
          subtitle="Quantifiable production milestones delivered across enterprise cloud and networking software."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((ach, idx) => {
            const Icon = iconMap[ach.icon] || Trophy;
            const glowColor: ('cyan' | 'purple' | 'emerald' | 'amber')[] = [
              'cyan',
              'purple',
              'emerald',
              'amber',
            ];

            return (
              <BentoCard
                key={ach.id}
                glowColor={glowColor[idx % glowColor.length]}
                delay={0.1 * idx}
                className="flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                      {ach.category}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div>
                    <span className="text-3xl sm:text-4xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 dark:from-cyan-400 dark:via-teal-300 dark:to-emerald-400">
                      {ach.metric}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mt-1">
                      {ach.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {ach.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Verified Production Outcome</span>
                </div>
              </BentoCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
