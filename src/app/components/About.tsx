import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import LipstickEmoji from './LipstickEmoji';

function Counter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}+</span>;
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { emoji: '😊', label: 'Happy Clients', value: 200 },
    { emoji: '👰', label: 'Bridal Transformations', value: 50 },
    { emoji: '💄', label: 'Beauty Services', value: 50 },
  ];

  return (
    <section ref={ref} className="relative py-24 overflow-hidden bg-[#030303]">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[#030303]" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 90% 70% at 50% 40%, rgba(28, 14, 20, 0.9) 0%, rgba(5, 4, 6, 0.98) 55%, #030303 100%)',
        }}
      />
      <div className="hero-bg-fabric absolute inset-0 opacity-20 pointer-events-none" />
      <div className="hero-bg-grain absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none" />
      <motion.div
        className="absolute inset-0 opacity-50 pointer-events-none"
        animate={{
          background: [
            'radial-gradient(ellipse 60% 50% at 20% 60%, rgba(139, 21, 56, 0.15) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 85% 30%, rgba(212, 175, 55, 0.1) 0%, transparent 50%)',
            'radial-gradient(ellipse 55% 45% at 75% 70%, rgba(139, 21, 56, 0.12) 0%, transparent 52%), radial-gradient(ellipse 45% 50% at 15% 25%, rgba(255, 182, 193, 0.06) 0%, transparent 48%)',
            'radial-gradient(ellipse 60% 50% at 20% 60%, rgba(139, 21, 56, 0.15) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 85% 30%, rgba(212, 175, 55, 0.1) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/4 -left-20 w-80 h-80 rounded-full blur-[100px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139, 21, 56, 0.2) 0%, transparent 70%)' }}
        animate={{ x: [0, 60, 0], y: [0, -40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-16 w-72 h-72 rounded-full blur-[100px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 70%)' }}
        animate={{ x: [0, -50, 0], y: [0, 35, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <motion.div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            'linear-gradient(105deg, transparent 42%, rgba(212, 175, 55, 0.05) 50%, transparent 58%)',
          backgroundSize: '200% 100%',
        }}
        animate={{ backgroundPosition: ['200% 0%', '-100% 0%'] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
      />

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
            About Us
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6"
            style={{
              background: 'linear-gradient(to right, #ffffff, #D4AF37)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            TWS Transformation With Shaifali
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 relative"
          >
            {/* Decorative quote mark */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 0.1, scale: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="absolute -top-8 -left-8 text-9xl text-gold"
            >
              "
            </motion.div>
            {[
              {
                text: "Welcome to TWS Transformation With Shaifali, where luxury meets artistry in the heart of Shikohabad, Uttar Pradesh.",
                highlight: "TWS Transformation With Shaifali",
                delay: 0.3,
              },
              {
                text: "We specialize in creating breathtaking bridal makeovers and premium beauty services that transform your natural beauty into perfection. Our expert makeup artists use only the finest premium products to ensure you look and feel your absolute best.",
                delay: 0.4,
              },
              {
                text: "With a commitment to professional hygiene and personalized care, we've become the trusted choice for brides and beauty enthusiasts across the region. Every service is crafted with precision, passion, and attention to detail.",
                delay: 0.5,
              },
            ].map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: paragraph.delay }}
                className={`${i === 0 ? 'text-lg text-nude/90' : 'text-nude/80'} leading-relaxed relative z-10`}
              >
                {paragraph.highlight ? (
                  <>
                    Welcome to{' '}
                    <motion.span
                      className="text-gold relative"
                      whileHover={{ scale: 1.05 }}
                      style={{ display: 'inline-block' }}
                    >
                      {paragraph.highlight}
                      <motion.span
                        className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-gold to-pink"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: '100%' } : {}}
                        transition={{ delay: 0.8, duration: 0.6 }}
                      />
                    </motion.span>
                    , where luxury meets artistry in the heart of Shikohabad, Uttar Pradesh.
                  </>
                ) : (
                  paragraph.text
                )}
              </motion.p>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212, 175, 55, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-burgundy to-burgundy/80 text-white rounded-full cursor-pointer relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/30 to-gold/0"
                animate={{ x: ['-200%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <motion.span
                animate={{ rotate: [0, 12, -8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10"
              >
                <LipstickEmoji className="text-base" />
              </motion.span>
              <span className="relative z-10">Experience Luxury</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-gold/30 bg-gradient-to-br from-burgundy/20 to-gold/10 backdrop-blur-sm p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-burgundy/10 to-transparent" />
              <div className="relative grid grid-cols-3 gap-8">
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
                    className="text-center"
                  >
                    <motion.div
                      className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-gold/25 to-burgundy/25 flex items-center justify-center border border-gold/40"
                      whileHover={{ scale: 1.08, boxShadow: '0 0 24px rgba(212, 175, 55, 0.35)' }}
                    >
                      <span className="text-3xl md:text-4xl select-none" role="img" aria-label={stat.label}>
                        {stat.emoji}
                      </span>
                    </motion.div>
                    <div className="text-3xl md:text-4xl mb-2"
                      style={{
                        background: 'linear-gradient(to right, #ffffff, #D4AF37)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      <Counter end={stat.value} />
                    </div>
                    <div className="text-sm text-nude/70">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
