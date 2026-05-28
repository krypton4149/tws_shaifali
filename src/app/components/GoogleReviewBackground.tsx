import { motion } from 'motion/react';

const GLOWS = [
  { top: '12%', left: '5%', size: 320, color: 'rgba(66, 133, 244, 0.1)', d: 21 },
  { top: '55%', left: '80%', size: 380, color: 'rgba(212, 175, 55, 0.14)', d: 25 },
  { top: '75%', left: '12%', size: 280, color: 'rgba(139, 21, 56, 0.14)', d: 18 },
] as const;

export default function GoogleReviewBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[#050508]" />

      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(ellipse 90% 70% at 30% 30%, rgba(66, 133, 244, 0.08) 0%, transparent 50%), radial-gradient(ellipse 80% 60% at 70% 70%, rgba(212, 175, 55, 0.12) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 50% 50%, rgba(139, 21, 56, 0.1) 0%, transparent 50%)',
            'radial-gradient(ellipse 90% 70% at 65% 25%, rgba(212, 175, 55, 0.14) 0%, transparent 50%), radial-gradient(ellipse 80% 60% at 30% 75%, rgba(66, 133, 244, 0.1) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255, 182, 193, 0.08) 0%, transparent 50%)',
            'radial-gradient(ellipse 90% 70% at 30% 30%, rgba(66, 133, 244, 0.08) 0%, transparent 50%), radial-gradient(ellipse 80% 60% at 70% 70%, rgba(212, 175, 55, 0.12) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 50% 50%, rgba(139, 21, 56, 0.1) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="hero-bg-grain absolute inset-0 opacity-[0.09] mix-blend-overlay" />

      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/[0.06]"
          style={{ width: 180 + i * 120, height: 180 + i * 120 }}
          animate={{ scale: [1, 1.06, 1], opacity: [0.12, 0.28, 0.12] }}
          transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
        />
      ))}

      {GLOWS.map((g, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-[90px]"
          style={{
            top: g.top,
            left: g.left,
            width: g.size,
            height: g.size,
            background: `radial-gradient(circle, ${g.color} 0%, transparent 70%)`,
          }}
          animate={{
            x: [0, i % 2 ? 28 : -22, 0],
            y: [0, i % 2 ? -18 : 24, 0],
          }}
          transition={{ duration: g.d, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {['⭐', '💄', '✨'].map((emoji, i) => (
        <motion.span
          key={i}
          className="absolute text-xl opacity-[0.15] select-none"
          style={{ top: `${20 + i * 22}%`, left: i % 2 ? '88%' : '6%' }}
          animate={{ y: [0, -10, 0], opacity: [0.1, 0.22, 0.1] }}
          transition={{ duration: 10 + i * 2, repeat: Infinity, ease: 'easeInOut', delay: i }}
        >
          {emoji}
        </motion.span>
      ))}

      <motion.div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            'linear-gradient(100deg, transparent 40%, rgba(212, 175, 55, 0.05) 50%, transparent 60%)',
          backgroundSize: '220% 100%',
        }}
        animate={{ backgroundPosition: ['220% 0%', '-120% 0%'] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'linear' }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 100% 70% at 50% 100%, rgba(0,0,0,0.45) 0%, transparent 55%)',
        }}
      />
    </div>
  );
}
