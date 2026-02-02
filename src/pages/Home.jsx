/* @author Felipe Makarios | Lead Architect - BORA LÁ v2 */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, ArrowUpRight } from 'lucide-react';

const areasReais = [
  { id: "top-burguer", nome: "RECANTO TOP BURGUER", cidade: "Novo Horizonte - SP", preco: "330", folder: "area de lazer top burguer" },
  { id: "rancho-paradise", nome: "RANCHO PARADISE BORBOREMA", cidade: "Borborema - SP", preco: "380", folder: "Rancho Paradise Borborema" },
  { id: "sao-sebastiao", nome: "CHÁCARA SÃO SEBASTIÃO", cidade: "Novo Horizonte - SP", preco: "300", folder: "chacara sao sebastiao" },
  { id: "carlos-zara", nome: "ÁREA DE LAZER CARLOS ZARA", cidade: "Novo Horizonte - SP", preco: "600", folder: "Área de lazer Carlos Zara" },
  { id: "santa-clara", nome: "ESPAÇO SANTA CLARA", cidade: "Novo Horizonte - SP", preco: "300", folder: "espaco santa clara" },
  { id: "recanto-america", nome: "RECANTO AMÉRICA", cidade: "Novo Horizonte - SP", preco: "300", folder: "recanto america" },
  { id: "recanto-do-sol", nome: "RECANTO PÔR DO SOL", cidade: "Novo Horizonte - SP", preco: "Consultar", folder: "Recanto do Sol" },
  { id: "assolini", nome: "ÁREA DE LAZER ASSOLINI", cidade: "Novo Horizonte - SP", preco: "Consultar", folder: "ÁREA DE LAZER ASSOLINI" }
];

const frasesSensoriais = [
  "Aquele momento com a família...",
  "Celebrar com os amigos?",
  "Criar memórias incríveis?",
  "Bora fazer aquele churrasco?",
  "Sair da rotina e descansar?"
];

export default function Home() {
  const navigate = useNavigate();
  const [indexFrase, setIndexFrase] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndexFrase((prev) => (prev + 1) % frasesSensoriais.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFCFB] font-sans overflow-x-hidden">
      <main className="pt-32 px-6 max-w-[1440px] mx-auto pb-20 text-left">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-center">
          <div className="lg:col-span-5">
            <h1 className="text-[80px] lg:text-[120px] font-black uppercase italic tracking-tighter leading-[0.75] text-slate-900 mb-8">
              BORA<br/><span className="text-[#00BFA6]">LÁ.</span>
            </h1>
            <p className="text-slate-400 font-bold uppercase text-[16px] lg:text-[22px] tracking-tight italic">
              {frasesSensoriais[indexFrase]}
            </p>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-3 gap-4 h-[300px] lg:h-[450px]">
            {areasReais.slice(0, 3).map((area) => (
              <div key={area.id} onClick={() => navigate(`/space/${area.id}`)} className="relative group overflow-hidden rounded-[40px] lg:rounded-[60px] cursor-pointer shadow-2xl bg-slate-100 border border-black/5">
                <img src={`/spaces/${area.folder}/foto1.webp`} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-125" alt={area.nome} />
                <div className="absolute inset-0 bg-[#00BFA6]/40 opacity-0 group-hover:opacity-100 backdrop-blur-md transition-all duration-500 flex items-center justify-center">
                  <ArrowUpRight className="text-white" size={40} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <h2 className="text-4xl lg:text-7xl font-black uppercase italic tracking-tighter mb-12 text-slate-900">CHÁCARAS E LAZER <span className="text-[#00BFA6]">EM NOVO HORIZONTE.</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {areasReais.map(area => (
            <div key={area.id} onClick={() => navigate(`/space/${area.id}`)} className="group cursor-pointer">
              <div className="relative aspect-[4/5] rounded-[50px] overflow-hidden mb-5 bg-gray-100 border border-black/5 shadow-sm group-hover:shadow-2xl transition-all duration-700">
                <img src={`/spaces/${area.folder}/foto1.webp`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" alt={area.nome} />
                <div className="absolute top-6 left-6 bg-white/95 px-4 py-1.5 rounded-2xl flex items-center gap-2 shadow-md">
                  <MapPin size={12} className="text-[#00BFA6]" />
                  <span className="text-[10px] font-black uppercase tracking-tighter text-slate-900">{area.cidade}</span>
                </div>
              </div>
              <h3 className="text-xl font-black uppercase italic tracking-tighter mb-1 group-hover:text-[#00BFA6] transition-colors">{area.nome}</h3>
              <p className="font-black text-2xl text-[#00BFA6] italic">{area.preco === "Consultar" ? "Consultar" : `R$ ${area.preco}`}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}