import { motion } from 'motion/react';

const ORBS = [
  { top: '10%', left: '8%', size: 360, color: 'rgba(212, 175, 55, 0.11)', d: 22 },
  { top: '55%', left: '78%', size: 400, color: 'rgba(139, 21, 56, 0.14)', d: 26 },
  { top: '78%', left: '15%', size: 280, color: 'rgba(255, 182, 193, 0.09)', d: 19 },
] as const;

const MAP_PULSE = { lat: '72%', left: '38%' };

export default function ContactBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[#050508]" />

      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(ellipse 85% 65% at 25% 25%, rgba(212, 175, 55, 0.1) 0%, transparent 50%), radial-gradient(ellipse 75% 55% at 80% 70%, rgba(139, 21, 56, 0.14) 0%, transparent 55%)',
            'radial-gradient(ellipse 85% 65% at 75% 30%, rgba(139, 21, 56, 0.12) 0%, transparent 50%), radial-gradient(ellipse 75% 55% at 20% 75%, rgba(212, 175, 55, 0.12) 0%, transparent 55%)',
            'radial-gradient(ellipse 85% 65% at 25% 25%, rgba(212, 175, 55, 0.1) 0%, transparent 50%), radial-gradient(ellipse 75% 55% at 80% 70%, rgba(139, 21, 56, 0.14) 0%, transparent 55%)',
          ],
        }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="hero-bg-grain absolute inset-0 opacity-[0.09] mix-blend-overlay" />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(212,175,55,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.4) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
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
            x: [0, i % 2 ? 32 : -26, 0],
            y: [0, i % 2 ? -22 : 30, 0],
          }}
          transition={{ duration: orb.d, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {/* Map pin pulse */}
      <motion.div
        className="absolute w-3 h-3 rounded-full bg-gold/40"
        style={{ top: MAP_PULSE.lat, left: MAP_PULSE.left }}
        animate={{ scale: [1, 2.5, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut' }}
      />
      <motion.span
        className="absolute text-lg opacity-[0.12] select-none"
        style={{ top: '68%', left: '36%' }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        📍
      </motion.span>

      {['💄', '✨', '📞'].map((emoji, i) => (
        <motion.span
          key={i}
          className="absolute text-xl opacity-[0.12] select-none"
          style={{ top: `${15 + i * 25}%`, left: i % 2 ? '90%' : '5%' }}
          animate={{ y: [0, -10, 0], opacity: [0.08, 0.18, 0.08] }}
          transition={{ duration: 11 + i * 2, repeat: Infinity, ease: 'easeInOut', delay: i }}
        >
          {emoji}
        </motion.span>
      ))}

      <motion.div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            'linear-gradient(105deg, transparent 42%, rgba(212, 175, 55, 0.04) 50%, transparent 58%)',
          backgroundSize: '240% 100%',
        }}
        animate={{ backgroundPosition: ['240% 0%', '-140% 0%'] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
      />

      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 100% 70% at 50% 100%, rgba(0,0,0,0.5) 0%, transparent 55%)',
        }}
      />
    </div>
  );
}
