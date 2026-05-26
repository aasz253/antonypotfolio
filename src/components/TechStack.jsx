import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  SiReact, SiNodedotjs, SiPython, SiMongodb, SiFirebase,
  SiTailwindcss, SiAndroidstudio, SiGit, SiGithub, SiLinux, SiMysql,
  SiJsonwebtokens, SiOpenai, SiOpenjdk
} from 'react-icons/si';
import { MdSecurity } from 'react-icons/md';

const techs = [
  { icon: SiReact, name: 'React', level: 92, color: '#61DAFB' },
  { icon: SiNodedotjs, name: 'Node.js', level: 88, color: '#339933' },
  { icon: SiPython, name: 'Python', level: 90, color: '#3776AB' },
  { icon: SiOpenjdk, name: 'Java', level: 78, color: '#007396' },
  { icon: SiMongodb, name: 'MongoDB', level: 85, color: '#47A248' },
  { icon: SiFirebase, name: 'Firebase', level: 82, color: '#FFCA28' },
  { icon: SiTailwindcss, name: 'Tailwind CSS', level: 88, color: '#06B6D4' },
  { icon: SiAndroidstudio, name: 'Android Studio', level: 75, color: '#3DDC84' },
  { icon: SiOpenai, name: 'AI APIs', level: 85, color: '#412991' },
  { icon: MdSecurity, name: 'Cybersecurity', level: 80, color: '#10b981' },
  { icon: SiGit, name: 'Git', level: 90, color: '#F05032' },
  { icon: SiGithub, name: 'GitHub', level: 92, color: '#ffffff' },
  { icon: SiJsonwebtokens, name: 'JWT Auth', level: 85, color: '#000000' },
  { icon: SiLinux, name: 'Linux', level: 82, color: '#FCC624' },
  { icon: SiMysql, name: 'MySQL', level: 80, color: '#4479A1' },
  { icon: // REST APIs
    () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><path d="M4 6h16M4 12h16M4 18h16"/></svg>,
    name: 'REST APIs', level: 90, color: '#6366f1'
  },
];

const TechStack = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="techstack" ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-blue/20 to-transparent" />
      </div>

      <div className="absolute inset-0 cyber-grid opacity-20" />

      <motion.div className="section-container section-padding relative z-10" style={{ y }}>
        {/* Header */}
        <motion.div className="text-center mb-16">
          <motion.span
            className="inline-block text-xs font-mono text-cyber-purple mb-4 tracking-widest uppercase"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            // Tech Stack
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-display font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Tools & <span className="text-gradient">Technologies</span>
          </motion.h2>
          <motion.p
            className="text-gray-400 mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            A curated stack of modern technologies I use to build secure, AI-powered applications.
          </motion.p>
        </motion.div>

        {/* Tech grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {techs.map((tech, i) => (
            <motion.div
              key={i}
              className="group relative p-5 rounded-xl glass-card hover:border-cyber-blue/30 transition-all duration-300 cursor-default"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <div className="flex flex-col items-center gap-3">
                <motion.div
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl transition-all duration-300"
                  style={{ color: tech.color }}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                >
                  {typeof tech.icon === 'function' ? <tech.icon /> : <tech.icon />}
                </motion.div>
                <span className="text-xs font-medium text-gray-400 group-hover:text-white transition-colors">
                  {tech.name}
                </span>
                {/* Skill bar */}
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: `linear-gradient(90deg, ${tech.color}88, ${tech.color})` }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.03 + 0.5, ease: 'easeOut' }}
                  />
                </div>
                <span className="text-[10px] font-mono text-gray-600">{tech.level}%</span>
              </div>
              {/* Glow on hover */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${tech.color}15 0%, transparent 70%)`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TechStack;
