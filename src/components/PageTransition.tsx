import { motion, AnimatePresence } from 'framer-motion';

interface PageTransitionProps {
  isTransitioning: boolean;
  targetProfile: 'technical' | 'copywriting';
}

export const PageTransition = ({ isTransitioning, targetProfile }: PageTransitionProps) => {
  return (
    <AnimatePresence>
      {isTransitioning && (
        <div className="fixed inset-0 z-[10000] pointer-events-none">
          {/* Curtain wipe effect - multiple sliding panels with stagger */}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <motion.div
              key={i}
              className={`absolute inset-0 ${
                targetProfile === 'copywriting'
                  ? 'bg-gradient-to-br from-emerald-500 via-green-600 to-teal-600'
                  : 'bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-600'
              }`}
              initial={{ y: '100%' }}
              animate={{ y: '0%' }}
              exit={{ y: '-100%' }}
              transition={{
                duration: 0.9,
                delay: i * 0.06,
                ease: [0.83, 0, 0.17, 1]
              }}
              style={{
                clipPath: `inset(0 ${83.33 - i * 16.67}% 0 ${i * 16.67}%)`,
                filter: 'brightness(1.1)'
              }}
            >
              {/* Inner glow */}
              <motion.div
                className="absolute inset-0 bg-white/10"
                animate={{
                  opacity: [0, 0.3, 0]
                }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.06 + 0.2
                }}
              />
            </motion.div>
          ))}

          {/* Explosive particle burst */}
          {Array.from({ length: 30 }).map((_, i) => {
            const angle = (i / 30) * Math.PI * 2;
            const distance = 300 + Math.random() * 200;
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;
            
            return (
              <motion.div
                key={`particle-${i}`}
                className="absolute top-1/2 left-1/2"
                initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                animate={{ 
                  x, 
                  y, 
                  scale: [0, 1, 0.8],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: 1.2,
                  delay: 0.3 + i * 0.01,
                  ease: "easeOut"
                }}
              >
                <div 
                  className={`w-2 h-2 rounded-full ${
                    targetProfile === 'copywriting' 
                      ? 'bg-emerald-300' 
                      : 'bg-blue-300'
                  }`}
                  style={{
                    boxShadow: targetProfile === 'copywriting'
                      ? '0 0 10px rgba(16, 185, 129, 0.8)'
                      : '0 0 10px rgba(59, 130, 246, 0.8)'
                  }}
                />
              </motion.div>
            );
          })}

          {/* Center content with enhanced animations */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <div className="text-center relative">
              {/* Glow ring behind icon */}
              <motion.div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full blur-3xl ${
                  targetProfile === 'copywriting'
                    ? 'bg-emerald-400/50'
                    : 'bg-blue-400/50'
                }`}
                animate={{
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Spinning rings around icon */}
              {[0, 1, 2].map((ring) => (
                <motion.div
                  key={`ring-${ring}`}
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 ${
                    targetProfile === 'copywriting'
                      ? 'border-emerald-300/40'
                      : 'border-blue-300/40'
                  }`}
                  style={{
                    width: `${100 + ring * 40}px`,
                    height: `${100 + ring * 40}px`
                  }}
                  animate={{
                    rotate: ring % 2 === 0 ? 360 : -360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    rotate: {
                      duration: 3 + ring,
                      repeat: Infinity,
                      ease: "linear"
                    },
                    scale: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                />
              ))}

              <motion.div
                initial={{ scale: 0, rotate: -360 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 360 }}
                transition={{ 
                  duration: 0.7, 
                  delay: 0.4,
                  ease: [0.34, 1.56, 0.64, 1]
                }}
                className="text-white mb-6 relative z-10"
              >
                <motion.div
                  className="text-9xl"
                  animate={{
                    y: [0, -10, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {targetProfile === 'copywriting' ? '✍️' : '💻'}
                </motion.div>
              </motion.div>
              
              <motion.h2
                className="text-6xl font-bold text-white mb-4 relative z-10"
                initial={{ y: 50, opacity: 0, scale: 0.8 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: -50, opacity: 0, scale: 0.8 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.5,
                  ease: [0.34, 1.56, 0.64, 1]
                }}
              >
                <motion.span
                  animate={{
                    textShadow: targetProfile === 'copywriting'
                      ? ['0 0 20px rgba(16, 185, 129, 0.5)', '0 0 40px rgba(16, 185, 129, 0.8)', '0 0 20px rgba(16, 185, 129, 0.5)']
                      : ['0 0 20px rgba(59, 130, 246, 0.5)', '0 0 40px rgba(59, 130, 246, 0.8)', '0 0 20px rgba(59, 130, 246, 0.5)']
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {targetProfile === 'copywriting' ? 'Copywriting Mode' : 'Technical Mode'}
                </motion.span>
              </motion.h2>
              
              <motion.p
                className="text-2xl text-white/90 relative z-10"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {targetProfile === 'copywriting' 
                  ? '✨ Creative Storytelling & Marketing'
                  : '⚡ AI, Development & Innovation'
                }
              </motion.p>
            </div>
          </motion.div>

          {/* Animated geometric overlay patterns */}
          <motion.div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: targetProfile === 'copywriting'
                ? 'radial-gradient(circle, white 2px, transparent 2px)'
                : 'linear-gradient(45deg, transparent 48%, white 48%, white 52%, transparent 52%)',
              backgroundSize: '40px 40px'
            }}
            initial={{ opacity: 0, scale: 1.5, rotate: 0 }}
            animate={{ 
              opacity: 0.15, 
              scale: 1,
              rotate: 360
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              opacity: { duration: 0.8 },
              scale: { duration: 1.2 },
              rotate: { duration: 20, repeat: Infinity, ease: "linear" }
            }}
          />

          {/* Edge vignette */}
          <motion.div
            className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      )}
    </AnimatePresence>
  );
};
