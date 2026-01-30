/* @author Felipe Makarios | Bora Lá */
import React, { useState, useEffect, useRef } from 'react';
import { Send, X, MoreHorizontal } from 'lucide-react';

export default function KarenChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      role: 'karen', 
      text: 'Olá! Sou a Karen, sua consultora Bora Lá.\nComo posso facilitar sua experiência hoje?' 
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef();

  const karenPhoto = "/karen.jpeg";

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userText = input;
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setInput('');
    setIsTyping(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chatInput: userText, sessionId: "borala_sophisticated" })
      });
      const data = await response.json();
      const botReply = data.output || data.text || "Estou à disposição...";
      setMessages(prev => [...prev, { role: 'karen', text: botReply }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'karen', text: 'Tive uma pequena oscilação. Pode repetir?' }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[9999] flex flex-col items-end font-sans antialiased">
      {isOpen && (
        <div className="mb-6 w-[340px] h-[520px] bg-white/95 backdrop-blur-xl rounded-[28px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] border border-white/20 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
          
          {/* HEADER MINIMALISTA E SOFISTICADO */}
          <div className="p-5 flex items-center justify-between bg-white/50 border-b border-gray-50">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img src={karenPhoto} alt="Karen" className="w-10 h-10 rounded-full object-cover grayscale-[20%] border-[1.5px] border-[#00BFA6]" />
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#00BFA6] border-2 border-white rounded-full"></div>
              </div>
              <div>
                <p className="font-semibold text-[15px] tracking-tight text-gray-900">Karen AI</p>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-[#00BFA6] rounded-full animate-pulse"></span>
                  <p className="text-[10px] text-gray-400 font-medium uppercase tracking-[1px]">Consultora</p>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-gray-900 transition-colors">
              <X size={18} strokeWidth={2.5} />
            </button>
          </div>

          {/* ÁREA DE CONVERSA COM DESIGN LIMPO */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6 bg-transparent">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3.5 text-[14px] leading-[1.6] transition-all ${
                  m.role === 'user' 
                    ? 'bg-gray-900 text-white rounded-2xl rounded-tr-none shadow-lg' 
                    : 'bg-[#F8F9FA] text-gray-700 rounded-2xl rounded-tl-none border border-gray-100'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex items-center gap-1.5 px-2">
                <div className="w-1.5 h-1.5 bg-[#00BFA6]/40 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-1.5 h-1.5 bg-[#00BFA6]/40 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-1.5 h-1.5 bg-[#00BFA6]/40 rounded-full animate-bounce"></div>
              </div>
            )}
            <div ref={scrollRef} />
          </div>

          {/* INPUT DISCRETO */}
          <div className="p-5 bg-white border-t border-gray-50">
            <div className="flex items-center gap-2 group">
              <input 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                onKeyDown={(e) => e.key === 'Enter' && handleSend()} 
                placeholder="Escreva algo..." 
                className="flex-1 bg-transparent outline-none text-[14px] text-gray-800 placeholder:text-gray-300 transition-all" 
              />
              <button 
                onClick={handleSend} 
                className={`p-2 rounded-full transition-all ${input.trim() ? 'bg-[#00BFA6] text-white shadow-md' : 'text-gray-200'}`}
              >
                <Send size={16} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* BOTÃO FLUTUANTE ULTRA DELICADO */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="group relative w-16 h-16 rounded-full shadow-[0_15px_35px_-10px_rgba(0,191,166,0.3)] flex items-center justify-center transition-all hover:scale-105 active:scale-95 border-2 border-white bg-white overflow-hidden"
      >
        {isOpen ? (
          <X size={24} className="text-gray-900 animate-in fade-in zoom-in duration-300" />
        ) : (
          <div className="w-full h-full relative">
            <img src={karenPhoto} alt="Karen" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#00BFA6]/20 to-transparent"></div>
          </div>
        )}
        {!isOpen && (
          <div className="absolute top-0 right-0 w-3.5 h-3.5 bg-[#00BFA6] border-[2.5px] border-white rounded-full shadow-sm"></div>
        )}
      </button>
    </div>
  );
}