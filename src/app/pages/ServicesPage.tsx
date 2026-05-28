import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import PageTransition from '../components/PageTransition';
import Services from '../components/Services';
import { Check, Calendar } from 'lucide-react';
import ServicesPageBackground from '../components/ServicesPageBackground';

function ServiceDetails() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const serviceCategories = [
    {
      title: 'Bridal Packages',
      description: 'Complete bridal transformation services for your special day',
      features: [
        'Pre-bridal consultation',
        'Trial makeup session',
        'D-Day bridal makeup & hair',
        'Premium products',
        'Touch-up kit',
        'Photography-ready finish',
      ],
      color: 'from-burgundy to-burgundy/80',
    },
    {
      title: 'Hair Treatments',
      description: 'Professional hair care and styling services',
      features: [
        'Deep conditioning spa',
        'Keratin treatment',
        'Hair smoothening',
        'Professional styling',
        'Hair coloring',
        'Customized care',
      ],
      color: 'from-gold to-gold/80',
    },
    {
      title: 'Skin Care',
      description: 'Rejuvenating facial and skin treatments',
      features: [
        'Deep cleansing facial',
        'Anti-aging treatments',
        'Detan & bleach',
        'Body polishing',
        'Customized facials',
        'Premium products',
      ],
      color: 'from-pink to-pink/80',
    },
  ];

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      <ServicesPageBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-burgundy/10 to-black/90" />

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
            Premium Packages
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6"
            style={{
              background: 'linear-gradient(to right, #ffffff, #D4AF37)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Specialized Services
          </h2>
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            style={{ transformOrigin: 'center' }}
            className="h-px w-36 mx-auto bg-gradient-to-r from-transparent via-gold/70 to-transparent"
          />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {serviceCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ type: 'spring', stiffness: 240, damping: 18, delay: i * 0.15 }}
              whileHover={{ y: -12, scale: 1.02 }}
              onHoverStart={() => setHoveredCard(i)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group relative"
            >
              {/* Animated border glow */}
              <motion.div
                className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${category.color} opacity-25 blur-lg`}
                animate={{
                  opacity: hoveredCard === i ? 0.6 : 0.25,
                  scale: hoveredCard === i ? 1.03 : 1,
                }}
                transition={{ duration: 0.35 }}
              />

              <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-gold/20 via-white/5 to-burgundy/20 overflow-hidden h-full">
                {/* Shimmer sweep */}
                <motion.div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  animate={{ x: hoveredCard === i ? ['-120%', '120%'] : '-120%' }}
                  transition={{
                    duration: 1.6,
                    repeat: hoveredCard === i ? Infinity : 0,
                    ease: 'linear',
                  }}
                />

                <div className="relative bg-[linear-gradient(135deg,rgba(0,0,0,0.88)_0%,rgba(14,10,12,0.75)_45%,rgba(0,0,0,0.82)_100%)] backdrop-blur-xl rounded-2xl border border-white/5 p-8 h-full overflow-hidden">
                  {/* texture */}
                  <div className="hero-bg-fabric absolute inset-0 opacity-[0.20] pointer-events-none" />
                  <div className="hero-bg-grain absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-10`} />
                  </div>

                  <div className="relative z-10 flex flex-col h-full">
                    <motion.div
                      className={`w-full h-2 rounded-full bg-gradient-to-r ${category.color} mb-6`}
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: 1 } : {}}
                      transition={{ duration: 0.7, delay: 0.2 + i * 0.12 }}
                      style={{ transformOrigin: 'left' }}
                    />

                    <h3 className="text-2xl text-gold mb-3">{category.title}</h3>
                    <p className="text-nude/70 mb-6">{category.description}</p>

                    <ul className="space-y-3 mb-8 flex-1">
                      {category.features.map((feature, j) => (
                        <motion.li
                          key={j}
                          initial={{ opacity: 0, x: -12 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: 0.35 + i * 0.12 + j * 0.06 }}
                          whileHover={{ x: 4 }}
                          className="flex items-center gap-3 text-nude/80"
                        >
                          <motion.span
                            className="w-6 h-6 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0"
                            animate={{
                              boxShadow:
                                hoveredCard === i
                                  ? [
                                      '0 0 0 rgba(212,175,55,0)',
                                      '0 0 18px rgba(212,175,55,0.25)',
                                      '0 0 0 rgba(212,175,55,0)',
                                    ]
                                  : '0 0 0 rgba(212,175,55,0)',
                            }}
                            transition={{
                              duration: 1.6,
                              repeat: hoveredCard === i ? Infinity : 0,
                              delay: j * 0.12,
                            }}
                          >
                            <Check className="w-4 h-4 text-gold" />
                          </motion.span>
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <motion.button
                      whileHover={{ scale: 1.03, boxShadow: '0 0 26px rgba(212, 175, 55, 0.35)' }}
                      whileTap={{ scale: 0.96 }}
                      className={`w-full py-3 rounded-full flex items-center justify-center gap-2 relative overflow-hidden border border-white/10 bg-gradient-to-r ${category.color} text-white`}
                    >
                      <motion.div
                        aria-hidden
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                        animate={{ x: ['-200%', '200%'] }}
                        transition={{ duration: 3.2, repeat: Infinity, ease: 'linear' }}
                      />
                      <Calendar className="w-5 h-5 relative z-10" />
                      <span className="relative z-10">Book Now</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <PageTransition>
    <div className="pt-20">
      <div className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <ServicesPageBackground />
        <div className="absolute inset-0 bg-gradient-to-br from-black/65 via-black/35 to-burgundy/30" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gold text-sm tracking-widest uppercase mb-4 block"
          >
            Our Services
          </motion.span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6"
            style={{
              background: 'linear-gradient(to right, #ffffff, #D4AF37, #FFB6C1)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Beauty Services
          </h1>
          <p className="text-lg md:text-xl text-nude/80 max-w-2xl mx-auto">
            Comprehensive beauty solutions tailored to perfection
          </p>
        </motion.div>
      </div>

      <Services />
      <ServiceDetails />
    </div>
    </PageTransition>
  );
}
