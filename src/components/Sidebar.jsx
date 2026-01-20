import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calculator, Store, Menu, X, Home, Search, Heart, MapPin } from 'lucide-react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { icon: <Home size={22} />, label: 'Início', path: '/' },
    { icon: <Search size={22} />, label: 'Explorar', path: '/explore' },
    { icon: <MapPin size={22} />, label: 'Reservar', path: '/booking' },
    { icon: <Heart size={22} />, label: 'Favoritos', path: '/favorites' },
    { icon: <Calculator size={22} />, label: 'Calculadora Churrasco', action: () => {
        window.dispatchEvent(new CustomEvent('openCalc'));
        setIsOpen(false);
    }},
    { icon: <Store size={22} />, label: 'Seja um Fornecedor', path: '/register-supplier' },
  ];

  return (
    <>
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="fixed left-6 top-6 z-[400] p-4 bg-[#F4F1EA] text-[#8D7B68] rounded-2xl shadow-xl hover:scale-105 transition-all border border-white/50"
        >
          <Menu size={24} />
        </button>
      )}

      <div className={`fixed left-0 top-0 h-full bg-[#F4F1EA] text-[#8D7B68] transition-all duration-700 z-[450] shadow-2xl ${isOpen ? 'w-80' : 'w-0'} overflow-hidden`}>
        <div className="flex flex-col h-full py-12 px-10 w-80">
          <button onClick={() => setIsOpen(false)} className="self-end mb-6 hover:rotate-90 transition-transform opacity-50">
            <X size={28} />
          </button>

          <div className="mb-14">
            <h1 className="text-4xl font-black tracking-[-0.05em] text-[#8D7B68] leading-none">BORA LÁ</h1>
            <div className="h-1 w-10 bg-[#00BFA6] mt-4 mb-4"></div>
            <p className="text-lg font-bold leading-tight text-[#8D7B68]/90">
              Tudo o que você merece está aqui.
            </p>
          </div>

          <nav className="flex-1 space-y-7">
            {menuItems.map((item, idx) => (
              <button 
                key={idx} 
                onClick={() => { item.path ? navigate(item.path) : item.action(); setIsOpen(false); }} 
                className="flex items-center gap-5 group w-full text-left"
              >
                <div className="text-[#8D7B68] group-hover:text-[#00BFA6] transition-colors">{item.icon}</div>
                <span className="font-bold uppercase text-[11px] tracking-[0.2em] group-hover:translate-x-2 transition-transform">
                  {item.label}
                </span>
              </button>
            ))}
          </nav>

          <button 
            onClick={() => navigate('/register-supplier')}
            className="mt-10 p-5 bg-[#8D7B68] text-[#F4F1EA] rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] hover:bg-[#00BFA6] transition-all"
          >
            Anuncie sua Área
          </button>

          <div className="mt-12 pt-6 border-t border-[#8D7B68]/10 text-[9px] uppercase tracking-widest opacity-50">
            Felipe Makarios | Creator
          </div>
        </div>
      </div>
      {isOpen && <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-[#8D7B68]/10 backdrop-blur-md z-[440]" />}
    </>
  );
}