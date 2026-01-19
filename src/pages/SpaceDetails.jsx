import React, { useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft, MapPin, Share2, Navigation, CheckCircle2, Calendar as CalendarIcon, MessageCircle } from "lucide-react";
import { spacesData } from "../data/spaces";

export default function SpaceDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState("");
  const dateInputRef = useRef(null);
  
  // Encontra o espaço tratando o ID como string para evitar erro de tipo
  const space = spacesData.find(s => String(s.id) === String(id));

  if (!space) return <div className="p-20 text-center font-black uppercase text-slate-400 tracking-[0.5em]">Espaço não encontrado</div>;

  const { title, price, phone, imagesFolder, amenities, city, address, owner } = space;
  const images = [1,2,3,4,5,6,7,8].map(n => `${imagesFolder}foto${n}.jpg`);
  const [mainImage, setMainImage] = useState(images[0]);

  const getFullAddress = () => address || (city === "Borborema" ? "Borborema, SP" : "Novo Horizonte, SP");

  const handleAction = () => {
    const dataMsg = selectedDate ? `para o dia ${selectedDate.split("-").reverse().join("/")}` : "a combinar";
    const msg = encodeURIComponent(`Olá! Vi o "${title}" no Bora Lá e gostaria de falar com ${owner || "o responsável"} sobre a reserva ${dataMsg}.`);
    window.open(`https://wa.me/${phone || "17988031679"}?text=${msg}`, "_blank");
  };

  // Função para forçar a abertura do calendário ao clicar no container
  const handleCalendarClick = () => {
    if (dateInputRef.current) {
      try {
        dateInputRef.current.showPicker(); // Método moderno para abrir o calendário
      } catch (e) {
        dateInputRef.current.focus(); // Fallback
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] pb-20 font-sans text-slate-900">
      <header className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">
        <button onClick={() => navigate('/')} className="flex items-center gap-2 font-black uppercase text-[10px] tracking-[0.3em] text-slate-400 hover:text-[#00BFA6] transition-all">
          <ChevronLeft size={18} /> Voltar para Explorar
        </button>
        <button onClick={() => navigator.share?.({title: title, url: window.location.href})} className="p-3 bg-slate-100 rounded-full hover:bg-[#00BFA6] hover:text-white transition-all">
          <Share2 size={18} />
        </button>
      </header>

      <main className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        <div className="space-y-10">
          <div className="relative aspect-video bg-black rounded-[45px] overflow-hidden border-4 border-white shadow-2xl flex items-center justify-center">
            <img src={mainImage} className="max-w-full max-h-full object-contain" alt={title} />
          </div>
          
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
            {images.map((img, i) => (
              <img key={i} src={img} onClick={() => setMainImage(img)} className={`w-24 h-24 rounded-[20px] flex-shrink-0 object-cover cursor-pointer border-4 transition-all ${mainImage === img ? 'border-[#00BFA6]' : 'border-white opacity-40'}`} onError={(e) => e.target.style.display='none'}/>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#00BFA6] flex items-center gap-2"><Navigation size={14}/> Localização no Mapa</h3>
            <div className="w-full h-80 bg-slate-100 rounded-[45px] overflow-hidden border-4 border-white shadow-lg">
              <iframe width="100%" height="100%" style={{ border: 0 }} loading="lazy" src={`https://www.google.com/maps?q=${encodeURIComponent(getFullAddress())}&output=embed`}></iframe>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <div>
            <h1 className="text-6xl font-black tracking-tighter uppercase italic leading-none">{title}</h1>
            <p className="flex items-center gap-2 text-slate-400 font-bold mt-4 uppercase text-xs tracking-widest italic"><MapPin size={16} className="text-[#00BFA6]"/> {getFullAddress()}</p>
          </div>

          <div className="bg-slate-900 rounded-[50px] p-10 text-white shadow-2xl relative overflow-hidden border-b-8 border-white/5">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#00BFA6] rounded-full blur-[80px] opacity-20"></div>
            <div className="relative z-10 space-y-8">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#00BFA6] mb-2">Investimento Diário</p>
                  <p className="text-6xl font-black italic tracking-tighter">R$ {price}</p>
                </div>

                {/* CONTAINER DO CALENDÁRIO CORRIGIDO */}
                <div 
                  onClick={handleCalendarClick}
                  className="relative bg-white/10 p-7 rounded-[35px] border border-white/10 hover:bg-white/20 transition-all cursor-pointer group"
                >
                  <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-[#00BFA6] mb-3 text-center group-hover:scale-105 transition-transform">Quando você quer ir?</label>
                  <div className="flex justify-center items-center gap-4 relative">
                    <CalendarIcon size={24} className="text-[#00BFA6]" />
                    <span className="font-black text-2xl tracking-[0.1em] uppercase italic">
                      {selectedDate ? selectedDate.split("-").reverse().join(" / ") : "Escolher Data"}
                    </span>
                    {/* Input invisível cobrindo tudo com ref */}
                    <input 
                      ref={dateInputRef}
                      type="date" 
                      value={selectedDate} 
                      onChange={(e) => setSelectedDate(e.target.value)} 
                      className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                    />
                  </div>
                </div>

                <button onClick={handleAction} className="w-full bg-[#00BFA6] hover:bg-[#00e6c7] text-slate-900 py-7 rounded-[30px] font-black text-xl uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 active:scale-95 shadow-[#00BFA6]/20">
                  <MessageCircle size={24} /> Reservar com {owner || "Responsável"}
                </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
              {(amenities || ["Piscina", "Churrasqueira", "Wi-Fi"]).map((item) => (
                <div key={item} className="flex items-center gap-3 bg-white p-5 rounded-[25px] border border-slate-100 shadow-sm">
                  <CheckCircle2 size={16} className="text-[#00BFA6]" />
                  <span className="font-black text-[10px] uppercase tracking-widest text-slate-600">{item}</span>
                </div>
              ))}
          </div>
        </div>
      </main>
    </div>
  );
}