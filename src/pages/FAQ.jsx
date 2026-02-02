import React from 'react';
import { MessageCircle, ArrowLeft, CheckCircle2, Handshake } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function FAQ() {
  const navigate = useNavigate();
  const faqs = [
    {
      q: "Como faço para reservar uma área de lazer?",
      a: "Escolha o espaço que gostou e clique no botão do WhatsApp. você fala direto com o dono, sem taxas extras de reserva. O BORA LÁ apenas liga as pontas!",
      cta: "Ver Ãreas"
    },
    {
      q: "Ã‰ seguro alugar pelo app?",
      a: "Sim! O BORA LÁ é uma iniciativa da Como Que Faz, do Felipe Makarios. Fazemos a curadoria manual das áreas de Novo Horizonte para sua total segurança.",
      cta: "Falar com Suporte"
    },
    {
      q: "Como funcionam as parcerias comerciais?",
      a: "Buscamos fornecedores de buffet, bebidas, decoração e serviços para eventos. Ser um parceiro BORA LÁ significa estar na vitrine da maior plataforma de lazer da região.",
      cta: "Quero ser Parceiro",
      isSpecial: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-20 font-sans">
      <div className="max-w-2xl mx-auto px-4">
        <button onClick={() => navigate('/')} className="flex items-center gap-2 text-gray-500 mb-8 hover:text-black transition-all">
          <ArrowLeft size={20} /> Voltar ao InÃ­cio
        </button>
        
        <h1 className="text-3xl font-black text-gray-900 mb-2 italic uppercase">DÃºvidas Frequentes</h1>
        <p className="text-gray-500 mb-10">Tudo o que você precisa saber para celebrar com os amigos.</p>

        <div className="space-y-6">
          {faqs.map((f, i) => (
            <div key={i} className={`p-6 rounded-[25px] shadow-sm border ${f.isSpecial ? 'bg-blue-50 border-blue-100' : 'bg-white border-gray-100'}`}>
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                {f.isSpecial ? <Handshake className="text-blue-600" /> : <CheckCircle2 className="text-[#00BFA6]" />}
                {f.q}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">{f.a}</p>
              <button 
                onClick={() => f.isSpecial ? window.open('https://wa.me/5511933515087?text=Quero+ser+parceiro', '_blank') : navigate('/')}
                className={`w-full py-3 rounded-xl font-bold text-sm transition-all ${f.isSpecial ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'bg-gray-100 text-gray-800 hover:bg-[#00BFA6] hover:text-white'}`}
              >
                {f.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-gray-900 rounded-[35px] text-white text-center shadow-2xl">
          <h2 className="text-xl font-bold mb-2">Ainda com dÃºvidas?</h2>
          <p className="text-gray-400 text-sm mb-6">Fale agora com nosso atendimento oficial.</p>
          <a href="https://wa.me/5511933515087" className="inline-flex items-center gap-2 bg-[#25D366] px-10 py-4 rounded-full font-black text-lg hover:scale-105 transition-all">
            <MessageCircle /> CHAMAR AGORA
          </a>
        </div>
      </div>
    </div>
  );
}