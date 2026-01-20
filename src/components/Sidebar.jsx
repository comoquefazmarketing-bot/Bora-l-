import React, { useState } from 'react';
import { Calculator, Store, Menu, X, Home, Search, Heart, User } from 'lucide-react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: <Home size={24} />, label: 'Início', action: () => window.location.href='/' },
    { icon: <Calculator size={24} />, label: 'Calculadora Tum Dum', action: () => window.dispatchEvent(new CustomEvent('openCalc')) },
    { icon: <Store size={24} />, label: 'Seja Parceiro', action: () => window.location.href='/register-supplier' },
  ];

  return (
    <div className={`fixed left-0 top-0 h-full bg-[#1A1A1A] text-white transition-all duration-300 z-[150] ${isOpen ? 'w-64' : 'w-20'}`}>
      <div className="p-6 flex flex-col h-full">
        {/* Botão de Abrir/Fechar */}
        <button onClick={() => setIsOpen(!isOpen)} className="mb-12 hover:text-[#00BFA6] transition-colors">
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        <nav className="flex-1 space-y-8">
          {menuItems.map((item, idx) => (
            <button key={idx} onClick={item.action} className="flex items-center gap-4 group w-full text-left">
              <div className="group-hover:text-[#00BFA6] transition-colors">{item.icon}</div>
              {isOpen && <span className="font-bold uppercase text-xs tracking-widest animate-in fade-in slide-in-from-left-2">{item.label}</span>}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}