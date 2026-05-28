import { motion } from 'motion/react';

const ORBS = [
  { top: '12%', left: '-6%', size: 560, color: 'rgba(212, 175, 55, 0.13)', d: 22 },
  { top: '56%', left: '62%', size: 520, color: 'rgba(139, 21, 56, 0.20)', d: 26 },
  { top: '22%', left: '78%', size: 380, color: 'rgba(255, 182, 193, 0.14)', d: 18 },
] as const;

const BOKEH = [
  { top: '22%', left: '16%', delay: 0.0 },
  { top: '34%', left: '88%', delay: 1.2 },
  { top: '62%', left: '10%', delay: 2.0 },
  { top: '76%', left: '56%', delay: 0.8 },
] as const;

export default function ContactHeroBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[#030303]" />

      {/* Soft spotlight */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 90% 65% at 50% 40%, rgba(26, 16, 20, 0.95) 0%, rgba(8, 6, 8, 0.985) 55%, #030303 100%)',
        }}
      />

      {/* Fabric + grain */}
      <div className="hero-bg-fabric absolute inset-0 opacity-[0.28]" />
      <div className="hero-bg-grain absolute inset-0 opacity-[0.10] mix-blend-overlay" />

      {/* Flowing mesh */}
      <motion.div
        className="absolute inset-0 opacity-70"
        animate={{
          background: [
            'radial-gradient(ellipse 75% 60% at 18% 32%, rgba(212,175,55,0.14) 0%, transparent 55%), radial-gradient(ellipse 65% 55% at 82% 70%, rgba(139,21,56,0.22) 0%, transparent 55%)',
            'radial-gradient(ellipse 70% 60% at 78% 30%, rgba(255,182,193,0.18) 0%, transparent 55%), radial-gradient(ellipse 70% 60% at 24% 78%, rgba(212,175,55,0.12) 0%, transparent 55%)',
            'radial-gradient(ellipse 75% 60% at 45% 52%, rgba(139,21,56,0.18) 0%, transparent 58%), radial-gradient(ellipse 65% 55% at 86% 42%, rgba(212,175,55,0.12) 0%, transparent 55%)',
            'radial-gradient(ellipse 75% 60% at 18% 32%, rgba(212,175,55,0.14) 0%, transparent 55%), radial-gradient(ellipse 65% 55% at 82% 70%, rgba(139,21,56,0.22) 0%, transparent 55%)',
          ],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Thin flow lines */}
      <motion.div
        className="absolute inset-[-60%] opacity-[0.05]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(118deg, transparent, transparent 84px, rgba(212,175,55,0.55) 84px, rgba(212,175,55,0.55) 85px)',
        }}
        animate={{ rotate: [0, 2, 0] }}
        transition={{ duration: 34, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Gold sweep */}
      <motion.div
        className="absolute inset-0 opacity-40"
        style={{
          background: 'linear-gradient(105deg, transparent 38%, rgba(212,175,55,0.09) 50%, transparent 62%)',
          backgroundSize: '220% 100%',
        }}
        animate={{ backgroundPosition: ['220% 0%', '-120% 0%'] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      />

      {/* Drifting orbs */}
      {ORBS.map((o, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-[115px] pointer-events-none"
          style={{
            top: o.top,
            left: o.left,
            width: o.size,
            height: o.size,
            background: `radial-gradient(circle, ${o.color} 0%, transparent 70%)`,
          }}
          animate={{
            x: [0, i % 2 === 0 ? 45 : -38, 0],
            y: [0, i % 2 === 0 ? -28 : 34, 0],
            scale: [1, 1.08, 0.96, 1],
          }}
          transition={{ duration: o.d, repeat: Infinity, ease: 'easeInOut', delay: i * 1.1 }}
        />
      ))}

      {/* Bokeh sparkles */}
      {BOKEH.map((b, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-gold/45 shadow-[0_0_16px_rgba(212,175,55,0.55)]"
          style={{ top: b.top, left: b.left }}
          animate={{ opacity: [0.15, 0.85, 0.15], scale: [1, 1.9, 1], y: [0, -16, 0] }}
          transition={{ duration: 4.2 + i * 0.6, repeat: Infinity, ease: 'easeInOut', delay: b.delay }}
        />
      ))}

      {/* Edge vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 110% 90% at 50% 50%, transparent 36%, rgba(0,0,0,0.70) 100%)',
        }}
      />
    </div>
  );
}

