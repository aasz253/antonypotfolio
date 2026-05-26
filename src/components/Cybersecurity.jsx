import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiShield, FiLock, FiKey, FiEye, FiGlobe, FiServer, FiCode, FiAlertTriangle, FiCheckCircle, FiZap } from 'react-icons/fi';
import { MdSecurity, MdOutlineNetworkCheck, MdEnhancedEncryption } from 'react-icons/md';

const features = [
  {
    icon: FiLock,
    title: 'Secure Authentication',
    desc: 'Implementing robust authentication systems with JWT, OAuth 2.0, multi-factor authentication, and session management to protect user identities.',
    color: '#6366f1',
  },
  {
    icon: MdEnhancedEncryption,
    title: 'Encryption & Data Protection',
    desc: 'Applying AES-256 encryption, SSL/TLS protocols, and secure key management to safeguard sensitive data at rest and in transit.',
    color: '#10b981',
  },
  {
    icon: MdOutlineNetworkCheck,
    title: 'Network Security',
    desc: 'Configuring firewalls, intrusion detection systems, and network segmentation to defend against unauthorized access and attacks.',
    color: '#00d4ff',
  },
  {
    icon: FiAlertTriangle,
    title: 'Vulnerability Assessment',
    desc: 'Conducting systematic penetration testing, vulnerability scanning, and security audits to identify and remediate potential threats.',
    color: '#f59e0b',
  },
  {
    icon: FiCode,
    title: 'Secure Development',
    desc: 'Following OWASP guidelines, implementing input validation, SQL injection prevention, XSS protection, and secure coding practices.',
    color: '#ec4899',
  },
  {
    icon: FiServer,
    title: 'API Security',
    desc: 'Securing RESTful and GraphQL APIs with rate limiting, token-based auth, request validation, and comprehensive logging.',
    color: '#7c3aed',
  },
];

const Cybersecurity = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], [-50, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8], [0, 1, 1]);

  return (
    <section id="cybersecurity" ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-cyber-darker" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-cyber-green/5 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-cyber-blue/5 rounded-full blur-[128px]" />
      </div>

      {/* Terminal overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(16, 185, 129, 0.03) 2px, rgba(16, 185, 129, 0.03) 4px)`,
        }} />
      </div>

      <motion.div className="section-container section-padding relative z-10" style={{ x, opacity }}>
        {/* Header */}
        <motion.div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-cyber-green/20 mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <FiShield className="text-cyber-green" size={14} />
            <span className="text-xs font-mono text-cyber-green tracking-widest uppercase">Cybersecurity</span>
          </motion.div>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-display font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Security <span className="text-gradient-blue">First</span>
          </motion.h2>
          <motion.p
            className="text-gray-400 mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Every system I build is hardened with enterprise-grade security practices.
            No "movie hacker" aesthetics — just real, practical cybersecurity.
          </motion.p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {[
            { label: 'Security Layers', value: '7+', icon: FiShield },
            { label: 'Encryption', value: 'AES-256', icon: FiLock },
            { label: 'Auth Methods', value: '5+', icon: FiKey },
            { label: 'Threat Vectors', value: '100+', icon: FiEye },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="p-5 rounded-xl glass-card text-center"
              whileHover={{ y: -2, borderColor: 'rgba(16, 185, 129, 0.3)' }}
            >
              <stat.icon className="text-cyber-green mx-auto mb-2" size={20} />
              <div className="text-2xl font-display font-bold text-white">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="group p-6 rounded-xl glass-card hover:border-cyber-green/30 transition-all duration-300 cursor-default"
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

        {/* Terminal commands */}
        <motion.div
          className="mt-12 p-5 rounded-xl glass-card font-mono text-xs"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-cyber-green/80" />
            <span className="text-gray-600 ml-2">security-audit — bash</span>
          </div>
          <div className="space-y-1.5 text-gray-500">
            <p><span className="text-cyber-green">$</span> <span className="text-white">nmap</span> --script vuln target.com</p>
              <p className="text-gray-600">{'>'} Scanning 65535 ports...</p>
              <p><span className="text-cyber-green">$</span> <span className="text-white">sslscan</span> target.com:443</p>
              <p className="text-gray-600">{'>'} Certificate: valid | Protocol: TLS 1.3 | Cipher: AES-256-GCM</p>
              <p><span className="text-cyber-green">$</span> <span className="text-white">./auth-audit.sh</span> --check-jwt --check-oauth</p>
              <p className="text-cyber-green">{'>'} Result: PASS — All security checks passed ✓</p>
            <motion.p
              className="text-cyber-blue"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              █
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Cybersecurity;
