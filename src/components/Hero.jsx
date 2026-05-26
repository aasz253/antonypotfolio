import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowRight, FiDownload, FiMail, FiEye } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import cvFile from '../Sifuna_Codex_CV.pdf';

const Hero = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = 'Sifuna_Codex_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{ background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 50%, #111827 100%)' }}
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: 'linear-gradient(rgba(99, 102, 241, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.08) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
      }} />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full" style={{ background: 'rgba(56, 189, 248, 0.12)', filter: 'blur(120px)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full" style={{ background: 'rgba(167, 139, 250, 0.1)', filter: 'blur(100px)' }} />

      <motion.div className="section-container section-padding text-center relative z-10" style={{ y }}>
        {/* Status */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs sm:text-sm" style={{ color: '#94a3b8' }}>Available for projects</span>
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.9] mb-6" style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}>
          <span style={{ color: '#fff' }}>Antony </span>
          <span style={{ background: 'linear-gradient(135deg, #818cf8, #a78bfa, #f472b6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Sifuna</span>
        </h1>

        {/* Subtitle */}
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium">
            <span style={{ color: '#e2e8f0' }}>Full-Stack Developer </span>
            <span style={{ background: 'linear-gradient(135deg, #38bdf8, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>specializing in AI & Security</span>
          </h2>
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto mb-10">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed" style={{ color: '#94a3b8' }}>
            I build intelligent, secure, scalable digital systems using modern full-stack technologies, AI integration, and cybersecurity principles.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <button
            onClick={() => scrollTo('projects')}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold text-sm sm:text-base transition-all duration-300 hover:-translate-y-0.5 border-0 cursor-pointer"
            style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899)', boxShadow: '0 4px 20px rgba(99, 102, 241, 0.3)' }}
          >
            View Projects
            <FiArrowRight size={16} />
          </button>

          <button
            onClick={() => scrollTo('contact')}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base transition-all cursor-pointer border-0"
            style={{ background: 'rgba(255,255,255,0.08)', color: '#e2e8f0', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <FiMail size={16} />
            Hire Me
          </button>

          <button
            onClick={downloadCV}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-medium text-sm sm:text-base transition-all cursor-pointer border-0"
            style={{ background: 'rgba(255,255,255,0.05)', color: '#cbd5e1', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            <FiDownload size={16} />
            Download CV
          </button>

          <button
            onClick={() => scrollTo('contact')}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-medium text-sm sm:text-base transition-all cursor-pointer border-0"
            style={{ background: 'rgba(255,255,255,0.05)', color: '#cbd5e1', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            <FiEye size={16} />
            Contact Me
          </button>
        </div>

        {/* Social */}
        <div className="flex items-center justify-center gap-4 mt-12">
          {[
            { icon: FaGithub, href: 'https://github.com/sifuna-anthony' },
            { icon: FaLinkedin, href: 'https://linkedin.com/in/antonysifuna' },
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-xl flex items-center justify-center transition-all"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: '#94a3b8' }}
              onMouseOver={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#fff'; }}
              onMouseOut={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = '#94a3b8'; }}
            >
              <social.icon size={18} />
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)' }}>
          <div style={{ width: 20, height: 32, borderRadius: 10, border: '2px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'center', paddingTop: 4 }}>
            <div style={{ width: 3, height: 8, borderRadius: 2, background: '#818cf8', animation: 'scrollAnim 1.5s infinite' }} />
          </div>
          <style>{`@keyframes scrollAnim { 0%,100% { opacity:1; transform: translateY(0); } 50% { opacity:0.3; transform: translateY(4px); } }`}</style>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
