import { motion, useMotionValue, useSpring } from 'motion/react';
import { useEffect, useState } from 'react';
import LipstickEmoji from './LipstickEmoji';

export default function CursorFollower() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 22, stiffness: 280 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const hideCursor = () => setIsVisible(false);

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(!!target.closest('a, button, [role="button"], input, textarea, select, label'));
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', onOver);
    window.addEventListener('mouseleave', hideCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', onOver);
      window.removeEventListener('mouseleave', hideCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: '-50%',
        translateY: '-50%',
        opacity: isVisible ? 1 : 0,
      }}
      animate={{ scale: isHovering ? 1.35 : 1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
    >
      <motion.div
        className="absolute inset-0 -m-3 rounded-full bg-gold/15 blur-md"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.span
        className="relative block drop-shadow-[0_0_10px_rgba(212,175,55,0.6)]"
        animate={{ rotate: [0, 12, -10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <LipstickEmoji className={isHovering ? 'text-3xl' : 'text-2xl'} />
      </motion.span>
    </motion.div>
  );
}
