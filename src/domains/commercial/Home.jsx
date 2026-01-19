/* @author Felipe Makarios | Creator & Lead Architect - Bora Lá / Manda Lá */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Search, Home as HomeIcon, Calendar, Heart, MapPin, 
  Wifi, Star, Sparkles, Waves, Tv, Truck, Menu, ChevronLeft 
} from "lucide-react";
import { spacesData } from "../data/spaces";
import MandaLaBanner from "../components/MandaLaBanner";

export default function Home() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("explorar");
  const [favorites, setFavorites] = useState([]);
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const spacesWithAds = spacesData.map((s) => ({
    ...s,
    isPremium: s.title.toUpperCase().includes("TOP BURGUER") || s.title.toUpperCase().includes("ASSOLINI")
  }));

  const bannerItems = spacesData.map(s => ({
    image: `${s.imagesFolder}foto1.jpg`,
    title: s.title,
    id: s.id
  }));

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("boraLa_favs") || "[]");
    setFavorites(saved);
    const timer = setInterval(() => {
      setCurrentBannerIndex((prev) => (prev + 1) % bannerItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [bannerItems.length]);

  const toggleFavorite = (id, e) => {
    e.stopPropagation();
    const newFavs = favorites.includes(id) ? favorites.filter(f => f !== id) : [...favorites, id];
    setFavorites(newFavs);
    localStorage.setItem("boraLa_favs", JSON.stringify(newFavs));
  };

  const getFilteredData = () => {
    let data = spacesWithAds;
    if (viewMode === "favoritos") data = spacesWithAds.filter(s => favorites.includes(s.id));
    return data.filter(s => s.title.toLowerCase().includes(searchTerm.toLowerCase()));
  };

  return (
    <div className="flex min-h-screen bg-[#FDFCFB] font-sans text-[#1A1A1A] pb-32 overflow-x-hidden">
      <style>{`
        @keyframes goldPulse {
          0% { text-shadow: 0 0 2px #FFD700; opacity: 1; }
          50% { text-shadow: 0 0 15px #FFD700, 0 0 25px #FFA500; opacity: 0.8; }
          100% { text-shadow: 0 0 2px #FFD700; opacity: 1; }
        }
        .animate-gold { animation: goldPulse 2s infinite ease-in-out; color: #FFD700; }
      `}</style>

      {/* SIDEBAR BRANCA RETRÁTIL */}
      <aside className={`${isSidebarOpen ? 'w-72' : 'w-24'} bg-white border-r border-[#F0EFEA] flex flex-col p-6 sticky top-0 h-screen z-[100] transition-all duration-300 ease-in-out shadow-sm`}>
        
        {/* BOTÃO TOGGLE - Discreto e funcional */}
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="absolute -right-3 top-10 bg-white border border-[#F0EFEA] text-[#1A1A1A] p-1.5 rounded-full hover:bg-[#00BFA6] hover:text-white transition-all z-[110] shadow-md"
        >
          {isSidebarOpen ? <ChevronLeft size={14}/> : <Menu size={14}/>}
        </button>

        {/* LOGO - Ajusta o tamanho conforme a barra */}
        <div className={`mb-14 transition-all duration-300 ${isSidebarOpen ? 'px-2' : 'flex justify-center'}`}>
          <img src="/logo.png" alt="Bora Lá" className={`${isSidebarOpen ? 'w-32' : 'w-10'} h-auto transition-all`} />
          {isSidebarOpen && <p className="text-[7px] uppercase tracking-[0.4em] font-black text-[#00BFA6] mt-3 italic">Sensorial Experience</p>}
        </div>

        <nav className="flex-1 space-y-4">
          {[
            { id: 'explorar', icon: <HomeIcon size={20}/>, label: 'Explorar' },
            { id: 'reservas', icon: <Calendar size={20}/>, label: 'Reservar', color: 'text-[#00BFA6]' },
            { id: 'favoritos', icon: <Heart size={20}/>, label: 'Favoritos', color: 'text-red-500' },
            { id: 'mandala', icon: <Truck size={20}/>, label: 'Manda Lá', color: 'text-[#FF4500]' }
          ].map((item) => (
            <button 
              key={item.id}
              onClick={() => setViewMode(item.id)} 
              className={`w-full flex items-center ${isSidebarOpen ? 'gap-4 p-4' : 'justify-center py-5'} rounded-[20px] font-black uppercase text-[10px] tracking-widest transition-all
              ${viewMode === item.id ? 'bg-[#1A1A1A] text-white shadow-xl scale-105' : 'text-[#B2B0AB] hover:bg-[#FDFCFB] hover:text-[#1A1A1A]'}`}
              title={item.label}
            >
              <span className={viewMode === item.id ? 'text-white' : item.color}>{item.icon}</span>
              {isSidebarOpen && <span>{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className={`mt-auto pt-8 border-t border-[#F0EFEA] ${isSidebarOpen ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
          <button onClick={() => navigate('/register')} className="w-full bg-[#00BFA6]/10 text-[#00BFA6] py-4 rounded-[20px] font-black uppercase text-[8px] tracking-widest hover:bg-[#00BFA6] hover:text-white transition-all">
            Anunciar Área
          </button>
          <p className="text-[6px] text-center uppercase tracking-[0.4em] font-black text-[#B2B0AB] mt-6">© 2026 OFFICIAL PLATFORM</p>
        </div>
      </aside>

      {/* CONTEÚDO PRINCIPAL - Expande suavemente */}
      <div className="flex-1 p-10 lg:px-16 overflow-y-auto transition-all duration-300">
        <div className="max-w-7xl mx-auto mb-16 relative h-[450px] rounded-[60px] overflow-hidden shadow-2xl border-[12px] border-white cursor-pointer"
             onClick={() => navigate(`/space/${bannerItems[currentBannerIndex].id}`)}>
          <img src={bannerItems[currentBannerIndex].image} className="absolute inset-0 w-full h-full object-cover" alt="Destaque" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-20 text-white">
            <h2 className="text-6xl font-black uppercase italic tracking-tighter leading-none mb-2">QUER DESCANSAR?</h2>
            <h2 className="text-6xl font-black uppercase italic tracking-tighter leading-none text-[#00BFA6]">BORA LÁ.</h2>
          </div>
        </div>

        <main className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-20">
          {getFilteredData().map((space) => (
            <div key={space.id} onClick={() => navigate(`/space/${space.id}`)} 
              className={`group bg-white rounded-[55px] overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-700 border flex flex-col 
              ${space.isPremium ? 'border-[#FFD700]/30 ring-[15px] ring-[#FFD700]/5 scale-[1.03]' : 'border-[#F0EFEA]'}`}>
              <div className="h-80 relative overflow-hidden">
                <img src={`${space.imagesFolder}foto1.jpg`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" alt={space.title} />
                {space.isPremium && (
                  <div className="absolute top-8 left-8 bg-[#1A1A1A] px-6 py-3 rounded-full flex items-center gap-3 z-20 shadow-2xl">
                    <Sparkles size={16} className="text-[#FFD700] animate-pulse" />
                    <span className="animate-gold font-black text-[10px] uppercase tracking-[0.3em]">SELO BORA LÁ</span>
                  </div>
                )}
                <div className="absolute bottom-8 right-8 bg-[#1A1A1A] text-white px-6 py-3 rounded-2xl font-black text-xs shadow-2xl group-hover:bg-[#00BFA6]">
                  R$ {space.price}
                </div>
              </div>
              <div className="p-10 flex-1">
                <div className="flex items-center justify-between mb-4 text-[#B2B0AB] text-[9px] font-black uppercase tracking-widest">
                  <div className="flex items-center gap-1.5"><MapPin size={12}/> Novo Horizonte • SP</div>
                  <div className="bg-[#00BFA6]/10 text-[#00BFA6] px-3 py-1 rounded-full text-[12px]">⭐ 5.0</div>
                </div>
                <h3 className="text-[#1A1A1A] font-black uppercase italic text-3xl tracking-tighter leading-none mb-8 group-hover:text-[#00BFA6] transition-colors">{space.title}</h3>
                <div className="flex items-center gap-6 border-t border-[#F0EFEA] pt-8 opacity-30 group-hover:opacity-100 transition-all">
                   <Waves size={20}/> <Tv size={20}/> <Wifi size={20}/>
                </div>
              </div>
            </div>
          ))}
        </main>
      </div>
      <MandaLaBanner setViewMode={setViewMode} />
    </div>
  );
}