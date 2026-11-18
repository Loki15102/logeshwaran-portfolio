import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { BentoCard } from '../ui/BentoCard';
import { ProjectModal } from './ProjectModal';
import { portfolioData } from '../../data/portfolio';
import { ProjectItem } from '../../types/portfolio';
import { 
  ArrowUpRight, 
  Calendar, 
  CheckCircle2, 
  Layers, 
  ShieldCheck, 
  Terminal, 
  Cpu, 
  ExternalLink,
  Github
} from 'lucide-react';

export const Projects: React.FC = () => {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = projects.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'featured') return p.featured;
    if (filter === 'networking') return p.category.toLowerCase().includes('network') || p.category.toLowerCase().includes('identity');
    if (filter === 'storage') return p.category.toLowerCase().includes('storage') || p.category.toLowerCase().includes('cloud');
    return true;
  });

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Featured Engineering"
          title="Projects & Architectures"
          subtitle="Enterprise platforms, storage telemetry systems, and zero-trust authentication suites built for high reliability."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'featured', label: 'Featured Systems' },
            { id: 'networking', label: 'SD-WAN & Security' },
            { id: 'storage', label: 'Storage & Telemetry' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                filter === tab.id
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/25'
                  : 'bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => {
            const isFeatured = project.featured;
            const glowColor: ('cyan' | 'purple' | 'emerald' | 'blue' | 'amber') = 
              project.id === 'stor-ui' ? 'cyan' :
              project.id === 'zwan-cpe' ? 'emerald' :
              project.id === 'captive-portal' ? 'purple' : 'blue';

            return (
              <BentoCard
                key={project.id}
                glowColor={glowColor}
                delay={0.08 * idx}
                onClick={() => setSelectedProject(project)}
                className={`flex flex-col justify-between ${
                  isFeatured ? 'lg:col-span-1 ring-1 ring-cyan-500/20' : ''
                }`}
              >
                <div className="space-y-4">
                  {/* Category & Period */}
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="text-cyan-400 uppercase tracking-wider text-[11px] font-semibold">
                      {project.category}
                    </span>
                    <span className="flex items-center gap-1 text-[11px]">
                      <Calendar className="w-3 h-3" />
                      {project.period}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors flex items-center justify-between gap-2">
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                    </h3>
                    <p className="text-xs text-slate-300 mt-1 font-medium">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Summary */}
                  <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Feature Highlights */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                    <p className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                      Core Highlights:
                    </p>
                    {project.keyFeatures.slice(0, 2).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-2 text-[11px]">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Pills & Modal Prompt */}
                <div className="pt-4 mt-4 border-t border-slate-800/80 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded-md bg-slate-900 text-[10px] font-mono text-cyan-400">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono text-cyan-400 group-hover:text-cyan-300">
                    <span>Click for Deep Dive & Architecture</span>
                    <span className="text-xs">→</span>
                  </div>
                </div>
              </BentoCard>
            );
          })}
        </div>

        {/* Detailed Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};
