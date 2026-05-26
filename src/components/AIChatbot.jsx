import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiSend } from 'react-icons/fi';
import { BsRobot } from 'react-icons/bs';

const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;
const API_URL = 'https://openrouter.ai/api/v1/chat/completions';
const MODEL = 'mistralai/mistral-7b-instruct';

const SYSTEM_PROMPT = `You are an AI assistant for Antony Sifuna's portfolio website. 
Antony Sifuna is a Full-Stack Developer specializing in AI and Security. 
He builds intelligent, secure, scalable digital systems using modern full-stack technologies, AI integration, and cybersecurity principles.

Key facts about Antony:
- Full name: Antony Sifuna
- Title: Full-Stack Developer specializing in AI and Security
- Email: antonysifuna07@gmail.com
- WhatsApp: 0792325646
- GitHub: github.com/sifuna-anthony
- LinkedIn: linkedin.com/in/antonysifuna
- Facebook/TikTok/Instagram: @sifuna codex

Tech Stack: React, Node.js, Python, Java, MongoDB, Firebase, Tailwind CSS, Android Studio, AI APIs, Cybersecurity, Git/GitHub, REST APIs, JWT Authentication, Linux, MySQL

Key Projects:
1. AI-Powered Online Examination Platform - AI-generated questions, real-time proctoring, auto-grading
2. Secure Event Ticketing and Booking System - QR validation, secure payments, fraud detection
3. Student Performance Management System - predictive analytics, automated reporting
4. AI Assistant Web Application - NLP, task automation, multi-API orchestration
5. Cybersecurity Dashboard - threat detection, vulnerability scanning, network analysis
6. Android Car Racing Game - 3D racing, multiplayer, AI opponents
7. Engineering Department Scheduling Website - automated timetable generation, resource allocation

Expertise: Full-stack development, AI integration, cybersecurity, problem-solving, building real-world systems, continuous learning, innovation, automation.

Keep responses concise, professional, and helpful. If asked about things outside Antony's portfolio, politely redirect to relevant information about Antony's skills and experience.`;

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! I am Antony's AI assistant powered by OpenRouter. Ask me about his skills, projects, or experience!" },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const fetchAIResponse = async (userMessage) => {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
        'HTTP-Referer': window.location.origin,
        'X-Title': 'Antony Sifuna Portfolio',
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...messages.filter(m => m.role !== 'system').concat({ role: 'user', content: userMessage }),
        ],
        max_tokens: 300,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return data.choices?.[0]?.message?.content || 'Sorry, I could not process that request.';
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsTyping(true);

    try {
      const aiText = await fetchAIResponse(userMsg);
      setMessages(prev => [...prev, { role: 'assistant', content: aiText }]);
    } catch (err) {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, I am having trouble connecting. Please try again later or contact Antony directly at antonysifuna07@gmail.com',
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-xl bg-gradient-to-r from-cyber-blue to-cyber-purple flex items-center justify-center text-white shadow-lg shadow-cyber-purple/25 glow-button border-0 cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        <BsRobot size={22} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-40 w-[360px] max-w-[calc(100vw-2rem)] h-[520px] max-h-[calc(100vh-8rem)] rounded-2xl glass-card flex flex-col overflow-hidden"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center justify-between p-4 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyber-blue to-cyber-purple flex items-center justify-center">
                  <BsRobot className="text-white" size={16} />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">AI Assistant</div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyber-green animate-pulse" />
                    <span className="text-[10px] text-gray-500">OpenRouter AI</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/5 transition-all cursor-pointer"
              >
                <FiX size={16} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-xl text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-gradient-to-r from-cyber-blue to-cyber-purple text-white'
                        : 'glass text-gray-300'
                    }`}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  className="flex justify-start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="glass p-3 rounded-xl">
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSend} className="p-4 border-t border-white/5">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about Antony..."
                  disabled={isTyping}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyber-blue/50 transition-all text-sm disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={isTyping || !input.trim()}
                  className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyber-blue to-cyber-purple flex items-center justify-center text-white flex-shrink-0 disabled:opacity-50 cursor-pointer"
                >
                  <FiSend size={14} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;
