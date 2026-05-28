import { motion } from 'motion/react';

const GLOWS = [
  { top: '15%', left: '10%', w: 340, color: 'rgba(212, 175, 55, 0.12)', d: 20 },
  { top: '60%', left: '75%', w: 400, color: 'rgba(139, 21, 56, 0.15)', d: 24 },
  { top: '80%', left: '20%', w: 280, color: 'rgba(255, 182, 193, 0.09)', d: 18 },
] as const;

export default function TestimonialsBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[#040406]" />

      <motion.div
        className="absolute inset-0"
        animate={{
          opacity: [0.85, 1, 0.85],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(212, 175, 55, 0.1) 0%, transparent 55%), radial-gradient(ellipse 70% 50% at 0% 100%, rgba(139, 21, 56, 0.18) 0%, transparent 50%), radial-gradient(ellipse 60% 45% at 100% 50%, rgba(255, 182, 193, 0.08) 0%, transparent 45%)',
        }}
      />

      <div className="hero-bg-grain absolute inset-0 opacity-[0.09] mix-blend-overlay" />

      {/* Heartbeat pulse rings */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/[0.06]"
          style={{ width: 200 + i * 140, height: 200 + i * 140 }}
          animate={{ scale: [1, 1.08, 1], opacity: [0.15, 0.35, 0.15] }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.6,
          }}
        />
      ))}

      {GLOWS.map((g, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-[95px]"
          style={{
            top: g.top,
            left: g.left,
            width: g.w,
            height: g.w,
            background: `radial-gradient(circle, ${g.color} 0%, transparent 70%)`,
          }}
          animate={{
            x: [0, i % 2 ? 30 : -25, 0],
            y: [0, i % 2 ? -20 : 28, 0],
          }}
          transition={{ duration: g.d, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      <motion.div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            'linear-gradient(120deg, transparent 42%, rgba(212, 175, 55, 0.04) 50%, transparent 58%)',
          backgroundSize: '220% 100%',
        }}
        animate={{ backgroundPosition: ['220% 0%', '-120% 0%'] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
      />

      {['💬', '⭐', '❤️', '✨'].map((emoji, i) => (
        <motion.span
          key={i}
          className="absolute text-xl opacity-[0.12] select-none"
          style={{
            top: `${18 + i * 18}%`,
            left: i % 2 === 0 ? '8%' : '88%',
          }}
          animate={{ y: [0, -10, 0], opacity: [0.08, 0.18, 0.08] }}
          transition={{ duration: 12 + i * 2, repeat: Infinity, ease: 'easeInOut', delay: i }}
        >
          {emoji}
        </motion.span>
      ))}

      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 100% 70% at 50% 50%, transparent 35%, rgba(0,0,0,0.55) 100%)',
        }}
      />
    </div>
  );
}
