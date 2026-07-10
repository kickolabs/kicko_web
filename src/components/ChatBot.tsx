import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, AlertCircle } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

const getAI = () => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  if (!apiKey) return null;
  return new GoogleGenAI({ apiKey });
};

const SYSTEM_INSTRUCTION = `
You are the KickoTech Assistant, a professional and helpful A.I. representative of KickoTech. 
Your goal is to assist users with questions about KickoTech's services, capabilities, and philosophy.

About KickoTech:
- Expertise: Web Engineering, Deep Learning (AI Integration), Cloud Architecture, Mobile SDKs, and Advanced Product Design.
- Philosophy: Precision architecture, deep intelligence, and rapid execution. We turn complex roadmaps into high-performance digital reality.
- v2.0.4 - Production Ready.
- Founders choose KickoTech because of our "Engineering the Digital Future" approach.

Key Services:
1. Web Engineering: Building robust, scalable reactive applications.
2. AI Systems: Custom neural networks, predictive threat detection (like Nebula AI), and generative integrations.
3. Cloud Scaling: Automated multi-cloud migration and scaling strategy.
4. Product Design: Intuitive interfaces for next-gen computing (like Vision OS).

Guidelines:
- Be concise, technical yet approachable, and forward-thinking.
- Use engineering-focused language (e.g., "scaling," "architecture," "deployment," "integration").
- If asked about "starting a project," encourage them to contact the team via the "Start Project" button in the navbar.
- Always be helpful and professional.
`;

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'System initialized. How can I assist with your engineering requirements today?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);
    setError(null);

    try {
      const ai = getAI();
      if (!ai) {
        setError('AI chat is unavailable. Add VITE_GEMINI_API_KEY to enable it.');
        return;
      }

      const response = await ai.models.generateContent({
        model: 'gemini-1.5-flash',
        contents: [
            ...messages.map(m => ({ role: m.role === 'user' ? 'user' : 'model', parts: [{ text: m.content }] })),
            { role: 'user', parts: [{ text: userMessage }] }
        ],
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        },
      });

      const assistantContent = response.text || "Connection glitch detected. Please retry transmission.";
      setMessages(prev => [...prev, { role: 'assistant', content: assistantContent }]);
    } catch (err: any) {
      console.error('Chat error:', err);
      setError('Transmission failed. Network interference suspected.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 w-14 h-14 bg-electric rounded-full flex items-center justify-center text-white shadow-2xl shadow-electric/40 z-[99] hover:scale-110 active:scale-95 transition-transform group"
        id="chatbot-trigger"
      >
        <MessageSquare className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-[#030303]" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-24 right-8 w-[350px] md:w-[400px] h-[500px] glass rounded-3xl border border-white/20 dark:border-white/10 shadow-2xl z-[100] flex flex-col overflow-hidden bg-white/80 dark:bg-zinc-900/90 backdrop-blur-xl"
            id="chatbot-window"
          >
            {/* Header */}
            <div className="p-4 border-b border-black/5 dark:border-white/5 flex items-center justify-between bg-zinc-900 dark:bg-white/5 text-white">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-electric flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest">Kicko Assistant</h3>
                  <p className="text-[8px] text-zinc-400 dark:text-zinc-500 flex items-center gap-1">
                    <span className="w-1 h-1 bg-green-500 rounded-full" /> Systems Online
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
                id="chatbot-close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: m.role === 'user' ? 10 : -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-4 rounded-2xl text-xs leading-relaxed ${
                    m.role === 'user' 
                      ? 'bg-electric text-white rounded-tr-none' 
                      : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-tl-none border border-black/5 dark:border-white/5'
                  }`}>
                    {m.content}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-2xl rounded-tl-none flex gap-1">
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1 h-1 bg-electric rounded-full" />
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1 h-1 bg-electric rounded-full" />
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1 h-1 bg-electric rounded-full" />
                  </div>
                </div>
              )}
              {error && (
                <div className="flex justify-center">
                  <div className="flex items-center gap-2 text-[10px] text-red-500 bg-red-500/10 px-3 py-2 rounded-full">
                    <AlertCircle className="w-3 h-3" /> {error}
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-black/5 dark:border-white/5">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about KickoTech..."
                  className="w-full bg-zinc-100 dark:bg-zinc-800 rounded-xl px-4 py-3 pr-12 text-xs focus:outline-none focus:ring-1 focus:ring-electric border border-black/5 dark:border-white/5 text-zinc-900 dark:text-white"
                  id="chatbot-input"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 p-2 rounded-lg bg-electric text-white disabled:opacity-50 hover:scale-105 active:scale-95 transition-all"
                  id="chatbot-send"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <p className="text-[8px] text-zinc-400 dark:text-zinc-500 mt-3 text-center uppercase tracking-[0.2em]">
                Secured via Gemini v1.5 Flash
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
