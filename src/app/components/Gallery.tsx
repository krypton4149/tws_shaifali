import { motion, useInView, AnimatePresence } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { X, ZoomIn, Heart } from 'lucide-react';
import GalleryBackground from './GalleryBackground';

const DEFAULT_IMAGE_POSITION = 'object-[center_22%]';

export type GalleryImage = {
  category: string;
  color: string;
  src?: string;
  objectPosition?: string;
};

type GalleryProps = {
  images?: GalleryImage[];
};

export default function Gallery({ images }: GalleryProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const [failedSrc, setFailedSrc] = useState<Record<string, boolean>>({});

  /* Default home/gallery set */
  const galleryImages: GalleryImage[] = images ?? [
    { category: 'Bridal', color: 'from-burgundy/80 to-pink/60', src: '/Bride.png' },
    { category: 'Hair Styling', color: 'from-gold/80 to-nude/60', src: '/Hair.png' },
    { category: 'Party Makeup', color: 'from-pink/80 to-burgundy/60', src: '/Party.png', objectPosition: 'object-[center_20%]' },
    { category: 'HD Makeup', color: 'from-nude/80 to-gold/60', src: '/Hd.png' },
    { category: 'Engagement', color: 'from-burgundy/80 to-gold/60', src: '/Image1.png' },
    { category: 'Reception', color: 'from-gold/80 to-pink/60', src: '/Eng.png' },
  ];

  useEffect(() => {
    setSelectedImage(null);
    setHoveredImage(null);
  }, [images]);

  return (
    <section ref={ref} className="relative py-24 overflow-hidden bg-[#030303]">
      <GalleryBackground />

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
            Our Work
          </motion.span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl mb-6 font-serif"
            style={{
              background: 'linear-gradient(to right, #ffffff, #D4AF37)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Beauty Transformations
          </h2>
          <p className="text-lg text-nude/80 max-w-2xl mx-auto">
            Witness our signature style and exquisite bridal makeovers
          </p>
        </motion.div>

        {galleryImages.length === 0 ? (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
            className="text-center text-nude/65 text-lg max-w-md mx-auto py-20"
          >
            No photos in this category yet. Choose another filter to see more work.
          </motion.p>
        ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {galleryImages.map((image, i) => {
            const broken = image.src ? failedSrc[image.src] : true;
            const cardKey = image.src ?? `${image.category}-${i}`;
            const imagePosition = image.objectPosition ?? DEFAULT_IMAGE_POSITION;

            return (
              <div
                key={cardKey}
                className="relative w-full aspect-[3/4] rounded-[1.35rem]"
              >
                <motion.article
                  initial={{ opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.08,
                    type: 'spring',
                    stiffness: 120,
                  }}
                  whileHover={{ scale: 1.02 }}
                  onHoverStart={() => setHoveredImage(i)}
                  onHoverEnd={() => setHoveredImage(null)}
                  onClick={() => setSelectedImage(i)}
                  className="group relative cursor-pointer overflow-hidden rounded-[1.35rem] h-full w-full"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <motion.div
                    className={`absolute -inset-[2px] rounded-[1.45rem] bg-gradient-to-br ${image.color} blur-xl opacity-25`}
                    animate={{
                      opacity: hoveredImage === i ? 0.55 : 0.25,
                      scale: hoveredImage === i ? 1.03 : 1,
                    }}
                    transition={{ duration: 0.35 }}
                  />

                  <div className="absolute inset-0 rounded-[1.35rem] p-[1px] bg-gradient-to-br from-gold/25 via-white/10 to-burgundy/20">
                    <div className="relative w-full h-full rounded-[1.3rem] overflow-hidden border border-white/[0.08] bg-zinc-950/90 backdrop-blur-xl">
                      {image.src && !broken ? (
                        <div className="absolute inset-0 overflow-hidden">
                          <motion.img
                            src={image.src}
                            alt={image.category}
                            className={`absolute inset-0 h-full w-full min-h-full min-w-full object-cover select-none pointer-events-none ${imagePosition}`}
                            loading={i < 2 ? 'eager' : 'lazy'}
                            decoding="async"
                            draggable={false}
                            animate={{ scale: hoveredImage === i ? 1.06 : 1 }}
                            transition={{ duration: 0.55 }}
                            onError={() =>
                              image.src &&
                              setFailedSrc((s) => ({ ...s, [image.src]: true }))
                            }
                          />
                        </div>
                      ) : (
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${image.color}`}
                          animate={{ opacity: hoveredImage === i ? 0.55 : 0.92 }}
                          transition={{ duration: 0.25 }}
                        />
                      )}

                      <motion.div
                        className="absolute inset-0"
                        style={{
                          background:
                            'linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.02) 45%, rgba(0,0,0,0.55) 100%)',
                        }}
                        animate={{ opacity: hoveredImage === i ? 0.5 : 0.75 }}
                        transition={{ duration: 0.25 }}
                      />

                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/14 to-transparent"
                        animate={{
                          x: hoveredImage === i ? ['-120%', '120%'] : '-120%',
                        }}
                        transition={{
                          duration: 1.35,
                          repeat: hoveredImage === i ? Infinity : 0,
                          ease: 'linear',
                        }}
                      />

                      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 pb-5 sm:pb-6">
                        <div className="flex items-end justify-between gap-3 sm:gap-4">
                          <div>
                            <div className="text-[10px] uppercase tracking-[0.25em] text-gold/75 mb-2">
                              Transformation
                            </div>
                            <div className="text-xl font-serif text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.65)]">
                              {image.category}
                            </div>
                          </div>
                          <motion.button
                            type="button"
                            animate={{ scale: hoveredImage === i ? [1, 1.08, 1] : 1 }}
                            transition={{
                              duration: 1.2,
                              repeat: hoveredImage === i ? Infinity : 0,
                            }}
                            className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/18 flex items-center justify-center shrink-0"
                            aria-label="Zoom image"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedImage(i);
                            }}
                          >
                            <ZoomIn className="w-5 h-5 text-white" />
                          </motion.button>
                        </div>
                      </div>

                      <AnimatePresence>
                        {hoveredImage === i && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.92, y: -6 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -6 }}
                            className="absolute top-4 right-4 pointer-events-none"
                          >
                            <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/12 flex items-center justify-center">
                              <Heart className="w-5 h-5 text-white" />
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.article>
              </div>
            );
          })}
        </div>
        )}

        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.button
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 180 }}
                whileHover={{ scale: 1.08, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-gradient-to-br from-burgundy to-burgundy/80 text-white flex items-center justify-center shadow-lg shadow-burgundy/50 z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                <X className="w-6 h-6" />
              </motion.button>

              <motion.div
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 220, damping: 26 }}
                className="max-w-5xl w-full rounded-2xl border border-white/10 bg-black/70 backdrop-blur-2xl overflow-hidden relative shadow-2xl shadow-black/50"
                onClick={(e) => e.stopPropagation()}
              >
                {galleryImages[selectedImage]?.src && !failedSrc[galleryImages[selectedImage].src!] ? (
                  <div className="relative w-full bg-black">
                    <div className="relative w-full max-h-[82vh] aspect-auto">
                      <img
                        src={galleryImages[selectedImage].src}
                        alt={galleryImages[selectedImage].category}
                        className="w-full max-h-[82vh] object-contain bg-black"
                        loading="eager"
                        decoding="async"
                        draggable={false}
                        onError={() => {
                          const s = galleryImages[selectedImage].src!;
                          setFailedSrc((prev) => ({ ...prev, [s]: true }));
                        }}
                      />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
                    <div className="absolute bottom-0 inset-x-0 p-6 md:p-8 pointer-events-none">
                      <div className="text-[10px] uppercase tracking-[0.28em] text-gold/70 mb-3">
                        Transformation
                      </div>
                      <div className="text-3xl md:text-4xl font-serif text-white leading-tight">
                        {galleryImages[selectedImage].category}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="w-full aspect-[16/10] bg-gradient-to-br from-burgundy/25 via-black/60 to-gold/20 flex items-center justify-center">
                    <div className="text-center px-6">
                      <div className="text-3xl font-serif text-white mb-2">
                        {galleryImages[selectedImage].category}
                      </div>
                      <div className="text-nude/60 text-sm">
                        Image not available — confirm <code className="text-gold/80">public/Image1.png</code>{' '}
                        and <code className="text-gold/80">public/Image2.png</code> exist.
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
