import React from "react";
import { MessageCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function LiaFloatingButton() {
  const navigate = useNavigate();
  return (
    <motion.div className="fixed bottom-8 right-8 z-50" initial={{ scale: 0 }} animate={{ scale: 1 }}>
      <button 
        onClick={() => navigate('/chat-with-lia')}
        className="w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-white relative group"
        style={{ background: 'linear-gradient(135deg, #00BFA6 0%, #009688 100%)' }}
      >
        <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform" />
        <div className="absolute -top-1 -right-1 bg-yellow-400 p-1 rounded-full animate-bounce">
          <Sparkles className="w-3 h-3 text-white" />
        </div>
      </button>
    </motion.div>
  );
}