import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Home, Calendar, PlusCircle, Heart, MessageCircle, CalendarX, HelpCircle } from "lucide-react";

const navigationItems = [
  { title: "Explorar", url: "/", icon: Home },
  { title: "Minhas Reservas", url: "/reservas", icon: Calendar },
  { title: "Favoritos", url: "/favoritos", icon: Heart },
  { title: "Meus Espaços", url: "/meus-espacos", icon: PlusCircle },
  { title: "Datas Bloqueadas", url: "/datas-bloqueadas", icon: CalendarX },
  { title: "Falar com Lia", url: "/chat-with-lia", icon: MessageCircle },
  { title: "Ajuda", url: "/ajuda", icon: HelpCircle },
];

export default function Layout({ children }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex bg-white">
      {/* Sidebar */}
      <aside className="w-72 border-r border-gray-100 bg-white hidden md:flex flex-col fixed h-screen z-50">
        <div className="p-8 border-b border-gray-100">
          <div 
            onClick={() => navigate('/')} 
            className="flex items-center gap-4 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-[18px] overflow-hidden shadow-lg transition-transform group-hover:scale-110">
              <img src="/logo.png" alt="Bora Lá" className="w-full h-full object-cover" />
            </div>
            <h2 className="font-black text-gray-900 text-2xl tracking-tighter">BoraLá</h2>
          </div>
        </div>

        <nav className="flex-1 p-4 mt-4 space-y-2 overflow-y-auto">
          {navigationItems.map((item) => (
            <NavLink 
              key={item.title} 
              to={item.url}
              className={({ isActive }) => `
                flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300
                ${isActive 
                  ? "bg-[#00BFA6]/10 text-[#00BFA6] font-bold shadow-sm" 
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"}
              `}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-[13px] font-bold tracking-tight">{item.title}</span>
            </NavLink>
          ))}
        </nav>

        {/* Footer Felipe Makarios */}
        <div className="p-6 border-t border-gray-100">
          <div className="flex items-center gap-3 p-4 rounded-[24px] bg-slate-50 border border-slate-100">
            <div className="w-10 h-10 rounded-full bg-[#00BFA6] flex items-center justify-center text-white font-black">
              F
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-black text-slate-900 text-xs truncate uppercase">{item.creator || "Felipe Makarios"}</p>
              <p className="text-[9px] text-slate-500 font-bold truncate">comoquefazmarketing@gmail.com</p>
            </div>
          </div>
        </div>
      </aside>

      <main className="flex-1 md:ml-72 min-h-screen bg-[#FAFAF9]">
        {children}
      </main>
    </div>
  );
}