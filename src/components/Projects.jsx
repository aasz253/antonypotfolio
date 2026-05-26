import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiExternalLink, FiGithub, FiShield, FiCpu } from 'react-icons/fi';
import { SiReact, SiNodedotjs, SiPython, SiMongodb, SiFirebase, SiTailwindcss, SiAndroidstudio, SiOpenai } from 'react-icons/si';

const projects = [
  {
    title: 'AI-Powered Examination Platform',
    desc: 'An intelligent online examination system with AI-generated questions, real-time proctoring, auto-grading, and advanced analytics. Features secure authentication and anti-cheating measures.',
    tags: ['React', 'Node.js', 'AI', 'MongoDB', 'JWT', 'Python'],
    tech: [SiReact, SiNodedotjs, SiOpenai, SiMongodb],
    security: ['End-to-end encryption', 'AI proctoring', 'Secure WebSocket'],
    ai: ['Auto question generation', 'Smart grading', 'Performance analytics'],
    color: '#6366f1',
    links: { demo: '#', github: '#' },
  },
  {
    title: 'Secure Event Ticketing System',
    desc: 'A comprehensive event ticketing and booking platform with QR-based validation, secure payment processing, real-time seat selection, and fraud detection mechanisms.',
    tags: ['React', 'Firebase', 'Node.js', 'REST APIs'],
    tech: [SiReact, SiFirebase, SiNodedotjs],
    security: ['QR validation', 'Fraud detection', 'Secure payments'],
    ai: ['Demand prediction', 'Smart pricing'],
    color: '#10b981',
    links: { demo: '#', github: '#' },
  },
  {
    title: 'Student Performance Management',
    desc: 'A data-driven system for tracking and analyzing student performance with predictive analytics, automated reporting, and personalized learning recommendations.',
    tags: ['Python', 'React', 'MongoDB', 'AI APIs'],
    tech: [SiPython, SiReact, SiMongodb, SiOpenai],
    security: ['Role-based access', 'Data encryption', 'Audit logs'],
    ai: ['Predictive analytics', 'Learning recommendations'],
    color: '#ec4899',
    links: { demo: '#', github: '#' },
  },
  {
    title: 'AI Assistant Web Application',
    desc: 'A versatile AI assistant with natural language processing, task automation, contextual awareness, and integration with multiple AI APIs for intelligent responses.',
    tags: ['React', 'Node.js', 'AI', 'Tailwind CSS'],
    tech: [SiReact, SiNodedotjs, SiOpenai, SiTailwindcss],
    security: ['API key protection', 'Session management'],
    ai: ['NLP processing', 'Context awareness', 'Multi-API orchestration'],
    color: '#00d4ff',
    links: { demo: '#', github: '#' },
  },
  {
    title: 'Cybersecurity Dashboard',
    desc: 'A real-time security monitoring dashboard with threat detection, vulnerability scanning, network traffic analysis, and incident response visualization.',
    tags: ['React', 'Python', 'Node.js', 'Cybersecurity'],
    tech: [SiReact, SiPython, SiNodedotjs],
    security: ['Threat detection', 'Traffic analysis', 'Incident response'],
    ai: ['Anomaly detection', 'Threat prediction'],
    color: '#7c3aed',
    links: { demo: '#', github: '#' },
  },
  {
    title: 'Android Car Racing Game',
    desc: 'A high-performance 3D racing game built for Android with realistic physics, dynamic environments, multiplayer support, and immersive sound design.',
    tags: ['Android Studio', 'Java', 'Firebase'],
    tech: [SiAndroidstudio, SiFirebase],
    security: ['Secure leaderboard', 'Anti-cheat'],
    ai: ['AI opponent', 'Difficulty adaptation'],
    color: '#f59e0b',
    links: { demo: '#', github: '#' },
  },
  {
    title: 'Engineering Scheduling Website',
    desc: 'A comprehensive scheduling platform for engineering departments with automated timetable generation, resource allocation, conflict resolution, and real-time updates.',
    tags: ['React', 'Node.js', 'MongoDB', 'JWT'],
    tech: [SiReact, SiNodedotjs, SiMongodb],
    security: ['Authentication', 'Authorization', 'Data validation'],
    ai: ['Schedule optimization', 'Conflict prediction'],
    color: '#06b6d4',
    links: { demo: '#', github: '#' },
  },
];

const Projects = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="projects" ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-cyber-gradient opacity-30" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-purple/20 to-transparent" />

      <motion.div className="section-container section-padding relative z-10" style={{ y }}>
        {/* Header */}
        <motion.div className="text-center mb-16">
          <motion.span
            className="inline-block text-xs font-mono text-cyber-blue mb-4 tracking-widest uppercase"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            // Featured Work
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-display font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Projects <span className="text-gradient">Showcase</span>
          </motion.h2>
          <motion.p
            className="text-gray-400 mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Real-world applications demonstrating my expertise in AI, security, and full-stack development.
          </motion.p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="group relative rounded-2xl glass-card overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
            >
              {/* Header gradient */}
              <div
                className="h-2 w-full"
                style={{ background: `linear-gradient(90deg, ${project.color}, ${project.color}88)` }}
              />

              <div className="p-6">
                {/* Title */}
                <h3 className="text-lg font-display font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-3">
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="px-2.5 py-1 text-[10px] font-mono rounded-md"
                      style={{
                        background: `${project.color}15`,
                        color: project.color,
                        border: `1px solid ${project.color}25`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Security & AI badges */}
                <div className="flex gap-4 mb-5">
                  {project.security.length > 0 && (
                    <div className="flex items-center gap-1.5">
                      <FiShield size={12} className="text-cyber-green" />
                      <span className="text-[10px] text-gray-500">{project.security.length} security features</span>
                    </div>
                  )}
                  {project.ai.length > 0 && (
                    <div className="flex items-center gap-1.5">
                      <FiCpu size={12} className="text-cyber-blue" />
                      <span className="text-[10px] text-gray-500">{project.ai.length} AI features</span>
                    </div>
                  )}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3">
                  <a
                    href={project.links.demo}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium text-white transition-all"
                    style={{ background: project.color }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink size={12} />
                    Live Demo
                  </a>
                  <a
                    href={project.links.github}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium text-gray-300 glass hover:bg-white/10 transition-all border border-white/5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub size={12} />
                    Source
                  </a>
                </div>
              </div>

              {/* Hover glow */}
              <div
                className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl pointer-events-none"
                style={{ background: project.color }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
