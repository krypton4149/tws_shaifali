import { motion } from 'motion/react';

const ORBS = [
  { top: '8%', left: '8%', size: 380, color: 'rgba(212, 175, 55, 0.14)', d: 19 },
  { top: '55%', left: '78%', size: 420, color: 'rgba(139, 21, 56, 0.16)', d: 24 },
  { top: '72%', left: '18%', size: 300, color: 'rgba(255, 182, 193, 0.1)', d: 21 },
  { top: '28%', left: '55%', size: 260, color: 'rgba(212, 175, 55, 0.08)', d: 17 },
] as const;

const FLOAT_EMOJIS = [
  { emoji: '💄', top: '12%', left: '6%', size: 'text-2xl', d: 14 },
  { emoji: '✨', top: '22%', left: '88%', size: 'text-xl', d: 18 },
  { emoji: '👑', top: '68%', left: '4%', size: 'text-xl', d: 16 },
  { emoji: '💐', top: '78%', left: '90%', size: 'text-2xl', d: 20 },
  { emoji: '💋', top: '42%', left: '92%', size: 'text-lg', d: 15 },
  { emoji: '💖', top: '48%', left: '3%', size: 'text-lg', d: 17 },
] as const;

export default function WhyChooseUsBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[#050508]" />

      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(ellipse 100% 80% at 20% 20%, rgba(139, 21, 56, 0.22) 0%, transparent 50%), radial-gradient(ellipse 90% 70% at 80% 80%, rgba(212, 175, 55, 0.12) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255, 182, 193, 0.06) 0%, transparent 60%)',
            'radial-gradient(ellipse 100% 80% at 75% 25%, rgba(139, 21, 56, 0.18) 0%, transparent 50%), radial-gradient(ellipse 90% 70% at 25% 75%, rgba(212, 175, 55, 0.16) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255, 182, 193, 0.08) 0%, transparent 60%)',
            'radial-gradient(ellipse 100% 80% at 20% 20%, rgba(139, 21, 56, 0.22) 0%, transparent 50%), radial-gradient(ellipse 90% 70% at 80% 80%, rgba(212, 175, 55, 0.12) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255, 182, 193, 0.06) 0%, transparent 60%)',
          ],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="hero-bg-grain absolute inset-0 opacity-[0.1] mix-blend-overlay" />

      {/* Rotating soft rings */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(90vw,720px)] h-[min(90vw,720px)] rounded-full border border-gold/[0.07]"
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(70vw,560px)] h-[min(70vw,560px)] rounded-full border border-burgundy/[0.12]"
        animate={{ rotate: -360 }}
        transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
      />

      {/* Dot constellation */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(212, 175, 55, 0.35) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <motion.div
        className="absolute inset-[-30%] opacity-[0.07]"
        style={{
          backgroundImage:
            'repeating-conic-gradient(from 0deg at 50% 50%, transparent 0deg 8deg, rgba(212, 175, 55, 0.5) 8deg 9deg)',
        }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
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
            x: [0, i % 2 === 0 ? 36 : -28, 0],
            y: [0, i % 2 === 0 ? -24 : 32, 0],
            scale: [1, 1.12, 0.94, 1],
          }}
          transition={{ duration: orb.d, repeat: Infinity, ease: 'easeInOut', delay: i * 0.8 }}
        />
      ))}

      {FLOAT_EMOJIS.map((item, i) => (
        <motion.span
          key={i}
          className={`absolute ${item.size} select-none opacity-[0.22]`}
          style={{ top: item.top, left: item.left }}
          animate={{
            y: [0, -14, 0],
            rotate: [0, i % 2 === 0 ? 8 : -8, 0],
            opacity: [0.15, 0.28, 0.15],
          }}
          transition={{ duration: item.d, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
        >
          {item.emoji}
        </motion.span>
      ))}

      <motion.div
        className="absolute inset-0 opacity-50"
        style={{
          background:
            'linear-gradient(105deg, transparent 40%, rgba(212, 175, 55, 0.05) 50%, transparent 60%)',
          backgroundSize: '250% 100%',
        }}
        animate={{ backgroundPosition: ['250% 0%', '-150% 0%'] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 100% 80% at 50% 100%, rgba(0,0,0,0.5) 0%, transparent 55%), radial-gradient(ellipse 90% 60% at 50% 0%, rgba(0,0,0,0.35) 0%, transparent 50%)',
        }}
      />
    </div>
  );
}
