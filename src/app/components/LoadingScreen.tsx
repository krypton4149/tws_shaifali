import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import LipstickEmoji from './LipstickEmoji';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-burgundy/20 via-black to-gold/20"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          </div>

          {/* Decorative 💄 accents (matches hero refresh experience) */}
          <motion.span
            className="absolute top-[18%] left-[12%] opacity-30 pointer-events-none"
            animate={{
              rotate: [0, 15, -10, 0],
              scale: [1, 1.08, 1],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <LipstickEmoji className="text-5xl md:text-6xl" />
          </motion.span>
          <motion.span
            className="absolute bottom-[22%] right-[10%] opacity-25 pointer-events-none"
            animate={{
              rotate: [0, -12, 8, 0],
              scale: [1, 1.12, 1],
            }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            <LipstickEmoji className="text-4xl md:text-5xl" />
          </motion.span>

          <div className="relative z-10 text-center px-6">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, type: 'spring', stiffness: 200 }}
              className="mb-8"
            >
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-burgundy/10 backdrop-blur-sm mb-6"
              >
                <motion.span
                  animate={{ rotate: [0, 12, -8, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <LipstickEmoji className="text-base" />
                </motion.span>
                <span className="text-gold/90 text-xs tracking-[0.2em]">LUXURY BEAUTY</span>
              </motion.div>

              <motion.div
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                className="flex flex-col items-center gap-6 relative"
              >
                <img
                  src="/logo.png"
                  alt="TWS Transformation With Shaifali"
                  className="mx-auto max-h-[min(45vh,260px)] w-auto object-contain"
                  decoding="async"
                />
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <motion.span
                      animate={{ rotate: [0, -10, 10, 0], y: [0, -2, 0] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <LipstickEmoji className="text-3xl md:text-4xl" />
                    </motion.span>
                    <h1
                      className="text-3xl md:text-4xl font-serif"
                      style={{
                        background: 'linear-gradient(to right, #ffffff, #D4AF37)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      TWS
                    </h1>
                  </div>
                  <p className="text-gold/90 text-sm md:text-base tracking-wide">
                    Transformation With Shaifali
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <div className="w-48 h-1 bg-nude/20 rounded-full overflow-hidden mx-auto">
              <motion.div
                className="h-full bg-gradient-to-r from-burgundy via-gold to-pink rounded-full"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
