import React from 'react';

export const BackgroundGlow: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-grid-cyber opacity-70 dark:opacity-40" />

      {/* Top Left Cyan Ambient Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 md:w-[32rem] md:h-[32rem] rounded-full bg-cyan-500/15 dark:bg-cyan-500/10 blur-[120px] animate-pulse-slow" />

      {/* Center Right Indigo Glow */}
      <div className="absolute top-1/3 -right-40 w-96 h-96 md:w-[36rem] md:h-[36rem] rounded-full bg-indigo-500/15 dark:bg-indigo-600/10 blur-[140px] animate-pulse-slow delay-1000" />

      {/* Bottom Center Emerald/Purple Glow */}
      <div className="absolute -bottom-40 left-1/3 w-96 h-96 md:w-[30rem] md:h-[30rem] rounded-full bg-purple-500/10 dark:bg-purple-600/10 blur-[130px] animate-pulse-slow delay-700" />

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/30 dark:to-black/60" />
    </div>
  );
};
