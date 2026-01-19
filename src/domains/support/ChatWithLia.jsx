import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Send, Loader2, Sparkles, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function ChatWithLia() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // URL do seu Webhook no n8n (Substitua pela sua quando criar o workflow)
  const N8N_WEBHOOK_URL = "https://showers-faulkio-stephen.trycloudflare.com/webhook-test/conversa-lia";

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e, customText = null) => {
    if (e) e.preventDefault();
    const textToSend = customText || inputMessage;
    if (!textToSend.trim() || isLoading) return;

    const userMessage = { role: "user", content: textToSend };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      // Chamada real para o n8n
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chatInput: textToSend,
          userName: "Felipe Makarios",
          userContext: "Dono do App Bora Lá"
        })
      });

      const data = await response.json();
      
      // O n8n geralmente retorna o texto no campo 'output' ou 'response'
      const liaReply = data.output || data.response || "Puxa, tive um probleminha para pensar agora. Pode repetir?";

      setMessages(prev => [...prev, { role: "assistant", content: liaReply }]);
    } catch (error) {
      console.error("Erro ao falar com n8n:", error);
      setMessages(prev => [...prev, { role: "assistant", content: "Ops! Minha conexão com o n8n caiu. Verifique se o workflow está ativo!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header Sensorial */}
      <div className="px-6 py-4 border-b border-slate-50 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/')} className="p-2 hover:bg-slate-50 rounded-full">
            <ChevronLeft className="w-6 h-6 text-slate-400" />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00BFA6] to-[#009688] flex items-center justify-center shadow-lg shadow-[#00BFA6]/20">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="font-black text-slate-900 text-lg">Lia <span className="text-[10px] text-[#00BFA6] ml-2 font-black uppercase">IA Power</span></h2>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Conectada via n8n</p>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto px-6 py-8 bg-[#FDFDFD]">
        <div className="max-w-3xl mx-auto space-y-6">
          {messages.length === 0 && (
            <div className="text-center py-10">
              <h1 className="text-3xl font-black text-slate-900 mb-6">Como posso te ajudar hoje?</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["Qual a melhor chácara para 50 pessoas?", "Tem algum lugar disponível para sábado?", "Quais áreas tem piscina?", "Me mostre os preços"].map((s) => (
                  <button key={s} onClick={() => handleSendMessage(null, s)} className="p-4 rounded-2xl border-2 border-slate-100 hover:border-[#00BFA6] text-left font-bold text-slate-600 transition-all">
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-4 rounded-[22px] font-medium ${
                msg.role === 'user' ? 'bg-[#00BFA6] text-white' : 'bg-white border border-slate-100 text-slate-700 shadow-sm'
              }`}>
                {msg.content}
              </div>
            </div>
          ))}
          {isLoading && <Loader2 className="w-6 h-6 animate-spin text-[#00BFA6] mx-auto" />}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input */}
      <div className="p-6 bg-white border-t border-slate-50">
        <form onSubmit={handleSendMessage} className="max-w-3xl mx-auto flex gap-3">
          <input 
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Pergunte qualquer coisa para a Lia..."
            className="flex-1 bg-slate-50 border-none rounded-2xl px-6 py-4 font-bold focus:ring-2 focus:ring-[#00BFA6] outline-none"
          />
          <button type="submit" className="bg-[#00BFA6] p-4 rounded-2xl text-white shadow-lg">
            <Send className="w-6 h-6" />
          </button>
        </form>
      </div>
    </div>
  );
}