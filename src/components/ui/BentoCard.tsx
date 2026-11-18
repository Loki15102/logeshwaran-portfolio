import React from 'react';
import { motion } from 'framer-motion';

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'purple' | 'emerald' | 'blue' | 'amber';
  delay?: number;
  onClick?: () => void;
}

export const BentoCard: React.FC<BentoCardProps> = ({
  children,
  className = '',
  glowColor = 'cyan',
  delay = 0,
  onClick,
}) => {
  const glowBorderClasses = {
    cyan: 'hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]',
    purple: 'hover:border-purple-500/50 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]',
    emerald: 'hover:border-emerald-500/50 hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]',
    blue: 'hover:border-blue-500/50 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)]',
    amber: 'hover:border-amber-500/50 hover:shadow-[0_0_25px_rgba(245,158,11,0.15)]',
  }[glowColor];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      onClick={onClick}
      className={`
        relative rounded-2xl p-6 sm:p-8 
        bg-white/85 dark:bg-[#0b1220]/60 
        backdrop-blur-xl
        border border-slate-200/90 dark:border-slate-800/60
        shadow-xl shadow-slate-200/60 dark:shadow-black/20
        text-slate-900 dark:text-slate-100
        transition-all duration-300 ease-out
        group
        ${glowBorderClasses}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
    >
      {/* Corner cyber accent */}
      <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden pointer-events-none rounded-tr-2xl">
        <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-white/10 to-transparent rotate-45 group-hover:from-cyan-500/20 transition-all duration-300" />
      </div>

      {children}
    </motion.div>
  );
};
