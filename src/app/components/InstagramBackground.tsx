import { motion } from 'motion/react';

const ORBS = [
  { top: '10%', left: '5%', size: 360, color: 'rgba(225, 48, 108, 0.12)', d: 22 },
  { top: '50%', left: '70%', size: 420, color: 'rgba(212, 175, 55, 0.14)', d: 26 },
  { top: '75%', left: '15%', size: 300, color: 'rgba(139, 21, 56, 0.16)', d: 19 },
  { top: '30%', left: '45%', size: 240, color: 'rgba(255, 182, 193, 0.1)', d: 17 },
] as const;

const FLOATERS = [
  { emoji: '📸', top: '14%', left: '7%', d: 14 },
  { emoji: '💄', top: '25%', left: '90%', d: 18 },
  { emoji: '✨', top: '70%', left: '6%', d: 16 },
  { emoji: '💖', top: '82%', left: '88%', d: 20 },
  { emoji: '🌸', top: '45%', left: '4%', d: 15 },
] as const;

export default function InstagramBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[#060508]" />

      {/* Instagram-inspired gradient wash (burgundy / gold / soft pink) */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(ellipse 90% 70% at 30% 20%, rgba(225, 48, 108, 0.08) 0%, transparent 50%), radial-gradient(ellipse 80% 60% at 75% 60%, rgba(212, 175, 55, 0.12) 0%, transparent 55%), radial-gradient(ellipse 70% 50% at 20% 80%, rgba(139, 21, 56, 0.15) 0%, transparent 50%)',
            'radial-gradient(ellipse 90% 70% at 70% 30%, rgba(212, 175, 55, 0.14) 0%, transparent 50%), radial-gradient(ellipse 80% 60% at 25% 70%, rgba(225, 48, 108, 0.1) 0%, transparent 55%), radial-gradient(ellipse 70% 50% at 80% 85%, rgba(255, 182, 193, 0.1) 0%, transparent 50%)',
            'radial-gradient(ellipse 90% 70% at 30% 20%, rgba(225, 48, 108, 0.08) 0%, transparent 50%), radial-gradient(ellipse 80% 60% at 75% 60%, rgba(212, 175, 55, 0.12) 0%, transparent 55%), radial-gradient(ellipse 70% 50% at 20% 80%, rgba(139, 21, 56, 0.15) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="hero-bg-grain absolute inset-0 opacity-[0.1] mix-blend-overlay" />

      {/* Grid lines — subtle “feed” feel */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(212, 175, 55, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.5) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <motion.div
        className="absolute inset-[-25%] opacity-[0.06]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, transparent, transparent 80px, rgba(212, 175, 55, 0.6) 80px, rgba(212, 175, 55, 0.6) 81px)',
        }}
        animate={{ rotate: [0, 3, 0] }}
        transition={{ duration: 32, repeat: Infinity, ease: 'easeInOut' }}
      />

      {ORBS.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-[100px]"
          style={{
            top: orb.top,
            left: orb.left,
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
          }}
          animate={{
            x: [0, i % 2 === 0 ? 40 : -32, 0],
            y: [0, i % 2 === 0 ? -28 : 36, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{ duration: orb.d, repeat: Infinity, ease: 'easeInOut', delay: i * 0.7 }}
        />
      ))}

      {FLOATERS.map((item, i) => (
        <motion.span
          key={i}
          className="absolute text-xl sm:text-2xl select-none opacity-[0.2]"
          style={{ top: item.top, left: item.left }}
          animate={{
            y: [0, -12, 0],
            rotate: [0, i % 2 ? 10 : -10, 0],
            opacity: [0.12, 0.25, 0.12],
          }}
          transition={{ duration: item.d, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
        >
          {item.emoji}
        </motion.span>
      ))}

      <motion.div
        className="absolute inset-0 opacity-45"
        style={{
          background:
            'linear-gradient(110deg, transparent 38%, rgba(212, 175, 55, 0.06) 50%, transparent 62%)',
          backgroundSize: '240% 100%',
        }}
        animate={{ backgroundPosition: ['240% 0%', '-140% 0%'] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 100% 60% at 50% 100%, rgba(0,0,0,0.5) 0%, transparent 55%), radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0,0,0,0.3) 0%, transparent 50%)',
        }}
      />
    </div>
  );
}
