import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import WhyChooseUsBackground from './WhyChooseUsBackground';

const features = [
  {
    emoji: '💎',
    title: 'Luxury Experience',
    description:
      'Premium ambiance with state-of-the-art facilities for an unforgettable beauty experience',
    accent: 'from-gold/25 via-burgundy/10 to-transparent',
    glow: 'shadow-gold/20',
  },
  {
    emoji: '💄',
    title: 'Certified Makeup Artist',
    description:
      'Professionally trained and certified artists with years of expertise in bridal makeup',
    accent: 'from-pink/20 via-burgundy/15 to-transparent',
    glow: 'shadow-pink/20',
  },
  {
    emoji: '💅',
    title: 'Premium Products',
    description:
      'Only the finest international beauty brands and products for flawless results',
    accent: 'from-gold/20 via-pink/10 to-transparent',
    glow: 'shadow-gold/15',
  },
  {
    emoji: '🧼',
    title: 'Hygienic Environment',
    description:
      'Strict hygiene protocols and sanitized equipment for your safety and comfort',
    accent: 'from-nude/15 via-gold/10 to-transparent',
    glow: 'shadow-burgundy/15',
  },
  {
    emoji: '👰',
    title: 'Bridal Specialists',
    description:
      'Specialized in creating stunning bridal looks that make your special day perfect',
    accent: 'from-burgundy/25 via-pink/15 to-transparent',
    glow: 'shadow-burgundy/25',
  },
  {
    emoji: '💖',
    title: 'Personalized Care',
    description:
      'Customized beauty solutions tailored to your unique features and preferences',
    accent: 'from-pink/25 via-gold/10 to-transparent',
    glow: 'shadow-pink/20',
  },
] as const;

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <section ref={ref} className="relative py-24 md:py-28 overflow-hidden">
      <WhyChooseUsBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 md:mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-gold text-sm tracking-widest uppercase mb-4 block"
          >
            Why Choose Us
          </motion.span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl mb-6 font-serif"
            style={{
              background: 'linear-gradient(to right, #ffffff, #D4AF37, #FFB6C1)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            The TWS Difference
          </h2>
          <p className="text-lg text-nude/80 max-w-2xl mx-auto">
            Experience excellence in every detail with our premium beauty services
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {features.map((feature, i) => {
            const isHovered = hoveredFeature === i;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                onHoverStart={() => setHoveredFeature(i)}
                onHoverEnd={() => setHoveredFeature(null)}
                className="group relative"
              >
                <motion.div
                  className={`absolute -inset-px rounded-[1.4rem] bg-gradient-to-br from-gold/40 via-burgundy/30 to-pink/30 opacity-0 blur-sm transition-opacity duration-500 ${isHovered ? 'opacity-70' : 'opacity-0 group-hover:opacity-50'}`}
                  animate={{ opacity: isHovered ? 0.75 : 0 }}
                />

                <div className="relative h-full rounded-[1.35rem] p-[1px] bg-gradient-to-br from-white/15 via-gold/25 to-burgundy/20">
                  <article className="relative h-full overflow-hidden rounded-[1.3rem] bg-[#0a0a0f]/85 backdrop-blur-2xl">
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.accent}`}
                      animate={{ opacity: isHovered ? 1 : 0.55 }}
                      transition={{ duration: 0.35 }}
                    />

                    <motion.div
                      className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-gold/10 blur-3xl"
                      animate={{
                        scale: isHovered ? [1, 1.25, 1] : 1,
                        opacity: isHovered ? 0.5 : 0.25,
                      }}
                      transition={{ duration: 2.5, repeat: isHovered ? Infinity : 0 }}
                    />

                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"
                      animate={{ x: isHovered ? ['-120%', '120%'] : '-120%' }}
                      transition={{
                        duration: 1.8,
                        repeat: isHovered ? Infinity : 0,
                        ease: 'linear',
                      }}
                    />

                    <div className="relative z-10 flex flex-col h-full p-6 md:p-7">
                      <div className="flex items-start justify-between gap-4 mb-5">
                        <motion.div
                          className={`flex items-center justify-center w-[4.25rem] h-[4.25rem] rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 shadow-lg ${feature.glow}`}
                          animate={{
                            scale: isHovered ? 1.08 : 1,
                            rotate: isHovered ? [0, -6, 6, 0] : 0,
                          }}
                          transition={{
                            scale: { duration: 0.3 },
                            rotate: { duration: 0.6, repeat: isHovered ? Infinity : 0, repeatDelay: 1.2 },
                          }}
                        >
                          <span
                            className="text-[2.35rem] leading-none select-none"
                            role="img"
                            aria-hidden
                          >
                            {feature.emoji}
                          </span>
                        </motion.div>

                        <span className="text-[10px] font-medium tracking-[0.2em] text-gold/40 tabular-nums">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                      </div>

                      <h3 className="text-xl md:text-[1.35rem] font-serif text-white mb-2.5 group-hover:text-gold transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-sm md:text-[0.95rem] text-nude/65 leading-relaxed flex-grow">
                        {feature.description}
                      </p>

                      <motion.div
                        className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent origin-left"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: isInView ? 1 : 0 }}
                        transition={{ duration: 0.7, delay: 0.2 + i * 0.08 }}
                      />
                    </div>
                  </article>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
