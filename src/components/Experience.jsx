import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiBriefcase, FiBook, FiTarget, FiTrendingUp, FiAward, FiStar } from 'react-icons/fi';

const timeline = [
  {
    year: 'Present',
    title: 'Full-Stack Developer (AI & Security)',
    desc: 'Building advanced AI-powered applications with enterprise-grade security. Developing intelligent systems that combine modern full-stack technologies with AI integration and cybersecurity best practices.',
    icon: FiBriefcase,
    color: '#6366f1',
  },
  {
    year: '2024',
    title: 'Industrial Training & Certification',
    desc: 'Completed intensive industrial training in software engineering, AI development, and cybersecurity. Earned certifications in modern development frameworks and security protocols.',
    icon: FiBook,
    color: '#00d4ff',
  },
  {
    year: '2023',
    title: 'Portfolio Development & Open Source',
    desc: 'Developed comprehensive portfolio of projects spanning AI, security, and full-stack development. Contributed to open-source projects and built real-world applications.',
    icon: FiAward,
    color: '#10b981',
  },
  {
    year: '2022',
    title: 'Software Engineering Journey Begins',
    desc: 'Started the professional journey in software engineering. Learned modern web technologies, mobile development, and database systems while building practical applications.',
    icon: FiStar,
    color: '#ec4899',
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

import { FiShield } from 'react-icons/fi';

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
        <div className="max-w-3xl mx-auto mb-20">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyber-blue via-cyber-purple to-cyber-pink opacity-30 md:-translate-x-px" />

            {timeline.map((item, i) => (
              <motion.div
                key={i}
                className={`relative flex items-start gap-6 mb-12 md:mb-16 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0 mt-1">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background: `${item.color}20`,
                      border: `1px solid ${item.color}40`,
                      boxShadow: `0 0 20px ${item.color}20`,
                    }}
                  >
                    <item.icon style={{ color: item.color }} size={18} />
                  </div>
                </div>

                {/* Content */}
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right md:mr-8' : 'md:text-left md:ml-8'}`}>
                  <div
                    className="text-xs font-mono mb-1"
                    style={{ color: item.color }}
                  >
                    {item.year}
                  </div>
                  <h3 className="text-lg font-display font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>

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
