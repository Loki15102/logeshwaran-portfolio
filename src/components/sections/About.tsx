import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { BentoCard } from '../ui/BentoCard';
import { portfolioData } from '../../data/portfolio';
import { 
  Building2, 
  Layers, 
  Sparkles, 
  ShieldCheck, 
  TrendingUp, 
  Terminal, 
  Workflow, 
  Cpu
} from 'lucide-react';

export const About: React.FC = () => {
  const { personal } = portfolioData;

  const coreStrengths = [
    {
      icon: Layers,
      title: "Modular Frontend Architecture",
      desc: "Architecting reusable React component libraries and design tokens, adopted across multi-product suites to cut development cycles by 25%."
    },
    {
      icon: Cpu,
      title: "High-Performance APIs",
      desc: "Fine-tuning GraphQL resolvers, RESTful endpoints, and database indexes, achieving an impressive 35% reduction in production latency."
    },
    {
      icon: ShieldCheck,
      title: "Zero-Trust Security & RBAC",
      desc: "Implementing enterprise OAuth2, Keycloak identity flows, and granular role permissions, resolving elusive 401/403 authorization challenges."
    },
    {
      icon: Workflow,
      title: "End-to-End Delivery Ownership",
      desc: "Taking features from ideation and UX wireframes through database schema design, unit testing, and Git/GitLab CI/CD automated deployment."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Profile Overview"
          title="About Me"
          subtitle="A fusion of robust systems engineering, high-throughput APIs, and polished reactive interfaces."
        />

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Bio Card: 8 Columns */}
          <BentoCard glowColor="cyan" className="md:col-span-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-mono text-xs uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Professional Background</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
                Building scalable web platforms that turn complex infrastructure into seamless interfaces.
              </h3>
              <div className="space-y-3 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                {personal.aboutBio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Current Role Callout */}
            <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">Current Employment</p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    AmZetta Technologies Private Limited
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                <span>Sep 2022 – Present</span>
              </div>
            </div>
          </BentoCard>

          {/* Quick Metrics & Highlights Card: 4 Columns */}
          <BentoCard glowColor="purple" className="md:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-mono text-xs uppercase tracking-wider mb-4">
                <TrendingUp className="w-4 h-4" />
                <span>Impact Highlights</span>
              </div>
              <div className="space-y-4">
                {personal.stats.map((stat, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80">
                    <span className="text-2xl sm:text-3xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400">
                      {stat.value}
                    </span>
                    <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-1">{stat.label}</p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{stat.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <span>MERN & TypeScript</span>
              </span>
              <span>Chennai, IN</span>
            </div>
          </BentoCard>

          {/* 4 Core Strength Bento Cards */}
          {coreStrengths.map((item, idx) => {
            const Icon = item.icon;
            return (
              <BentoCard
                key={idx}
                glowColor={idx % 2 === 0 ? 'blue' : 'emerald'}
                delay={0.1 * idx}
                className="md:col-span-3 space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 flex items-center justify-center text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </BentoCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
