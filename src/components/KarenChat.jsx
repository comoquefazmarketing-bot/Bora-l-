import React, { useState, useEffect, useRef } from 'react';
import { Send, X } from 'lucide-react';

export default function KarenChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: 'karen', text: 'Olá! Sou a Karen, consultora oficial do Bora Lá.\nComo posso facilitar sua experiência hoje?' }]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef();

  useEffect(() => { scrollRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages]);

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
        body: JSON.stringify({ chatInput: userText })
      });
      const data = await response.json();
      setMessages(prev => [...prev, { role: 'karen', text: data.output }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'karen', text: 'Karen está temporariamente offline. Tente novamente em instantes!' }]);
    } finally { setIsTyping(false); }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[9999] flex flex-col items-end font-sans">
      {isOpen && (
        <div className="mb-4 w-[340px] h-[500px] bg-white rounded-[25px] shadow-2xl flex flex-col overflow-hidden border">
          <div className="p-4 bg-gray-900 text-white flex justify-between items-center">
            <div className="flex items-center gap-2 font-bold">
              <div className="w-8 h-8 rounded-full border border-[#00BFA6] overflow-hidden bg-gray-700">
                <img src="/karen.jpeg" className="w-full h-full object-cover" />
              </div>
              Karen AI
            </div>
            <button onClick={() => setIsOpen(false)}><X size={18} /></button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 text-gray-800">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`p-3 rounded-xl text-sm max-w-[85%] ${m.role === 'user' ? 'bg-gray-800 text-white' : 'bg-white shadow-sm'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && <div className="text-[10px] text-gray-400 animate-pulse">Karen está digitando...</div>}
            <div ref={scrollRef} />
          </div>
          <div className="p-3 border-t flex gap-2 bg-white">
            <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSend()} className="flex-1 outline-none text-sm text-gray-800" placeholder="Fale com a Karen..." />
            <button onClick={handleSend} className="text-[#00BFA6] font-bold">Enviar</button>
          </div>
        </div>
      )}
      <button onClick={() => setIsOpen(!isOpen)} className="w-16 h-16 rounded-full bg-white shadow-lg border-2 border-white overflow-hidden hover:scale-105 transition-all">
        {isOpen ? <X size={24} className="mx-auto text-gray-800" /> : <img src="/karen.jpeg" className="w-full h-full object-cover" />}
      </button>
    </div>
  );
}