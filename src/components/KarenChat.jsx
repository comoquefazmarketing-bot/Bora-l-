import React, { useState } from 'react';
import { X, Home, Star, Handshake, HelpCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function KarenChat() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const whatsappNumber = "5511933515087";

  const handleRedirect = (msg) => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="fixed bottom-8 right-8 z-[9999] flex flex-col items-end font-sans">
      {isOpen && (
        <div className="mb-4 w-[320px] bg-white rounded-[25px] shadow-2xl flex flex-col overflow-hidden border border-gray-100 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="p-4 bg-gray-900 text-white flex justify-between items-center">
            <div className="flex items-center gap-2 font-bold">
              <div className="w-8 h-8 rounded-full border border-[#00BFA6] overflow-hidden">
                <img src="/karen.webp" className="w-full h-full object-cover" />
              </div>
              Karen | BORA LÁ
            </div>
            <button onClick={() => setIsOpen(false)}><X size={18} /></button>
          </div>
          <div className="p-4 bg-gray-50 space-y-3">
            <button onClick={() => handleRedirect("Olá! Quero alugar uma área de lazer.")} className="w-full flex items-center gap-3 p-3 bg-white border rounded-xl text-sm font-medium hover:border-[#00BFA6] transition-all">
              <Home size={18} className="text-[#00BFA6]" /> Alugar Ãrea de Lazer
            </button>
            <button onClick={() => handleRedirect("Olá! Sou proprietário e quero anunciar meu espaço.")} className="w-full flex items-center gap-3 p-3 bg-white border rounded-xl text-sm font-medium hover:border-[#00BFA6] transition-all">
              <Star size={18} className="text-[#00BFA6]" /> Anunciar minha Ãrea
            </button>
            <button onClick={() => handleRedirect("Olá! Tenho interesse em uma parceria comercial com o BORA LÁ.")} className="w-full flex items-center gap-3 p-3 bg-white border rounded-xl text-sm font-medium hover:border-[#00BFA6] transition-all">
              <Handshake size={18} className="text-[#00BFA6]" /> Quero ser Parceiro
            </button>
            <button onClick={() => { navigate('/faq'); setIsOpen(false); }} className="w-full flex items-center gap-3 p-3 bg-blue-600 text-white rounded-xl text-sm font-bold shadow-md">
              <HelpCircle size={18} /> DÃºvidas Frequentes (FAQ)
            </button>
          </div>
        </div>
      )}
      <button onClick={() => setIsOpen(!isOpen)} className="w-16 h-16 rounded-full bg-white shadow-lg border-2 border-white overflow-hidden active:scale-95 transition-all">
        {isOpen ? <X size={28} className="mx-auto text-gray-800" /> : <img src="/karen.webp" className="w-full h-full object-cover" />}
      </button>
    </div>
  );
}