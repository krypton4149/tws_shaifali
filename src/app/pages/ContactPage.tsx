import { motion } from 'motion/react';
import PageTransition from '../components/PageTransition';
import Contact from '../components/Contact';
import GoogleReview from '../components/GoogleReview';
import { Clock, MapPin, Phone, Mail } from 'lucide-react';
import ContactHeroBackground from '../components/ContactHeroBackground';
import ContactBackground from '../components/ContactBackground';

function ContactInfo() {
  const hours = [
    { day: 'Monday - Saturday', time: '09:00 AM - 09:00 PM' },
    { day: 'Sunday', time: '09:00 AM - 08:00 PM' },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      <ContactBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-burgundy/10 to-black/80" />

      {/* Beauty emoji flow */}
      <motion.div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-35"
        animate={{ backgroundPosition: ['0% 0%', '200% 0%'] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(212,175,55,0.10) 0%, transparent 55%), radial-gradient(circle, rgba(139,21,56,0.12) 0%, transparent 55%)',
          backgroundSize: '420px 420px',
        }}
      />
      {[
        { e: '💄', top: '18%', left: '-8%', d: 14, s: 1.05 },
        { e: '✨', top: '38%', left: '-12%', d: 18, s: 1.0 },
        { e: '💅', top: '62%', left: '-10%', d: 16, s: 1.02 },
        { e: '🧴', top: '76%', left: '-14%', d: 20, s: 1.0 },
      ].map((x, i) => (
        <motion.div
          key={i}
          aria-hidden
          className="absolute select-none text-3xl md:text-4xl opacity-[0.14]"
          style={{ top: x.top, left: x.left }}
          animate={{ x: ['0vw', '120vw'], y: [0, i % 2 === 0 ? -18 : 16, 0], rotate: [0, 6, -6, 0] }}
          transition={{ duration: x.d, repeat: Infinity, ease: 'linear', delay: i * 0.8 }}
        >
          <span style={{ display: 'inline-block', transform: `scale(${x.s})` }}>{x.e}</span>
        </motion.div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl mb-6"
                style={{
                  background: 'linear-gradient(to right, #ffffff, #D4AF37)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Visit Our Salon
              </h2>
              <p className="text-nude/70 text-lg">
                Experience luxury beauty services in the heart of Shikohabad
              </p>
            </div>

            <div className="space-y-6">
              <motion.div
                whileHover={{ y: -6, rotate: -0.15 }}
                transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                className="relative overflow-hidden flex items-start gap-4 p-6 rounded-[1.6rem] border border-gold/15 bg-[linear-gradient(135deg,rgba(0,0,0,0.92)_0%,rgba(14,10,12,0.78)_48%,rgba(0,0,0,0.88)_100%)] backdrop-blur-2xl shadow-[0_22px_70px_rgba(0,0,0,0.55)]"
              >
                {/* Unique frame accents */}
                <div className="absolute -inset-px rounded-[1.65rem] bg-gradient-to-br from-gold/25 via-white/5 to-burgundy/20 opacity-70 pointer-events-none" />
                <span className="absolute top-5 left-5 h-6 w-6 border-t border-l border-gold/30 rounded-tl-md pointer-events-none" />
                <span className="absolute top-5 right-5 h-6 w-6 border-t border-r border-gold/20 rounded-tr-md pointer-events-none" />
                <span className="absolute bottom-5 left-5 h-6 w-6 border-b border-l border-gold/20 rounded-bl-md pointer-events-none" />
                <span className="absolute bottom-5 right-5 h-6 w-6 border-b border-r border-gold/30 rounded-br-md pointer-events-none" />
                <div className="absolute inset-y-6 left-6 w-px bg-gradient-to-b from-transparent via-gold/35 to-transparent pointer-events-none" />

                <motion.div
                  aria-hidden
                  className="absolute inset-0 opacity-0"
                  whileHover={{ opacity: 1, x: ['-120%', '120%'] }}
                  transition={{ duration: 1.4, ease: 'linear' }}
                  style={{
                    background:
                      'linear-gradient(110deg, transparent 35%, rgba(212,175,55,0.18) 50%, transparent 65%)',
                  }}
                />
                <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-burgundy to-burgundy/80 flex items-center justify-center flex-shrink-0 border border-white/10 shadow-[0_10px_30px_rgba(139,21,56,0.35)]">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-gold mb-2">Address</div>
                  <div className="text-nude/80">
                    20 Foota Gali Ke Samne,<br />
                    Pratappur Road,<br />
                    Shikohabad, Uttar Pradesh
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -6, rotate: 0.15 }}
                transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                className="relative overflow-hidden flex items-start gap-4 p-6 rounded-[1.6rem] border border-gold/15 bg-[linear-gradient(135deg,rgba(0,0,0,0.92)_0%,rgba(14,10,12,0.78)_48%,rgba(0,0,0,0.88)_100%)] backdrop-blur-2xl shadow-[0_22px_70px_rgba(0,0,0,0.55)]"
              >
                <div className="absolute -inset-px rounded-[1.65rem] bg-gradient-to-br from-gold/25 via-white/5 to-burgundy/20 opacity-70 pointer-events-none" />
                <span className="absolute top-5 left-5 h-6 w-6 border-t border-l border-gold/30 rounded-tl-md pointer-events-none" />
                <span className="absolute top-5 right-5 h-6 w-6 border-t border-r border-gold/20 rounded-tr-md pointer-events-none" />
                <span className="absolute bottom-5 left-5 h-6 w-6 border-b border-l border-gold/20 rounded-bl-md pointer-events-none" />
                <span className="absolute bottom-5 right-5 h-6 w-6 border-b border-r border-gold/30 rounded-br-md pointer-events-none" />
                <div className="absolute inset-y-6 left-6 w-px bg-gradient-to-b from-transparent via-gold/35 to-transparent pointer-events-none" />
                <motion.div
                  aria-hidden
                  className="absolute inset-0 opacity-0"
                  whileHover={{ opacity: 1, x: ['-120%', '120%'] }}
                  transition={{ duration: 1.4, ease: 'linear' }}
                  style={{
                    background:
                      'linear-gradient(110deg, transparent 35%, rgba(212,175,55,0.18) 50%, transparent 65%)',
                  }}
                />
                <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-burgundy to-burgundy/80 flex items-center justify-center flex-shrink-0 border border-white/10 shadow-[0_10px_30px_rgba(139,21,56,0.35)]">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-gold mb-2">Phone</div>
                  <a href="tel:+919389287463" className="text-nude/80 hover:text-gold transition-colors text-lg">
                    +91 93892 87463
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -6, rotate: -0.12 }}
                transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                className="relative overflow-hidden flex items-start gap-4 p-6 rounded-[1.6rem] border border-gold/15 bg-[linear-gradient(135deg,rgba(0,0,0,0.92)_0%,rgba(14,10,12,0.78)_48%,rgba(0,0,0,0.88)_100%)] backdrop-blur-2xl shadow-[0_22px_70px_rgba(0,0,0,0.55)]"
              >
                <div className="absolute -inset-px rounded-[1.65rem] bg-gradient-to-br from-gold/25 via-white/5 to-burgundy/20 opacity-70 pointer-events-none" />
                <span className="absolute top-5 left-5 h-6 w-6 border-t border-l border-gold/30 rounded-tl-md pointer-events-none" />
                <span className="absolute top-5 right-5 h-6 w-6 border-t border-r border-gold/20 rounded-tr-md pointer-events-none" />
                <span className="absolute bottom-5 left-5 h-6 w-6 border-b border-l border-gold/20 rounded-bl-md pointer-events-none" />
                <span className="absolute bottom-5 right-5 h-6 w-6 border-b border-r border-gold/30 rounded-br-md pointer-events-none" />
                <div className="absolute inset-y-6 left-6 w-px bg-gradient-to-b from-transparent via-gold/35 to-transparent pointer-events-none" />
                <motion.div
                  aria-hidden
                  className="absolute inset-0 opacity-0"
                  whileHover={{ opacity: 1, x: ['-120%', '120%'] }}
                  transition={{ duration: 1.4, ease: 'linear' }}
                  style={{
                    background:
                      'linear-gradient(110deg, transparent 35%, rgba(212,175,55,0.18) 50%, transparent 65%)',
                  }}
                />
                <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-burgundy to-burgundy/80 flex items-center justify-center flex-shrink-0 border border-white/10 shadow-[0_10px_30px_rgba(139,21,56,0.35)]">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-gold mb-2">Social Media</div>
                  <a href="https://instagram.com/tws_shaifali" target="_blank" rel="noopener noreferrer" className="text-nude/80 hover:text-gold transition-colors">
                    @tws_shaifali
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-burgundy/25 via-gold/15 to-pink/10 rounded-3xl blur-2xl opacity-70" />

              <div className="relative overflow-hidden bg-[linear-gradient(135deg,rgba(0,0,0,0.90)_0%,rgba(12,10,12,0.78)_45%,rgba(0,0,0,0.86)_100%)] backdrop-blur-2xl rounded-[1.9rem] border border-gold/15 p-8 shadow-[0_24px_85px_rgba(0,0,0,0.6)]">
                <div className="absolute -inset-px rounded-[1.95rem] bg-gradient-to-br from-gold/25 via-white/5 to-burgundy/20 opacity-70 pointer-events-none" />
                <span className="absolute top-6 left-6 h-7 w-7 border-t border-l border-gold/30 rounded-tl-lg pointer-events-none" />
                <span className="absolute top-6 right-6 h-7 w-7 border-t border-r border-gold/20 rounded-tr-lg pointer-events-none" />
                <span className="absolute bottom-6 left-6 h-7 w-7 border-b border-l border-gold/20 rounded-bl-lg pointer-events-none" />
                <span className="absolute bottom-6 right-6 h-7 w-7 border-b border-r border-gold/30 rounded-br-lg pointer-events-none" />
                <div className="hero-bg-fabric absolute inset-0 opacity-[0.20] pointer-events-none" />
                <div className="hero-bg-grain absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none" />
                <motion.div
                  aria-hidden
                  className="absolute inset-0 opacity-35 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(105deg, transparent 40%, rgba(212,175,55,0.10) 50%, transparent 60%)',
                    backgroundSize: '200% 100%',
                  }}
                  animate={{ backgroundPosition: ['200% 0%', '-100% 0%'] }}
                  transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                />
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gold/25 to-burgundy/20 border border-gold/25 flex items-center justify-center shadow-[0_10px_30px_rgba(212,175,55,0.18)]">
                    <Clock className="w-6 h-6 text-gold" />
                  </span>
                  <h3 className="text-2xl text-gold">Opening Hours</h3>
                </div>

                <div className="space-y-4 relative z-10">
                  {hours.map((schedule, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.05 * i }}
                      className="flex items-center justify-between py-4 border-b border-gold/10 last:border-0"
                    >
                      <span className="text-nude/80">{schedule.day}</span>
                      <span className="text-gold">{schedule.time}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 p-4 rounded-2xl bg-gradient-to-r from-burgundy/12 to-gold/10 border border-gold/20 relative z-10">
                  <p className="text-sm text-nude/70 text-center">
                    Walk-ins welcome, but appointments are recommended for bridal services
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <PageTransition>
    <div className="pt-20">
      <div className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <ContactHeroBackground />
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
            Get In Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl mb-5 drop-shadow-[0_18px_50px_rgba(0,0,0,0.6)]"
            style={{
              background: 'linear-gradient(to right, #ffffff, #D4AF37, #FFB6C1)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Contact Us
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.28, duration: 0.8 }}
            style={{ transformOrigin: 'center' }}
            className="h-px w-40 mx-auto bg-gradient-to-r from-transparent via-gold/70 to-transparent mb-6"
          />
          <p className="text-lg md:text-xl text-nude/80 max-w-2xl mx-auto">
            Book your appointment for a luxury beauty experience
          </p>
        </motion.div>
      </div>

      <ContactInfo />
      <Contact />
      <GoogleReview />
    </div>
    </PageTransition>
  );
}
