/* @author Felipe Makarios | Lead Architect - BORA LÁ v2 */
import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, ArrowLeft, Calendar, MessageCircle, X, ChevronRight, ChevronLeft, User, Clock, Waves, ShieldCheck } from 'lucide-react';

const spacesData = {
  "top-burguer": { nome: "RECANTO TOP BURGUER", folder: "area de lazer top burguer", preco: "330", rua: "Rua Manoel Neves, 969, Novo Horizonte - SP", whats: "5517991178961", capacidade: "50", checkin: "08:00", checkout: "22:00" },
  "rancho-paradise": { nome: "RANCHO PARADISE BORBOREMA", folder: "Rancho Paradise Borborema", preco: "380", rua: "Condomínio Village Tietê, Borborema - SP", whats: "5516996338003", capacidade: "25", checkin: "07:00", checkout: "22:00" },
  "sao-sebastiao": { nome: "CHÁCARA SÃO SEBASTIÃO", folder: "chacara sao sebastiao", preco: "300", rua: "Zona Rural, Novo Horizonte - SP", whats: "5517992376515", capacidade: "120", checkin: "08:00", checkout: "20:00" },
  "carlos-zara": { nome: "ÁREA DE LAZER CARLOS ZARA", folder: "Área de lazer Carlos Zara", preco: "600", rua: "Av. Cônego Alfredo Reith, 1363, Novo Horizonte - SP", whats: "5517997179203", capacidade: "60", checkin: "09:00", checkout: "02:00" },
  "santa-clara": { nome: "ESPAÇO SANTA CLARA", folder: "espaco santa clara", preco: "300", rua: "Avenida Domingos Baraldo, 875, Santa Clara", whats: "5517991459046", capacidade: "50", checkin: "08:00", checkout: "22:00" },
  "recanto-america": { nome: "RECANTO AMÉRICA", folder: "recanto america", preco: "300", rua: "Rua América, 455, Novo Horizonte - SP", whats: "5517996686442", capacidade: "40", checkin: "08:00", checkout: "22:00" },
  "recanto-do-sol": { nome: "RECANTO PÔR DO SOL", folder: "Recanto do Sol", preco: "Consultar", rua: "R. Alexandre Baraldo, 433, NH", whats: "5517992489873", capacidade: "80", checkin: "08:00", checkout: "23:00" },
  "assolini": { nome: "ÁREA DE LAZER ASSOLINI", folder: "ÁREA DE LAZER ASSOLINI", preco: "Consultar", rua: "R. Mário Benedicto da Silva, 1305, NH", whats: "5517992119367", capacidade: "40", checkin: "07:00", checkout: "00:00" }
};

export default function SpaceDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dateInputRef = useRef(null);
  const space = spacesData[id] || spacesData["top-burguer"];
  const [dataSelecionada, setDataSelecionada] = useState("");
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  // Busca as imagens .webp criadas pelo ImageMagick
  const fotos = Array.from({ length: 5 }, (_, i) => `/spaces/${space.folder}/foto${i + 1}.webp`);

  const handleReserve = () => {
    if (!dataSelecionada) return;
    const dataF = new Date(dataSelecionada).toLocaleDateString('pt-BR');
    const msg = encodeURIComponent(`Olá! Vi o ${space.nome} no BORA LÁ e quero ver a disponibilidade para ${dataF} 🚀`);
    window.open(`https://wa.me/${space.whats}?text=${msg}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {isGalleryOpen && (
        <div className="fixed inset-0 z-[2000] bg-black/95 flex items-center justify-center p-4">
          <button onClick={() => setIsGalleryOpen(false)} className="absolute top-8 right-8 text-white"><X size={48}/></button>
          <img src={fotos[photoIndex]} className="max-w-full max-h-[85vh] rounded-2xl" alt="Galeria" />
          <div className="absolute bottom-10 flex gap-8">
            <button onClick={() => setPhotoIndex(p => p > 0 ? p-1 : fotos.length-1)} className="text-white p-4 bg-white/10 rounded-full"><ChevronLeft size={32}/></button>
            <button onClick={() => setPhotoIndex(p => p < fotos.length-1 ? p+1 : 0)} className="text-white p-4 bg-white/10 rounded-full"><ChevronRight size={32}/></button>
          </div>
        </div>
      )}
      <main className="pt-20 max-w-[1500px] mx-auto px-6 lg:px-12 pb-24">
        <div className="mb-10"><button onClick={() => navigate(-1)} className="p-4 bg-black text-white rounded-full"><ArrowLeft size={24} /></button></div>
        <section className="flex flex-col md:flex-row gap-4 h-auto md:h-[550px] mb-16">
          <div className="w-full md:w-1/2 h-[350px] md:h-full rounded-[60px] overflow-hidden cursor-pointer" onClick={() => {setPhotoIndex(0); setIsGalleryOpen(true);}}>
            <img src={fotos[0]} className="w-full h-full object-cover" alt={space.nome} />
          </div>
          <div className="w-full md:w-1/2 grid grid-cols-2 grid-rows-2 gap-4 h-[350px] md:h-full">
            {[1, 2, 3, 4].map((idx) => (
              <div key={idx} className="rounded-[40px] overflow-hidden cursor-pointer" onClick={() => {setPhotoIndex(idx); setIsGalleryOpen(true);}}>
                <img src={fotos[idx]} className="w-full h-full object-cover" alt={`${space.nome} ${idx}`} />
              </div>
            ))}
          </div>
        </section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <h1 className="text-7xl md:text-[110px] font-black italic tracking-tighter uppercase leading-[0.8] mb-8 text-slate-900">{space.nome}</h1>
            <div className="flex items-center gap-2 text-slate-400 font-bold uppercase text-xs tracking-widest mb-16"><MapPin size={18} className="text-[#00BFA6]" /> {space.rua}</div>
            <div className="grid grid-cols-4 gap-6">
                <div className="bg-slate-50 p-8 rounded-[40px] text-center border border-slate-100"><User className="mx-auto mb-3 text-slate-300" size={24}/><p className="font-black italic text-xl uppercase">{space.capacidade}</p></div>
                <div className="bg-slate-50 p-8 rounded-[40px] text-center border border-slate-100"><Clock className="mx-auto mb-3 text-slate-300" size={24}/><p className="font-black italic text-xl uppercase">{space.checkin}</p></div>
                <div className="bg-[#00BFA6]/5 p-8 rounded-[40px] text-center border border-[#00BFA6]/10"><Waves className="mx-auto mb-3 text-[#00BFA6]" size={24}/><p className="font-black italic text-xl text-[#00BFA6] uppercase text-[14px]">PISCINA</p></div>
                <div className="bg-slate-50 p-8 rounded-[40px] text-center border border-slate-100"><ShieldCheck className="mx-auto mb-3 text-slate-300" size={24}/><p className="font-black italic text-xl uppercase">OK</p></div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-[#080d14] rounded-[60px] p-12 shadow-2xl text-white">
              <div className="mb-12"><span className="text-8xl font-black italic text-[#00BFA6] tracking-tighter">{space.preco === "Consultar" ? "CONSULTAR" : `R$ ${space.preco}`}</span></div>
              <div className="relative bg-[#121823] rounded-[40px] p-10 mb-8 border border-white/5 cursor-pointer" onClick={() => dateInputRef.current && dateInputRef.current.showPicker()}>
                <p className="text-[11px] font-black text-[#00BFA6] uppercase tracking-[4px] mb-4">QUANDO É O BORA LÁ?</p>
                <div className="flex justify-between items-center"><span className="text-3xl font-black italic uppercase">{dataSelecionada ? new Date(dataSelecionada).toLocaleDateString('pt-BR') : "DATA"}</span><Calendar size={32} className="text-slate-500" /></div>
                <input type="date" ref={dateInputRef} onChange={(e) => setDataSelecionada(e.target.value)} className="absolute inset-0 opacity-0 cursor-pointer w-full h-full" />
              </div>
              <button onClick={handleReserve} disabled={!dataSelecionada} className={`w-full py-10 rounded-[45px] font-black uppercase italic text-3xl flex items-center justify-center gap-4 ${dataSelecionada ? "bg-[#00BFA6] text-black" : "bg-slate-800 text-slate-600"}`}><MessageCircle size={32} />RESERVAR</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
