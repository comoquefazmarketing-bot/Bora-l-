/* @author Bora Lá | Lead Architect - Manda Lá */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, Home, Send, CheckCircle, Map, 
  Camera, Users, Waves, Car
} from 'lucide-react';

export default function RegisterArea() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => navigate('/'), 4000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#FDFCFB] flex flex-col items-center justify-center p-8 text-center animate-in fade-in zoom-in duration-500">
        <div className="bg-[#00BFA6] w-24 h-24 rounded-full flex items-center justify-center text-white mb-8 shadow-2xl shadow-[#00BFA6]/40">
          <CheckCircle size={48} className="animate-bounce" />
        </div>
        <h2 className="text-5xl font-black uppercase italic tracking-tighter">Espaço <br/><span className="text-[#00BFA6]">Em Avaliação.</span></h2>
        <p className="text-[#B2B0AB] font-bold uppercase text-[10px] tracking-[0.4em] mt-8 max-w-md leading-loose">
          Obrigado por confiar no Bora Lá. Nosso time de curadoria visitará seu espaço virtualmente para validar a entrada no catálogo premium.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#1A1A1A] pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        
        {/* COLUNA 1: MARKETING PARA DONOS DE ÁREAS */}
        <div className="lg:sticky lg:top-40">
          <header>
            <div className="bg-black w-16 h-16 rounded-[25px] flex items-center justify-center text-white mb-8 shadow-2xl">
              <Home size={32} />
            </div>
            <h1 className="text-7xl font-black uppercase italic tracking-tighter leading-[0.85]">
              Rentabilize seu <br/><span className="text-[#00BFA6]">Espaço.</span>
            </h1>
            <p className="text-[#B2B0AB] font-bold uppercase text-[11px] tracking-[0.3em] mt-10 leading-relaxed max-w-md">
              Não alugue apenas uma chácara. Ofereça uma experiência completa através da nossa curadoria.
            </p>
          </header>

          <div className="grid grid-cols-2 gap-6 mt-16">
            <Feature icon={<Users />} label="Público Selecionado" />
            <Feature icon={<Camera />} label="Fotos Profissionais" />
            <Feature icon={<Waves />} label="Gestão de Reservas" />
            <Feature icon={<Car />} label="Segurança Total" />
          </div>
        </div>

        {/* COLUNA 2: FORMULÁRIO ESPECÍFICO */}
        <div className="bg-white rounded-[60px] p-12 shadow-[0_50px_100px_rgba(0,0,0,0.06)] border border-[#F0EFEA]">
          <div className="mb-12">
            <span className="text-[#00BFA6] font-black uppercase text-[10px] tracking-[0.5em]">Credenciamento de Imóvel</span>
            <h3 className="text-3xl font-black uppercase italic tracking-tighter mt-2">Dados da Área</h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[9px] font-black uppercase tracking-[0.2em] ml-4 text-[#B2B0AB]">Nome da Propriedade / Chácara</label>
              <input required placeholder="Ex: Rancho Paradise Borborema" className="w-full bg-[#FDFCFB] border border-[#F0EFEA] p-6 rounded-[30px] outline-none focus:border-[#00BFA6] font-bold text-sm" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[9px] font-black uppercase tracking-[0.2em] ml-4 text-[#B2B0AB]">Localização (Cidade)</label>
                <input required placeholder="Novo Horizonte - SP" className="w-full bg-[#FDFCFB] border border-[#F0EFEA] p-6 rounded-[30px] outline-none focus:border-[#00BFA6] font-bold text-sm" />
              </div>
              <div className="space-y-2">
                <label className="text-[9px] font-black uppercase tracking-[0.2em] ml-4 text-[#B2B0AB]">Capacidade Máxima</label>
                <input required type="number" placeholder="Ex: 50 pessoas" className="w-full bg-[#FDFCFB] border border-[#F0EFEA] p-6 rounded-[30px] outline-none focus:border-[#00BFA6] font-bold text-sm" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[9px] font-black uppercase tracking-[0.2em] ml-4 text-[#B2B0AB]">Itens de Lazer (Separe por vírgula)</label>
              <textarea rows="3" placeholder="Piscina aquecida, Campo de futebol, Wi-fi, Churrasqueira gourmet..." className="w-full bg-[#FDFCFB] border border-[#F0EFEA] p-6 rounded-[30px] outline-none focus:border-[#00BFA6] font-bold text-sm transition-all resize-none"></textarea>
            </div>

            <div className="space-y-2">
              <label className="text-[9px] font-black uppercase tracking-[0.2em] ml-4 text-[#B2B0AB]">WhatsApp para contato</label>
              <input required placeholder="(17) 9..." className="w-full bg-[#FDFCFB] border border-[#F0EFEA] p-6 rounded-[30px] outline-none focus:border-[#00BFA6] font-bold text-sm" />
            </div>

            <button type="submit" className="w-full bg-[#1A1A1A] text-white py-8 rounded-[35px] font-black uppercase text-[11px] tracking-[0.4em] flex items-center justify-center gap-4 hover:bg-[#00BFA6] transition-all shadow-2xl">
              Solicitar Inclusão <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function Feature({ icon, label }) {
  return (
    <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-[#F0EFEA]">
      <div className="text-[#00BFA6]">{icon}</div>
      <span className="text-[8px] font-black uppercase tracking-widest">{label}</span>
    </div>
  );
}