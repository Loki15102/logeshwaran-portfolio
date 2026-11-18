import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Download, 
  ArrowRight, 
  Send, 
  Terminal as TerminalIcon, 
  Sparkles, 
  Code2, 
  ShieldCheck, 
  Zap, 
  CheckCircle2,
  Copy,
  Check
} from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import { triggerConfetti } from '../../utils/confetti';

interface HeroProps {
  onOpenTerminal?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const { personal } = portfolioData;
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTitleIndex(prev => (prev + 1) % personal.titles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [personal.titles.length]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleDownloadResume = () => {
    triggerConfetti();
  };

  return (
    <section id="home" className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and Call-to-actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Availability Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300 backdrop-blur-md shadow-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-slate-400">Status:</span>
              <span className="text-emerald-400 font-semibold">Available for Full-Stack Roles</span>
            </motion.div>

            {/* Name & Animated Role Titles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500">
                  {personal.name}
                </span>
              </h1>

              {/* Animated Rotating Role */}
              <div className="h-10 sm:h-12 flex items-center">
                <span className="text-xl sm:text-2xl lg:text-3xl font-mono font-medium text-slate-400 mr-2 sm:mr-3">
                  I am a
                </span>
                <span className="text-xl sm:text-2xl lg:text-3xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400">
                  {personal.titles[currentTitleIndex]}
                </span>
                <span className="inline-block w-2 sm:w-2.5 h-6 sm:h-8 bg-cyan-400 ml-1.5 animate-pulse" />
              </div>
            </motion.div>

            {/* Resume Summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 dark:text-slate-300 max-w-2xl leading-relaxed"
            >
              {personal.summary}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              {/* Download Resume */}
              <a
                href={personal.resumeUrl}
                download={personal.resumeFileName}
                onClick={handleDownloadResume}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm shadow-xl shadow-cyan-500/25 transition-all duration-200 active:scale-95 group"
              >
                <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                <span>Download Resume</span>
              </a>

              {/* View Projects */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 text-sm font-semibold transition-all duration-200 active:scale-95 group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              {/* Contact Me */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/40 hover:bg-slate-800/60 text-slate-300 hover:text-cyan-300 border border-slate-800 text-sm font-semibold transition-all duration-200"
              >
                <Send className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </a>

              {/* Quick Copy Email */}
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-3 rounded-xl bg-slate-900/40 hover:bg-slate-800/60 border border-slate-800 text-xs font-mono text-slate-400 hover:text-slate-200 transition-colors"
                title="Copy email address"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
                <span className="hidden sm:inline">{copiedEmail ? 'Copied!' : personal.email}</span>
              </button>
            </motion.div>

            {/* Quick Metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800/60"
            >
              {personal.stats.map((stat, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-900/30 border border-slate-800/40 backdrop-blur-sm">
                  <div className="text-xl sm:text-2xl font-black font-mono text-cyan-400">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-medium text-slate-300 mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Cyber Bento Preview Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-xl shadow-2xl p-6 overflow-hidden"
            >
              {/* Top Accent bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-slate-400">engineer-profile.ts</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 text-[10px] font-mono text-cyan-400">
                  <Sparkles className="w-3 h-3" />
                  <span>Production Ready</span>
                </div>
              </div>

              {/* Code Snippet */}
              <div className="py-4 font-mono text-xs text-slate-300 space-y-1.5">
                <p className="text-slate-500">// Professional Configuration</p>
                <p>
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-blue-400">candidate</span> = &#123;
                </p>
                <p className="pl-4">
                  <span className="text-cyan-300">name</span>:{' '}
                  <span className="text-emerald-300">"{personal.name}"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-cyan-300">experience</span>:{' '}
                  <span className="text-emerald-300">"4+ Years Full-Stack"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-cyan-300">stack</span>: [
                  <span className="text-amber-300">"MERN"</span>,{' '}
                  <span className="text-amber-300">"TypeScript"</span>,{' '}
                  <span className="text-amber-300">"GraphQL"</span>,{' '}
                  <span className="text-amber-300">"Next.js"</span>
                  ],
                </p>
                <p className="pl-4">
                  <span className="text-cyan-300">company</span>:{' '}
                  <span className="text-emerald-300">"AmZetta Technologies"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-cyan-300">security</span>: [
                  <span className="text-rose-300">"OAuth2"</span>,{' '}
                  <span className="text-rose-300">"Keycloak"</span>,{' '}
                  <span className="text-rose-300">"RBAC"</span>
                  ],
                </p>
                <p className="pl-4">
                  <span className="text-cyan-300">impact</span>: &#123;
                </p>
                <p className="pl-8 text-cyan-200">
                  apiLatencyReduction: <span className="text-amber-400 font-bold">"35%"</span>,
                </p>
                <p className="pl-8 text-cyan-200">
                  componentDeliveryBoost: <span className="text-amber-400 font-bold">"25%"</span>,
                </p>
                <p className="pl-8 text-cyan-200">
                  enterpriseScale: <span className="text-amber-400 font-bold">"100+ Users"</span>
                </p>
                <p className="pl-4">&#125;</p>
                <p>&#125;;</p>
              </div>

              {/* Bottom Feature Badges */}
              <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-800/40 border border-slate-700/50">
                  <Code2 className="w-4 h-4 text-cyan-400" />
                  <span className="text-slate-300 text-[11px]">Clean Architecture</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-800/40 border border-slate-700/50">
                  <ShieldCheck className="w-4 h-4 text-purple-400" />
                  <span className="text-slate-300 text-[11px]">Enterprise Security</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-800/40 border border-slate-700/50">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span className="text-slate-300 text-[11px]">Sub-Second APIs</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-800/40 border border-slate-700/50">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span className="text-slate-300 text-[11px]">End-to-End Delivery</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
