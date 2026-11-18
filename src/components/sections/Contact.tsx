import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { BentoCard } from '../ui/BentoCard';
import { portfolioData } from '../../data/portfolio';
import { triggerConfetti } from '../../utils/confetti';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  MapPin, 
  Check, 
  Copy, 
  Sparkles, 
  ExternalLink,
  ShieldCheck,
  Download,
  Calendar
} from 'lucide-react';

export const Contact: React.FC = () => {
  const { personal } = portfolioData;
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    triggerConfetti();
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Get in Touch"
          title="Let's Connect & Collaborate"
          subtitle="Open to full-stack engineering roles, technical architecture consultations, and enterprise collaborations."
        />

        {/* 4 Bento Cards Grid for Direct Contact Channels */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email Card */}
          <BentoCard glowColor="cyan" className="space-y-5 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  Primary Channel
                </span>
              </div>

              <div>
                <h4 className="text-sm font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                  Email Address
                </h4>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors block mt-1 break-all"
                >
                  {personal.email}
                </a>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  Direct recruiter inquiries, technical discussions, and interview invitations.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2 border-t border-slate-200 dark:border-slate-800/80">
              <button
                onClick={() => handleCopy(personal.email, 'email')}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-mono font-semibold text-slate-800 dark:text-slate-200 transition-colors"
              >
                {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4 text-slate-400" />}
                <span>{copiedField === 'email' ? 'Copied to Clipboard!' : 'Copy Email'}</span>
              </button>

              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-cyan-500 text-slate-950 hover:bg-cyan-400 text-xs font-mono font-bold transition-colors shadow-md shadow-cyan-500/20"
              >
                <span>Compose</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </BentoCard>

          {/* Phone & WhatsApp Card */}
          <BentoCard glowColor="emerald" className="space-y-5 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400">
                  <Phone className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                  Direct Line
                </span>
              </div>

              <div>
                <h4 className="text-sm font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                  Phone & WhatsApp
                </h4>
                <a
                  href={`tel:${personal.phone}`}
                  className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors block mt-1"
                >
                  {personal.phone}
                </a>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  Available for telephone screening, WhatsApp discussion, and urgent contact.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2 border-t border-slate-200 dark:border-slate-800/80">
              <button
                onClick={() => handleCopy(personal.phone, 'phone')}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-mono font-semibold text-slate-800 dark:text-slate-200 transition-colors"
              >
                {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4 text-slate-400" />}
                <span>{copiedField === 'phone' ? 'Copied to Clipboard!' : 'Copy Phone'}</span>
              </button>

              <a
                href={`tel:${personal.phone}`}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-500 text-slate-950 hover:bg-emerald-400 text-xs font-mono font-bold transition-colors shadow-md shadow-emerald-500/20"
              >
                <span>Call</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </BentoCard>

          {/* LinkedIn Profile Card */}
          <BentoCard glowColor="blue" className="space-y-5 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-blue-600 dark:text-blue-400">
                  <Linkedin className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold flex items-center gap-1">
                  Verified Profile
                </span>
              </div>

              <div>
                <h4 className="text-sm font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                  LinkedIn Network
                </h4>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors block mt-1 break-all"
                >
                  linkedin.com/in/logeshwaran-n-o15102
                </a>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  Connect for professional networking, recommendations, and career updates.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2 border-t border-slate-200 dark:border-slate-800/80">
              <button
                onClick={() => handleCopy(personal.linkedin, 'linkedin')}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-mono font-semibold text-slate-800 dark:text-slate-200 transition-colors"
              >
                {copiedField === 'linkedin' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4 text-slate-400" />}
                <span>{copiedField === 'linkedin' ? 'Copied Link!' : 'Copy Link'}</span>
              </button>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-500 text-xs font-mono font-bold transition-colors shadow-md shadow-blue-500/20"
              >
                <span>View Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </BentoCard>

          {/* Location & Work Preference Card */}
          <BentoCard glowColor="purple" className="space-y-5 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-600 dark:text-purple-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-purple-600 dark:text-purple-400 font-semibold flex items-center gap-1">
                  Location & Roles
                </span>
              </div>

              <div>
                <h4 className="text-sm font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                  Location & Availability
                </h4>
                <p className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mt-1">
                  {personal.location}
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  Open to Remote, Hybrid, and On-site opportunities across India and global remote teams.
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-200 dark:border-slate-800/80">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-2 rounded-xl border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                <span>Notice Period: Immediate / Standard</span>
              </div>
            </div>
          </BentoCard>

          {/* Bottom Full-Width Summary Card */}
          <BentoCard glowColor="cyan" className="md:col-span-2 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <span>Looking for a Full-Stack Engineer?</span>
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                    MERN & TypeScript
                  </span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  Feel free to reach out via email or phone. I look forward to exploring opportunities to build high-impact platforms together.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                <a
                  href={personal.resumeUrl}
                  download={personal.resumeFileName}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/20 transition-all active:scale-95"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>

                <a
                  href={`mailto:${personal.email}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold transition-colors"
                >
                  <Mail className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span>Send Email</span>
                </a>
              </div>
            </div>

            {/* Privacy Guarantee */}
            <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center gap-2 text-[11px] font-mono text-slate-500 dark:text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Strict privacy standard: Zero public exposure of private identification numbers or residential addresses.</span>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
};
