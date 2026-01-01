import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowDown, Phone, Linkedin, Mail } from 'lucide-react';
import GlitchText from './GlitchText';
import MagneticButton from './MagneticButton';
import profileImage from '@/assets/profile.png';

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  // Scroll to section helper
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />

      {/* Animated scan line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"
          animate={{ y: ['-100vh', '100vh'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <motion.div
        className="container mx-auto px-6 z-10"
        style={{ y, opacity, scale }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              className="inline-block font-mono text-sm text-primary tracking-[0.3em] uppercase mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {'// Welcome to my portfolio'}
            </motion.span>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <GlitchText text="Frontend" delay={0.5} />
              <br />
              <span className="neon-text">
                <GlitchText text="Developer" delay={0.8} />
              </span>
            </h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 font-mono"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              Crafting high-performance, pixel-perfect web experiences with
              <span className="text-primary"> React</span>,
              <span className="text-secondary"> JavaScript</span>, and
              <span className="text-primary"> cutting-edge animations</span>.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
            >
              {/* Scroll to Projects Section */}
              <MagneticButton
                variant="fill"
                onClick={() => scrollToSection('#projects')}
              >
                View Projects
              </MagneticButton>

              {/* Scroll to Contact Section */}
              <MagneticButton
                variant="outline"
                onClick={() => scrollToSection('#contact')}
              >
                <Mail size={18} />
                Contact Me
              </MagneticButton>
            </motion.div>

            {/* Social links */}
            <motion.div
              className="flex gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
            >
              {[
                { icon: <Phone size={20} />, href: 'https://wa.me/201234567890' },
                { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/moaz-elhenawy?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
                { icon: <Mail size={20} />, href: 'mailto:moazelhenawy23@gmail.com'
 },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative">
              {/* Outer glow ring */}
              <motion.div
                className="absolute -inset-4 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, hsl(185 100% 50% / 0.3), hsl(270 60% 55% / 0.3))',
                  filter: 'blur(20px)',
                }}
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Rotating border */}
              <motion.div
                className="absolute -inset-2 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, hsl(185 100% 50%), hsl(270 60% 55%), hsl(185 100% 50%))',
                  padding: '3px',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                <div className="w-full h-full rounded-full bg-background" />
              </motion.div>

              {/* Profile image */}
              <motion.div
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/50"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <img
                  src={profileImage}
                  alt="Developer Profile"
                  className="w-full h-full object-cover"
                />
                {/* Overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
              </motion.div>

              {/* Tech badges floating */}
              {[].map((tech, index) => (
                <motion.div
                  key={tech}
                  className="absolute px-3 py-1 rounded-full glass-card font-mono text-xs text-primary"
                  style={{
                    top: `${20 + index * 30}%`,
                    right: index % 2 === 0 ? '-20%' : 'auto',
                    left: index % 2 !== 0 ? '-20%' : 'auto',
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    y: [0, -10, 0],
                  }}
                  transition={{ 
                    delay: 1 + index * 0.2,
                    y: { duration: 3, repeat: Infinity, delay: index * 0.5 }
                  }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <motion.button
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          onClick={() => scrollToSection('#about')}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
          <ArrowDown size={20} />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
