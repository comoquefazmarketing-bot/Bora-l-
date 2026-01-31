import React, { useState } from 'react';
import { X, Home, Calculator, Star, Handshake, MessageCircle } from 'lucide-react';

export default function KarenChat() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = "5511933515087";

  const options = [
    { label: "Locação de Chácaras", icon: <Home size={18} />, msg: "Olá Karen! Gostaria de informações sobre locação de chácaras." },
    { label: "Calculadora de Churrasco", icon: <Calculator size={18} />, msg: "Oi! Preciso de ajuda com a Calculadora de Churrasco." },
    { label: "Anunciar minha Chácara", icon: <Star size={18} />, msg: "Olá! Sou proprietário e quero anunciar minha chácara no Bora Lá." },
    { label: "Quero ser Parceiro", icon: <Handshake size={18} />, msg: "Olá! Tenho interesse em uma parceria comercial com o Bora Lá e a Como Que Faz." }
  ];

  const handleRedirect = (msg) => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="fixed bottom-8 right-8 z-[9999] flex flex-col items-end font-sans">
      {isOpen && (
        <div className="mb-4 w-[320px] bg-white rounded-[25px] shadow-2xl flex flex-col overflow-hidden border border-gray-100 animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="p-4 bg-gray-900 text-white flex justify-between items-center">
            <div className="flex items-center gap-2 font-bold">
              <div className="w-8 h-8 rounded-full border border-[#00BFA6] overflow-hidden bg-gray-700">
                <img src="/karen.jpeg" className="w-full h-full object-cover" alt="Karen" />
              </div>
              Karen AI | SDR
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-all"><X size={18} /></button>
          </div>

          {/* Opções de SDR */}
          <div className="p-4 bg-gray-50 space-y-3">
            <p className="text-[13px] text-gray-500 mb-2 px-1">Olá! Como posso facilitar sua experiência hoje?</p>
            {options.map((opt, i) => (
              <button 
                key={i} 
                onClick={() => handleRedirect(opt.msg)}
                className="w-full flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-100 hover:border-[#00BFA6] transition-all shadow-sm"
              >
                <span className="text-[#00BFA6]">{opt.icon}</span>
                {opt.label}
              </button>
            ))}
          </div>

          {/* Footer */}
          <div className="p-3 text-center bg-white border-t">
             <p className="text-[10px] text-gray-400">Powered by Como Que Faz Marketing Digital</p>
          </div>
        </div>
      )}

      {/* Botão Flutuante */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-16 h-16 rounded-full bg-white shadow-lg border-2 border-white overflow-hidden hover:scale-110 active:scale-95 transition-all flex items-center justify-center"
      >
        {isOpen ? (
          <X size={28} className="text-gray-800" />
        ) : (
          <img src="/karen.jpeg" className="w-full h-full object-cover" alt="Open Chat" />
        )}
      </button>
    </div>
  );
}