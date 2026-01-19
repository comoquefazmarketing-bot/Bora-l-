/* @author Felipe Makarios | Creator & Lead Architect - Bora Lá / Manda Lá */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, Store, Send, CheckCircle, ShieldCheck, 
  Zap, BarChart3, Users, Clock, Star
} from 'lucide-react';

export default function RegisterSupplier() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Fluxo de sucesso com delay para redirecionamento
    setTimeout(() => navigate('/'), 4000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#FDFCFB] flex flex-col items-center justify-center p-8 text-center animate-in fade-in zoom-in duration-500">
        <div className="bg-[#00BFA6] w-24 h-24 rounded-full flex items-center justify-center text-white mb-8 shadow-2xl shadow-[#00BFA6]/40">
          <CheckCircle size={48} className="animate-bounce" />
        </div>
        <h2 className="text-5xl font-black uppercase italic tracking-tighter">Solicitação <br/><span className="text-[#00BFA6]">Em Análise.</span></h2>
        <p className="text-[#B2B0AB] font-bold uppercase text-[10px] tracking-[0.4em] mt-8 max-w-md leading-loose">
          Obrigado, Felipe. Recebemos seus dados. Nosso time de curadoria entrará em contato para validar sua entrada no time seleto Manda Lá.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#1A1A1A] font-sans">
      {/* HEADER SENSORIAL */}
      <nav className="p-8 flex justify-between items-center max-w-7xl mx-auto">
        <button onClick={() => navigate('/')} className="flex items-center gap-3 font-black uppercase text-[10px] tracking-widest hover:text-[#FF4500] transition-all group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Voltar ao App
        </button>
        <div className="flex items-center gap-2 px-4 py-2 bg-black rounded-full">
          <Star size={12} className="text-[#FFD700] fill-[#FFD700]" />
          <span className="font-black uppercase text-[8px] tracking-[0.2em] text-white">Time Seleto 2026</span>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 py-10 items-center">
        
        {/* COLUNA 1: PROPOSTA DE VALOR (MARKETING) */}
        <div className="space-y-12">
          <header>
            <div className="bg-[#FF4500] w-16 h-16 rounded-[25px] flex items-center justify-center text-white mb-8 shadow-2xl shadow-[#FF4500]/30">
              <Store size={32} />
            </div>
            <h1 className="text-7xl font-black uppercase italic tracking-tighter leading-[0.85]">
              Sua empresa no <br/><span className="text-[#FF4500]">Manda Lá.</span>
            </h1>
            <p className="text-[#B2B0AB] font-bold uppercase text-[11px] tracking-[0.3em] mt-10 leading-relaxed max-w-md">
              Não somos apenas um catálogo. Somos a conexão direta entre o seu estoque e as melhores festas de Novo Horizonte.
            </p>
          </header>

          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-[#F0EFEA] text-[#FF4500]"><Zap size={24}/></div>
              <div>
                <h4 className="font-black uppercase text-[12px] tracking-widest">Cotações Instantâneas</h4>
                <p className="text-[10px] text-[#B2B0AB] font-bold uppercase mt-1">Receba listas prontas via WhatsApp.</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-[#F0EFEA] text-[#FF4500]"><Users size={24}/></div>
              <div>
                <h4 className="font-black uppercase text-[12px] tracking-widest">Público Qualificado</h4>
                <p className="text-[10px] text-[#B2B0AB] font-bold uppercase mt-1">Apareça para quem já alugou a chácara.</p>
              </div>
            </div>
          </div>
        </div>

        {/* COLUNA 2: FORMULÁRIO DE CREDENCIAMENTO */}
        <div className="bg-white rounded-[60px] p-12 shadow-[0_50px_100px_rgba(0,0,0,0.06)] border border-[#F0EFEA] relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <ShieldCheck size={120} />
          </div>

          <div className="mb-12">
            <span className="text-[#FF4500] font-black uppercase text-[10px] tracking-[0.5em]">Solicitar Adesão</span>
            <h3 className="text-3xl font-black uppercase italic tracking-tighter mt-2">Dados do Parceiro</h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <div className="space-y-2">
                <label className="text-[9px] font-black uppercase tracking-[0.2em] ml-4 text-[#B2B0AB]">Nome do Estabelecimento</label>
                <input required placeholder="Ex: Boutique das Carnes" className="w-full bg-[#FDFCFB] border border-[#F0EFEA] p-6 rounded-[30px] outline-none focus:border-[#FF4500] font-bold text-sm transition-all shadow-inner" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[9px] font-black uppercase tracking-[0.2em] ml-4 text-[#B2B0AB]">WhatsApp (DDD + NÚMERO)</label>
                  <input required placeholder="(17) 9..." className="w-full bg-[#FDFCFB] border border-[#F0EFEA] p-6 rounded-[30px] outline-none focus:border-[#FF4500] font-bold text-sm transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-black uppercase tracking-[0.2em] ml-4 text-[#B2B0AB]">Segmento Principal</label>
                  <select className="w-full bg-[#FDFCFB] border border-[#F0EFEA] p-6 rounded-[30px] outline-none focus:border-[#FF4500] font-black uppercase text-[10px] tracking-widest appearance-none">
                    <option>Adega / Bebidas</option>
                    <option>Casa de Carnes</option>
                    <option>Gelo e Conveniência</option>
                    <option>Buffet / Eventos</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[9px] font-black uppercase tracking-[0.2em] ml-4 text-[#B2B0AB]">Por que você deve ser um fornecedor seleto?</label>
                <textarea rows="3" placeholder="Fale sobre seus diferenciais..." className="w-full bg-[#FDFCFB] border border-[#F0EFEA] p-6 rounded-[30px] outline-none focus:border-[#FF4500] font-bold text-sm transition-all resize-none"></textarea>
              </div>
            </div>

            <button type="submit" className="w-full bg-[#1A1A1A] text-white py-8 rounded-[35px] font-black uppercase text-[11px] tracking-[0.4em] flex items-center justify-center gap-4 hover:bg-[#FF4500] transition-all shadow-2xl active:scale-95">
              Enviar para Curadoria <Send size={18} />
            </button>
            
            <p className="text-center text-[8px] font-black text-[#B2B0AB] uppercase tracking-widest mt-6 opacity-60">
              Sujeito a análise de perfil e região. Bora Lá 2026.
            </p>
          </form>
        </div>

      </div>
    </div>
  );
}