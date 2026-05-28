import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Instagram as InstagramIcon, Play } from 'lucide-react';
import InstagramBackground from './InstagramBackground';

const PROFILE_URL = 'https://instagram.com/tws_shaifali';

type InstaPost = {
  type: 'image' | 'video';
  color: string;
  emoji: string;
  href?: string;
  src?: string;
};

const instaPosts: InstaPost[] = [
  {
    type: 'video',
    color: 'from-gold/80 to-nude/60',
    emoji: '💄',
    src: '/Bride.png',
    href: 'https://www.instagram.com/reel/DWRvyX6z_uF/',
  },
  {
    type: 'video',
    color: 'from-burgundy/80 to-pink/60',
    emoji: '👰',
    src: '/Second.png',
    href: 'https://www.instagram.com/reel/C3e6Ca6S991/',
  },
  {
    type: 'video',
    color: 'from-pink/80 to-burgundy/60',
    emoji: '✨',
    src: '/Bride3.png',
    href: 'https://www.instagram.com/reel/C3XDmjxyMAB/',
  },
  {
    type: 'video',
    color: 'from-nude/80 to-gold/60',
    emoji: '💅',
    src: '/Hair.png',
    href: 'https://www.instagram.com/reel/DWQTmBaCS45/',
  },
  {
    type: 'video',
    color: 'from-burgundy/80 to-gold/60',
    emoji: '💖',
    src: '/Five.png',
    href: 'https://www.instagram.com/reel/DWTY_wOiYPp/',
  },
  {
    type: 'video',
    color: 'from-gold/80 to-pink/60',
    emoji: '🌸',
    src: '/Eng.png',
    href: 'https://www.instagram.com/reel/DY17h4UJL3J/',
  },
];

export default function Instagram() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-24 md:py-28 overflow-hidden">
      <InstagramBackground />

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
            Follow Us
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
            @tws_shaifali
          </h2>
          <p className="text-lg text-nude/80 max-w-2xl mx-auto mb-8">
            Get daily inspiration and beauty tips on Instagram
          </p>

          <motion.a
            href={PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: '0 0 28px rgba(212, 175, 55, 0.45)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-medium bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] shadow-lg shadow-pink/20 border border-white/10"
          >
            <InstagramIcon className="w-5 h-5" />
            <span>Follow on Instagram</span>
          </motion.a>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {instaPosts.map((post, i) => (
            <motion.a
              key={i}
              href={post.href || PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.04, y: -4 }}
              className="group relative aspect-square rounded-2xl overflow-hidden block"
            >
              <div className="absolute inset-0 p-[1px] rounded-2xl bg-gradient-to-br from-gold/30 via-white/10 to-burgundy/25">
                <div className="relative w-full h-full rounded-[0.9rem] overflow-hidden bg-[#0a0a0f]">
                  {post.src ? (
                    <>
                      <img
                        src={post.src}
                        alt={`TWS salon — Instagram reel ${i + 1}`}
                        className="absolute inset-0 w-full h-full object-cover object-[center_20%]"
                        loading={i === 0 ? 'eager' : 'lazy'}
                        decoding="async"
                        draggable={false}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-black/20" />
                    </>
                  ) : (
                    <>
                      <div className={`absolute inset-0 bg-gradient-to-br ${post.color} opacity-90`} />
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center text-4xl sm:text-5xl opacity-40 group-hover:opacity-60 transition-opacity"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
                      >
                        <span role="img" aria-hidden>
                          {post.emoji}
                        </span>
                      </motion.div>
                    </>
                  )}

                  {post.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black/35 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-7 h-7 sm:w-8 sm:h-8 text-white fill-white ml-1" />
                      </div>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4">
                      <div className="flex items-center gap-2 text-white text-xs sm:text-sm">
                        <InstagramIcon className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                        <span>View on Instagram</span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 group-hover:ring-gold/40 transition-all duration-300 rounded-[0.9rem]" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
