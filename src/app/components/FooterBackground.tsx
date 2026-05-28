import { motion } from 'motion/react';

const GLOWS = [
  { left: '10%', bottom: '20%', size: 280, color: 'rgba(139, 21, 56, 0.18)', d: 24 },
  { left: '75%', bottom: '30%', size: 320, color: 'rgba(212, 175, 55, 0.1)', d: 20 },
] as const;

export default function FooterBackground() {
  return (
    <div className="absolute inset-0 z-0 w-full min-w-full overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[#040406]" />

      <motion.div
        className="absolute inset-0"
        animate={{
          opacity: [0.9, 1, 0.9],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background:
            'radial-gradient(ellipse 100% 80% at 50% 100%, rgba(139, 21, 56, 0.2) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 20% 50%, rgba(212, 175, 55, 0.08) 0%, transparent 50%)',
        }}
      />

      <div className="hero-bg-grain absolute inset-0 opacity-[0.12] mix-blend-overlay" />

      {/* Diagonal satin texture */}
      <motion.div
        className="absolute inset-[-20%] opacity-[0.05]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(125deg, transparent, transparent 48px, rgba(212, 175, 55, 0.5) 48px, rgba(212, 175, 55, 0.5) 49px)',
        }}
        animate={{ rotate: [0, 1, 0] }}
        transition={{ duration: 40, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Fine dot texture */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(212, 175, 55, 0.8) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {GLOWS.map((g, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-[80px]"
          style={{
            left: g.left,
            bottom: g.bottom,
            width: g.size,
            height: g.size,
            background: `radial-gradient(circle, ${g.color} 0%, transparent 70%)`,
          }}
          animate={{
            x: [0, i % 2 ? 20 : -15, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{ duration: g.d, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            'linear-gradient(90deg, transparent 40%, rgba(212, 175, 55, 0.04) 50%, transparent 60%)',
          backgroundSize: '200% 100%',
        }}
        animate={{ backgroundPosition: ['200% 0%', '-100% 0%'] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
      />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </div>
  );
}
