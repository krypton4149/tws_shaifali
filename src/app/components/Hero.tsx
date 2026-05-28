import { motion, useScroll, useTransform } from 'motion/react';
import {
  Calendar,
  ChevronRight,
  Gem,
  Palette,
  ShieldCheck,
  Crown,
} from 'lucide-react';
import { useRef } from 'react';
import LipstickEmoji from './LipstickEmoji';
import HeroBackground from './HeroBackground';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030303]">
      <HeroBackground />

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 15 }}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-burgundy/20 to-gold/20 border border-gold/30 backdrop-blur-sm relative overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-gold/20 to-burgundy/20"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
            <motion.span
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10"
            >
              <LipstickEmoji className="text-lg" />
            </motion.span>
            <span className="text-gold text-sm tracking-wider relative z-10">LUXURY BEAUTY EXPERIENCE</span>
            <motion.span
              className="absolute -right-1 -top-1"
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <LipstickEmoji className="text-sm" />
            </motion.span>
          </motion.div>

          <motion.div className="relative">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight relative"
            >
              {['Transform', 'Your', 'Beauty'].map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.8 }}
                  className="inline-block mr-4"
                  style={{
                    background: 'linear-gradient(135deg, #ffffff, #D4AF37, #FFB6C1)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {word}
                </motion.span>
              ))}
              <br />
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl inline-block"
                style={{
                  background: 'linear-gradient(135deg, #FFB6C1, #D4AF37)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                With Perfection
              </motion.span>
            </motion.h1>

            {/* Decorative elements */}
            <motion.span
              className="absolute -top-8 -left-8 opacity-40"
              animate={{
                rotate: [0, 20, -20, 0],
                scale: [1, 1.15, 1],
              }}
              transition={{
                rotate: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
                scale: { duration: 2, repeat: Infinity },
              }}
            >
              <LipstickEmoji className="text-6xl md:text-7xl" />
            </motion.span>
            <motion.span
              className="absolute -bottom-8 -right-8 opacity-35"
              animate={{
                rotate: [0, -15, 15, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                rotate: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
                scale: { duration: 2.5, repeat: Infinity },
              }}
            >
              <LipstickEmoji className="text-5xl md:text-6xl" />
            </motion.span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-nude/90 max-w-3xl mx-auto"
          >
            Luxury Bridal Makeup • Hair Styling • Beauty Care
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 40px rgba(212, 175, 55, 0.8), 0 0 80px rgba(139, 21, 56, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-burgundy via-burgundy to-burgundy/80 text-white rounded-full flex items-center gap-2 group relative overflow-hidden shadow-lg shadow-burgundy/50"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/30 to-gold/0"
                animate={{ x: ['-200%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <Calendar className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Book Appointment</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronRight className="w-5 h-5 relative z-10" />
              </motion.div>
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 30px rgba(212, 175, 55, 0.6)',
                borderColor: 'rgba(212, 175, 55, 1)'
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-gold/50 text-gold rounded-full flex items-center gap-2 backdrop-blur-sm relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/10 to-gold/0"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10">Explore Services</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
              >
                <ChevronRight className="w-5 h-5 relative z-10" />
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { icon: Gem, label: 'Premium Products' },
            { icon: Palette, label: 'Expert Artists' },
            { icon: ShieldCheck, label: 'Hygienic Care' },
            { icon: Crown, label: 'Bridal Specialists' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + i * 0.1, type: "spring", stiffness: 200 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="flex flex-col items-center gap-2 group"
            >
              <motion.div
                className="w-12 h-12 rounded-full bg-gradient-to-br from-gold/20 to-burgundy/20 flex items-center justify-center border border-gold/30 relative overflow-hidden"
                whileHover={{
                  boxShadow: '0 0 20px rgba(212, 175, 55, 0.5)',
                  borderColor: 'rgba(212, 175, 55, 0.6)'
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-gold/30 to-burgundy/30"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                >
                  <item.icon className="w-6 h-6 text-gold relative z-10" />
                </motion.div>
              </motion.div>
              <span className="text-sm text-nude/80 group-hover:text-gold transition-colors">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-gold rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
