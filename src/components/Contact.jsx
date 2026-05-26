import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiMail, FiMessageSquare, FiSend, FiUser } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaWhatsapp, FaFacebook, FaTiktok, FaInstagram, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const socials = [
    { icon: FaGithub, href: 'https://github.com/sifuna-anthony', label: 'GitHub', color: '#ffffff' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/antonysifuna', label: 'LinkedIn', color: '#0A66C2' },
    { icon: FaWhatsapp, href: 'https://wa.me/254792325646', label: 'WhatsApp', color: '#25D366' },
    { icon: FaFacebook, href: 'https://facebook.com/sifunacodex', label: 'Facebook', color: '#1877F2' },
    { icon: FaTiktok, href: 'https://tiktok.com/@sifunacodex', label: 'TikTok', color: '#ffffff' },
    { icon: FaInstagram, href: 'https://instagram.com/sifunacodex', label: 'Instagram', color: '#E4405F' },
  ];

  return (
    <section id="contact" ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-cyber-darker" />
      <div className="absolute inset-0 cyber-grid opacity-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyber-purple/5 rounded-full blur-[200px]" />

      <motion.div className="section-container section-padding relative z-10" style={{ y }}>
        {/* Header */}
        <motion.div className="text-center mb-16">
          <motion.span
            className="inline-block text-xs font-mono text-cyber-blue mb-4 tracking-widest uppercase"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            // Get In Touch
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-display font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Let's Build <span className="text-gradient">Together</span>
          </motion.h2>
          <motion.p
            className="text-gray-400 mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Have a project in mind? Let's create something amazing together.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Contact form */}
          <motion.div
            className="p-6 md:p-8 rounded-2xl glass-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-display font-semibold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  required
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyber-blue/50 transition-all text-sm"
                />
              </div>
              <div className="relative">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  required
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyber-blue/50 transition-all text-sm"
                />
              </div>
              <div className="relative">
                <FiMessageSquare className="absolute left-4 top-4 text-gray-500" size={16} />
                <textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  required
                  rows={5}
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyber-blue/50 transition-all text-sm resize-none"
                />
              </div>
              <motion.button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyber-blue to-cyber-purple text-white font-medium text-sm glow-button border-0 cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {sent ? (
                  <>Message Sent! <FiSend className="animate-pulse" /></>
                ) : (
                  <>Send Message <FiSend /></>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact info & socials */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Direct contact */}
            <div className="p-6 rounded-xl glass-card">
              <h3 className="text-lg font-display font-semibold text-white mb-4">Contact Info</h3>
              <div className="space-y-3">
                <a href="mailto:antonysifuna07@gmail.com" className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-cyber-blue/10 flex items-center justify-center group-hover:bg-cyber-blue/20 transition-all">
                    <FiMail className="text-cyber-blue" size={16} />
                  </div>
                  <span>antonysifuna07@gmail.com</span>
                </a>
                <a href="https://wa.me/254792325646" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-cyber-green/10 flex items-center justify-center group-hover:bg-cyber-green/20 transition-all">
                    <FaWhatsapp className="text-cyber-green" size={16} />
                  </div>
                  <span>+254 792 325 646</span>
                </a>
              </div>
            </div>

            {/* Social links */}
            <div className="p-6 rounded-xl glass-card">
              <h3 className="text-lg font-display font-semibold text-white mb-4">Follow Me</h3>
              <div className="grid grid-cols-3 gap-3">
                {socials.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 p-3 rounded-xl glass hover:bg-white/5 transition-all border border-white/5 group"
                    whileHover={{ y: -3, scale: 1.05 }}
                  >
                    <social.icon
                      size={20}
                      className="text-gray-400 group-hover:text-white transition-colors"
                      style={{ color: social.label !== 'GitHub' && social.label !== 'TikTok' ? undefined : undefined }}
                    />
                    <span className="text-[10px] text-gray-500 group-hover:text-gray-300 transition-colors">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
