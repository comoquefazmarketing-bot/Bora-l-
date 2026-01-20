import React, { useState } from 'react';
import { Calculator, Store, Menu, X, Home } from 'lucide-react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: <Home size={26} />, label: 'Início', action: () => window.location.href='/' },
    { icon: <Calculator size={26} />, label: 'Calculadora Tum Dum', action: () => {
        window.dispatchEvent(new CustomEvent('openCalc'));
        setIsOpen(false);
    }},
    { icon: <Store size={26} />, label: 'Seja Parceiro', action: () => window.location.href='/register-supplier' },
  ];

  return (
    <div className={`fixed left-0 top-0 h-full bg-[#1A1A1A] text-white transition-all duration-300 z-[200] ${isOpen ? 'w-64' : 'w-20'}`}>
      <div className="flex flex-col h-full py-8">
        <button onClick={() => setIsOpen(!isOpen)} className="mb-12 hover:text-[#00BFA6] transition-colors self-center">
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        <nav className="flex-1 space-y-10 w-full px-4">
          {menuItems.map((item, idx) => (
            <button key={idx} onClick={item.action} className="flex items-center gap-4 group w-full text-left">
              <div className="group-hover:text-[#00BFA6] transition-colors min-w-[40px] flex justify-center">
                {item.icon}
              </div>
              {isOpen && (
                <span className="font-black uppercase text-[10px] tracking-widest animate-in fade-in duration-300">
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