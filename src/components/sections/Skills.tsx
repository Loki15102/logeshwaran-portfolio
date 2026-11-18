import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { BentoCard } from '../ui/BentoCard';
import { portfolioData } from '../../data/portfolio';
import { 
  Layout, 
  Server, 
  ShieldCheck, 
  GitBranch, 
  Cpu, 
  Code2, 
  Search, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Layout,
  Server,
  ShieldCheck,
  GitBranch,
  Cpu,
  Code2,
};

export const Skills: React.FC = () => {
  const { skillCategories, languages } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCategories = skillCategories.filter(cat => {
    if (activeCategory !== 'all' && cat.title.toLowerCase().indexOf(activeCategory.toLowerCase()) === -1) {
      return false;
    }
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    const hasCategoryMatch = cat.title.toLowerCase().includes(query) || cat.description.toLowerCase().includes(query);
    const hasSkillMatch = cat.skills.some(s => s.name.toLowerCase().includes(query));
    return hasCategoryMatch || hasSkillMatch;
  });

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Technical Stack"
          title="Skills & Technologies"
          subtitle="Battle-tested competencies across the entire web stack, from responsive UI architecture to microservices and identity security."
        />

        {/* Filter Controls & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-colors ${
                activeCategory === 'all'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              All Skills
            </button>
            <button
              onClick={() => setActiveCategory('frontend')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-colors ${
                activeCategory === 'frontend'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              Frontend
            </button>
            <button
              onClick={() => setActiveCategory('backend')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-colors ${
                activeCategory === 'backend'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              Backend & APIs
            </button>
            <button
              onClick={() => setActiveCategory('security')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-colors ${
                activeCategory === 'security'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              Databases & Security
            </button>
            <button
              onClick={() => setActiveCategory('devops')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-colors ${
                activeCategory === 'devops'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              DevOps
            </button>
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. GraphQL)..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 outline-none focus:border-cyan-500/50 transition-colors"
            />
          </div>
        </div>

        {/* Bento Grid of Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, idx) => {
            const Icon = iconMap[category.icon] || Code2;
            const glowColors: ('cyan' | 'purple' | 'emerald' | 'blue' | 'amber')[] = [
              'cyan',
              'emerald',
              'purple',
              'amber',
              'blue'
            ];
            const currentGlow = glowColors[idx % glowColors.length];

            return (
              <BentoCard
                key={category.title}
                glowColor={currentGlow}
                delay={0.08 * idx}
                className="flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 text-cyan-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-slate-100 group-hover:text-cyan-300 transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-[11px] text-slate-400 line-clamp-1">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Chips */}
                  <div className="flex flex-wrap gap-2 pt-3">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 ${
                          skill.highlight
                            ? 'bg-slate-800/90 text-slate-100 border border-cyan-500/40 hover:border-cyan-400 hover:bg-cyan-500/10 shadow-sm'
                            : 'bg-slate-900/50 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
                        }`}
                      >
                        {skill.highlight ? (
                          <Sparkles className="w-3 h-3 text-cyan-400 shrink-0" />
                        ) : (
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-600 shrink-0" />
                        )}
                        <span>{skill.name}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>{category.skills.length} Competencies</span>
                  <span className="text-cyan-400/80 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Production Grade
                  </span>
                </div>
              </BentoCard>
            );
          })}

          {/* Programming Languages Bento Card */}
          <BentoCard glowColor="cyan" className="md:col-span-2 lg:col-span-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-1">
                  <Code2 className="w-4 h-4" />
                  <span>Programming Languages</span>
                </div>
                <h4 className="text-lg font-bold text-slate-100">
                  Multi-paradigm Polyglot Core
                </h4>
                <p className="text-xs text-slate-400 max-w-xl mt-1">
                  Strong procedural, object-oriented, and functional fluency across modern web and systems runtimes.
                </p>
              </div>

              {/* Language Badges */}
              <div className="flex flex-wrap gap-2 sm:justify-end">
                {languages.map((lang) => (
                  <span
                    key={lang}
                    className="px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-700/80 text-xs font-mono font-bold text-slate-200 hover:text-cyan-300 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all shadow-sm"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
};
