import React, { useState } from 'react';
import { Calculator, Store, Menu, X, Home, Search, Heart } from 'lucide-react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: <Home size={28} />, label: 'Início', action: () => window.location.href='/' },
    { icon: <Calculator size={28} />, label: 'Calculadora Tum Dum', action: () => window.dispatchEvent(new CustomEvent('openCalc')) },
    { icon: <Store size={28} />, label: 'Seja Parceiro', action: () => window.location.href='/register-supplier' },
  ];

  return (
    <div 
      className={`fixed left-0 top-0 h-full bg-[#1A1A1A] text-white transition-all duration-500 z-[200] shadow-[10px_0_30px_rgba(0,0,0,0.3)] ${isOpen ? 'w-72' : 'w-20'}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="flex flex-col h-full py-8 items-center">
        <div className="mb-12 text-[#00BFA6]">
          {isOpen ? <span className="font-black italic text-xl">BORA LÁ</span> : <Menu size={32} />}
        </div>

        <nav className="flex-1 space-y-10 w-full px-6">
          {menuItems.map((item, idx) => (
            <button key={idx} onClick={item.action} className="flex items-center gap-6 group w-full transition-all">
              <div className="group-hover:text-[#00BFA6] group-hover:scale-110 transition-all text-[#B2B0AB]">
                {item.icon}
              </div>
              {isOpen && (
                <span className="font-black uppercase text-[10px] tracking-[0.3em] whitespace-nowrap animate-in fade-in slide-in-from-left-4">
                  {item.label}
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}