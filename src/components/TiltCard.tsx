import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

const TiltCard = ({ children, className = '' }: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const springConfig = { damping: 20, stiffness: 300 };
  const rotateX = useSpring(useTransform(y, [0, 1], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(x, [0, 1], [-10, 10]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const xPos = (e.clientX - rect.left) / rect.width;
    const yPos = (e.clientY - rect.top) / rect.height;
    x.set(xPos);
    y.set(yPos);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute -inset-px rounded-xl opacity-0 blur-xl transition-opacity duration-500"
        style={{
          background: 'linear-gradient(135deg, hsl(185 100% 50% / 0.4), hsl(270 60% 55% / 0.4))',
        }}
        whileHover={{ opacity: 1 }}
      />
      
      {/* Card content */}
      <div className="relative glass-card p-6 rounded-xl" style={{ transform: 'translateZ(20px)' }}>
        {children}
      </div>
    </motion.div>
  );
};

export default TiltCard;
