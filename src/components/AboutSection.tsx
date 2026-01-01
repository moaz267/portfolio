import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Code2, Palette, Rocket } from 'lucide-react';
import SectionTitle from './SectionTitle';
import TiltCard from './TiltCard';

const aboutCards = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable code with best practices and modern patterns.',
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'UI/UX Design',
    description: 'Creating stunning interfaces with attention to detail and user experience.',
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Performance',
    description: 'Optimizing for speed with lazy loading, code splitting, and caching.',
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: 'Innovation',
    description: 'Always exploring new technologies and pushing creative boundaries.',
  },
];

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <SectionTitle title="About Me" subtitle="// Who I am" />

        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            ref={ref}
            className="glass-card p-8 md:p-12 rounded-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
            >
              I'm a passionate <span className="text-primary font-semibold">Frontend React Developer</span> with 
              a deep love for creating immersive digital experiences. With expertise in modern JavaScript frameworks, 
              I transform complex ideas into elegant, performant applications.
            </motion.p>
            <motion.p
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              My focus lies in crafting <span className="text-secondary font-semibold">pixel-perfect interfaces</span> with 
              smooth animations and intuitive user experiences. I believe great design meets exceptional engineering.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 pt-10 border-t border-border/50"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
            >
              {[
                { value: '3+', label: 'Years Experience' },
                { value: '50+', label: 'Projects Completed' },
                { value: '30+', label: 'Happy Clients' },
                { value: '∞', label: 'Lines of Code' },
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <motion.span
                    className="text-3xl md:text-4xl font-bold neon-text block mb-2"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.8 + index * 0.1, type: 'spring' }}
                  >
                    {stat.value}
                  </motion.span>
                  <span className="text-sm text-muted-foreground font-mono">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 + index * 0.1 }}
            >
              <TiltCard className="h-full">
                <motion.div
                  className="text-primary mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  {card.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{card.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{card.description}</p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px tech-line" />
    </section>
  );
};

export default AboutSection;
