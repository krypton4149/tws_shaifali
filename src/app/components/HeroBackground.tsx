import { motion } from 'motion/react';

const ORBS = [
  { color: 'rgba(139, 21, 56, 0.22)', size: 'min(55vw, 520px)', top: '8%', left: '-8%', duration: 22 },
  { color: 'rgba(212, 175, 55, 0.14)', size: 'min(48vw, 440px)', top: '55%', left: '62%', duration: 26 },
  { color: 'rgba(255, 182, 193, 0.1)', size: 'min(40vw, 360px)', top: '28%', left: '72%', duration: 18 },
  { color: 'rgba(212, 175, 55, 0.08)', size: 'min(36vw, 320px)', top: '72%', left: '18%', duration: 20 },
] as const;

const BOKEH = [
  { top: '12%', left: '22%', delay: 0 },
  { top: '68%', left: '78%', delay: 1.2 },
  { top: '42%', left: '8%', delay: 2.4 },
  { top: '78%', left: '48%', delay: 0.8 },
  { top: '18%', left: '88%', delay: 1.8 },
] as const;

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
      {/* Deep black base */}
      <div className="absolute inset-0 bg-[#030303]" />

      {/* Soft center lift — keeps hero readable */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 85% 65% at 50% 42%, rgba(28, 18, 22, 0.95) 0%, rgba(8, 6, 8, 0.98) 55%, #030303 100%)',
        }}
      />

      {/* Fine cross-hatch texture */}
      <div className="hero-bg-fabric absolute inset-0 opacity-[0.35]" />

      {/* Film grain */}
      <div className="hero-bg-grain absolute inset-0 opacity-[0.12] mix-blend-overlay" />

      {/* Animated aurora mesh */}
      <motion.div
        className="absolute inset-0 opacity-60"
        animate={{
          background: [
            'radial-gradient(ellipse 70% 55% at 30% 35%, rgba(139, 21, 56, 0.18) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 75% 65%, rgba(212, 175, 55, 0.12) 0%, transparent 50%)',
            'radial-gradient(ellipse 65% 60% at 70% 30%, rgba(139, 21, 56, 0.16) 0%, transparent 52%), radial-gradient(ellipse 55% 45% at 25% 70%, rgba(255, 182, 193, 0.08) 0%, transparent 48%)',
            'radial-gradient(ellipse 75% 50% at 50% 50%, rgba(212, 175, 55, 0.14) 0%, transparent 58%), radial-gradient(ellipse 50% 40% at 20% 40%, rgba(139, 21, 56, 0.12) 0%, transparent 45%)',
            'radial-gradient(ellipse 70% 55% at 30% 35%, rgba(139, 21, 56, 0.18) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 75% 65%, rgba(212, 175, 55, 0.12) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Drifting color orbs */}
      {ORBS.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-[100px] pointer-events-none"
          style={{
            width: orb.size,
            height: orb.size,
            top: orb.top,
            left: orb.left,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
          }}
          animate={{
            x: [0, i % 2 === 0 ? 40 : -35, 0],
            y: [0, i % 2 === 0 ? -30 : 35, 0],
            scale: [1, 1.08, 0.95, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 1.5,
          }}
        />
      ))}

      {/* Beauty bokeh dots */}
      {BOKEH.map((dot, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-gold/40 shadow-[0_0_12px_rgba(212,175,55,0.5)]"
          style={{ top: dot.top, left: dot.left }}
          animate={{
            opacity: [0.2, 0.7, 0.2],
            scale: [1, 1.8, 1],
            y: [0, -18, 0],
          }}
          transition={{
            duration: 4 + i * 0.6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: dot.delay,
          }}
        />
      ))}

      {/* Slow gold light sweep */}
      <motion.div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            'linear-gradient(105deg, transparent 40%, rgba(212, 175, 55, 0.06) 50%, transparent 60%)',
          backgroundSize: '200% 100%',
        }}
        animate={{ backgroundPosition: ['200% 0%', '-100% 0%'] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      />

      {/* Subtle diagonal shimmer lines */}
      <motion.div
        className="absolute inset-[-50%] opacity-[0.04]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(115deg, transparent, transparent 80px, rgba(212, 175, 55, 0.4) 80px, rgba(212, 175, 55, 0.4) 81px)',
        }}
        animate={{ rotate: [0, 2, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Edge vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 100% 80% at 50% 50%, transparent 35%, rgba(0, 0, 0, 0.55) 100%)',
        }}
      />

      {/* Bottom fade into page */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#030303] to-transparent" />
    </div>
  );
}
