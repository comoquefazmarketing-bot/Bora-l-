/* @author Felipe Makarios | Lead Architect - Bora Lá v2 */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, ArrowUpRight, Menu, Calculator, Flame } from 'lucide-react';
import Sidebar from '../components/Sidebar';

const areasReais = [
  { id: "top-burguer", nome: "RECANTO TOP BURGUER", cidade: "Novo Horizonte - SP", preco: "330", folder: "area de lazer top burguer" },
  { id: "rancho-paradise", nome: "RANCHO PARADISE BORBOREMA", cidade: "Borborema - SP", preco: "380", folder: "Rancho Paradise Borborema" },
  { id: "sao-sebastiao", nome: "chacara-sao-sebastiao", cidade: "Novo Horizonte - SP", preco: "300", folder: "chacara-sao-sebastiao" },
  { id: "carlos-zara", nome: "ÁREA DE LAZER CARLOS ZARA", cidade: "Novo Horizonte - SP", preco: "600", folder: "Área de lazer Carlos Zara" },
  { id: "santa-clara", nome: "ESPAÇO SANTA CLARA", cidade: "Novo Horizonte - SP", preco: "300", folder: "espaco santa clara" },
  { id: "recanto-america", nome: "RECANTO AMÉRICA", cidade: "Novo Horizonte - SP", preco: "300", folder: "recanto america" },
  { id: "recanto-do-sol", nome: "RECANTO PÔR DO SOL", cidade: "Novo Horizonte - SP", preco: "Consultar", folder: "Recanto do Sol" },
  { id: "assolini", nome: "ÁREA DE LAZER ASSOLINI", cidade: "Novo Horizonte - SP", preco: "Consultar", folder: "ÁREA DE LAZER ASSOLINI" }
];

const frasesImpacto = [
  "Sair da rotina e descansar?",
  "Aquele momento com a família...",
  "Bora fazer aquele churrasco?",
  "O cenário perfeito para o seu fim de semana."
];

export default function Home() {
  const navigate = useNavigate();
  const [indexFrase, setIndexFrase] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const fraseTimer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndexFrase((prev) => (prev + 1) % frasesImpacto.length);
        setFade(true);
      }, 600);
    }, 6000);
    return () => clearInterval(fraseTimer);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFCFB] font-sans text-left overflow-x-hidden">
      <Sidebar />

      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-[100] border-b border-black/5 py-4 px-6 lg:px-12 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={() => window.dispatchEvent(new CustomEvent('openSidebar'))} className="p-2 hover:bg-black/5 rounded-full">
            <Menu size={24}/>
          </button>
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-8 h-8 bg-[#00BFA6] rounded-lg flex items-center justify-center shadow-lg">
              <Flame size={18} fill="white" stroke="none" />
            </div>
            <span className="font-black text-xl italic uppercase tracking-tighter">BORA LÁ</span>
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 pointer-events-none w-full flex justify-center">
           <button 
             onClick={(e) => { 
               e.preventDefault();
               e.stopPropagation(); 
               window.dispatchEvent(new CustomEvent('openCalc')); 
             }} 
             className="pointer-events-auto bg-[#E31C5F] text-white px-8 py-2.5 rounded-full flex items-center gap-3 shadow-lg hover:scale-105 transition-all active:scale-95"
           >
             <span className="text-[10px] font-black uppercase italic tracking-widest text-white/90">Calculadora de Churrasco</span>
             <div className="bg-white/20 p-1 rounded-md">
               <Calculator size={14} />
             </div>
           </button>
        </div>
        
        <div className="w-24 hidden lg:block"></div>
      </header>

      <main className="pt-32 max-w-[1440px] mx-auto px-6 lg:px-10">
        <section className="hidden lg:grid grid-cols-12 gap-12 mb-20 items-center">
          <div className="col-span-5">
            <div className="h-10 mb-4 overflow-hidden"> 
              <p className={`text-slate-400 font-bold uppercase text-[24px] tracking-tighter italic transition-all duration-700 ${fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                {frasesImpacto[indexFrase]}
              </p>
            </div>
            <h1 className="text-[120px] font-black uppercase italic tracking-tighter leading-[0.75] text-slate-900">
              BORA<br/><span className="text-[#00BFA6]">LÁ.</span>
            </h1>
          </div>
          
          <div className="col-span-7 grid grid-cols-3 gap-4 h-[400px]">
            {areasReais.slice(0, 3).map((area) => (
              <div key={area.id} onClick={() => navigate(`/space/${area.id}`)} className="relative group overflow-hidden rounded-[50px] cursor-pointer shadow-2xl">
                <img src={`spaces/${area.folder}/foto1.jpg`} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-125" alt="" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                  <ArrowUpRight className="text-white" size={40} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {areasReais.map((area) => (
            <div key={area.id} onClick={() => navigate(`/space/${area.id}`)} className="group cursor-pointer">
              <div className="h-[400px] rounded-[50px] overflow-hidden relative shadow-sm border border-black/5 bg-white">
                <img src={`spaces/${area.folder}/foto1.jpg`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="" />
              </div>
              <div className="mt-6 px-2 text-left">
                <h3 className="text-xl font-black uppercase italic tracking-tighter text-slate-900">{area.nome}</h3>
                <p className="text-[#00BFA6] font-bold uppercase text-[10px] italic tracking-widest">A PARTIR DE R$ {area.preco}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="py-20 text-center border-t border-black/5 text-slate-300 font-black uppercase text-[10px] tracking-[0.5em]">
        BORA LÁ © 2026 | DESIGN BY FELIPE MAKARIOS
      </footer>
    </div>
  );
}