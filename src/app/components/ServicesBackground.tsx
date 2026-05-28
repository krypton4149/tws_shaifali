import { motion } from 'motion/react';

const FLOATERS = [
  { top: '18%', left: '12%', size: 520, color: 'rgba(212, 175, 55, 0.09)', d: 22 },
  { top: '62%', left: '72%', size: 460, color: 'rgba(139, 21, 56, 0.12)', d: 26 },
  { top: '36%', left: '82%', size: 360, color: 'rgba(255, 182, 193, 0.06)', d: 18 },
] as const;

export default function ServicesBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[#030303]" />

      {/* Different from hero/about: spotlight + diagonal satin sheen */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 120% 85% at 50% 25%, rgba(212, 175, 55, 0.06) 0%, transparent 55%), radial-gradient(ellipse 90% 70% at 15% 75%, rgba(139, 21, 56, 0.14) 0%, transparent 60%), radial-gradient(ellipse 70% 60% at 85% 70%, rgba(255, 182, 193, 0.07) 0%, transparent 55%)',
        }}
      />

      <div className="hero-bg-grain absolute inset-0 opacity-[0.09] mix-blend-overlay" />

      {/* Moving satin band */}
      <motion.div
        className="absolute inset-[-40%] opacity-[0.10]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(115deg, transparent, transparent 68px, rgba(212, 175, 55, 0.7) 68px, rgba(212, 175, 55, 0.7) 69px)',
        }}
        animate={{ rotate: [0, 2, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Slow shimmer sweep */}
      <motion.div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            'linear-gradient(100deg, transparent 35%, rgba(212, 175, 55, 0.06) 50%, transparent 65%)',
          backgroundSize: '200% 100%',
        }}
        animate={{ backgroundPosition: ['200% 0%', '-120% 0%'] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />

      {/* Floating glow pools */}
      {FLOATERS.map((f, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-[110px]"
          style={{
            top: f.top,
            left: f.left,
            width: f.size,
            height: f.size,
            background: `radial-gradient(circle, ${f.color} 0%, transparent 70%)`,
          }}
          animate={{
            x: [0, i % 2 === 0 ? 50 : -40, 0],
            y: [0, i % 2 === 0 ? -35 : 30, 0],
            scale: [1, 1.08, 0.96, 1],
          }}
          transition={{ duration: f.d, repeat: Infinity, ease: 'easeInOut', delay: i * 1.2 }}
        />
      ))}

      {/* Edge vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 110% 90% at 50% 50%, transparent 38%, rgba(0,0,0,0.65) 100%)',
        }}
      />
    </div>
  );
}

