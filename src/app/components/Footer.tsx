import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Instagram, Phone, MapPin } from 'lucide-react';
import BrandLogo from './Logo';
import FooterBackground from './FooterBackground';

const MAPS_URL =
  'https://www.google.com/maps/dir//TWS+Transformation+With+Shaifali,+20+Foota+Gali,+Pratappur+Road,+near+Balaji+Medical,+Adarsh+Nagar,+Shikohabad,+Uttar+Pradesh+283135';

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];
  const services = ['Bridal Makeup', 'Hair Styling', 'Facial', 'Hair Spa', 'Party Makeup'];

  const columnVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08, duration: 0.5 },
    }),
  };

  return (
    <footer ref={ref} className="relative w-full min-w-full py-14 md:py-16 overflow-hidden">
      <FooterBackground />

      <div className="relative z-10 w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-x-12 xl:gap-x-16 mb-12">
          <motion.div
            custom={0}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={columnVariants}
            className="space-y-4"
          >
            <div className="mb-2">
              <BrandLogo />
            </div>
            <p className="text-nude/65 text-sm leading-relaxed lg:max-w-sm">
              Your trusted destination for luxury beauty services and bridal transformations in Shikohabad.
            </p>
            <div className="flex gap-3 pt-1">
              <motion.a
                href="https://instagram.com/tws_shaifali"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.12, y: -3 }}
                whileTap={{ scale: 0.92 }}
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-burgundy to-burgundy/70 flex items-center justify-center border border-white/10 shadow-lg shadow-black/30"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </motion.a>
              <motion.a
                href="tel:+919389287463"
                whileHover={{ scale: 1.12, y: -3 }}
                whileTap={{ scale: 0.92 }}
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold/90 to-gold/60 flex items-center justify-center border border-white/10 shadow-lg shadow-black/30"
                aria-label="Call salon"
              >
                <Phone className="w-5 h-5 text-black/80" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div custom={1} initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={columnVariants}>
            <h4 className="text-gold font-serif text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-2 text-nude/65 text-sm hover:text-gold transition-colors"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-gold transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div custom={2} initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={columnVariants}>
            <h4 className="text-gold font-serif text-lg mb-4">Services</h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="group inline-flex items-center gap-2 text-nude/65 text-sm hover:text-gold transition-colors"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-gold transition-all duration-300" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div custom={3} initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={columnVariants}>
            <h4 className="text-gold font-serif text-lg mb-4">Contact Info</h4>
            <div className="space-y-3.5 text-sm">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-nude/65 hover:text-gold transition-colors group"
              >
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gold group-hover:scale-110 transition-transform" />
                <span>Pratappur Road, Shikohabad, UP</span>
              </a>
              <a
                href="tel:+919389287463"
                className="flex items-center gap-2.5 text-nude/65 hover:text-gold transition-colors group"
              >
                <Phone className="w-4 h-4 shrink-0 text-gold group-hover:scale-110 transition-transform" />
                +91 93892 87463
              </a>
              <a
                href="https://instagram.com/tws_shaifali"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-nude/65 hover:text-gold transition-colors group"
              >
                <Instagram className="w-4 h-4 shrink-0 text-gold group-hover:scale-110 transition-transform" />
                @tws_shaifali
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="pt-8 border-t border-gold/15"
        >
          <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
            <p className="text-sm text-nude/55">
              © {new Date().getFullYear()} TWS Transformation With Shaifali. All rights reserved.
            </p>
            <p className="flex items-center justify-center gap-2 text-sm text-nude/55">
              Crafted with <Heart className="w-4 h-4 fill-burgundy text-burgundy animate-pulse" /> in Shikohabad
            </p>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.55 }}
            className="mt-5 text-center text-xs sm:text-sm text-nude/45 tracking-wide"
          >
            Website created by{' '}
            <a
              href="https://www.instagram.com/nextgen_digital._/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold/80 font-medium hover:text-gold transition-colors underline-offset-2 hover:underline"
            >
              NextGen Digital Service
            </a>
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
