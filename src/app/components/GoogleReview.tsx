import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import GoogleReviewBackground from './GoogleReviewBackground';

const GOOGLE_REVIEW_URL = 'https://g.page/r/CbrkwOAfrLG0EBM/review';

function FilledStarRating({ animateIn }: { animateIn: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={animateIn ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.5, duration: 0.45 }}
      className="flex flex-wrap items-center justify-center md:justify-start gap-3"
      aria-label="5 out of 5 stars"
    >
      <div className="relative inline-flex items-center gap-1 rounded-2xl bg-gradient-to-r from-black/60 to-black/40 border border-gold/25 px-4 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_8px_32px_rgba(212,175,55,0.12)]">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gold/10 via-transparent to-gold/5 pointer-events-none" />
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.span
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={animateIn ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.55 + i * 0.08, type: 'spring', stiffness: 280 }}
            className="relative text-2xl sm:text-[1.65rem] leading-none select-none drop-shadow-[0_0_12px_rgba(212,175,55,0.35)]"
            role="img"
            aria-hidden
          >
            ⭐
          </motion.span>
        ))}
      </div>
      <span className="text-sm font-semibold tracking-wide text-gold/90 tabular-nums">(5)</span>
    </motion.div>
  );
}

function QrFrame() {
  return (
    <div className="relative w-[11.5rem] h-[11.5rem] sm:w-[13.5rem] sm:h-[13.5rem]">
      {/* Outer ambient glow */}
      <motion.div
        className="absolute -inset-4 rounded-[1.6rem] bg-gradient-to-br from-[#4285F4]/20 via-gold/25 to-[#EA4335]/15 blur-2xl"
        animate={{ opacity: [0.4, 0.75, 0.4], scale: [0.98, 1.02, 0.98] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Animated Google + gold border ring */}
      <div className="absolute inset-0 rounded-[1.35rem] overflow-hidden p-[3px]">
        <div
          className="absolute inset-[-100%] qr-frame-glow"
          style={{
            background:
              'conic-gradient(from 0deg, #4285F4, #EA4335, #FBBC05, #34A853, #D4AF37, #FFB6C1, #4285F4)',
          }}
        />
        <div className="absolute inset-[3px] rounded-[1.2rem] bg-[#0a0a0f]" />
      </div>

      {/* Inner frame with corner brackets */}
      <div className="absolute inset-[6px] rounded-[1.1rem] border border-white/[0.08] bg-gradient-to-br from-white/[0.06] to-transparent">
        <span className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-gold/70 rounded-tl-sm" />
        <span className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-gold/70 rounded-tr-sm" />
        <span className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-gold/70 rounded-bl-sm" />
        <span className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-gold/70 rounded-br-sm" />

        <div className="absolute inset-3 rounded-xl bg-white shadow-[inset_0_0_0_1px_rgba(0,0,0,0.04),0_12px_40px_rgba(0,0,0,0.35)] overflow-hidden">
          <img
            src="/qr.png"
            alt="Scan to leave a Google review for TWS Transformation With Shaifali"
            className="w-full h-full object-contain p-2 sm:p-2.5"
            loading="lazy"
            decoding="async"
          />
          <div
            className="absolute left-3 right-3 h-[2px] bg-gradient-to-r from-transparent via-gold/60 to-transparent pointer-events-none"
            style={{ animation: 'qr-scan-line 3.5s ease-in-out infinite' }}
          />
        </div>
      </div>

      <motion.div
        className="absolute -bottom-1 -right-1 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-gradient-to-br from-gold via-[#FBBC05] to-burgundy text-lg shadow-[0_8px_24px_rgba(212,175,55,0.45)]"
        animate={{ scale: [1, 1.08, 1], rotate: [0, 6, -6, 0] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden
      >
        ⭐
      </motion.div>

      <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] uppercase tracking-[0.28em] text-gold/50">
        Scan to review
      </p>
    </div>
  );
}

export default function GoogleReview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-24 md:py-28 overflow-hidden">
      <GoogleReviewBackground />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <motion.div
            className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-[#4285F4]/10 via-gold/20 to-[#EA4335]/10 blur-xl"
            animate={{ opacity: [0.35, 0.65, 0.35] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          />

          <div className="relative rounded-[1.85rem] p-[1px] bg-gradient-to-br from-gold/40 via-white/15 to-burgundy/30 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
            <div className="relative overflow-hidden rounded-[1.8rem] bg-[#08080d]/95 backdrop-blur-2xl">
              {/* Card inner mesh */}
              <div
                className="absolute inset-0 opacity-[0.35]"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 20% 30%, rgba(212,175,55,0.08) 0%, transparent 45%), radial-gradient(circle at 80% 70%, rgba(66,133,244,0.06) 0%, transparent 40%)',
                }}
              />

              <motion.div
                className="absolute top-0 right-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
                animate={{ x: [0, 20, 0], y: [0, -14, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-burgundy/15 blur-3xl"
                animate={{ opacity: [0.3, 0.55, 0.3] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              />

              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear', repeatDelay: 2 }}
              />

              {/* Corner ornaments */}
              <span className="absolute top-5 left-5 h-8 w-8 border-t border-l border-gold/30 rounded-tl-lg pointer-events-none" />
              <span className="absolute top-5 right-5 h-8 w-8 border-t border-r border-gold/30 rounded-tr-lg pointer-events-none" />
              <span className="absolute bottom-5 left-5 h-8 w-8 border-b border-l border-gold/30 rounded-bl-lg pointer-events-none" />
              <span className="absolute bottom-5 right-5 h-8 w-8 border-b border-r border-gold/30 rounded-br-lg pointer-events-none" />

              <div className="relative z-10 px-6 py-10 sm:px-10 sm:py-12 md:px-12 md:py-14 text-center">
                <motion.div
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-gold/30 bg-gradient-to-r from-white/[0.06] to-white/[0.02] px-6 py-2.5 shadow-[0_0_24px_rgba(212,175,55,0.08)]"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold/15 text-sm" aria-hidden>
                    ⭐
                  </span>
                  <span className="text-gold text-[10px] sm:text-xs tracking-[0.22em] font-semibold">
                    SHARE YOUR EXPERIENCE
                  </span>
                </motion.div>

                <h2
                  className="mb-4 font-serif text-3xl md:text-4xl lg:text-[2.75rem] leading-tight"
                  style={{
                    background: 'linear-gradient(135deg, #ffffff 0%, #D4AF37 55%, #FFB6C1 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Love Your Experience?
                </h2>

                <p className="mx-auto mb-10 max-w-xl text-base sm:text-lg text-nude/75 md:mb-12">
                  Help us spread the word! Scan the QR code or tap below to leave a review on Google
                </p>

                <div className="flex flex-col items-center justify-center gap-12 md:flex-row md:gap-0 md:items-stretch">
                  {/* QR column */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.35, type: 'spring', stiffness: 120 }}
                    className="flex flex-col items-center justify-center md:flex-1 md:pb-2"
                  >
                    <QrFrame />
                  </motion.div>

                  {/* Divider */}
                  <div className="hidden md:flex flex-col items-center justify-center px-8">
                    <div className="h-32 w-px bg-gradient-to-b from-transparent via-gold/35 to-transparent" />
                    <span className="my-3 text-gold/40 text-xs">✦</span>
                    <div className="h-32 w-px bg-gradient-to-b from-transparent via-gold/35 to-transparent" />
                  </div>
                  <div className="h-px w-24 bg-gradient-to-r from-transparent via-gold/30 to-transparent md:hidden" />

                  {/* CTA column */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.45, type: 'spring', stiffness: 120 }}
                    className="flex flex-col items-center justify-center space-y-6 md:flex-1 md:items-start md:text-left md:pl-2"
                  >
                    <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] px-6 py-6 w-full max-w-sm backdrop-blur-sm">
                      <FilledStarRating animateIn={isInView} />

                      <motion.a
                        href={GOOGLE_REVIEW_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 12 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.65 }}
                        whileHover={{ scale: 1.04, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        className="group relative mt-6 inline-flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-full px-8 py-4 text-white font-medium shadow-lg"
                      >
                        <span
                          className="absolute inset-0 bg-gradient-to-r from-burgundy via-burgundy/90 to-burgundy/80"
                          aria-hidden
                        />
                        <span
                          className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                          style={{
                            background:
                              'linear-gradient(90deg, rgba(66,133,244,0.25), rgba(234,67,53,0.2), rgba(251,188,5,0.2), rgba(52,168,83,0.25))',
                          }}
                          aria-hidden
                        />
                        <span className="absolute inset-0 rounded-full border border-gold/35" aria-hidden />
                        <span className="relative text-lg" aria-hidden>
                          ⭐
                        </span>
                        <span className="relative">Review Us On Google</span>
                      </motion.a>
                    </div>

                    <p className="text-sm text-nude/55 max-w-xs">
                      Your feedback helps us serve you better
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
