import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionTitle from './SectionTitle';
import SkillBar from './SkillBar';
import { 
  SiReact, 
  SiTypescript, 
  SiJavascript, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiNodedotjs,
  SiGit,
  SiFigma 
} from 'react-icons/si';

const skills = [
  { name: 'React', level: 95, icon: <SiReact size={24} /> },
  { name: 'TypeScript', level: 90, icon: <SiTypescript size={24} /> },
  { name: 'JavaScript', level: 95, icon: <SiJavascript size={24} /> },
  { name: 'Next.js', level: 85, icon: <SiNextdotjs size={24} /> },
  { name: 'Tailwind CSS', level: 92, icon: <SiTailwindcss size={24} /> },
  { name: 'Node.js', level: 75, icon: <SiNodedotjs size={24} /> },
  { name: 'Git', level: 88, icon: <SiGit size={24} /> },
  { name: 'Figma', level: 80, icon: <SiFigma size={24} /> },
];

const SkillsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
      
      <div className="container mx-auto px-6" ref={ref}>
        <SectionTitle title="Tech Stack" subtitle="// My skills" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              level={skill.level}
              icon={skill.icon}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Additional tech tags */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
        >
          
        </motion.div>
      </div>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px tech-line" />
    </section>
  );
};

export default SkillsSection;
