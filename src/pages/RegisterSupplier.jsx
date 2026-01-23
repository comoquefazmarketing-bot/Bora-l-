/* @author Felipe Makarios | Creator & Lead Architect */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Send, CheckCircle, Briefcase } from 'lucide-react';

export default function RegisterSupplier() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => navigate('/'), 3000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#F5F2ED] flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-500">
        <div className="bg-[#1A1A1A] w-24 h-24 rounded-full flex items-center justify-center text-[#00BFA6] mb-8 shadow-2xl">
          <CheckCircle size={48} className="animate-pulse" />
        </div>
        <h2 className="text-4xl font-black uppercase italic tracking-tighter">Proposta <br/><span className="text-[#00BFA6]">Em Análise.</span></h2>
        <p className="text-black/40 font-bold uppercase text-[10px] tracking-widest mt-6">Entraremos em contato em breve.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F2ED] py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <button onClick={() => navigate(-1)} className="mb-10 flex items-center gap-2 font-black uppercase text-[10px] tracking-[3px] text-black/30 hover:text-[#00BFA6] transition-all">
          <ArrowLeft size={16} /> Voltar
        </button>

        <header className="mb-12">
          <h1 className="text-5xl font-black uppercase italic tracking-tighter leading-none mb-4">
            Sua empresa no <br/><span className="text-[#00BFA6]">Manda Lá.</span>
          </h1>
          <p className="text-[10px] font-black uppercase tracking-[4px] text-black/40 mt-8">Curadoria de Fornecedores</p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white/50 backdrop-blur-xl p-8 lg:p-12 rounded-[40px] border border-black/5 shadow-2xl">
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest ml-4 text-black/40">Nome do Estabelecimento</label>
              <input required placeholder="Ex: Boutique de Carnes Premium" className="w-full bg-white border-none rounded-2xl py-5 px-8 outline-none focus:ring-2 focus:ring-[#00BFA6] font-bold" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest ml-4 text-black/40">WhatsApp de Contato</label>
                <input required placeholder="(17) 9..." className="w-full bg-white border-none rounded-2xl py-5 px-8 outline-none focus:ring-2 focus:ring-[#00BFA6] font-bold" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest ml-4 text-black/40">Categoria</label>
                <select className="w-full bg-white border-none rounded-2xl py-5 px-8 outline-none focus:ring-2 focus:ring-[#00BFA6] font-black uppercase text-[10px] tracking-widest">
                  <option>Adega / Bebidas</option>
                  <option>Casa de Carnes</option>
                  <option>Gelo e Conveniência</option>
                  <option>Buffet / Catering</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest ml-4 text-black/40">Breve portfólio (Link ou Bio)</label>
              <textarea rows="3" placeholder="Descreva seus diferenciais..." className="w-full bg-white border-none rounded-[25px] py-6 px-8 outline-none focus:ring-2 focus:ring-[#00BFA6] font-medium" />
            </div>
          </div>

          <button type="submit" className="w-full bg-[#1A1A1A] text-white py-6 rounded-[25px] font-black uppercase text-[11px] tracking-[4px] shadow-2xl flex items-center justify-center gap-3 hover:bg-[#00BFA6] transition-all mt-8">
            <Send size={20} /> Enviar Proposta
          </button>
        </form>
      </div>
    </div>
  );
}