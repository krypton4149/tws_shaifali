import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import MagneticButton from './MagneticButton';
import ServicesBackground from './ServicesBackground';

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = {
    makeup: {
      title: 'Makeup Services',
      emoji: '💄',
      color: 'from-burgundy via-burgundy/80 to-gold/60',
      services: [
        'Bridal Makeup',
        'HD Makeup',
        'Engagement Makeup',
        'Party Makeup',
        'Reception Makeup',
        'Signature Makeup',
        'Glass Makeup',
        'Mehndi Makeup',
      ],
    },
    skin: {
      title: 'Skin Services',
      emoji: '🧴',
      color: 'from-pink via-pink/80 to-gold/50',
      services: [
        'Facial',
        'Cleanup',
        'Bleach',
        'Detan',
        'Body Polishing',
        'Waxing',
        'Manicure',
        'Pedicure',
      ],
    },
    hair: {
      title: 'Hair Services',
      emoji: '💇‍♀️',
      color: 'from-gold via-gold/80 to-burgundy/60',
      services: [
        'Hair Spa',
        'Hair Styling',
        'Hair Cut',
        'Hair Colour',
        'Keratin',
        'Smoothening',
      ],
    },
  };

  return (
    <section ref={ref} className="relative py-24 overflow-hidden bg-[#030303]">
      <ServicesBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-gold text-sm tracking-widest uppercase mb-4 block"
          >
            Our Services
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6"
            style={{
              background: 'linear-gradient(to right, #ffffff, #D4AF37, #FFB6C1)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Premium Beauty Solutions
          </h2>
          <p className="text-lg text-nude/80 max-w-2xl mx-auto">
            Experience our comprehensive range of luxury beauty services tailored to perfection
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {Object.entries(services).map(([key, category], categoryIndex) => (
            (() => {
              const visibleServices = category.services.slice(0, 8);
              const moreCount = Math.max(0, category.services.length - visibleServices.length);

              return (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              whileHover={{ y: -15, scale: 1.02 }}
              onHoverStart={() => setHoveredCard(categoryIndex)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group relative"
            >
              {/* Animated border glow */}
              <motion.div
                className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${category.color} opacity-25 blur-lg`}
                animate={{
                  opacity: hoveredCard === categoryIndex ? 0.55 : 0.25,
                  scale: hoveredCard === categoryIndex ? 1.03 : 1,
                }}
                transition={{ duration: 0.35 }}
              />

              <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-gold/25 via-white/5 to-burgundy/20 overflow-hidden h-full">
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  animate={{
                    x: hoveredCard === categoryIndex ? ['-100%', '100%'] : '-100%',
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: hoveredCard === categoryIndex ? Infinity : 0,
                    ease: "linear"
                  }}
                />

                <div className="relative bg-black/70 backdrop-blur-xl rounded-2xl border border-white/5 p-8 overflow-hidden h-full flex flex-col min-h-[560px]">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-10`} />
                  </div>

                  <div className="relative z-10 flex flex-col h-full">
                    <motion.div
                      animate={{
                        rotate: hoveredCard === categoryIndex ? [0, 10, -8, 0] : 0,
                        scale: hoveredCard === categoryIndex ? 1.06 : 1,
                      }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 mb-5 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg shadow-burgundy/20 relative overflow-hidden border border-white/10`}
                    >
                      <motion.div
                        className="absolute inset-0 bg-white"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                          scale: hoveredCard === categoryIndex ? 1.4 : 0,
                          opacity: hoveredCard === categoryIndex ? 0.18 : 0,
                        }}
                        transition={{ duration: 0.35 }}
                      />
                      <span className="text-3xl select-none relative z-10" role="img" aria-label={category.title}>
                        {category.emoji}
                      </span>
                    </motion.div>

                    <h3 className="text-2xl mb-2 text-gold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gold group-hover:to-pink transition-all duration-300">
                      {category.title}
                    </h3>
                    <p className="text-sm text-nude/60 mb-6">
                      Premium care, curated for your perfect look.
                    </p>

                    <ul className="space-y-3 mb-8 flex-1 min-h-[260px]">
                      {visibleServices.map((service, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: categoryIndex * 0.2 + i * 0.05 }}
                          whileHover={{ x: 5 }}
                          className="flex items-center gap-3 text-nude/80 group-hover:text-nude transition-colors cursor-pointer"
                        >
                          <motion.span
                            className="w-1.5 h-1.5 rounded-full bg-gold"
                            animate={{
                              scale: hoveredCard === categoryIndex ? [1, 1.5, 1] : 1,
                            }}
                            transition={{
                              duration: 1,
                              repeat: hoveredCard === categoryIndex ? Infinity : 0,
                              delay: i * 0.1,
                            }}
                          />
                          {service}
                        </motion.li>
                      ))}
                      {moreCount > 0 && (
                        <li className="pt-1 text-sm text-gold/70">
                          + {moreCount} more
                        </li>
                      )}
                    </ul>

                    <MagneticButton
                      strength={0.2}
                      className="w-full mt-auto py-3.5 rounded-full relative overflow-hidden group/btn border border-gold/25 bg-gradient-to-r from-burgundy/70 via-black/40 to-burgundy/60 text-white hover:from-burgundy/90 hover:to-burgundy/80 transition-all duration-300"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/25 to-transparent"
                        animate={{ x: ['-200%', '200%'] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      />
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Book Now
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ArrowRight className="w-4 h-4" />
                        </motion.div>
                      </span>
                    </MagneticButton>
                  </div>
                </div>
              </div>
            </motion.div>
              );
            })()
          ))}
        </div>
      </div>
    </section>
  );
}
