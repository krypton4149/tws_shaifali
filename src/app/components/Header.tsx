import { motion, useScroll } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Instagram } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import BrandLogo from './Logo';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setScrolled(latest > 50);
    });

    return () => unsubscribe();
  }, [scrollY]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-black/90 backdrop-blur-xl border-b border-gold/20'
            : 'bg-black/40 backdrop-blur-sm border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-[1fr_auto] md:grid-cols-[1fr_auto_1fr] items-center h-16 md:h-20 gap-4">
            {/* Logo */}
            <Link to="/" className="justify-self-start min-w-0">
              <motion.div whileHover={{ scale: 1.02 }} className="cursor-pointer">
                <BrandLogo />
              </motion.div>
            </Link>

            {/* Desktop Navigation — centered */}
            <nav className="hidden md:flex items-center justify-center gap-8 col-start-2">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path}>
                  <motion.div whileHover={{ y: -2 }} className="relative group">
                    <span
                      className={`text-sm tracking-wide transition-colors ${
                        location.pathname === link.path
                          ? 'text-gold'
                          : 'text-white/85 hover:text-gold'
                      }`}
                    >
                      {link.name}
                    </span>
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-burgundy via-gold to-pink"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      animate={{ scaleX: location.pathname === link.path ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </Link>
              ))}
            </nav>

            {/* Desktop actions */}
            <div className="hidden md:flex items-center justify-end gap-5 col-start-3">
              <motion.a
                href="https://instagram.com/tws_shaifali"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08, color: '#D4AF37' }}
                className="text-white/70 hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="tel:+919389287463"
                whileHover={{ x: 2 }}
                className="flex items-center gap-2 text-sm text-white/90 hover:text-gold transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Book Now</span>
              </motion.a>
            </div>

            {/* Mobile menu toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden justify-self-end w-10 h-10 rounded-full border border-gold/30 bg-black/60 flex items-center justify-center"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="w-5 h-5 text-gold" /> : <Menu className="w-5 h-5 text-white" />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : '100%' }}
        transition={{ duration: 0.3 }}
        className="fixed inset-y-0 right-0 z-40 w-full sm:w-80 bg-black/95 backdrop-blur-xl border-l border-gold/20 md:hidden"
        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          <div className="mb-8 pb-6 border-b border-gold/15">
            <BrandLogo compact />
          </div>

          <nav className="flex-1 space-y-2">
            {navLinks.map((link, i) => (
              <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)}>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 20 }}
                  transition={{ delay: i * 0.08 }}
                  className={`px-5 py-3.5 rounded-lg transition-all ${
                    location.pathname === link.path
                      ? 'bg-gold/10 border border-gold/25 text-gold'
                      : 'text-white/80 hover:bg-white/5'
                  }`}
                >
                  <span className="text-base tracking-wide">{link.name}</span>
                </motion.div>
              </Link>
            ))}
          </nav>

          <div className="mb-8 space-y-3 pt-4 border-t border-gold/15">
            <motion.a
              href="tel:+919389287463"
              whileTap={{ scale: 0.98 }}
              className="w-full py-3.5 bg-gradient-to-r from-burgundy to-burgundy/80 text-white rounded-full flex items-center justify-center gap-2 text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Book Appointment</span>
            </motion.a>
            <motion.a
              href="https://instagram.com/tws_shaifali"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 border border-gold/30 text-gold rounded-full flex items-center justify-center gap-2 text-sm"
            >
              <Instagram className="w-4 h-4" />
              <span>@tws_shaifali</span>
            </motion.a>
          </div>
        </div>
      </motion.div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden"
        />
      )}
    </>
  );
}
