import { motion, AnimatePresence } from "framer-motion";
import { Code, PenTool } from "lucide-react";
import { useState } from "react";

interface ProfileSwitcherProps {
  onProfileChange: (profile: 'technical' | 'copywriting') => void;
  currentProfile: 'technical' | 'copywriting';
}

const ProfileSwitcher = ({ onProfileChange, currentProfile }: ProfileSwitcherProps) => {
  const [isFlipping, setIsFlipping] = useState(false);

  const isTechnical = currentProfile === 'technical';

  const handleSwitch = () => {
    if (isFlipping) return;
    setIsFlipping(true);
    setTimeout(() => {
      onProfileChange(isTechnical ? 'copywriting' : 'technical');
      setTimeout(() => setIsFlipping(false), 800);
    }, 400);
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[70]">
      <div className="relative" style={{ perspective: '1200px' }}>
        {/* Mobile hint text above the circular mobile button */}
        <div className="fixed md:hidden right-6 bottom-20 flex justify-center pointer-events-none z-[81]">
          <div className="text-xs text-foreground/95 bg-background/60 px-2 py-1 rounded-md">click to switch</div>
        </div>
        {/* 3D Card Container */}
        <motion.div
          animate={{ 
            rotateY: isFlipping ? 180 : 0,
            scale: isFlipping ? 1.15 : 1
          }}
          transition={{ 
            duration: 0.8, 
            ease: [0.34, 1.56, 0.64, 1]
          }}
          style={{ 
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden'
          }}
          className="relative"
        >
          <motion.button
            onClick={handleSwitch}
            disabled={isFlipping}
            whileHover={{ 
              scale: 1.05,
              rotateX: 5,
              rotateY: 5
            }}
            transition={{ duration: 0.2 }}
                style={{ transformStyle: 'preserve-3d' }}
                className={`
                  hidden md:flex relative z-50 flex items-center gap-3 px-6 py-3 md:px-10 md:py-5 rounded-2xl
                  backdrop-blur-md shadow-2xl border-2 overflow-hidden
                  transition-all duration-300 cursor-pointer
                  ${isTechnical
                    ? 'bg-gradient-to-br from-blue-600/95 to-purple-700/95 border-blue-400/40 text-white'
                    : 'bg-gradient-to-br from-emerald-500/95 to-green-700/95 border-emerald-400/40 text-white'
                  }
                `}
          >
            {/* Animated Background Gradient */}
            <motion.div
              animate={{
                background: isTechnical
                  ? ['radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.6) 0%, transparent 50%)',
                     'radial-gradient(circle at 100% 100%, rgba(147, 51, 234, 0.6) 0%, transparent 50%)',
                     'radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.6) 0%, transparent 50%)']
                  : ['radial-gradient(circle at 0% 0%, rgba(16, 185, 129, 0.6) 0%, transparent 50%)',
                     'radial-gradient(circle at 100% 100%, rgba(34, 197, 94, 0.6) 0%, transparent 50%)',
                     'radial-gradient(circle at 0% 0%, rgba(16, 185, 129, 0.6) 0%, transparent 50%)']
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 opacity-60"
              style={{ transform: 'translateZ(-10px)' }}
            />

            {/* Mesh Pattern Overlay */}
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: '20px 20px',
                transform: 'translateZ(5px)'
              }}
            />

            {/* Icon with 3D Effect */}
            <motion.div
              animate={{ 
                rotateZ: isFlipping ? 360 : 0,
                scale: isFlipping ? 1.3 : 1
              }}
              transition={{ duration: 0.8 }}
              style={{ transform: 'translateZ(25px)' }}
              className="relative z-10"
            >
              <motion.div
                className="relative"
                animate={{
                  filter: isFlipping 
                    ? ['drop-shadow(0 0 10px rgba(255,255,255,0.5))', 'drop-shadow(0 0 30px rgba(255,255,255,0.8))', 'drop-shadow(0 0 10px rgba(255,255,255,0.5))']
                    : 'drop-shadow(0 0 5px rgba(255,255,255,0.3))'
                }}
                transition={{ duration: 0.8 }}
              >
                {isTechnical ? (
                  <Code className="w-6 h-6 md:w-8 md:h-8" strokeWidth={2.5} />
                ) : (
                  <PenTool className="w-6 h-6 md:w-8 md:h-8" strokeWidth={2.5} />
                )}
              </motion.div>
            </motion.div>
            
            {/* Text with 3D Depth */}
            <motion.div 
              className="relative z-10 flex flex-col gap-0.5"
              style={{ transform: 'translateZ(20px)' }}
            >
              <span className="font-bold text-sm md:text-xl tracking-wide">
                {isTechnical ? 'Technical' : 'Copywriting'}
              </span>
              <span className="text-xs md:text-xs opacity-80 font-medium">
                {isTechnical ? 'AI & Development' : 'Marketing & Content'}
              </span>
            </motion.div>

            {/* Shine Effect on Flip */}
            <motion.div
              animate={{
                x: isFlipping ? ['0%', '200%'] : '-100%',
                opacity: isFlipping ? [0, 1, 0] : 0
              }}
              transition={{ 
                duration: isFlipping ? 0.8 : 0,
                ease: "easeOut"
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
              style={{ transform: 'translateZ(30px)' }}
            />

            {/* Particle Burst on Flip */}
            <AnimatePresence>
              {isFlipping && (
                <>
                  {Array.from({ length: 12 }).map((_, i) => {
                    const angle = (i / 12) * Math.PI * 2;
                    const radius = 80;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;
                    
                    return (
                      <motion.div
                        key={i}
                        initial={{ 
                          x: 0, 
                          y: 0, 
                          scale: 0,
                          opacity: 1
                        }}
                        animate={{ 
                          x, 
                          y, 
                          scale: [0, 1.5, 0],
                          opacity: [1, 1, 0]
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ 
                          duration: 0.8,
                          delay: i * 0.04,
                          ease: "easeOut"
                        }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        style={{ 
                          transformStyle: 'preserve-3d',
                          transform: `translate3d(${x}px, ${y}px, ${40}px)`
                        }}
                      >
                        <div className={`w-3 h-3 rounded-full blur-sm ${
                          isTechnical ? 'bg-emerald-300' : 'bg-blue-300'
                        }`} />
                      </motion.div>
                    );
                  })}
                </>
              )}
            </AnimatePresence>

            {/* Edge Glow */}
            <motion.div
              animate={{
                opacity: isFlipping ? [0.3, 0.8, 0.3] : 0.3
              }}
              className={`absolute inset-0 rounded-2xl ${
                isTechnical 
                  ? 'shadow-[inset_0_0_20px_rgba(59,130,246,0.5)]'
                  : 'shadow-[inset_0_0_20px_rgba(16,185,129,0.5)]'
              }`}
              style={{ transform: 'translateZ(1px)' }}
            />
          </motion.button>

          {/* 3D Shadow with Depth */}
          <motion.div
            animate={{ 
              opacity: isFlipping ? 0.2 : 0.4,
              scale: isFlipping ? 1.3 : 1,
              y: isFlipping ? 20 : 10
            }}
            transition={{ duration: 0.8 }}
            className="absolute -inset-4 -z-10 rounded-2xl blur-2xl"
            style={{ 
              background: isTechnical
                ? 'linear-gradient(135deg, rgb(59, 130, 246), rgb(147, 51, 234))'
                : 'linear-gradient(135deg, rgb(16, 185, 129), rgb(34, 197, 94))',
              transform: 'translateZ(-30px) rotateX(90deg)',
              transformOrigin: 'center bottom'
            }}
          />
        </motion.div>

        {/* Floating Rings on Flip */}
        <AnimatePresence>
          {isFlipping && (
            <>
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ 
                    scale: 2 + i * 0.5, 
                    opacity: [0, 0.6, 0],
                    rotate: 360
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ 
                    duration: 1, 
                    delay: i * 0.15,
                    ease: "easeOut"
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div 
                    className={`w-32 h-32 rounded-full border-4 ${
                      isTechnical 
                        ? 'border-emerald-400/60' 
                        : 'border-blue-400/60'
                    }`}
                    style={{ transform: `translateZ(${20 + i * 10}px)` }}
                  />
                </motion.div>
              ))}
            </>
          )}
        </AnimatePresence>
        {/* Small fallback circular button for mobile (always visible on small screens) */}
        <div className="md:hidden fixed bottom-6 right-6 z-[80]">
          <motion.button
            onClick={handleSwitch}
            aria-label="Switch profile"
            animate={{ scale: [1, 1.08, 1], boxShadow: ["0 0 0 rgba(0,0,0,0)", "0 0 18px rgba(59,130,246,0.32)", "0 0 0 rgba(0,0,0,0)"] }}
            transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 0.6, ease: "easeInOut" }}
            className="w-12 h-12 rounded-full shadow-lg flex items-center justify-center bg-primary text-white"
          >
            {isTechnical ? <Code className="w-5 h-5" strokeWidth={2} /> : <PenTool className="w-5 h-5" strokeWidth={2} />}
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSwitcher;
