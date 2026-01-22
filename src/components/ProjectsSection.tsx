import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import SectionTitle from './SectionTitle';
import TiltCard from './TiltCard';
import project0 from '@/assets/project0.png';
import project1 from '@/assets/project1.png';
import project2 from '@/assets/project2.png';
import project3 from '@/assets/project3.png';
import project4 from '@/assets/project4.png';
import project5 from '@/assets/project5.png';

const projects = [
  {
    title: 'Furniture showroom',
    description:
      'A modern furniture showroom website with interactive 3D models and real-time analytics.',
    image: project0,
    liveUrl: 'https://furniture-vert-nu.vercel.app/',
    githubUrl: 'https://github.com/moaz267/------------',
  },
  {
    title: 'Furniture showroom',
    description:
      'A modern furniture showroom website with interactive 3D models and real-time analytics.',
    image: project1,
    liveUrl: 'https://elhenawy.vercel.app/',
    githubUrl: 'https://github.com/moaz267/------------',
  },
  {
    title: 'secure-x',
    description:
      '[secure-x] provides advanced encryption solutions to keep your data secure and private. Protect communications, safeguard information, and browse with confidence.',
    image: project2,
    liveUrl: 'https://secure-xx.vercel.app/',
    githubUrl: 'https://github.com/moaz267/SecureX',
  },
  {
    title: 'Algo-Viz',
    description:
      'Learn algorithms effortlessly through interactive animations. Visualize, understand, and master complex concepts with engaging, step-by-step visuals.',
    image: project3,
    liveUrl: 'https://algo-viz-lovat.vercel.app/',
    githubUrl: 'https://github.com/moaz267/algo-viz-studio',
  },
  {
    title: 'CAFE',
    description:
      '[Cafe Name] is your cozy spot for premium coffee, delicious pastries, and a relaxing atmosphere. Explore our menu, discover new flavors, and enjoy the perfect coffee experience.',
    image: project4,
    liveUrl: 'https://cozy-cafe-mauve.vercel.app/',
    githubUrl: 'https://github.com/moaz267/cozy-cafe',
  },
  {
    title: 'RESTAURANT',
    description:
      '[cozy-cafe] offers a delightful dining experience with delicious dishes, fresh ingredients, and a welcoming atmosphere. Explore our menu, make reservations, and savor flavors made with passion.',
    image: project5,
    liveUrl: 'https://gourmet-sable.vercel.app/',
    githubUrl: 'https://github.com/moaz267/gourmet-',
  },
];

const ProjectsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />

      <div className="container mx-auto px-6" ref={ref}>
        <SectionTitle title="Featured Projects" subtitle="// My work" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15 }}
            >
              <TiltCard className="h-full">
                {/* Project Image */}
                <div className="relative mb-6 rounded-lg overflow-hidden group">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Overlay */}
                  <motion.div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full border border-foreground flex items-center justify-center text-foreground"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={20} />
                    </motion.a>
                  </motion.div>

                  {/* Tech overlay lines */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute top-2 left-2 w-8 h-8 border-l-2 border-t-2 border-primary" />
                    <div className="absolute bottom-2 right-2 w-8 h-8 border-r-2 border-b-2 border-primary" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2 group-hover:text-primary transition-colors">
                  {project.title}
                  <ArrowUpRight
                    size={18}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </h3>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
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

export default ProjectsSection;
