import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface SkillBarProps {
  name: string;
  level: number;
  icon: React.ReactNode;
  delay?: number;
}

const SkillBar = ({ name, level, icon, delay = 0 }: SkillBarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      className="glass-card p-5 rounded-xl group cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.03, y: -5 }}
    >
      <div className="flex items-center gap-4 mb-4">
        <motion.div
          className="w-12 h-12 rounded-lg bg-gradient-cyber flex items-center justify-center text-primary-foreground"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          {icon}
        </motion.div>
        <div className="flex-1">
          <h4 className="font-semibold text-foreground mb-1">{name}</h4>
          <span className="text-sm font-mono text-primary">{level}%</span>
        </div>
      </div>
      
      {/* Progress bar */}
      <div className="h-2 rounded-full bg-muted overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-cyber"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay: delay + 0.3, ease: 'easeOut' }}
        />
      </div>
      
      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 pointer-events-none"
        style={{
          boxShadow: '0 0 30px hsl(185 100% 50% / 0.3), inset 0 0 20px hsl(185 100% 50% / 0.1)',
        }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default SkillBar;
