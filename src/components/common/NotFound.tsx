import React from 'react';
import { AlertTriangle, Home, RefreshCw } from 'lucide-react';

interface NotFoundProps {
  onHome?: () => void;
}

export const NotFound: React.FC<NotFoundProps> = ({ onHome }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 text-center bg-[#030712] text-slate-100 font-sans relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-md p-8 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl shadow-2xl space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-400 flex items-center justify-center mx-auto">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs text-rose-400 uppercase tracking-widest">
            ERROR CODE: 404_NOT_FOUND
          </span>
          <h1 className="text-3xl font-extrabold text-white">
            Lost in Cyberspace
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            The telemetry endpoint or memory address you requested does not exist or has been relocated to another cluster.
          </p>
        </div>

        <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 font-mono text-xs text-left text-slate-400 space-y-1">
          <p><span className="text-cyan-400">host:</span> antigravity-v2.edge</p>
          <p><span className="text-cyan-400">status:</span> 404 Route Not Registered</p>
          <p><span className="text-cyan-400">action:</span> redirect_to_origin()</p>
        </div>

        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => {
              if (onHome) onHome();
              else window.location.href = '/';
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/20"
          >
            <Home className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </button>
        </div>
      </div>
    </div>
  );
};
