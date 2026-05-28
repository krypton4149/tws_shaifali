const SERVICE_NAMES = [
  'Bridal Makeup',
  'HD Makeup',
  'Engagement Makeup',
  'Party Makeup',
  'Reception Makeup',
  'Signature Makeup',
  'Glass Makeup',
  'Mehndi Makeup',
  'Facial',
  'Cleanup',
  'Hair Spa',
  'Hair Styling',
  'Hair Cut',
  'Hair Colour',
  'Keratin',
  'Smoothening',
  'Manicure',
  'Pedicure',
  'Body Polishing',
  'Waxing',
  'Luxury Bridal Care',
  'Beauty Care',
] as const;

const BEAUTY_SEPARATORS = ['💄', '💅', '✨', '💇‍♀️', '🪞'] as const;

export default function ServiceNameMarquee() {
  const items = [...SERVICE_NAMES, ...SERVICE_NAMES];

  return (
    <div className="relative w-full overflow-hidden py-5">
      {/* Edge fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-24 bg-gradient-to-r from-[#030303] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-24 bg-gradient-to-l from-[#030303] to-transparent" />

      <div className="service-marquee-track flex w-max items-center gap-10 sm:gap-14">
        {items.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="flex shrink-0 items-center gap-10 sm:gap-14 text-sm sm:text-base tracking-[0.15em] uppercase text-nude/75 whitespace-nowrap"
          >
            <span className="font-medium text-gold/90 hover:text-gold transition-colors">
              {name}
            </span>
            <span
              className="text-base sm:text-lg opacity-90 select-none"
              role="img"
              aria-hidden
            >
              {BEAUTY_SEPARATORS[i % BEAUTY_SEPARATORS.length]}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
