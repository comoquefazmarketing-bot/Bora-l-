import React, { useState, useRef } from "react";
import { ChevronLeft, MapPin, Play, CheckCircle2, Users, Calendar as CalendarIcon, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function CarlosZaraDetails() {
  const navigate = useNavigate();
  const dateInputRef = useRef(null);
  const [selectedDate, setSelectedDate] = useState("");
  
  const space = {
    title: "Área de Lazer Carlos Zara",
    city: "Novo Horizonte",
    priceDaily: 600,
    pricePackage: 1000,
    checkInNote: "Retirada da chave: Sexta-feira às 17:30",
    phone: "5517991178961", // Mantendo o padrão de contato do criador
    // Caminho baseado na pasta que vi no seu print
    images: [
      "/spaces/Área de lazer Carlos Zara/foto1.jpg",
      "/spaces/Área de lazer Carlos Zara/foto2.jpg",
      "/spaces/Área de lazer Carlos Zara/foto3.jpg",
      "/spaces/Área de lazer Carlos Zara/foto4.jpg"
    ]
  };

  const [mainImage, setMainImage] = useState(space.images[0]);

  const handleWhatsApp = () => {
    if (!selectedDate) {
      alert("Selecione a data para verificarmos a disponibilidade! ✨");
      return;
    }
    const [year, month, day] = selectedDate.split("-");
    const dataFormatada = `${day}/${month}/${year}`;
    const mensagem = encodeURIComponent(`Olá! Vi a "${space.title}" no Bora Lá e gostaria de reservar para o dia ${dataFormatada}.`);
    window.open(`https://wa.me/${space.phone}?text=${mensagem}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans text-slate-900 pb-20">
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .date-container input::-webkit-calendar-picker-indicator {
          position: absolute; inset: 0; width: 100%; height: 100%; cursor: pointer; opacity: 0;
        }
      `}</style>

      <header className="max-w-7xl mx-auto px-6 py-8">
        <button onClick={() => navigate('/')} className="flex items-center gap-2 font-black uppercase text-[10px] tracking-[0.2em] text-slate-400 hover:text-[#00BFA6] transition-colors">
          <ChevronLeft size={18} /> Voltar para Explorar
        </button>
      </header>

      <main className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* GALERIA SENSORIAL */}
          <div className="space-y-10">
            <div className="relative aspect-square md:aspect-video bg-[#121212] rounded-[45px] overflow-hidden shadow-2xl border-4 border-white flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.img
                  key={mainImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  src={mainImage}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => { e.target.src = "https://via.placeholder.com/800x450?text=Adicione+as+Fotos+na+Pasta"; }}
                />
              </AnimatePresence>
            </div>

            <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
              {space.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setMainImage(img)}
                  className={`relative flex-shrink-0 w-24 h-24 rounded-[20px] overflow-hidden border-4 transition-all ${
                    mainImage === img ? 'border-[#00BFA6] scale-105' : 'border-white opacity-40 hover:opacity-100'
                  }`}
                >
                  <img src={img} className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none'; }} />
                </button>
              ))}
            </div>
            
            <div className="bg-slate-50 p-8 rounded-[40px] border border-slate-100 space-y-4">
               <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 flex items-center gap-2">
                <Clock size={14} className="text-[#00BFA6]"/> Regras de Acesso
              </h3>
              <p className="font-bold text-slate-700">{space.checkInNote}</p>
            </div>
          </div>

          {/* INFO E RESERVA */}
          <div className="lg:sticky lg:top-12 space-y-10">
            <div>
              <h1 className="text-5xl font-black tracking-tighter text-slate-900 leading-none mb-4 uppercase italic">{space.title}</h1>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <MapPin size={14} className="text-[#00BFA6]"/> {space.city}, SP
              </p>
            </div>

            <div className="space-y-6">
               <div className="flex items-center gap-4 bg-white p-6 rounded-[30px] border border-slate-100 shadow-sm">
                 <div className="p-4 bg-[#00BFA6]/10 rounded-2xl text-[#00BFA6]">
                   <CalendarIcon size={24} />
                 </div>
                 <div>
                    <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] mb-1">Pacote Especial</p>
                    <p className="text-xl font-black text-slate-800">2 Dias por R$ {space.pricePackage}</p>
                 </div>
               </div>
            </div>

            {/* CARD DE RESERVA */}
            <div className="bg-slate-900 rounded-[45px] p-10 text-white shadow-2xl relative overflow-hidden">
               <div className="relative z-10 space-y-8">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#00BFA6] mb-1">Diária Avulsa</p>
                      <p className="text-5xl font-black tracking-tighter text-white italic">R$ {space.priceDaily}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="date-container relative bg-white/10 backdrop-blur-md p-6 rounded-[30px] border border-white/10 hover:bg-white/20 transition-all">
                      <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#00BFA6] mb-2 text-center">Data da sua Reserva</label>
                      <div className="flex justify-center items-center gap-3">
                        <span className="font-black text-white text-2xl tracking-[0.1em]">
                          {selectedDate ? selectedDate.split("-").reverse().join("/") : "DD / MM / AAAA"}
                        </span>
                        <CalendarIcon size={24} className="text-[#00BFA6]" />
                      </div>
                      <input 
                        ref={dateInputRef}
                        type="date" 
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="absolute inset-0 opacity-0 cursor-pointer" 
                      />
                    </div>
                    
                    <button 
                      onClick={handleWhatsApp}
                      className="w-full bg-[#00BFA6] hover:bg-[#00e6c7] text-slate-900 py-7 rounded-[30px] font-black text-xl uppercase tracking-[0.1em] transition-all shadow-xl active:scale-95"
                    >
                      Reservar Agora
                    </button>
                  </div>

                  <p className="text-center text-[9px] font-black text-white/30 uppercase tracking-[0.2em]">
                    Design por Felipe Makarios • Tum Dum!
                  </p>
               </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}