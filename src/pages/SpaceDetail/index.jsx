import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { spaces } from "../../data/spaces";
import { MapPin, MessageCircle, ArrowLeft, Share2, CheckCircle2, Navigation } from "lucide-react";

export default function SpaceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState("");

  const space = spaces.find(s => s.id === id) || spaces[0];

  // Se não tiver mapa especÃ­fico, usamos um ponto central de Novo Horizonte para manter a estética
  const defaultMap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14863.66579603091!2d-49.2300000!3d-21.4600000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bc000000000000%3A0x0!2zMjHCsDI3JzM2LjAiUyA0OcKwMTMnNDguMCJX!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr";
  
  const mapSource = space.googleMaps || defaultMap;

  const handleWhatsApp = () => {
    if (!selectedDate) return alert("Felipe, peça ao usuário para selecionar a data!");
    const msg = `Olá ${space.host}, vi o anÃºncio no BORA LÁ e gostaria de reservar o ${space.title} para o dia ${selectedDate}. Está disponÃ­vel?`;
    window.open(`https://wa.me/${space.phone}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] pb-20 font-sans p-4 md:p-10">
      <div className="max-w-7xl mx-auto">
        <button onClick={() => navigate("/")} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-8 hover:text-black transition-all">
          <ArrowLeft size={16} /> Voltar para Explorar
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h1 className="text-6xl font-black text-slate-900 italic uppercase tracking-tighter leading-none mb-4">{space.title}</h1>
              <div className="flex items-center gap-2 text-[#00BFA6] font-bold">
                <MapPin size={18} /> <span className="text-xs tracking-widest uppercase">{space.address}</span>
              </div>
            </div>
            
            <div className="rounded-[48px] overflow-hidden shadow-2xl h-[550px] bg-slate-200">
              <img src={space.images[0]} className="w-full h-full object-cover hover:scale-105 transition-transform duration-[3s]" alt={space.title} />
            </div>

            {/* SEÃ‡ÃƒO DO MAPA ESTÃ‰TICO */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-black italic uppercase tracking-tighter flex items-center gap-2">
                  <Navigation className="text-[#00BFA6]" size={20} /> Localização Premium
                </h3>
              </div>
              <div className="rounded-[40px] overflow-hidden shadow-lg border-4 border-white h-80 bg-slate-100 relative">
                <iframe 
                  src={mapSource}
                  className="w-full h-full grayscale-[0.2] contrast-[1.1]"
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-xl">
                  <p className="text-[10px] font-black uppercase text-slate-900 tracking-widest">Endereço verificado pelo Backoffice</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {space.features.map(f => (
                <div key={f} className="bg-white px-6 py-3 rounded-full border border-slate-100 shadow-sm flex items-center gap-2 text-[10px] font-black uppercase text-slate-500">
                  <CheckCircle2 size={14} className="text-[#00BFA6]" /> {f}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-10 bg-slate-900 text-white rounded-[48px] p-10 shadow-2xl border border-white/5">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-4">Investimento Diário</p>
              <h2 className="text-6xl font-black italic mb-12">R$ {space.pricing.oneDay}</h2>
              
              <div className="space-y-6 mb-10">
                <div className="relative">
                  <p className="text-[9px] font-black text-[#00BFA6] uppercase mb-2 ml-2">Data do Evento</p>
                  <input 
                    type="date" 
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full py-5 bg-white/5 rounded-3xl px-8 font-bold border border-white/10 text-white outline-none focus:border-[#00BFA6] transition-all" 
                  />
                </div>
              </div>

              <button onClick={handleWhatsApp} className="w-full py-6 bg-[#00BFA6] rounded-full font-black text-lg shadow-xl shadow-[#00BFA6]/30 flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all">
                <MessageCircle size={24} /> RESERVAR COM {space.host.toUpperCase()}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}