/* @author Felipe Makarios | Lead Architect - Bora Lá */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, ArrowUpRight, Star } from 'lucide-react';

// DADOS 100% SINCRONIZADOS COM O SEU SPACEDETAILS.JSX
const areasReais = [
  { 
    id: "top-burguer", 
    nome: "RECANTO TOP BURGUER", 
    cidade: "Novo Horizonte - SP", 
    preco: "330", 
    folder: "area de lazer top burguer" 
  },
  { 
    id: "rancho-paradise", 
    nome: "RANCHO PARADISE BORBOREMA", 
    cidade: "Borborema - SP", 
    preco: "380", 
    folder: "Rancho Paradise Borborema" 
  },
  { 
    id: "sao-sebastiao", 
    nome: "CHÁCARA SÃO SEBASTIÃO", 
    cidade: "Novo Horizonte - SP", 
    preco: "300", 
    folder: "Chácara São Sebastião" 
  },
  { 
    id: "carlos-zara", 
    nome: "ÁREA DE LAZER CARLOS ZARA", 
    cidade: "Novo Horizonte - SP", 
    preco: "600", 
    folder: "Área de lazer Carlos Zara" 
  },
  { 
    id: "recanto-do-sol", 
    nome: "RECANTO PÔR DO SOL", 
    cidade: "Novo Horizonte - SP", 
    preco: "Consultar", 
    folder: "Recanto do Sol" 
  },
  { 
    id: "assolini", 
    nome: "ÁREA DE LAZER ASSOLINI", 
    cidade: "Novo Horizonte - SP", 
    preco: "Consultar", 
    folder: "ÁREA DE LAZER ASSOLINI" 
  }
];

const frasesImpacto = [
  "Quer descansar?",
  "Aquele momento com a família...",
  "Bora fazer aquele churrasco?",
  "O cenário perfeito para o seu fim de semana.",
  "E aí, quem leva a carne?",
  "O lugar ideal para criar memórias reais."
];

export default function Home() {
  const navigate = useNavigate();
  const [indexFrase, setIndexFrase] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndexFrase((prev) => (prev + 1) % frasesImpacto.length);
        setFade(true);
      }, 500);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFCFB] selection:bg-[#00BFA6] pb-20">
      
      {/* HEADER: BORA LÁ GIGANTE + FRASES DINÂMICAS */}
      <section className="hidden lg:grid grid-cols-12 gap-12 max-w-[1440px] mx-auto px-10 pt-16 mb-20 items-center">
        <div className="col-span-5">
          <h1 className="text-[120px] font-black uppercase italic tracking-tighter leading-[0.75] text-slate-900">
            BORA<br/><span className="text-[#00BFA6]">LÁ.</span>
          </h1>
          
          <div className="h-16 mt-10"> 
            <p className={`text-slate-400 font-bold uppercase text-[13px] tracking-[0.3em] max-w-sm transition-all duration-700 ${fade ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
              {frasesImpacto[indexFrase]}
            </p>
          </div>
        </div>

        {/* MOTION GRID (TOP 3) */}
        <div className="col-span-7 grid grid-cols-3 gap-4 h-[400px]">
          {areasReais.slice(0, 3).map((area) => (
            <div 
              key={area.id}
              onClick={() => navigate(`/space/${area.id}`)}
              className="relative group overflow-hidden rounded-[50px] cursor-pointer shadow-2xl bg-slate-100"
            >
              <img 
                src={`/spaces/${area.folder}/foto1.jpg`} 
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-125" 
                alt={area.nome} 
              />
              <div className="absolute inset-0 bg-[#00BFA6]/40 opacity-0 group-hover:opacity-100 backdrop-blur-md transition-all duration-500 flex items-center justify-center">
                <ArrowUpRight className="text-white" size={40} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VITRINE DE LUGARES */}
      <div className="max-w-[1440px] mx-auto px-10">
        <h2 className="text-5xl lg:text-8xl font-black uppercase italic tracking-tighter mb-16 text-slate-900">
          LUGARES <span className="text-[#00BFA6]">INCRÍVEIS.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {areasReais.map((area) => (
            <div key={area.id} onClick={() => navigate(`/space/${area.id}`)} className="group cursor-pointer">
              <div className="h-[450px] rounded-[60px] overflow-hidden relative shadow-sm border border-black/5 bg-white">
                <img 
                  src={`/spaces/${area.folder}/foto1.jpg`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                  alt={area.nome}
                />
                <div className="absolute top-8 left-8 bg-white/90 backdrop-blur px-5 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                  <MapPin size={12} className="text-[#00BFA6]" /> {area.cidade}
                </div>
              </div>
              <div className="mt-8 px-4">
                <h3 className="text-2xl font-black uppercase italic tracking-tighter text-slate-900">{area.nome}</h3>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xl font-black text-[#00BFA6]">
                    {area.preco === "Consultar" ? "Consultar" : `R$ ${area.preco}`}
                    <small className="text-[10px] text-slate-400 tracking-normal ml-2">/ dia</small>
                  </span>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star size={14} fill="currentColor" />
                    <span className="text-slate-900 text-xs font-black">4.9</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}