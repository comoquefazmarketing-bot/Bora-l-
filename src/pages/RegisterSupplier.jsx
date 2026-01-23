import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Send, CheckCircle, ShieldCheck, Zap, Users, Star } from 'lucide-react';

export default function RegisterSupplier() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => navigate('/'), 4000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#FDFCFB] flex flex-col items-center justify-center p-8 text-center">
        <div className="bg-[#00BFA6] w-24 h-24 rounded-full flex items-center justify-center text-white mb-8 shadow-2xl">
          <CheckCircle size={48} className="animate-bounce" />
        </div>
        <h2 className="text-5xl font-black uppercase italic tracking-tighter">Solicitação <br/><span className="text-[#00BFA6]">Em Análise.</span></h2>
        <p className="text-[#B2B0AB] font-bold uppercase text-[10px] tracking-[0.4em] mt-8 max-w-md">
          Recebemos os dados do estabelecimento. Nosso time entrará em contato em breve.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#1A1A1A] pt-40 pb-20"> 
      {/* O pt-40 serve para empurrar o conteúdo para baixo da calculadora fixa */}
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center border-t border-black/5 pt-10">
        
        <div className="space-y-12">
          <header>
            <img src="/logo/logo.png" alt="Bora Lá" className="h-12 mb-10 opacity-80" />
            <h1 className="text-7xl font-black uppercase italic tracking-tighter leading-[0.85]">
              Sua empresa no <br/><span className="text-[#00BFA6]">Manda Lá.</span>
            </h1>
            <p className="text-[#B2B0AB] font-bold uppercase text-[11px] tracking-[0.3em] mt-10 leading-relaxed max-w-md">
              Conecte seu estoque às melhores experiências da região. Uma vitrine inteligente para um público de alto padrão.
            </p>
          </header>

          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-[#F0EFEA] text-[#00BFA6]"><Zap size={24}/></div>
              <div>
                <h4 className="font-black uppercase text-[12px] tracking-widest">Cotações Instantâneas</h4>
                <p className="text-[10px] text-[#B2B0AB] font-bold uppercase mt-1">Integração direta com nossa calculadora.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[60px] p-12 shadow-[0_50px_100px_rgba(0,0,0,0.06)] border border-[#F0EFEA] relative overflow-hidden">
          <div className="mb-12">
            <span className="text-[#00BFA6] font-black uppercase text-[10px] tracking-[0.5em]">Solicitar Adesão</span>
            <h3 className="text-3xl font-black uppercase italic tracking-tighter mt-2">Dados do Parceiro</h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <input required placeholder="Nome do Estabelecimento" className="w-full bg-[#FDFCFB] border border-[#F0EFEA] p-6 rounded-[30px] outline-none focus:border-[#00BFA6] font-bold text-sm" />
              <input required placeholder="WhatsApp (17) 9..." className="w-full bg-[#FDFCFB] border border-[#F0EFEA] p-6 rounded-[30px] outline-none focus:border-[#00BFA6] font-bold text-sm" />
              <select className="w-full bg-[#FDFCFB] border border-[#F0EFEA] p-6 rounded-[30px] outline-none focus:border-[#00BFA6] font-black uppercase text-[10px] tracking-widest">
                <option>Adega / Bebidas</option>
                <option>Casa de Carnes</option>
                <option>Gelo e Conveniência</option>
              </select>
            </div>

            <button type="submit" className="w-full bg-[#1A1A1A] text-white py-8 rounded-[35px] font-black uppercase text-[11px] tracking-[0.4em] flex items-center justify-center gap-4 hover:bg-[#00BFA6] transition-all shadow-2xl">
              Enviar para Curadoria <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}