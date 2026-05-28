import { motion } from 'motion/react';

const ORBS = [
  { top: '10%', left: '-6%', size: 560, color: 'rgba(212, 175, 55, 0.12)', d: 22 },
  { top: '58%', left: '64%', size: 520, color: 'rgba(139, 21, 56, 0.18)', d: 26 },
  { top: '22%', left: '72%', size: 360, color: 'rgba(255, 182, 193, 0.12)', d: 18 },
  { top: '74%', left: '18%', size: 420, color: 'rgba(212, 175, 55, 0.07)', d: 20 },
] as const;

const SPARKS = [
  { top: '20%', left: '14%', delay: 0.0 },
  { top: '34%', left: '86%', delay: 1.2 },
  { top: '66%', left: '10%', delay: 2.0 },
  { top: '78%', left: '58%', delay: 0.8 },
  { top: '52%', left: '74%', delay: 1.6 },
] as const;

export default function ServicesPageBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
      {/* Base */}
      <div className="absolute inset-0 bg-[#020202]" />

      {/* Center spotlight */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 85% 60% at 50% 35%, rgba(24, 16, 20, 0.95) 0%, rgba(6, 5, 6, 0.985) 55%, #020202 100%)',
        }}
      />

      {/* Luxury texture */}
      <div className="hero-bg-fabric absolute inset-0 opacity-[0.22]" />
      <div className="hero-bg-grain absolute inset-0 opacity-[0.10] mix-blend-overlay" />

      {/* Animated mesh (different from About/ServicesBackground) */}
      <motion.div
        className="absolute inset-0 opacity-70"
        animate={{
          background: [
            'radial-gradient(ellipse 70% 55% at 25% 30%, rgba(212,175,55,0.14) 0%, transparent 55%), radial-gradient(ellipse 60% 55% at 78% 68%, rgba(139,21,56,0.22) 0%, transparent 55%)',
            'radial-gradient(ellipse 60% 55% at 72% 28%, rgba(255,182,193,0.16) 0%, transparent 55%), radial-gradient(ellipse 65% 55% at 22% 72%, rgba(212,175,55,0.10) 0%, transparent 55%)',
            'radial-gradient(ellipse 70% 55% at 45% 50%, rgba(139,21,56,0.18) 0%, transparent 58%), radial-gradient(ellipse 60% 55% at 82% 38%, rgba(212,175,55,0.12) 0%, transparent 55%)',
            'radial-gradient(ellipse 70% 55% at 25% 30%, rgba(212,175,55,0.14) 0%, transparent 55%), radial-gradient(ellipse 60% 55% at 78% 68%, rgba(139,21,56,0.22) 0%, transparent 55%)',
          ],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Diagonal satin lines */}
      <motion.div
        className="absolute inset-[-60%] opacity-[0.06]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(120deg, transparent, transparent 72px, rgba(212, 175, 55, 0.65) 72px, rgba(212, 175, 55, 0.65) 73px)',
        }}
        animate={{ rotate: [0, 2, 0] }}
        transition={{ duration: 34, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Slow highlight sweep */}
      <motion.div
        className="absolute inset-0 opacity-40"
        style={{
          background: 'linear-gradient(105deg, transparent 38%, rgba(212,175,55,0.08) 50%, transparent 62%)',
          backgroundSize: '200% 100%',
        }}
        animate={{ backgroundPosition: ['200% 0%', '-110% 0%'] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      />

      {/* Drifting glow orbs */}
      {ORBS.map((o, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-[110px] pointer-events-none"
          style={{
            top: o.top,
            left: o.left,
            width: o.size,
            height: o.size,
            background: `radial-gradient(circle, ${o.color} 0%, transparent 70%)`,
          }}
          animate={{
            x: [0, i % 2 === 0 ? 45 : -40, 0],
            y: [0, i % 2 === 0 ? -30 : 35, 0],
            scale: [1, 1.08, 0.96, 1],
          }}
          transition={{ duration: o.d, repeat: Infinity, ease: 'easeInOut', delay: i * 1.1 }}
        />
      ))}

      {/* Tiny spark bokeh */}
      {SPARKS.map((s, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-gold/45 shadow-[0_0_16px_rgba(212,175,55,0.55)]"
          style={{ top: s.top, left: s.left }}
          animate={{ opacity: [0.15, 0.8, 0.15], scale: [1, 1.9, 1], y: [0, -16, 0] }}
          transition={{ duration: 4.2 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: s.delay }}
        />
      ))}

      {/* Edge vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 110% 90% at 50% 50%, transparent 36%, rgba(0,0,0,0.72) 100%)',
        }}
      />

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#020202] to-transparent" />
    </div>
  );
}

