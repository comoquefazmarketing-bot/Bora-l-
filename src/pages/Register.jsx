/* @author Felipe Makarios | Lead Architect - BORA LÁ */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Store, ArrowLeft } from 'lucide-react';

export default function Register() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#FDFCFB] flex flex-col items-center justify-center p-8">
      <button onClick={() => navigate('/')} className="absolute top-12 left-12 flex items-center gap-2 font-black uppercase text-[10px] tracking-widest text-slate-400">
        <ArrowLeft size={16} /> Voltar
      </button>
      <div className="text-center mb-16">
        <h2 className="text-5xl font-black uppercase italic tracking-tighter">Escolha seu <br/><span className="text-[#00BFA6]">Perfil.</span></h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        <div onClick={() => navigate('/register-area')} className="group cursor-pointer bg-white border border-black/5 p-12 rounded-[50px] hover:shadow-2xl transition-all text-center">
          <div className="bg-[#00BFA6]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-[#00BFA6] group-hover:scale-110 transition-transform"><MapPin size={32} /></div>
          <h3 className="font-black uppercase italic text-xl">Sou Proprietário</h3>
          <p className="text-[10px] font-bold text-slate-400 uppercase mt-4">Cadastre sua área de lazer</p>
        </div>
        <div onClick={() => navigate('/register-supplier')} className="group cursor-pointer bg-white border border-black/5 p-12 rounded-[50px] hover:shadow-2xl transition-all text-center">
          <div className="bg-[#1A1A1A]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-[#1A1A1A] group-hover:scale-110 transition-transform"><Store size={32} /></div>
          <h3 className="font-black uppercase italic text-xl">Sou Fornecedor</h3>
          <p className="text-[10px] font-bold text-slate-400 uppercase mt-4">Faça parte do Manda Lá</p>
        </div>
      </div>
    </div>
  );
}