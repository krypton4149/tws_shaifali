import { motion, useInView } from 'motion/react';
import React, { useRef } from 'react';
import PageTransition from '../components/PageTransition';
import About from '../components/About';
import WhyChooseUs from '../components/WhyChooseUs';
import ServicesBackground from '../components/ServicesBackground';
import HeroBackground from '../components/HeroBackground';

function EmojiIcon({
  emoji,
  label,
  className = 'text-4xl',
}: {
  emoji: string;
  label: string;
  className?: string;
}) {
  return (
    <span
      role="img"
      aria-label={label}
      className={`select-none ${className}`}
      // Make multicolor emoji feel closer to the gold-line aesthetic.
      style={{
        filter: 'grayscale(1) sepia(1) saturate(450%) hue-rotate(-10deg) brightness(1.15) contrast(1.05)',
        textShadow: '0 0 18px rgba(212, 175, 55, 0.45)',
      }}
    >
      {emoji}
    </span>
  );
}

function MissionVision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      emoji: '💖',
      title: 'Our Mission',
      description: 'To empower every woman with confidence through exceptional beauty services and personalized care that celebrates their unique beauty.',
    },
    {
      emoji: '👑',
      title: 'Our Vision',
      description: 'To be the most trusted luxury beauty destination in Uttar Pradesh, setting new standards in bridal makeup and beauty excellence.',
    },
    {
      emoji: '🏅',
      title: 'Our Values',
      description: 'Excellence, Hygiene, Innovation, and Customer Satisfaction drive everything we do at TWS Transformation With Shaifali.',
    },
  ];

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      <ServicesBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-burgundy/10 to-black/90" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-5"
            style={{
              background: 'linear-gradient(to right, #ffffff, #D4AF37)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Our Story
          </h2>
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              transformOrigin: 'center',
            }}
            className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-gold/70 to-transparent"
          />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 18,
                duration: 0.6,
                delay: i * 0.2,
              }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-burgundy/20 to-gold/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />

              <div className="relative bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-xl rounded-2xl border border-gold/20 p-8">
                {/* Gold sheen sweep on hover */}
                <motion.div
                  aria-hidden
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(120deg, transparent 35%, rgba(212,175,55,0.25) 50%, transparent 65%)',
                  }}
                  initial={{ x: '-45%' }}
                  whileHover={{ x: '45%' }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                />

                <motion.div
                  whileHover={{ rotate: 20, scale: 1.08 }}
                  animate={
                    isInView
                      ? {
                          y: [0, -6, 0],
                        }
                      : undefined
                  }
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-burgundy to-burgundy/80 flex items-center justify-center shadow-lg shadow-burgundy/30"
                >
                  <EmojiIcon emoji={value.emoji} label={value.title} className="text-3xl" />
                </motion.div>

                <h3 className="text-2xl text-gold mb-4">{value.title}</h3>
                <p className="text-nude/70 leading-relaxed">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      <ServicesBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/30 to-black/90" />

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
            Meet Our Expert
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6"
            style={{
              background: 'linear-gradient(to right, #ffffff, #D4AF37, #FFB6C1)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Shaifali - Founder & Lead Artist
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            className="relative"
            whileHover={{ y: -8, scale: 1.01, rotateX: 2, rotateY: -2 }}
            transition={{ type: 'spring', stiffness: 220, damping: 18 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-burgundy/35 via-gold/20 to-pink/15 rounded-3xl blur-2xl opacity-70" />
            <div className="absolute inset-0 rounded-3xl ring-1 ring-gold/15" />

            <div className="relative overflow-hidden bg-[linear-gradient(135deg,rgba(0,0,0,0.88)_0%,rgba(14,10,12,0.75)_45%,rgba(0,0,0,0.82)_100%)] backdrop-blur-xl rounded-3xl border border-gold/25 p-12">
              {/* Texture + sheen */}
              <div className="hero-bg-fabric absolute inset-0 opacity-[0.22] pointer-events-none" />
              <div className="hero-bg-grain absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none" />
              <motion.div
                aria-hidden
                className="absolute inset-0 opacity-40 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(105deg, transparent 40%, rgba(212, 175, 55, 0.10) 50%, transparent 60%)',
                  backgroundSize: '200% 100%',
                }}
                animate={isInView ? { backgroundPosition: ['200% 0%', '-100% 0%'] } : {}}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              />
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse 90% 70% at 50% 40%, rgba(139, 21, 56, 0.18) 0%, transparent 55%), radial-gradient(ellipse 70% 60% at 85% 70%, rgba(212, 175, 55, 0.10) 0%, transparent 55%)',
                }}
              />

              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1 flex justify-center md:justify-start">
                  <motion.div
                    className="relative w-56 sm:w-60 md:w-64 aspect-square md:-ml-4"
                    animate={isInView ? { y: [0, -8, 0] } : {}}
                    transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                    style={{ transform: 'translateZ(18px)' }}
                  >
                    <div className="absolute -inset-4 rounded-full blur-2xl opacity-70"
                      style={{
                        background:
                          'radial-gradient(circle, rgba(212,175,55,0.18) 0%, rgba(139,21,56,0.16) 35%, transparent 70%)',
                      }}
                    />
                    <div className="relative w-full h-full rounded-full bg-gradient-to-br from-burgundy via-gold to-pink p-[2px]">
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-black/40 to-black/10 flex items-center justify-center border border-gold/20">
                        <div className="relative w-full h-full rounded-full overflow-hidden">
                          <motion.img
                            src="/Own.png"
                            alt="Owner — Shaifali"
                            className="w-full h-full object-cover object-top relative z-10"
                            decoding="async"
                            fetchPriority="high"
                            style={{ transformOrigin: 'top center' }}
                            animate={isInView ? { scale: [1, 1.03, 1] } : {}}
                            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                          />
                          <motion.div
                            aria-hidden
                            className="absolute inset-0"
                            style={{
                              background:
                                'linear-gradient(110deg, rgba(212,175,55,0.00) 35%, rgba(212,175,55,0.16) 50%, rgba(212,175,55,0.00) 65%)',
                              mixBlendMode: 'soft-light',
                            }}
                            animate={isInView ? { x: ['-120%', '120%'] } : {}}
                            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="md:col-span-2 space-y-4">
                  <motion.h3
                    className="text-3xl text-gold"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.25 }}
                    style={{ transform: 'translateZ(12px)' }}
                  >
                    Shaifali
                  </motion.h3>
                  <p className="text-lg text-nude/90">
                    Certified Professional Makeup Artist & Beauty Expert
                  </p>
                  <p className="text-nude/70 leading-relaxed">
                    With years of experience and passion for beauty artistry, Shaifali has transformed
                    thousands of brides and clients, creating stunning looks that enhance natural beauty.
                    Trained in the latest makeup techniques and trends, she brings creativity, precision,
                    and a personal touch to every service.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-4">
                    {[
                      { t: 'Bridal Specialist', e: '👰' },
                      { t: 'HD Makeup Expert', e: '💄' },
                      { t: 'Hair Styling Pro', e: '💇‍♀️' },
                    ].map((chip, idx) => (
                      <motion.span
                        key={chip.t}
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.55, delay: 0.55 + idx * 0.1 }}
                        whileHover={{ y: -2, boxShadow: '0 0 24px rgba(212, 175, 55, 0.22)' }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-burgundy/18 to-gold/10 border border-gold/25 text-gold text-sm"
                        style={{ transform: 'translateZ(8px)' }}
                      >
                        <span className="text-base leading-none select-none" role="img" aria-label={chip.t}>
                          {chip.e}
                        </span>
                        {chip.t}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <PageTransition>
    <div className="pt-20">
      <div className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <HeroBackground />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/35 to-burgundy/30" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#030303] to-transparent" />

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
            Our Story
          </motion.span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6"
            style={{
              background: 'linear-gradient(to right, #ffffff, #D4AF37, #FFB6C1)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            About TWS
          </h1>
          <p className="text-lg md:text-xl text-nude/80 max-w-2xl mx-auto">
            Where beauty meets artistry and luxury meets care
          </p>
        </motion.div>
      </div>

      <About />
      <MissionVision />
      <Team />
      <WhyChooseUs />
    </div>
    </PageTransition>
  );
}
