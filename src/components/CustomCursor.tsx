import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useCursor } from '@/hooks/use-cursor';

type TrailPoint = {
  x: number;
  y: number;
  id: number;
  timestamp: number;
};

const CustomCursor = () => {
  const { position, isHovering, isVisible } = useCursor();
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const lastUpdateRef = useRef(Date.now());
  
  // Dot position (main cursor - follows closely)
  const dotX = useMotionValue(0);
  const dotY = useMotionValue(0);
  
  // Ring position (trails behind)
  const ringX = useMotionValue(0);
  const ringY = useMotionValue(0);
  
  // Dot spring - very fast and sharp
  const dotSpringConfig = { damping: 35, stiffness: 500, mass: 0.2 };
  const dotXSpring = useSpring(dotX, dotSpringConfig);
  const dotYSpring = useSpring(dotY, dotSpringConfig);
  
  // Ring spring - slower for trailing effect
  const ringSpringConfig = { damping: 18, stiffness: 120, mass: 0.9 };
  const ringXSpring = useSpring(ringX, ringSpringConfig);
  const ringYSpring = useSpring(ringY, ringSpringConfig);

  useEffect(() => {
    dotX.set(position.x);
    dotY.set(position.y);
    ringX.set(position.x);
    ringY.set(position.y);

    // Throttle trail updates for smoother line
    const now = Date.now();
    if (now - lastUpdateRef.current > 15) {
      const newPoint = { x: position.x, y: position.y, id: now, timestamp: now };
      setTrail(prev => {
        const updated = [...prev, newPoint];
        // Remove old points (older than 300ms)
        return updated.filter(p => now - p.timestamp < 300).slice(-12);
      });
      lastUpdateRef.current = now;
    }
  }, [position, dotX, dotY, ringX, ringY]);

  const now = Date.now();

  if (!isVisible) return null;

  return (
    <>
      {/* Laser trail with fade effect */}
      <svg 
        className="pointer-events-none fixed inset-0 z-[9997]" 
        style={{ width: '100vw', height: '100vh' }}
      >
        <defs>
          {/* Gradient for fading effect */}
          <linearGradient id="laserGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(34, 197, 94, 0)" />
            <stop offset="50%" stopColor="rgba(34, 197, 94, 0.6)" />
            <stop offset="100%" stopColor="rgba(34, 197, 94, 1)" />
          </linearGradient>
          {/* Glow filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {trail.length > 1 && trail.map((point, index) => {
          if (index === 0) return null;
          const prevPoint = trail[index - 1];
          const age = now - point.timestamp;
          const opacity = Math.max(0, 1 - age / 300);
          
          return (
            <g key={point.id}>
              {/* Outer glow */}
              <motion.line
                x1={prevPoint.x}
                y1={prevPoint.y}
                x2={point.x}
                y2={point.y}
                stroke="rgba(34, 197, 94, 0.3)"
                strokeWidth="8"
                strokeLinecap="round"
                initial={{ opacity: 0 }}
                animate={{ opacity: opacity * 0.4 }}
                filter="blur(4px)"
              />
              {/* Middle glow */}
              <motion.line
                x1={prevPoint.x}
                y1={prevPoint.y}
                x2={point.x}
                y2={point.y}
                stroke="rgba(34, 197, 94, 0.6)"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ opacity: 0 }}
                animate={{ opacity: opacity * 0.7 }}
                filter="blur(2px)"
              />
              {/* Core sharp line */}
              <motion.line
                x1={prevPoint.x}
                y1={prevPoint.y}
                x2={point.x}
                y2={point.y}
                stroke="rgb(34, 197, 94)"
                strokeWidth="1.5"
                strokeLinecap="round"
                initial={{ opacity: 0 }}
                animate={{ opacity: opacity }}
              />
            </g>
          );
        })}
      </svg>

      {/* Main cursor dot - follows mouse closely */}
      <motion.div
        className="pointer-events-none fixed z-[9999]"
        style={{
          left: dotXSpring,
          top: dotYSpring,
          x: '-50%',
          y: '-50%',
        }}
      >
        <motion.div className="relative">
          {/* Outer glow ring */}
          <motion.div
            className="absolute inset-0 w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500/30"
            animate={{
              scale: isHovering ? [1, 1.5, 1] : 1,
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ filter: 'blur(4px)' }}
          />
          
          {/* Middle ring */}
          <motion.div
            className="absolute inset-0 w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-green-500/60"
            animate={{
              scale: isHovering ? 1.8 : 1,
              rotate: 360,
            }}
            transition={{ 
              scale: { duration: 0.3 },
              rotate: { duration: 3, repeat: Infinity, ease: "linear" }
            }}
          />
          
          {/* Core dot */}
          <motion.div
            className="w-2 h-2 rounded-full bg-white shadow-lg shadow-green-500/50"
            animate={{
              scale: isHovering ? [1, 1.3, 1] : 1,
              boxShadow: isHovering 
                ? ['0 0 8px rgba(34, 197, 94, 0.5)', '0 0 20px rgba(34, 197, 94, 0.8)', '0 0 8px rgba(34, 197, 94, 0.5)']
                : '0 0 8px rgba(34, 197, 94, 0.5)',
            }}
            transition={{ 
              duration: 0.8,
              repeat: isHovering ? Infinity : 0,
              ease: "easeInOut"
            }}
          />
          
          {/* Pulsing ring on hover */}
          {isHovering && (
            <motion.div
              className="absolute inset-0 w-2 h-2 rounded-full border-2 border-green-400"
              initial={{ scale: 1, opacity: 0.8 }}
              animate={{ scale: 3, opacity: 0 }}
              transition={{ 
                duration: 1.2, 
                repeat: Infinity, 
                ease: 'easeOut',
                repeatDelay: 0.1
              }}
            />
          )}
        </motion.div>
      </motion.div>

      {/* Trailing ring - follows behind */}
      <motion.div
        className="pointer-events-none fixed z-[9998]"
        style={{
          left: ringXSpring,
          top: ringYSpring,
          x: '-50%',
          y: '-50%',
        }}
      >
        <motion.div
          className="relative"
          animate={{
            rotate: 360,
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: 'linear' 
          }}
        >
          {/* Outer ring glow */}
          <motion.div
            className="absolute inset-0 w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-green-500/20"
            animate={{
              scale: isHovering ? 1.4 : 1,
            }}
            transition={{ duration: 0.4 }}
            style={{ filter: 'blur(2px)' }}
          />
          
          {/* Main ring */}
          <motion.div
            className="w-8 h-8 rounded-full border-2 border-white/80"
            animate={{
              scale: isHovering ? 1.3 : 1,
            }}
            transition={{ duration: 0.4 }}
          />
          
          {/* Accent dots on ring */}
          <motion.div
            className="absolute top-0 left-1/2 w-1 h-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-400"
            animate={{
              scale: isHovering ? [1, 1.5, 1] : 1,
            }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 left-1/2 w-1 h-1 -translate-x-1/2 translate-y-1/2 rounded-full bg-green-400"
            animate={{
              scale: isHovering ? [1, 1.5, 1] : 1,
            }}
            transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }}
          />
        </motion.div>
      </motion.div>
    </>
  );
};

export default CustomCursor;
