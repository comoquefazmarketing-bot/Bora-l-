import React from 'react';
import { Target, Users, Calculator, MessageCircle, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Treinamento() {
  const navigate = useNavigate();
  const sections = [
    {
      icon: <Target size={24} color="#00BFA6" />,
      title: "Nossa Missão: O Propósito Bora Lá",
      content: "Nós não vendemos apenas locação de chácaras ou áreas de lazer. Nós entregamos o cenário para as melhores memórias das famílias de Novo Horizonte. Nosso foco é ligar as pontas com segurança."
    },
    {
      icon: <Users size={24} color="#00BFA6" />,
      title: "Atendimento Humanizado",
      content: "Sempre que um cliente vier pelo WhatsApp através da Karen, responda com entusiasmo. Identifique se ele quer Alugar, Anunciar ou ser Parceiro e use os scripts de abordagem."
    },
    {
      icon: <Calculator size={24} color="#00BFA6" />,
      title: "Calculadora de Churrasco",
      content: "É a nossa maior ferramenta de retenção. Ajude o cliente a entender que ele economiza usando nossa calculadora, isso gera confiança para ele fechar a locação conosco."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-20 font-sans">
      <div className="max-w-3xl mx-auto px-6">
        <button onClick={() => navigate('/')} className="flex items-center gap-2 text-gray-500 mb-8 font-bold">
          <ArrowLeft size={20} /> Voltar para o Painel
        </button>
        
        <h1 className="text-3xl font-black text-gray-900 mb-2 italic uppercase">Manual de Treinamento</h1>
        <p className="text-gray-500 mb-10">Equipe Bora Lá & Como Que Faz</p>

        <div className="space-y-6">
          {sections.map((s, i) => (
            <div key={i} className="bg-white p-8 rounded-[30px] shadow-sm border border-gray-100 transition-all hover:shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gray-50 rounded-2xl">{s.icon}</div>
                <h3 className="text-xl font-black text-gray-900 uppercase italic">{s.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed font-medium">{s.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-10 bg-[#00BFA6] rounded-[40px] text-white text-center shadow-xl">
          <h2 className="text-2xl font-black mb-4 italic uppercase">Dúvidas no Processo?</h2>
          <p className="mb-8 font-bold opacity-90">Fale direto com o Felipe Makarios para ajustes de rota comercial.</p>
          <a href="https://wa.me/5511933515087" className="inline-flex items-center gap-3 bg-gray-900 px-10 py-4 rounded-full font-black text-lg hover:scale-105 transition-all">
            <MessageCircle /> SUPORTE AO TIME
          </a>
        </div>
      </div>
    </div>
  );
}