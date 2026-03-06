/* @author Felipe Makarios | Lead Architect - BORA LÁ */
import React, { useState, useEffect } from 'react';
import { Sparkles, MapPin, Users, Star, Plus, Minus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import GlobalB2BBanner from '../components/GlobalB2BBanner';

const SPACES = [
  { id: "top-burguer", nome: "RECANTO TOP BURGUER", folder: "area de lazer top burguer", preco: "330", cap: "50", cidade: "Novo Horizonte" },
  { id: "rancho-paradise", nome: "RANCHO PARADISE", folder: "Rancho Paradise Borborema", preco: "380", cap: "25", cidade: "Borborema" },
  { id: "sao-sebastiao", nome: "CHÁCARA SÃO SEBASTIÃO", folder: "chacara sao sebastiao", preco: "300", cap: "120", cidade: "Novo Horizonte" },
  { id: "carlos-zara", nome: "ÁREA DE LAZER CARLOS ZARA", folder: "Área de lazer Carlos Zara", preco: "600", cap: "100", cidade: "Novo Horizonte" },
  { id: "santa-clara", nome: "ESPAÇO SANTA CLARA", folder: "espaco santa clara", preco: "300", cap: "60", cidade: "Novo Horizonte" },
  { id: "recanto-america", nome: "RECANTO AMÉRICA", folder: "recanto america", preco: "300", cap: "50", cidade: "Novo Horizonte" },
  { id: "por-do-sol", nome: "RECANTO PÔR DO SOL", folder: "Recanto do Sol", preco: "Consulte", cap: "80", cidade: "Novo Horizonte" },
  { id: "assolini", nome: "ÁREA DE LAZER ASSOLINI", folder: "ÁREA DE LAZER ASSOLINI", preco: "Consulte", cap: "100", cidade: "Novo Horizonte" },
  { id: "flamboyant", nome: "RECANTO FLAMBOYANT", folder: "area de lazer flamboyant", preco: "Consulte", cap: "40", cidade: "Novo Horizonte" },
  { id: "morada-sol", nome: "MORADA DO SOL", folder: "area de lazer morada do sol", preco: "350", cap: "45", cidade: "Novo Horizonte" },
  { id: "club-fest", nome: "CLUB FEST SOLAREMAX", folder: "area de lazer e conforto club fest solaremax", preco: "500", cap: "100", cidade: "Novo Horizonte" },
  { id: "lopes-eventos", nome: "LOPES EVENTOS", folder: "lopes eventos", preco: "Consulte", cap: "100+", cidade: "Novo Horizonte" }
];

const FAQS = [
  { q: "Como faço para reservar uma área?", a: "Escolha o espaço e fale direto com o dono pelo WhatsApp, sem taxas extras de reserva." },
  { q: "É seguro alugar pelo app?", a: "Sim! Curadoria manual feita pelo Felipe Makarios para garantir o seu lazer e segurança." },
  { q: "Como funcionam as parcerias comerciais?", a: "Buscamos fornecedores de buffet, bebidas e decoração para estarem na nossa vitrine de elite." }
];

const LETTER_IMAGES = [
  "/spaces/area de lazer top burguer/foto1.webp",
  "/spaces/Rancho Paradise Borborema/foto1.webp",
  "/spaces/chacara sao sebastiao/foto1.webp",
  "/spaces/Área de lazer Carlos Zara/foto1.webp",
  "/spaces/espaco santa clara/foto1.webp",
  "/spaces/recanto america/foto1.webp",
  "/spaces/Recanto do Sol/foto1.webp"
];

export default function HomePage() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);
  const [imgIdx, setImgIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setImgIdx(p => (p + 1) % LETTER_IMAGES.length), 8000);
    return () => clearInterval(timer);
  }, []);

  const BrandLetter = ({ char, index }) => {
    const patternId = `pattern-${index}-${imgIdx}`;
    return (
      <svg className="w-[14vw] h-[14vw] md:w-[13rem] md:h-[13rem] inline-block mx-[-0.8vw] md:mx-[-0.8rem]" viewBox="0 0 100 100">
        <defs>
          <pattern id={patternId} patternUnits="userSpaceOnUse" width="100" height="100">
            <image 
              href={LETTER_IMAGES[(index + imgIdx) % LETTER_IMAGES.length]} 
              x="0" y="0" width="100" height="100" 
              preserveAspectRatio="xMidYMid slice" 
            />
          </pattern>
        </defs>
        <text 
          x="50%" y="50%" 
          dominantBaseline="central" 
          textAnchor="middle" 
          fill={`url(#${patternId})`}
          stroke="#f1f5f9"
          strokeWidth="0.5"
          className="font-[1000] italic uppercase tracking-tighter"
          style={{ fontSize: '95px', fontFamily: '"Arial Black", sans-serif' }}
        >
          {char}
        </text>
      </svg>
    );
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 pt-32 selection:bg-[#00BFA6] selection:text-white">
      <section className="px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-[#00BFA6] mb-8 font-black uppercase italic text-[10px] tracking-[0.5em]">
          <Sparkles size={16} fill="currentColor" /> Edição Especial NH
        </div>

        <div className="flex flex-wrap items-center justify-start mb-16 overflow-visible">
          {"BORALÁ".split('').map((char, i) => (
            <BrandLetter key={i} char={char} index={i} />
          ))}
          <span className="text-6xl md:text-[10rem] font-[1000] text-[#00BFA6] leading-none ml-1">.</span>
        </div>

        <h2 className="text-4xl md:text-8xl font-[1000] uppercase italic tracking-tighter leading-[0.85] mb-28">
          O SEU PRÓXIMO FINAL DE SEMANA,<br/>
          <span className="text-[#00BFA6]">RESOLVIDO AQUI.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20 mb-32">
          {SPACES.map((space) => (
            <div key={space.id} onClick={() => navigate(`/space/${space.id}`)} className="group cursor-pointer">
              <div className="relative aspect-[4/5] rounded-[55px] overflow-hidden mb-8 shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border border-slate-100">
                <img 
                  src={`/spaces/${space.folder}/foto1.webp`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  alt={space.nome} 
                  onError={(e) => { e.target.src = "/fallback.jpg"; }}
                />
                <div className="absolute top-8 right-8 bg-white/95 px-5 py-2 rounded-2xl flex items-center gap-2 shadow-xl border border-slate-100">
                  <Star size={14} className="text-yellow-500 fill-yellow-500" />
                  <span className="text-[10px] font-black uppercase tracking-tight text-slate-900">Elite</span>
                </div>
              </div>
              <h4 className="text-3xl font-[1000] uppercase italic text-slate-900 leading-tight group-hover:text-[#00BFA6] transition-colors">{space.nome}</h4>
              <div className="flex items-center gap-4 mt-3 text-slate-400 font-black uppercase text-[10px] tracking-widest">
                <span className="flex items-center gap-1"><MapPin size={12} className="text-[#00BFA6]" /> {space.cidade}</span>
                <span className="flex items-center gap-1"><Users size={12} className="text-[#00BFA6]" /> Até {space.cap}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-32 px-6 border-y border-slate-100">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-5xl font-[1000] uppercase italic tracking-tighter text-slate-900 mb-20 text-center">
            Dúvidas <span className="text-[#00BFA6]">Frequentes</span>
          </h3>
          <div className="space-y-6">
            {FAQS.map((f, i) => (
              <div key={i} className="bg-white rounded-[40px] border border-slate-200 shadow-sm overflow-hidden hover:border-[#00BFA6] transition-colors">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full p-10 flex justify-between items-center text-left">
                  <span className="font-black uppercase italic text-lg text-slate-900 tracking-tight">{f.q}</span>
                  {openFaq === i ? <Minus size={24} className="text-slate-900" /> : <Plus size={24} className="text-[#00BFA6]" />}
                </button>
                {openFaq === i && (
                  <div className="px-10 pb-10 text-slate-500 font-bold uppercase text-sm leading-relaxed tracking-tight border-t border-slate-50 pt-6">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="py-24">
        <GlobalB2BBanner />
      </div>
    </div>
  );
}