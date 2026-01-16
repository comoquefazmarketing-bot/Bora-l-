import React, { useState, useEffect, useRef } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Send, Loader2, Sparkles, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { N8N_WEBHOOKS } from "../constants/n8nConfig";
import MessageBubble from "../components/chat/MessageBubble";
import axios from "axios";

export default function ChatWithLia() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Oi! Sou a Lia ☀️ Como posso ajudar você a encontrar o lazer perfeito hoje?' }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim() || isLoading) return;

    const userText = inputMessage.trim();
    const newMessages = [...messages, { role: "user", content: userText }];
    
    setMessages(newMessages);
    setInputMessage("");
    setIsLoading(true);

    try {
      // Envia para o seu fluxo no n8n
      const response = await axios.post(N8N_WEBHOOKS.CHAT_LIA, {
        message: userText,
        user_name: "Felipe Makarios", creator_context: "Felipe é o criador do app", // Aqui você pegará do seu contexto de usuário futuramente
        chat_history: messages
      });

      // O n8n deve retornar um objeto com o campo 'output' ou 'response'
      const liaResponse = response.data.output || response.data.response || "Estou processando sua ideia... 🌴";
      
      setMessages([...newMessages, { role: "assistant", content: liaResponse }]);
    } catch (error) {
      console.error("Erro na Lia (n8n):", error);
      setMessages([...newMessages, { role: "assistant", content: "Ops, tive um pequeno tropeço. Pode repetir? 🥥" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-[#FAFAF9]">
      <div className="border-b border-gray-100 bg-white/90 backdrop-blur-md p-6">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Button variant="ghost" onClick={() => navigate(-1)}><ArrowLeft /></Button>
          <div className="flex items-center gap-3">
             <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center shadow-lg shadow-teal-100">
                <Sparkles className="w-6 h-6 text-teal-500" />
             </div>
             <h1 className="text-xl font-black text-gray-900 leading-tight">Lia (Powered by n8n)</h1>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-10">
        <div className="max-w-4xl mx-auto space-y-6">
          <AnimatePresence>
            {messages.map((m, i) => (
              <MessageBubble key={i} message={m} />
            ))}
          </AnimatePresence>
          {isLoading && <div className="text-teal-500 animate-pulse font-bold text-sm">Lia está consultando o mapa... 🗺️</div>}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="p-6 bg-white border-t border-gray-100">
        <form onSubmit={handleSendMessage} className="max-w-4xl mx-auto flex gap-3">
          <Input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Diga o que você busca..."
            className="h-14 rounded-2xl bg-gray-50 border-none"
          />
          <Button type="submit" className="h-14 w-14 rounded-2xl bg-black hover:bg-teal-600">
             <Send size={20} />
          </Button>
        </form>
      </div>
    </div>
  );
}

