import { motion } from 'framer-motion';
import { FiHeart, FiArrowUp } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5 bg-cyber-darker">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-blue/30 to-transparent" />

      <div className="section-container section-padding py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyber-blue to-cyber-purple flex items-center justify-center font-display font-bold text-xs">
              AS
            </div>
            <span className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Antony Sifuna
            </span>
          </motion.div>

          {/* Made with love */}
          <motion.p
            className="text-sm text-gray-500 flex items-center gap-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Built with <FiHeart className="text-cyber-pink animate-pulse" size={14} /> using React & Tailwind
          </motion.p>

          {/* Social & back to top */}
          <div className="flex items-center gap-3">
            {[FaGithub, FaLinkedin].map((Icon, i) => (
              <motion.a
                key={i}
                href={i === 0 ? 'https://github.com/sifuna-anthony' : 'https://linkedin.com/in/antonysifuna'}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-gray-500 hover:text-white hover:border-cyber-blue/30 transition-all border border-white/5"
                whileHover={{ y: -2, scale: 1.1 }}
              >
                <Icon size={15} />
              </motion.a>
            ))}
            <motion.button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-lg glass flex items-center justify-center text-gray-500 hover:text-cyber-blue hover:border-cyber-blue/30 transition-all border border-white/5 cursor-pointer"
              whileHover={{ y: -2, scale: 1.1 }}
              aria-label="Back to top"
            >
              <FiArrowUp size={15} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
