import confetti from 'canvas-confetti';

export const triggerConfetti = () => {
  const count = 200;
  const defaults = {
    origin: { y: 0.7 },
    zIndex: 9999,
  };

  function fire(particleRatio: number, opts: confetti.Options) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
    colors: ['#06b6d4', '#3b82f6', '#10b981'],
  });
  fire(0.2, {
    spread: 60,
    colors: ['#8b5cf6', '#a855f7', '#06b6d4'],
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
    colors: ['#38bdf8', '#818cf8', '#34d399'],
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
    colors: ['#22d3ee', '#f43f5e', '#fbbf24'],
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
    colors: ['#06b6d4', '#6366f1', '#10b981'],
  });
};
