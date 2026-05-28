import { motion, useScroll, useTransform } from 'motion/react';
import PageTransition from '../components/PageTransition';
import SectionDivider from '../components/SectionDivider';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import Instagram from '../components/Instagram';
import GoogleReview from '../components/GoogleReview';
import Contact from '../components/Contact';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <PageTransition>
      <motion.div
        style={{ opacity }}
        className="fixed inset-0 z-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-burgundy/20 via-black to-gold/10" />
      </motion.div>

      <div className="relative z-10">
        <Hero />
        <SectionDivider variant="marquee" />
        <About />
        <SectionDivider />
        <Services />
        <SectionDivider />
        <Gallery />
        <SectionDivider />
        <WhyChooseUs />
        <SectionDivider />
        <Testimonials />
        <SectionDivider />
        <Instagram />
        <SectionDivider />
        <GoogleReview />
        <SectionDivider />
        <Contact />
      </div>
    </PageTransition>
  );
}
