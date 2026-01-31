import React, { useState } from 'react';
import { X, Home, Calculator, Star, Handshake, HelpCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function KarenChat() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const whatsappNumber = "5511933515087";

  const options = [
    { label: "Quero alugar uma Área de Lazer", icon: <Home size={18} />, msg: "Olá! Gostaria de informações sobre as áreas de lazer disponíveis." },
    { label: "Calculadora de Churrasco", icon: <Calculator size={18} />, msg: "Oi! Preciso de ajuda com a Calculadora de Churrasco." },
    { label: "Anunciar minha Área", icon: <Star size={18} />, msg: "Olá! Sou proprietário e quero anunciar meu espaço no Bora Lá." },
    { label: "Quero ser Parceiro", icon: <Handshake size={18} />, msg: "Olá! Tenho interesse em uma parceria comercial." }
  ];

  const handleRedirect = (msg) => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="fixed bottom-8 right-8 z-[9999] flex flex-col items-end font-sans">
      {isOpen && (
        <div className="mb-4 w-[320px] bg-white rounded-[25px] shadow-2xl flex flex-col overflow-hidden border border-gray-100 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="p-4 bg-gray-900 text-white flex justify-between items-center">
            <div className="flex items-center gap-2 font-bold">
              <div className="w-8 h-8 rounded-full border border-[#00BFA6] overflow-hidden bg-gray-700">
                <img src="/karen.jpeg" className="w-full h-full object-cover" alt="Karen" />
              </div>
              Karen | Bora Lá
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-all"><X size={18} /></button>
          </div>

          <div className="p-4 bg-gray-50 space-y-3">
            {options.map((opt, i) => (
              <button key={i} onClick={() => handleRedirect(opt.msg)} className="w-full flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-100 hover:border-[#00BFA6] transition-all shadow-sm">
                <span className="text-[#00BFA6]">{opt.icon}</span>
                {opt.label}
              </button>
            ))}
            
            <button 
              onClick={() => { navigate('/faq'); setIsOpen(false); }}
              className="w-full flex items-center gap-3 p-3 bg-blue-600 border border-blue-600 rounded-xl text-sm font-bold text-white hover:bg-blue-700 transition-all shadow-md mt-2"
            >
              <HelpCircle size={18} />
              Dúvidas Frequentes (FAQ)
            </button>
          </div>
        </div>
      )}

      <button onClick={() => setIsOpen(!isOpen)} className="w-16 h-16 rounded-full bg-white shadow-lg border-2 border-white overflow-hidden hover:scale-110 active:scale-95 transition-all flex items-center justify-center">
        {isOpen ? <X size={28} className="text-gray-800" /> : <img src="/karen.jpeg" className="w-full h-full object-cover" alt="Karen" />}
      </button>
    </div>
  );
}