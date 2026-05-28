import { motion } from 'motion/react';
import { Sparkles, Star, Heart } from 'lucide-react';

export default function FloatingParticles() {
  const particles = Array.from({ length: 20 });
  const icons = [Sparkles, Star, Heart];

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {particles.map((_, i) => {
        const Icon = icons[i % icons.length];
        const isIcon = i % 3 === 0;

        return isIcon ? (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              scale: 0,
              rotate: 0,
            }}
            animate={{
              y: [null, Math.random() * -200 - 100],
              x: [null, Math.random() * 200 - 100],
              scale: [0, 1, 0],
              rotate: [0, 360],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          >
            <Icon className="w-4 h-4 text-gold" />
          </motion.div>
        ) : (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-gold/40 to-pink/40"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              filter: 'blur(1px)',
            }}
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            }}
            animate={{
              y: [null, Math.random() * -100 - 50],
              x: [null, Math.random() * 100 - 50],
              opacity: [0, 1, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        );
      })}
    </div>
  );
}
