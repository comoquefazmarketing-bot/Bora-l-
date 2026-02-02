import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MapPin, Users, Waves, Flame, Tv, Wifi, Utensils, ArrowLeft, Heart, Share2, Calendar, Star, CheckCircle2, Coffee, Refrigerator, Wind } from "lucide-react";
import { spacesData } from "../data/spaces";

export default function SpaceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [space, setSpace] = useState(null);

  useEffect(() => {
    const found = spacesData.find(s => s.id === id);
    if (found) setSpace(found);
  }, [id]);

  if (!space) return <div className="p-20 text-center font-black uppercase tracking-widest text-[#B2B0AB]">Carregando ExperiÃªncia...</div>;

  const isRecanto = space.id === "recanto-top-burguer";

  return (
    <div className="min-h-screen bg-[#FDFCFB] font-sans text-[#1A1A1A]">
      {/* Header Fixo / Navegação */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-xl z-50 border-b border-[#F0EFEA] px-8 py-4 flex justify-between items-center">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 font-black uppercase text-[10px] tracking-widest">
          <ArrowLeft size={18} /> Voltar
        </button>
        <div className="flex gap-4">
          <button className="p-3 hover:bg-[#F0EFEA] rounded-full transition-colors"><Share2 size={20}/></button>
          <button className="p-3 hover:bg-[#F0EFEA] rounded-full transition-colors"><Heart size={20}/></button>
        </div>
      </nav>

      <main className="pt-24 pb-32 px-6 lg:px-20 max-w-7xl mx-auto">
        {/* Galeria de Imagens Estilizada */}
        <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[600px] mb-12 rounded-[50px] overflow-hidden shadow-2xl border-[10px] border-white">
          <div className="col-span-2 row-span-2 relative group overflow-hidden">
            <img src={`${space.imagesFolder}foto1.webp`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Principal" />
          </div>
          <div className="col-span-1 row-span-1 relative group overflow-hidden">
            <img src={`${space.imagesFolder}foto2.webp`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Destaque 1" />
          </div>
          <div className="col-span-1 row-span-1 relative group overflow-hidden">
            <img src={`${space.imagesFolder}foto3.webp`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Destaque 2" />
          </div>
          <div className="col-span-2 row-span-1 relative group overflow-hidden">
            <img src={`${space.imagesFolder}foto4.webp`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Destaque 3" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4 text-[#00BFA6] font-black uppercase text-[10px] tracking-[0.4em]">
                <MapPin size={14}/> {isRecanto ? "Atrás do Clube Usina Estiva" : "Novo Horizonte • SP"}
              </div>
              <h1 className="text-6xl font-black uppercase italic tracking-tighter leading-none mb-6">{space.title}</h1>
              <p className="text-[#B2B0AB] font-medium text-lg leading-relaxed max-w-2xl">
                {isRecanto ? 
                  "O espaço perfeito para o seu lazer. Ãrea completa com estrutura planejada para festas, churrascos e momentos inesquecÃ­veis em famÃ­lia." : 
                  space.description}
              </p>
            </div>

            {/* Grid de Comodidades Reais */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-12 border-y border-[#F0EFEA] mb-12">
              <div className="flex flex-col gap-3">
                <Waves className="text-[#00BFA6]" size={28}/>
                <span className="text-[10px] font-black uppercase tracking-widest leading-tight">Piscina com Aquecimento Solar</span>
              </div>
              <div className="flex flex-col gap-3">
                <Tv className="text-[#00BFA6]" size={28}/>
                <span className="text-[10px] font-black uppercase tracking-widest leading-tight">Smart TV com Internet</span>
              </div>
              <div className="flex flex-col gap-3">
                <Users className="text-[#00BFA6]" size={28}/>
                <span className="text-[10px] font-black uppercase tracking-widest leading-tight">10 Mesas e 40 Cadeiras</span>
              </div>
              <div className="flex flex-col gap-3">
                <Utensils className="text-[#00BFA6]" size={28}/>
                <span className="text-[10px] font-black uppercase tracking-widest leading-tight">Cozinha Completa</span>
              </div>
            </div>

            {/* O Que Este Lugar Oferece - Lista Detalhada */}
            <div className="space-y-8">
              <h2 className="text-2xl font-black uppercase italic tracking-tight">O que este lugar oferece</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6">
                {[
                  { icon: <CheckCircle2 size={20}/>, label: "2 Freezers de alta capacidade" },
                  { icon: <CheckCircle2 size={20}/>, label: "Geladeira, Fogão e Gás inclusos" },
                  { icon: <CheckCircle2 size={20}/>, label: "Piscina Aquecida (Sistema Solar)" },
                  { icon: <CheckCircle2 size={20}/>, label: "Banheiro Masculino e Feminino" },
                  { icon: <CheckCircle2 size={20}/>, label: "Wi-Fi de alta velocidade" },
                  { icon: <CheckCircle2 size={20}/>, label: "Smart TV para streaming" },
                  { icon: <CheckCircle2 size={20}/>, label: "Móveis: 10 mesas de madeira e 40 cadeiras" },
                  { icon: <MapPin size={20}/>, label: "ReferÃªncia: Atrás do Clube Usina Estiva" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-[#1A1A1A] font-bold text-sm">
                    <span className="text-[#00BFA6]">{item.icon}</span>
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card de Reserva Lateral */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 bg-white border border-[#F0EFEA] rounded-[45px] p-10 shadow-2xl shadow-black/5 flex flex-col gap-8">
              <div className="flex justify-between items-end">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#B2B0AB] block mb-1">Preço Sugerido</span>
                  <span className="text-4xl font-black italic tracking-tighter">R$ {space.price}</span>
                </div>
                <div className="text-right">
                   <div className="flex items-center gap-1 text-[12px] font-black text-[#00BFA6] mb-1">â­ 5.0</div>
                   <span className="text-[10px] font-black uppercase tracking-widest text-[#B2B0AB]">12 AvaliaçÃµes</span>
                </div>
              </div>

              <button className="w-full bg-[#1A1A1A] text-white py-6 rounded-[25px] font-black uppercase text-[12px] tracking-[0.2em] hover:bg-[#00BFA6] transition-all transform active:scale-95 shadow-xl shadow-black/10">
                Reservar agora
              </button>

              <div className="flex flex-col gap-4 pt-6 border-t border-[#F0EFEA]">
                <p className="text-[9px] text-center font-black uppercase tracking-[0.3em] text-[#B2B0AB]">Felipe Makarios • Comercial</p>
                <a href="tel:17988031679" className="text-center font-black text-[#1A1A1A] hover:text-[#00BFA6] transition-colors">17 98803-1679</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}