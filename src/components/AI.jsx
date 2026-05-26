import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiCpu, FiMessageSquare, FiZap, FiGitBranch, FiCloud, FiActivity } from 'react-icons/fi';
import { SiOpenai, SiPython, SiTensorflow } from 'react-icons/si';
import { BsRobot, BsGraphUpArrow, BsChatDots } from 'react-icons/bs';

const aiFeatures = [
  {
    icon: BsChatDots,
    title: 'AI Chatbots',
    desc: 'Intelligent conversational agents with natural language understanding, context retention, and multi-platform deployment.',
    color: '#6366f1',
  },
  {
    icon: FiZap,
    title: 'Automation Systems',
    desc: 'Smart workflow automation using AI-driven decision making, task scheduling, and process optimization.',
    color: '#00d4ff',
  },
  {
    icon: BsRobot,
    title: 'AI-Generated Content',
    desc: 'Leveraging generative AI for dynamic content creation, exam generation, and adaptive learning materials.',
    color: '#10b981',
  },
  {
    icon: FiGitBranch,
    title: 'AI Workflows',
    desc: 'Integrating AI pipelines into existing systems for intelligent data processing, analysis, and action.',
    color: '#ec4899',
  },
  {
    icon: FiCloud,
    title: 'Smart Assistants',
    desc: 'Building context-aware virtual assistants that learn from user behavior and provide proactive support.',
    color: '#7c3aed',
  },
  {
    icon: BsGraphUpArrow,
    title: 'ML Integration',
    desc: 'Implementing machine learning models for predictive analytics, pattern recognition, and data-driven insights.',
    color: '#f59e0b',
  },
];

const AI = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8], [0, 1, 1]);

  return (
    <section id="ai" ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-purple/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-blue/20 to-transparent" />
      </div>

      {/* Neural network background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <svg className="w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          {[...Array(8)].map((_, i) => (
            [...Array(6)].map((_, j) => {
              const cx = 100 + i * 90 + (j % 2) * 45;
              const cy = 50 + j * 90;
              return (
                <g key={`${i}-${j}`}>
                  <circle cx={cx} cy={cy} r="3" fill="#6366f1" opacity="0.5">
                    <animate attributeName="r" values="2;5;2" dur={`${3 + (i + j) * 0.3}s`} repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.3;0.8;0.3" dur={`${3 + (i + j) * 0.3}s`} repeatCount="indefinite" />
                  </circle>
                  {i < 7 && (
                    <line x1={cx} y1={cy} x2={cx + 90 - (j % 2) * 45} y2={cy + 90} stroke="#6366f1" strokeWidth="0.5" opacity="0.2">
                      <animate attributeName="opacity" values="0.1;0.4;0.1" dur={`${4 + i * 0.2}s`} repeatCount="indefinite" />
                    </line>
                  )}
                  {j < 5 && (
                    <line x1={cx} y1={cy} x2={cx + 45} y2={cy + 90} stroke="#7c3aed" strokeWidth="0.5" opacity="0.2">
                      <animate attributeName="opacity" values="0.1;0.3;0.1" dur={`${3.5 + j * 0.2}s`} repeatCount="indefinite" />
                    </line>
                  )}
                </g>
              );
            })
          ))}
        </svg>
      </div>

      <motion.div className="section-container section-padding relative z-10" style={{ x, opacity }}>
        {/* Header */}
        <motion.div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-cyber-blue/20 mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <FiCpu className="text-cyber-blue" size={14} />
            <span className="text-xs font-mono text-cyber-blue tracking-widest uppercase">Artificial Intelligence</span>
          </motion.div>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-display font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            AI-Powered <span className="text-gradient">Solutions</span>
          </motion.h2>
          <motion.p
            className="text-gray-400 mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Integrating cutting-edge artificial intelligence to create smarter, more efficient systems.
          </motion.p>
        </motion.div>

        {/* AI Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {[
            { label: 'AI Models Integrated', value: '10+', icon: FiCpu },
            { label: 'Automation Rate', value: '85%', icon: FiZap },
            { label: 'Accuracy', value: '94%', icon: FiActivity },
            { label: 'API Calls/Month', value: '50K+', icon: FiCloud },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="p-5 rounded-xl glass-card text-center"
              whileHover={{ y: -2, borderColor: 'rgba(99, 102, 241, 0.3)' }}
            >
              <stat.icon className="text-cyber-blue mx-auto mb-2" size={20} />
              <div className="text-2xl font-display font-bold text-white">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {aiFeatures.map((feature, i) => (
            <motion.div
              key={i}
              className="group p-6 rounded-xl glass-card hover:border-cyber-blue/30 transition-all duration-300 cursor-default"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -3 }}
            >
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center mb-4 transition-all"
                style={{ background: `${feature.color}20` }}
              >
                <feature.icon style={{ color: feature.color }} size={20} />
              </div>
              <h3 className="text-white font-semibold mb-2 text-sm">{feature.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* AI pipeline visualization */}
        <motion.div
          className="mt-12 p-6 rounded-xl glass-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
            <FiCpu className="text-cyber-blue" />
            AI Integration Pipeline
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { step: 'Input', desc: 'Data Collection', color: '#6366f1' },
              { step: 'Process', desc: 'AI Analysis', color: '#00d4ff' },
              { step: 'Decide', desc: 'Smart Decisions', color: '#10b981' },
              { step: 'Act', desc: 'Automated Action', color: '#ec4899' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-2"
                  style={{ background: `${item.color}20`, border: `1px solid ${item.color}40` }}
                >
                  <span className="text-xs font-bold" style={{ color: item.color }}>{i + 1}</span>
                </div>
                <div className="text-sm font-medium text-white">{item.step}</div>
                <div className="text-[10px] text-gray-500">{item.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AI;
