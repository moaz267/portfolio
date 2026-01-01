import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

const SectionTitle = ({ title, subtitle, align = 'center' }: SectionTitleProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      {subtitle && (
        <motion.span
          className="inline-block font-mono text-sm text-primary tracking-[0.3em] uppercase mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subtitle}
        </motion.span>
      )}
      <h2 className="text-4xl md:text-5xl font-bold text-foreground relative inline-block">
        {title}
        <motion.span
          className="absolute -bottom-3 left-0 h-1 bg-gradient-cyber rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: '60%' } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
      </h2>
    </motion.div>
  );
};

export default SectionTitle;
