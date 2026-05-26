import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiCode, FiShield, FiCpu, FiZap, FiTarget, FiTrendingUp, FiLayers, FiAward, FiGlobe } from 'react-icons/fi';

const highlights = [
  { icon: FiCode, title: 'Full-Stack Development', desc: 'Building end-to-end applications with modern frameworks and scalable architectures.' },
  { icon: FiCpu, title: 'AI Integration', desc: 'Implementing intelligent solutions with machine learning and AI-powered automation.' },
  { icon: FiShield, title: 'Cybersecurity', desc: 'Applying security-first principles to protect systems and user data.' },
  { icon: FiZap, title: 'Problem Solving', desc: 'Tackling complex challenges with creative, efficient solutions.' },
  { icon: FiTarget, title: 'Real-World Systems', desc: 'Developing production-ready applications that make an impact.' },
  { icon: FiTrendingUp, title: 'Continuous Learning', desc: 'Staying at the cutting edge of technology and best practices.' },
  { icon: FiLayers, title: 'Startup Mindset', desc: 'Building with agility, focus, and a passion for innovation.' },
  { icon: FiAward, title: 'Innovation', desc: 'Creating automated systems that drive efficiency and growth.' },
];

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], [-100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8], [0, 1, 1]);

  return (
    <section id="about" ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-cyber-gradient opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyber-purple/5 rounded-full blur-[200px]" />

      <motion.div className="section-container section-padding relative z-10" style={{ x, opacity }}>
        {/* Header */}
        <motion.div className="text-center mb-16 md:mb-20">
          <motion.span
            className="inline-block text-xs font-mono text-cyber-green mb-4 tracking-widest uppercase"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            // About Me
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-display font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Building the <span className="text-gradient">Future</span>
          </motion.h2>
          <motion.p
            className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            From humble beginnings to building advanced AI and security systems — my journey is defined by curiosity, determination, and a passion for technology.
          </motion.p>
        </motion.div>

        {/* Story */}
        <motion.div
          className="max-w-4xl mx-auto mb-16 p-8 md:p-10 rounded-2xl glass-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-display font-semibold mb-4">
                My <span className="text-gradient-blue">Journey</span>
              </h3>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  My passion for software engineering began with a curiosity about how digital systems work. 
                  Growing up with limited resources, I taught myself to code using whatever tools I could find, 
                  driven by a belief that technology could transform lives.
                </p>
                <p>
                  Today, I specialize in building intelligent, secure, and scalable systems. I combine 
                  full-stack development expertise with AI integration and cybersecurity principles to 
                  create applications that are not only powerful but also resilient against modern threats.
                </p>
                <p>
                  Every project I undertake is an opportunity to push boundaries, learn something new, 
                  and build something that makes a real difference. My goal is to bridge the gap between 
                  cutting-edge AI capabilities and robust security practices.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden glass-card p-6">
                <div className="w-full h-full rounded-xl bg-gradient-to-br from-cyber-blue/20 to-cyber-purple/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-display font-bold text-gradient mb-2">AS</div>
                    <div className="font-mono text-xs text-gray-500">
                        <div className="mb-1">{'>'} status: active</div>
                        <div className="mb-1">{'>'} role: engineer</div>
                        <div className="mb-1">{'>'} mode: building</div>
                      <motion.div
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
{'  >'} █
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 border border-cyber-blue/20 rounded-xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 border border-cyber-purple/20 rounded-lg"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              />
            </div>
          </div>
        </motion.div>

        {/* Highlights grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              className="group p-6 rounded-xl glass-card hover:border-cyber-blue/30 transition-all duration-300 cursor-default"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyber-blue/20 to-cyber-purple/20 flex items-center justify-center mb-4 group-hover:from-cyber-blue/30 group-hover:to-cyber-purple/30 transition-all">
                <item.icon className="text-cyber-blue" size={18} />
              </div>
              <h3 className="text-white font-semibold mb-2 text-sm">{item.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
