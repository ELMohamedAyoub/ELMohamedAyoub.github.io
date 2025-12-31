import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useCursor } from '@/hooks/use-cursor';

const CustomCursor = () => {
  const { position, isHovering, isVisible } = useCursor();
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const dotX = useMotionValue(0);
  const dotY = useMotionValue(0);
  
  // Main cursor spring - follows closely
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Trailing dot spring - follows with delay
  const dotSpringConfig = { damping: 20, stiffness: 150, mass: 0.8 };
  const dotXSpring = useSpring(dotX, dotSpringConfig);
  const dotYSpring = useSpring(dotY, dotSpringConfig);

  useEffect(() => {
    cursorX.set(position.x);
    cursorY.set(position.y);
    dotX.set(position.x);
    dotY.set(position.y);
  }, [position, cursorX, cursorY, dotX, dotY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Trailing dot */}
      <motion.div
        className="pointer-events-none fixed z-[9998] mix-blend-difference"
        style={{
          left: dotXSpring,
          top: dotYSpring,
          x: '-50%',
          y: '-50%',
        }}
      >
        <motion.div
          className="w-2 h-2 rounded-full bg-primary"
          animate={{
            scale: isHovering ? 1.5 : 1,
          }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
      </motion.div>

      {/* Main cursor ring */}
      <motion.div
        className="pointer-events-none fixed z-[9999] mix-blend-difference"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          x: '-50%',
          y: '-50%',
        }}
      >
        <motion.div
          className="w-8 h-8 rounded-full border-2 border-primary/60"
          animate={{
            scale: isHovering ? 1.5 : 1,
          }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;
