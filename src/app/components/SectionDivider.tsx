import { motion } from 'motion/react';
import ServiceNameMarquee from './ServiceNameMarquee';

type SectionDividerProps = {
  variant?: 'marquee' | 'line';
};

export default function SectionDivider({ variant = 'line' }: SectionDividerProps) {
  if (variant === 'marquee') {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative overflow-hidden border-y border-gold/10 bg-[#050505]"
      >
        <div className="hero-bg-fabric absolute inset-0 opacity-25 pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            background:
              'radial-gradient(ellipse 80% 100% at 50% 50%, rgba(139, 21, 56, 0.12) 0%, transparent 70%)',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceNameMarquee />
        </div>
      </motion.div>
    );
  }

  return (
    <div className="relative py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
}
