import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Cybersecurity from './components/Cybersecurity';
import AI from './components/AI';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChatbot from './components/AIChatbot';

const App = () => {
  const [ready, setReady] = useState(false);
  setTimeout(() => setReady(true), 100);

  return (
    <div style={{ background: '#0f172a', color: '#f1f5f9', minHeight: '100vh', opacity: ready ? 1 : 0, transition: 'opacity 0.3s' }}>
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Cybersecurity />
      <AI />
      <Experience />
      <Contact />
      <Footer />
      <AIChatbot />
    </div>
  );
};

export default App;
