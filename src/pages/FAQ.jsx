import React from 'react';
import { MessageCircle, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function FAQ() {
  const navigate = useNavigate();
  const faqs = [
    {
      q: "Como faço para reservar uma área de lazer?",
      a: "O Bora Lá facilita o contato! Basta escolher a área que você gostou e clicar no botão de WhatsApp do proprietário. Nós ligamos as pontas para você negociar direto com o dono, sem taxas extras de reserva.",
      cta: "Ver Áreas Disponíveis"
    },
    {
      q: "É seguro alugar pelo app?",
      a: "Sim! Fazemos uma curadoria rigorosa das áreas de lazer em Novo Horizonte. Nosso criador, Felipe Makarios, garante que apenas espaços reais e de confiança apareçam em nossa vitrine.",
      cta: "Falar com Consultor"
    },
    {
      q: "A Calculadora de Churrasco é precisa?",
      a: "Com certeza! Ela foi desenvolvida para que você não gaste dinheiro à toa e nem deixe ninguém com fome. É a ferramenta favorita dos nossos usuários.",
      cta: "Usar Calculadora"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="p-4 bg-white shadow-sm flex items-center gap-4">
        <button onClick={() => navigate(-1)}><ArrowLeft /></button>
        <h1 className="text-xl font-bold">Dúvidas Frequentes</h1>
      </div>

      <div className="p-4 max-w-2xl mx-auto space-y-6">
        {faqs.map((f, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
              <CheckCircle2 className="text-[#00BFA6]" size={20} /> {f.q}
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">{f.a}</p>
            <button 
              onClick={() => navigate('/')}
              className="w-full py-3 bg-gray-100 text-gray-800 rounded-xl font-bold hover:bg-[#00BFA6] hover:text-white transition-all"
            >
              {f.cta}
            </button>
          </div>
        ))}

        <div className="mt-10 p-6 bg-gray-900 rounded-3xl text-white text-center">
          <h2 className="text-2xl font-bold mb-2">Ainda com dúvidas?</h2>
          <p className="text-gray-400 mb-6">Fale agora com nosso backoffice e reserve seu lazer.</p>
          <a 
            href="https://wa.me/5511933515087" 
            className="inline-flex items-center gap-2 bg-[#25D366] px-8 py-4 rounded-full font-black text-lg hover:scale-105 transition-all"
          >
            <MessageCircle /> CHAMAR NO WHATSAPP
          </a>
        </div>
      </div>
    </div>
  );
}