import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import SectionTitle from './SectionTitle';
import MagneticButton from './MagneticButton';

const ContactSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formState);
  };

  const contactInfo = [
    { icon: <Mail size={24} />, label: 'Email', value: 'moazelhenawy23@gmail.com' },
    { icon: <MapPin size={24} />, label: 'Location', value: 'Damietta' },
    { icon: <Phone size={24} />, label: 'Phone', value: '01060044708' },
  ];

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
      
      <div className="container mx-auto px-6" ref={ref}>
        <SectionTitle title="Get In Touch" subtitle="// Contact me" />

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Let's build something <span className="neon-text">amazing</span> together
            </h3>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Have a project in mind or just want to say hello? I'm always open to discussing 
              new opportunities and ideas. Drop me a message and I'll get back to you as soon as possible.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  className="flex items-center gap-4 glass-card p-4 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-cyber flex items-center justify-center text-primary-foreground">
                    {info.icon}
                  </div>
                  <div>
                    <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">{info.label}</span>
                    <p className="text-foreground font-medium">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-mono text-muted-foreground mb-2 uppercase tracking-wider">
                    Name
                  </label>
                  <motion.input
                    type="text"
                    className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-mono text-muted-foreground mb-2 uppercase tracking-wider">
                    Email
                  </label>
                  <motion.input
                    type="email"
                    className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                    placeholder="john@example.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-mono text-muted-foreground mb-2 uppercase tracking-wider">
                    Message
                  </label>
                  <motion.textarea
                    className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 min-h-[150px] resize-none"
                    placeholder="Tell me about your project..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>

                <MagneticButton variant="fill" className="w-full">
                  <Send size={18} />
                  Send Message
                </MagneticButton>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
