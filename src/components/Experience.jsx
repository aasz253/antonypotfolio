import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiBook, FiTarget, FiTrendingUp, FiAward, FiShield } from 'react-icons/fi';
import profilePic from '../WhatsApp Image 2025-10-11 at 12.18.18_8bdde7b0.jpg';

const timeline = [
  {
    year: '2024 - Present',
    title: 'Higher Education in Software Engineering',
    desc: 'Currently pursuing advanced studies in software engineering with a focus on AI integration, cybersecurity, and full-stack development. Building real-world systems and expanding expertise across modern technologies.',
    icon: FiBook,
    color: '#6366f1',
  },
  {
    year: '2023',
    title: 'KCSE Certification',
    desc: 'Completed the Kenya Certificate of Secondary Education (KCSE), laying a strong academic foundation in sciences and mathematics that sparked a deep passion for technology and software engineering.',
    icon: FiAward,
    color: '#10b981',
  },
];

const goals = [
  {
    icon: FiTarget,
    title: 'AI Research & Innovation',
    desc: 'Advancing AI integration in real-world applications, exploring new frontiers in machine learning and intelligent automation.',
    color: '#6366f1',
  },
  {
    icon: FiShield,
    title: 'Cybersecurity Leadership',
    desc: 'Becoming a leading voice in cybersecurity, helping organizations build resilient systems against evolving threats.',
    color: '#10b981',
  },
  {
    icon: FiTrendingUp,
    title: 'Startup & Entrepreneurship',
    desc: 'Building innovative tech startups that leverage AI and security to solve meaningful problems at scale.',
    color: '#00d4ff',
  },
];

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="experience" ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-cyber-gradient opacity-30" />

      <motion.div className="section-container section-padding relative z-10" style={{ y }}>
        {/* Header */}
        <motion.div className="text-center mb-16">
          <motion.span
            className="inline-block text-xs font-mono text-cyber-pink mb-4 tracking-widest uppercase"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            // Journey & Vision
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-display font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Experience & <span className="text-gradient">Goals</span>
          </motion.h2>
          <motion.p
            className="text-gray-400 mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            My journey in software engineering and the ambitious goals driving my future.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto mb-20 px-2 sm:px-0">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyber-blue via-cyber-purple to-cyber-pink opacity-30" />

            {timeline.map((item, i) => (
              <motion.div
                key={i}
                className="relative flex items-start gap-4 sm:gap-6 mb-10 sm:mb-12"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0 mt-1">
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background: `${item.color}20`,
                      border: `1px solid ${item.color}40`,
                      boxShadow: `0 0 20px ${item.color}20`,
                    }}
                  >
                    <item.icon style={{ color: item.color }} size={16} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div
                    className="text-xs font-mono mb-1"
                    style={{ color: item.color }}
                  >
                    {item.year}
                  </div>
                  <h3 className="text-base sm:text-lg font-display font-semibold text-white mb-1.5 break-words">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed break-words">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Photo */}
        <motion.div
          className="max-w-lg mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink rounded-2xl opacity-30 group-hover:opacity-60 blur transition-all duration-500" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10">
              <img
                src={profilePic}
                alt="Antony Sifuna"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Goals */}
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold text-center mb-10">
            Future <span className="text-gradient-blue">Ambitions</span>
          </h3>
          <div className="grid sm:grid-cols-3 gap-5">
            {goals.map((goal, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-xl glass-card text-center group hover:border-cyber-blue/30 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: `${goal.color}20` }}
                >
                  <goal.icon style={{ color: goal.color }} size={20} />
                </div>
                <h4 className="text-white font-semibold mb-2 text-sm">{goal.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{goal.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;
