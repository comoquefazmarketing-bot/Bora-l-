import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, UserPlus, Building2, ArrowLeft } from 'lucide-react';
import Sidebar from '../components/Sidebar';

export default function PartnersSelection() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#FDFCFB] font-sans text-black flex flex-col items-center justify-center p-6">
      <Sidebar />
      <button onClick={() => navigate('/')} className="fixed top-8 left-8 flex items-center gap-2 font-black uppercase italic text-sm hover:text-[#00BFA6] transition-colors">
        <ArrowLeft size={20} /> Voltar
      </button>

      <div className="max-w-4xl w-full text-center">
        <h1 className="text-5xl lg:text-7xl font-black italic uppercase tracking-tighter leading-none mb-12">
          QUERO SER <span className="text-[#00BFA6]">PARCEIRO.</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div onClick={() => navigate('/register')} className="bg-white p-12 rounded-[50px] border-b-[12px] border-black/10 hover:border-[#00BFA6] cursor-pointer group transition-all shadow-xl">
            <Building2 size={60} className="mx-auto mb-6 text-slate-300 group-hover:text-[#00BFA6] transition-colors" />
            <h2 className="text-3xl font-black uppercase italic tracking-tighter mb-4">Cadastrar Espaço</h2>
            <p className="text-sm font-bold text-slate-400 uppercase italic">Para proprietários de áreas de lazer e chácaras.</p>
          </div>

          <div onClick={() => navigate('/register-supplier')} className="bg-white p-12 rounded-[50px] border-b-[12px] border-black/10 hover:border-[#00BFA6] cursor-pointer group transition-all shadow-xl">
            <UserPlus size={60} className="mx-auto mb-6 text-slate-300 group-hover:text-[#00BFA6] transition-colors" />
            <h2 className="text-3xl font-black uppercase italic tracking-tighter mb-4">Ser Fornecedor</h2>
            <p className="text-sm font-bold text-slate-400 uppercase italic">Para açougues, adegas, buffets e serviços.</p>
          </div>
        </div>
      </div>
    </div>
  );
}