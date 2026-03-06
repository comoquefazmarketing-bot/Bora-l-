/* @author Felipe Makarios | Lead Architect - BORA LÁ */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Search, BookOpen, Calculator, HelpCircle, X, Star, Briefcase } from 'lucide-react';

export default function Sidebar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('openSidebar', handleOpen);
    return () => window.removeEventListener('openSidebar', handleOpen);
  }, []);

  const menuItems = [
    { icon: <Home size={18} />, label: 'Início', path: '/' },
    { icon: <Search size={18} />, label: 'Explorar Áreas', path: '/' },
    { icon: <BookOpen size={18} />, label: 'Blog & Dicas', path: '/blog' },
    { 
      icon: <Briefcase size={18} className="text-[#00BFA6]" />, 
      label: 'Serviços p/ Eventos', 
      subLabel: '(Churrasqueiro, DJ, Garçom e mais)',
      path: '/hire',
      badge: 'Novo'
    },
    { icon: <Calculator size={18} />, label: 'Calculadora de Churrasco', path: '/' },
    { icon: <HelpCircle size={18} />, label: 'Dúvidas', path: '/faq' },
  ];

  return (
    <>
      <div className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60] transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsOpen(false)} />
      
      <aside className={`fixed top-0 left-0 h-full w-[300px] bg-white z-[70] transition-transform duration-500 ease-out shadow-2xl flex flex-col ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-8 flex justify-between items-center border-b border-slate-50">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#00BFA6] mb-1">Menu Oficial</p>
            <h2 className="text-xl font-[1000] italic uppercase tracking-tighter text-slate-900">BORA <span className="text-[#00BFA6]">LÁ.</span></h2>
          </div>
          <button onClick={() => setIsOpen(false)} className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-900 transition-all">
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 p-6 space-y-1 overflow-y-auto">
          {menuItems.map((item, i) => (
            <button
              key={i}
              onClick={() => { navigate(item.path); setIsOpen(false); }}
              className="w-full flex items-start justify-between p-4 rounded-2xl hover:bg-slate-50 transition-all group text-left"
            >
              <div className="flex items-start gap-4">
                <span className="mt-1 text-slate-400 group-hover:text-[#00BFA6] transition-colors">{item.icon}</span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-black uppercase italic text-[11px] tracking-wider text-slate-600 group-hover:text-slate-900">{item.label}</span>
                    {item.badge && (
                      <span className="bg-[#00BFA6] text-white text-[7px] font-black px-1.5 py-0.5 rounded uppercase tracking-tighter">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  {item.subLabel && (
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tight mt-0.5 leading-tight">
                      {item.subLabel}
                    </p>
                  )}
                </div>
              </div>
            </button>
          ))}
        </nav>

        <div className="p-6 border-t border-slate-50">
          <button 
            onClick={() => { navigate('/partners'); setIsOpen(false); }}
            className="w-full bg-slate-900 p-8 rounded-[35px] text-center group hover:bg-[#00BFA6] transition-all relative overflow-hidden shadow-xl"
          >
            <Star className="absolute -top-2 -right-2 text-white/10 rotate-12 group-hover:scale-150 transition-transform" size={80} />
            <div className="relative z-10">
              <Star size={16} className="text-[#00BFA6] group-hover:text-white mx-auto mb-3" fill="currentColor" />
              <p className="text-white font-[1000] uppercase italic text-xs leading-tight">QUERO SER PARCEIRO</p>
              <p className="text-white/40 text-[8px] font-bold uppercase mt-1 group-hover:text-white/80 tracking-widest">MONETIZE SUA ÁREA OU SERVIÇO</p>
            </div>
          </button>
          <p className="text-[7px] font-black uppercase text-center mt-6 text-slate-300 tracking-[0.3em]">FELIPE MAKARIOS | NOVO HORIZONTE</p>
        </div>
      </aside>
    </>
  );
}