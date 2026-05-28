import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { MapPin, Phone, MessageCircle, Instagram, ExternalLink } from 'lucide-react';
import ContactBackground from './ContactBackground';

const MAPS_DIRECTIONS_URL =
  'https://www.google.com/maps/dir//TWS+Transformation+With+Shaifali,+20+Foota+Gali,+Pratappur+Road,+near+Balaji+Medical,+Adarsh+Nagar,+Shikohabad,+Uttar+Pradesh+283135/@27.0706421,78.5774402,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x39744b8f59c99253:0xb4b1ac1fe0c0e4ba!2m2!1d78.5782714!2d27.1151997?hl=en&entry=ttu';

const MAP_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464!2d78.5782714!3d27.1151997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39744b8f59c99253%3A0xb4b1ac1fe0c0e4ba!2sTWS%20Transformation%20With%20Shaifali!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin';

const WHATSAPP_NUMBER = '919389287463';

function buildAppointmentWhatsAppMessage(data: {
  name: string;
  phone: string;
  service: string;
  message: string;
}) {
  return [
    'Hello TWS Transformation With Shaifali! 💄',
    '',
    'I would like to book an appointment.',
    '',
    `Name: ${data.name.trim()}`,
    `Phone: ${data.phone.trim()}`,
    `Service: ${data.service.trim()}`,
    '',
    'Message:',
    data.message.trim(),
    '',
    '— Sent from website contact form',
  ].join('\n');
}

function getWhatsAppUrl(text: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

function openWhatsApp(text: string) {
  const url = getWhatsAppUrl(text);
  window.open(url, '_blank', 'noopener,noreferrer');
}

function GlassCard({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      {/* Luxury frame */}
      <div className="absolute -inset-px rounded-[1.55rem] bg-gradient-to-br from-gold/30 via-white/8 to-burgundy/25 opacity-85 blur-[1px]" />
      <div className="relative overflow-hidden rounded-[1.5rem] border border-gold/15 bg-[linear-gradient(135deg,rgba(0,0,0,0.92)_0%,rgba(14,10,12,0.78)_48%,rgba(0,0,0,0.88)_100%)] backdrop-blur-2xl shadow-[0_26px_90px_rgba(0,0,0,0.55)]">
        {/* Corner accents */}
        <span className="absolute top-5 left-5 h-7 w-7 border-t border-l border-gold/30 rounded-tl-lg pointer-events-none" />
        <span className="absolute top-5 right-5 h-7 w-7 border-t border-r border-gold/20 rounded-tr-lg pointer-events-none" />
        <span className="absolute bottom-5 left-5 h-7 w-7 border-b border-l border-gold/20 rounded-bl-lg pointer-events-none" />
        <span className="absolute bottom-5 right-5 h-7 w-7 border-b border-r border-gold/30 rounded-br-lg pointer-events-none" />

        {/* Inner edge + texture */}
        <div className="absolute inset-0 rounded-[1.5rem] ring-1 ring-white/[0.06] pointer-events-none" />
        <div className="hero-bg-fabric absolute inset-0 opacity-[0.16] pointer-events-none" />
        <div className="hero-bg-grain absolute inset-0 opacity-[0.07] mix-blend-overlay pointer-events-none" />

        {/* Vertical accent rail */}
        <div className="absolute inset-y-8 left-7 w-px bg-gradient-to-b from-transparent via-gold/35 to-transparent pointer-events-none" />

        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent pointer-events-none"
          animate={{ x: ['-120%', '120%'] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'linear', repeatDelay: 3.5 }}
        />
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
}

const inputClass =
  'w-full px-4 py-3.5 rounded-xl bg-black/50 border border-white/10 text-nude placeholder:text-nude/35 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all duration-300';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', phone: '', service: '', message: '' });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const message = buildAppointmentWhatsAppMessage(formData);
    openWhatsApp(message);
  };

  return (
    <section ref={ref} className="relative py-24 md:py-28 overflow-hidden">
      <ContactBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 md:mb-16 max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.15 }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/25 bg-white/[0.04] px-5 py-2 mb-6"
          >
            <span className="text-sm" aria-hidden>
              📅
            </span>
            <span className="text-gold text-[10px] sm:text-xs tracking-[0.25em] font-medium uppercase">
              Get In Touch
            </span>
          </motion.div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[3.25rem] leading-[1.15] mb-5 text-white">
            Book Your{' '}
            <span className="text-gold italic">Appointment</span>
          </h2>

          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent to-gold/50" />
            <span className="text-gold/50 text-xs">✦</span>
            <span className="h-px w-12 sm:w-16 bg-gradient-to-l from-transparent to-gold/50" />
          </div>

          <p className="text-base sm:text-lg text-nude/70 leading-relaxed">
            Ready for your transformation? Call, WhatsApp, or send us a message — we&apos;ll get back to you soon.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <GlassCard>
              <div className="p-7 sm:p-8">
                <div className="flex items-center gap-3 mb-7">
                  <span className="text-2xl" aria-hidden>
                    💄
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif text-gold leading-tight">
                    TWS Transformation With Shaifali
                  </h3>
                </div>

                <div className="space-y-5">
                  <motion.a
                    href={MAPS_DIRECTIONS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    className="group flex items-start gap-4 rounded-xl border border-transparent p-3 -m-3 transition-colors hover:border-gold/15 hover:bg-white/[0.03]"
                  >
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-burgundy to-burgundy/70 flex items-center justify-center shrink-0 shadow-md shadow-burgundy/20 group-hover:shadow-gold/20 transition-shadow">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 text-gold/70 text-xs uppercase tracking-wider mb-1">
                        Location
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-nude/90 text-sm sm:text-[0.95rem] leading-relaxed group-hover:text-white transition-colors">
                        20 Foota Gali Ke Samne, Pratappur Road,
                        <br />
                        near Balaji Medical, Adarsh Nagar,
                        <br />
                        Shikohabad, Uttar Pradesh 283135
                      </p>
                      <span className="inline-block mt-2 text-xs text-gold/60 group-hover:text-gold transition-colors">
                        Get directions on Google Maps →
                      </span>
                    </div>
                  </motion.a>

                  <motion.a
                    href="tel:+919389287463"
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-4 rounded-xl p-3 -m-3 hover:bg-white/[0.03] transition-colors"
                  >
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-gold/80 to-gold/50 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-black/80" />
                    </div>
                    <div>
                      <div className="text-gold/70 text-xs uppercase tracking-wider mb-1">Phone</div>
                      <span className="text-nude hover:text-gold transition-colors text-sm sm:text-base">
                        +91 93892 87463
                      </span>
                    </div>
                  </motion.a>

                  <motion.a
                    href="https://instagram.com/tws_shaifali"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-4 rounded-xl p-3 -m-3 hover:bg-white/[0.03] transition-colors"
                  >
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-pink/80 via-burgundy/80 to-gold/60 flex items-center justify-center shrink-0">
                      <Instagram className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-gold/70 text-xs uppercase tracking-wider mb-1">Instagram</div>
                      <span className="text-nude hover:text-gold transition-colors text-sm sm:text-base">
                        @tws_shaifali
                      </span>
                    </div>
                  </motion.a>
                </div>

                <motion.a
                  href={getWhatsAppUrl('Hi! I would like to book an appointment at TWS Salon.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 32px rgba(37, 211, 102, 0.45)' }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-8 w-full py-4 rounded-full flex items-center justify-center gap-2.5 font-medium text-white bg-gradient-to-r from-[#25D366] to-[#128C7E] border border-white/10 shadow-lg shadow-green-900/30"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp Now</span>
                </motion.a>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="relative h-56 sm:h-64 overflow-hidden rounded-[1.35rem]">
                <iframe
                  title="TWS Transformation With Shaifali on Google Maps"
                  src={MAP_EMBED_URL}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 grayscale-[0.4] opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                />
                <a
                  href={MAPS_DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 left-3 right-3 flex items-center justify-center gap-2 rounded-full bg-black/75 backdrop-blur-md border border-gold/25 py-2.5 text-xs sm:text-sm text-gold hover:bg-black/90 hover:border-gold/40 transition-all"
                >
                  <MapPin className="w-4 h-4" />
                  Open directions in Google Maps
                </a>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <GlassCard className="h-full">
              <div className="p-7 sm:p-8 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-7">
                  <span className="text-2xl" aria-hidden>
                    ✉️
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif text-gold">Send us a message</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5 flex-1 flex flex-col">
                  <div>
                    <label className="block text-nude/70 text-xs uppercase tracking-wider mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={inputClass}
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="block text-nude/70 text-xs uppercase tracking-wider mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={inputClass}
                      placeholder="Enter your phone"
                    />
                  </div>

                  <div>
                    <label className="block text-nude/70 text-xs uppercase tracking-wider mb-2">
                      Service Required
                    </label>
                    <select
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className={`${inputClass} appearance-none cursor-pointer`}
                    >
                      <option value="">Select a service</option>
                      <option value="Bridal Makeup">Bridal Makeup</option>
                      <option value="HD Makeup">HD Makeup</option>
                      <option value="Party Makeup">Party Makeup</option>
                      <option value="Hair Styling">Hair Styling</option>
                      <option value="Facial">Facial</option>
                      <option value="Hair Spa">Hair Spa</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-nude/70 text-xs uppercase tracking-wider mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className={`${inputClass} resize-none`}
                      placeholder="Tell us about your requirements"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, boxShadow: '0 0 28px rgba(212, 175, 55, 0.4)' }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-auto w-full py-4 rounded-full flex items-center justify-center gap-2 font-medium text-white bg-gradient-to-r from-burgundy via-burgundy/90 to-burgundy/80 border border-gold/25 shadow-lg shadow-burgundy/25"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Send Message on WhatsApp</span>
                  </motion.button>
                  <p className="text-center text-xs text-nude/50 pt-1">
                    Your details will open in WhatsApp — tap send there to reach us
                  </p>
                </form>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
