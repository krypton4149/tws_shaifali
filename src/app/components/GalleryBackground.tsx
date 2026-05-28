import { motion } from 'motion/react';

const FLOATERS = [
  { top: '14%', left: '10%', size: 560, color: 'rgba(255, 182, 193, 0.08)', d: 26 },
  { top: '58%', left: '72%', size: 520, color: 'rgba(212, 175, 55, 0.07)', d: 30 },
  { top: '40%', left: '86%', size: 360, color: 'rgba(139, 21, 56, 0.11)', d: 22 },
  { top: '78%', left: '22%', size: 420, color: 'rgba(212, 175, 55, 0.05)', d: 24 },
] as const;

const SPARKS = [
  { top: '22%', left: '24%', delay: 0.0 },
  { top: '68%', left: '84%', delay: 1.0 },
  { top: '48%', left: '12%', delay: 1.8 },
  { top: '82%', left: '52%', delay: 0.6 },
  { top: '30%', left: '88%', delay: 1.4 },
] as const;

export default function GalleryBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[#030303]" />

      {/* Different look: soft rose fog + gold mist */}
      <motion.div
        className="absolute inset-0 opacity-70"
        animate={{
          background: [
            'radial-gradient(ellipse 85% 65% at 30% 30%, rgba(255, 182, 193, 0.10) 0%, transparent 55%), radial-gradient(ellipse 70% 55% at 80% 65%, rgba(212, 175, 55, 0.07) 0%, transparent 55%)',
            'radial-gradient(ellipse 80% 60% at 70% 25%, rgba(255, 182, 193, 0.08) 0%, transparent 55%), radial-gradient(ellipse 65% 55% at 20% 75%, rgba(139, 21, 56, 0.10) 0%, transparent 58%)',
            'radial-gradient(ellipse 85% 65% at 30% 30%, rgba(255, 182, 193, 0.10) 0%, transparent 55%), radial-gradient(ellipse 70% 55% at 80% 65%, rgba(212, 175, 55, 0.07) 0%, transparent 55%)',
          ],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="hero-bg-grain absolute inset-0 opacity-[0.08] mix-blend-overlay" />

      {/* Floating glow pools */}
      {FLOATERS.map((f, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-[120px]"
          style={{
            top: f.top,
            left: f.left,
            width: f.size,
            height: f.size,
            background: `radial-gradient(circle, ${f.color} 0%, transparent 70%)`,
          }}
          animate={{
            x: [0, i % 2 === 0 ? 55 : -45, 0],
            y: [0, i % 2 === 0 ? -35 : 32, 0],
            scale: [1, 1.08, 0.95, 1],
          }}
          transition={{ duration: f.d, repeat: Infinity, ease: 'easeInOut', delay: i * 1.2 }}
        />
      ))}

      {/* Tiny luxury sparkles */}
      {SPARKS.map((s, i) => (
        <motion.div
          key={i}
          className="absolute size-1.5 rounded-full bg-gold/40 shadow-[0_0_14px_rgba(212,175,55,0.35)]"
          style={{ top: s.top, left: s.left }}
          animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.6, 1], y: [0, -16, 0] }}
          transition={{ duration: 4.5 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: s.delay }}
        />
      ))}

      {/* Soft vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 110% 90% at 50% 50%, transparent 38%, rgba(0,0,0,0.7) 100%)',
        }}
      />

      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#030303] to-transparent" />
    </div>
  );
}

