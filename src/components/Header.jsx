/* @author Felipe Makarios | Creator */
import React from 'react';
import { Menu, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Header({ onOpenMenu }) {
  const navigate = useNavigate();

  return (
    <header className="w-full bg-white/80 backdrop-blur-md sticky top-0 z-[100] px-6 py-4 flex items-center justify-between border-b border-black/5">
      <div className="flex items-center gap-4">
        {/* BOTÃO AGORA VERDE MARCA */}
        <button 
          onClick={onOpenMenu}
          className="w-12 h-12 bg-[#00BFA6] text-white rounded-2xl flex items-center justify-center shadow-[0_8px_20px_rgba(0,191,166,0.3)] active:scale-95 transition-all"
        >
          <Menu size={24} />
        </button>
        
        {/* TEXTO AGORA VERDE MARCA */}
        <div onClick={() => navigate('/')} className="cursor-pointer group">
          <h1 className="font-black italic text-xl leading-none text-[#00BFA6] group-hover:brightness-90 transition-all">
            BORA<br/>LÁ
          </h1>
        </div>
      </div>

      <button className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400">
        <Search size={20} />
      </button>
    </header>
  );
}