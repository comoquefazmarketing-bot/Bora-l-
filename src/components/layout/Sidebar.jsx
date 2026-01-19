import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { 
  Search, 
  CalendarDays, 
  Heart, 
  LayoutDashboard, 
  MessageCircle, 
  HelpCircle 
} from "lucide-react";

const menuItems = [
  { id: 'explore', label: 'Explorar', icon: Search, path: '/' },
  { id: 'reservations', label: 'Minhas Reservas', icon: CalendarDays, path: '/reservas' },
  { id: 'favorites', label: 'Favoritos', icon: Heart, path: '/favoritos' },
  { id: 'my-spaces', label: 'Meus Espaços', icon: LayoutDashboard, path: '/meus-espacos' },
  { id: 'lia', label: 'Falar com Lia', icon: MessageCircle, path: '/chat-with-lia' },
];

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="w-64 h-screen bg-white border-r border-slate-100 flex flex-col p-6 fixed left-0 top-0">
      {/* Logo Sensorial */}
      <div className="flex items-center gap-3 mb-12 px-2 cursor-pointer" onClick={() => navigate('/')}>
        <div className="w-10 h-10 bg-[#00BFA6] rounded-xl flex items-center justify-center shadow-lg shadow-[#00BFA6]/20">
          <span className="text-white font-black text-xl italic">B</span>
        </div>
        <h1 className="font-black text-2xl text-slate-900 tracking-tighter">BoraLá</h1>
      </div>

      {/* Menu Principal */}
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-4 px-4 py-4 rounded-2xl font-bold transition-all ${
                isActive 
                ? "bg-[#00BFA6]/10 text-[#00BFA6] shadow-sm" 
                : "text-slate-400 hover:bg-slate-50 hover:text-slate-600"
              }`}
            >
              <item.icon className={`w-5 h-5 ${isActive ? "text-[#00BFA6]" : "text-slate-400"}`} />
              <span className="text-sm uppercase tracking-widest font-black">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Footer do Criador */}
      <div className="mt-auto p-4 bg-slate-50 rounded-[24px] border border-slate-100">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Criador</p>
        <p className="text-xs font-black text-slate-900">Felipe Makarios</p>
        <p className="text-[9px] text-slate-400 font-medium truncate">comoquefazmarketing@gmail.com</p>
      </div>
    </div>
  );
}