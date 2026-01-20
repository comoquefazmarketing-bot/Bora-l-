import React, { useState } from 'react';
import { Calculator, Store, Menu, X, Home, Search, Heart, megaphone } from 'lucide-react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: <Home size={24} />, label: 'Início', action: () => window.location.href='/' },
    { icon: <Search size={24} />, label: 'Explorar', action: () => window.location.href='/explore' },
    { icon: <Search size={24} />, label: 'Reservar', action: () => window.location.href='/booking' },
    { icon: <Heart size={24} />, label: 'Favoritos', action: () => window.location.href='/favorites' },
    { icon: <Calculator size={24} />, label: 'Calculadora Churrasco', action: () => {
        window.dispatchEvent(new CustomEvent('openCalc'));
        setIsOpen(false);
    }},
    { icon: <Store size={24} />, label: 'Seja um Fornecedor', action: () => window.location.href='/register-supplier' },
  ];

  return (
    <>
      {/* Botão de Gatilho quando oculta */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="fixed left-6 top-6 z-[300] p-3 bg-[#F4F1EA] text-[#8D7B68] rounded-full shadow-lg hover:scale-110 transition-all"
        >
          <Menu size={28} />
        </button>
      )}

      {/* Sidebar Areia */}
      <div className={`fixed left-0 top-0 h-full bg-[#F4F1EA] text-[#8D7B68] transition-all duration-500 z-[350] shadow-2xl ${isOpen ? 'w-72' : 'w-0'} overflow-hidden`}>
        <div className="flex flex-col h-full py-10 px-8 w-72">
          <button onClick={() => setIsOpen(false)} className="self-end mb-8 hover:rotate-90 transition-transform">
            <X size={32} />
          </button>

          <div className="mb-12">
            <h1 className="text-3xl font-black tracking-tighter text-[#8D7B68]">BORA LÁ</h1>
            <p className="text-[10px] uppercase tracking-[0.3em] font-medium opacity-70">Momentos que ficam</p>
          </div>

          <nav className="flex-1 space-y-8">
            {menuItems.map((item, idx) => (
              <button key={idx} onClick={item.action} className="flex items-center gap-5 group w-full text-left">
                <div className="group-hover:text-[#00BFA6] transition-colors">{item.icon}</div>
                <span className="font-bold uppercase text-xs tracking-widest group-hover:translate-x-2 transition-transform">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Botão em Destaque: Anuncie Sua Área */}
          <button className="mt-10 p-5 bg-[#8D7B68] text-[#F4F1EA] rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-[#00BFA6] transition-all shadow-md">
            Anuncie sua Área
          </button>

          <div className="mt-12 pt-6 border-t border-[#8D7B68]/10 text-[9px] uppercase tracking-widest opacity-50">
            Felipe Makarios | Creator
          </div>
        </div>
      </div>
      
      {/* Overlay para fechar ao clicar fora */}
      {isOpen && <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[340]" />}
    </>
  );
}