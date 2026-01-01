import { motion } from 'framer-motion';
import { Phone,Mail, Linkedin,  Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Phone size={20} />, href: 'https://wa.me/201060044708' },
                { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/moaz-elhenawy?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
                { icon: <Mail size={20} />, href: 'mailto:moazelhenawy23@gmail.com'
 },
  ];

  return (
    <footer className="relative py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.a
            href="#hero"
            className="text-xl font-bold neon-text font-mono"
            whileHover={{ scale: 1.05 }}
          >
            {'<DEV />'}
          </motion.a>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground font-mono flex items-center gap-2">
            © {currentYear} Built with <Heart size={14} className="text-secondary" /> using React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
