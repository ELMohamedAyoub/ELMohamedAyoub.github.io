import { MouseEvent, ReactNode, useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

interface MagneticProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

/**
 * Wraps an interactive element so it drifts subtly toward the cursor, then
 * springs back on leave. Renders a plain span (no movement) when the user
 * prefers reduced motion.
 */
export function Magnetic({
  children,
  className,
  strength = 0.35,
}: MagneticProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 15, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 180, damping: 15, mass: 0.4 });

  if (reduceMotion) {
    return <span className={className}>{children}</span>;
  }

  const handleMove = (event: MouseEvent<HTMLSpanElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((event.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((event.clientY - (rect.top + rect.height / 2)) * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span
      ref={ref}
      className={className}
      style={{ x: springX, y: springY, display: "inline-flex" }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
    >
      {children}
    </motion.span>
  );
}
