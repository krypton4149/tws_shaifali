import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import TestimonialsBackground from './TestimonialsBackground';

const testimonials = [
  {
    name: 'Yadav Naina',
    role: 'TWS Client',
    rating: 5,
    text: 'Very good service by the owner ✨ Nature bhi bahut polite hai aur work bhi bahut clean & professional tha. Totally satisfied ❤️ Thank u so much Tws salon',
  },
  {
    name: 'Rukmani Pal',
    role: 'Bridal Client',
    rating: 5,
    text: "There is no one like Shaifali ma'am. I have never seen such a professional expert like her till now. I have never seen such excellent work and finishing in anyone's hands. She also takes great care of hygiene.",
  },
  {
    name: 'Shivani Yadav',
    role: 'Verified Client',
    rating: 4,
    text: 'Top class salon facilities in your city Shikohabad at reasonable price with professional, trained, and experienced owner. The owner is very polite, calm and deals with customer very professionally.',
  },
  {
    name: 'Priya Yadav',
    role: 'Hair Styling',
    rating: 5,
    text: 'Absolutely loved the experience at Transform with Shaifali! The owner was super friendly, the ambience was amazing, and the hair styling turned out even better than expected. Highly recommend — go for it! ❤️❤️',
  },
] as const;

function StarRating({ rating, delay = 0 }: { rating: number; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      className="flex flex-wrap items-center gap-2 mb-5"
      aria-label={`${rating} out of 5 stars`}
    >
      <div className="inline-flex items-center gap-0.5 rounded-full bg-black/40 border border-gold/15 px-3 py-1.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={`text-xl sm:text-2xl leading-none select-none ${
              i < rating ? '' : 'opacity-35 grayscale-[0.3]'
            }`}
            role="img"
            aria-hidden
          >
            {i < rating ? '⭐' : '☆'}
          </span>
        ))}
      </div>
      <span className="text-sm font-medium text-white/80 tabular-nums">({rating})</span>
    </motion.div>
  );
}

function TestimonialCard({
  review,
  index,
}: {
  review: (typeof testimonials)[number];
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative h-full"
    >
      <div className="absolute -inset-px rounded-[1.4rem] bg-gradient-to-br from-gold/35 via-burgundy/20 to-pink/25 opacity-0 group-hover:opacity-100 blur-[2px] transition-opacity duration-500" />

      <div className="relative h-full rounded-[1.35rem] p-[1px] bg-gradient-to-br from-gold/30 via-white/10 to-burgundy/25">
        <div className="relative flex flex-col h-full overflow-hidden rounded-[1.3rem] bg-[#0c0c12]/95 backdrop-blur-xl p-6 sm:p-7">
          <motion.div
            className="absolute top-0 right-0 w-32 h-32 bg-gold/8 rounded-full blur-2xl"
            animate={{ opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />

          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-start justify-between gap-3 mb-1">
              <span className="text-4xl leading-none text-gold/20 font-serif select-none">“</span>
              <span className="text-lg opacity-70" aria-hidden>
                💄
              </span>
            </div>

            <StarRating rating={review.rating} delay={0.15 + index * 0.05} />

            <p className="text-sm sm:text-[0.95rem] text-nude/85 leading-relaxed flex-grow mb-6">
              {review.text}
            </p>

            <div className="flex items-center gap-3 pt-5 border-t border-white/[0.08] mt-auto">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-burgundy to-gold flex items-center justify-center text-lg font-serif text-white shadow-md shadow-burgundy/25 shrink-0">
                {review.name.charAt(0)}
              </div>
              <div className="min-w-0">
                <div className="text-base font-medium text-white truncate">{review.name}</div>
                <div className="text-xs sm:text-sm text-gold/65">{review.role}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-24 md:py-28 overflow-hidden">
      <TestimonialsBackground />

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
            Testimonials
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
            What Our Clients Say
          </h2>
          <p className="text-lg text-nude/80 max-w-2xl mx-auto">
            Real experiences from our satisfied clients
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 md:gap-6 max-w-5xl mx-auto">
          {testimonials.map((review, i) => (
            <TestimonialCard key={review.name} review={review} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
