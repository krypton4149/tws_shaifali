import { motion, useInView } from 'motion/react';
import { useMemo, useRef, useState } from 'react';
import PageTransition from '../components/PageTransition';
import Gallery from '../components/Gallery';
import { Filter } from 'lucide-react';

type GalleryPageImage = {
  category: string;
  color: string;
  src?: string;
};

function matchesGalleryFilter(category: string, filterId: string): boolean {
  if (filterId === 'all') return true;
  const c = category.toLowerCase();
  switch (filterId) {
    case 'bridal':
      return c.includes('bridal') || c.includes('hd makeup');
    case 'party':
      return c.includes('party') || c.includes('reception');
    case 'hair':
      return c.includes('hair');
    case 'engagement':
      return c.includes('engagement');
    default:
      return true;
  }
}

type GalleryFilterProps = {
  activeFilter: string;
  onActiveFilterChange: (filterId: string) => void;
};

function GalleryFilter({ activeFilter, onActiveFilterChange }: GalleryFilterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'bridal', label: 'Bridal' },
    { id: 'party', label: 'Party' },
    { id: 'hair', label: 'Hair' },
    { id: 'engagement', label: 'Engagement' },
  ];

  return (
    <section ref={ref} className="relative py-12 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <div className="flex items-center text-gold">
            <Filter className="w-5 h-5 shrink-0" aria-hidden />
            <span className="sr-only">Filter gallery</span>
          </div>

          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onActiveFilterChange(filter.id)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-burgundy to-burgundy/80 text-white border border-gold/50'
                  : 'bg-black/50 text-nude/70 border border-gold/20 hover:border-gold/50'
              }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function BeforeAfter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const transformations = [
    {
      title: 'Bridal Glow',
      color: 'from-burgundy/80 to-pink/60',
      beforeSrc: '/BrideB.png',
      afterSrc: '/Bride2.png',
      afterObjectPosition: 'object-[50%_22%]',
      afterLabelGradient: 'h-12 from-black/55',
    },
    {
      title: 'Hair Magic',
      color: 'from-gold/80 to-nude/60',
      beforeSrc: '/Before.png',
      afterSrc: '/After.png',
    },
    {
      title: 'Party Perfect',
      color: 'from-pink/80 to-burgundy/60',
      beforeSrc: '/PerB.png',
      afterSrc: '/Image1.png',
    },
  ];

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gold/5 to-black" />

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
            Transformations
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6"
            style={{
              background: 'linear-gradient(to right, #ffffff, #D4AF37)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Before & After
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {transformations.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-burgundy/20 to-gold/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />

              <div className="relative bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-xl rounded-2xl border border-gold/20 overflow-hidden">
                <div className="grid grid-cols-2 gap-0.5 bg-black">
                  <div
                    className={`relative aspect-square overflow-hidden ${
                      item.beforeSrc ? 'bg-black' : `bg-gradient-to-br ${item.color}`
                    }`}
                  >
                    {item.beforeSrc ? (
                      <img
                        src={item.beforeSrc}
                        alt={`${item.title} before`}
                        className={`absolute inset-0 w-full h-full object-cover ${item.beforeObjectPosition ?? 'object-top'}`}
                        loading="lazy"
                        decoding="async"
                      />
                    ) : null}
                    <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black/80 to-transparent pointer-events-none z-[1]" />
                    <span className="absolute bottom-2 left-0 right-0 text-center text-white text-xs sm:text-sm tracking-wider font-medium drop-shadow-md z-10">
                      BEFORE
                    </span>
                  </div>
                  <div
                    className={`relative aspect-square overflow-hidden ${
                      item.afterSrc ? 'bg-black' : `bg-gradient-to-br ${item.color} opacity-60`
                    }`}
                  >
                    {item.afterSrc ? (
                      <img
                        src={item.afterSrc}
                        alt={`${item.title} after`}
                        className={`absolute inset-0 w-full h-full object-cover ${item.afterObjectPosition ?? 'object-top'}`}
                        loading="lazy"
                        decoding="async"
                      />
                    ) : null}
                    <div
                      className={`absolute inset-x-0 bottom-0 bg-gradient-to-t to-transparent pointer-events-none z-[1] ${
                        item.afterLabelGradient ?? 'h-14 from-black/80'
                      }`}
                    />
                    <span className="absolute bottom-2 left-0 right-0 text-center text-white text-xs sm:text-sm tracking-wider font-medium drop-shadow-md z-10">
                      AFTER
                    </span>
                  </div>
                </div>
                <div className="py-2.5 px-4 text-center">
                  <h3 className="text-lg sm:text-xl text-gold leading-tight">{item.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const GALLERY_PAGE_IMAGES: GalleryPageImage[] = [
  { category: 'Bridal', color: 'from-burgundy/80 to-pink/60', src: '/Bride.png' },
  { category: 'Bridal', color: 'from-burgundy/70 to-gold/50', src: '/Bride2.png' },
  { category: 'Bridal', color: 'from-burgundy/70 to-pink/50', src: '/Bride3.png' },
  { category: 'Hair Styling', color: 'from-gold/80 to-nude/60', src: '/Hair.png' },
  { category: 'Hair Styling', color: 'from-gold/70 to-pink/40', src: '/Image2.png' },
  { category: 'Hair Styling', color: 'from-gold/70 to-burgundy/40', src: '/Image4.png' },
  { category: 'Engagement', color: 'from-burgundy/80 to-gold/60', src: '/Eng.png' },
  { category: 'HD Makeup', color: 'from-nude/80 to-gold/60', src: '/Hd.png' },
  {
    category: 'Party Makeup',
    color: 'from-pink/80 to-burgundy/60',
    src: '/Party.png',
    objectPosition: 'object-[center_20%]',
  },
  { category: 'Classic', color: 'from-burgundy/60 to-gold/40', src: '/Image1.png' },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredGalleryImages = useMemo(
    () => GALLERY_PAGE_IMAGES.filter((img) => matchesGalleryFilter(img.category, activeFilter)),
    [activeFilter],
  );

  return (
    <PageTransition>
    <div className="pt-20">
      <div className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-burgundy/30 via-black to-gold/20" />

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
            Our Portfolio
          </motion.span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6"
            style={{
              background: 'linear-gradient(to right, #ffffff, #D4AF37, #FFB6C1)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Gallery
          </h1>
          <p className="text-lg md:text-xl text-nude/80 max-w-2xl mx-auto">
            Witness the art of transformation
          </p>
        </motion.div>
      </div>

      <GalleryFilter activeFilter={activeFilter} onActiveFilterChange={setActiveFilter} />
      <Gallery images={filteredGalleryImages} />
      <BeforeAfter />
    </div>
    </PageTransition>
  );
}
