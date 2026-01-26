/* @author Bora Lá | High Performance Events */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calculator, Flame, Menu, CheckCircle2 } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import HPCalculator from '../components/HPCalculator';

const areasReais = [
  { id: "top-burguer", nome: "RECANTO TOP BURGUER", cidade: "Novo Horizonte - SP", preco: "330", folder: "area de lazer top burguer" },
  { id: "rancho-paradise", nome: "RANCHO PARADISE BORBOREMA", cidade: "Borborema - SP", preco: "380", folder: "Rancho Paradise Borborema" },
  { id: "sao-sebastiao", nome: "CHÁCARA SÃO SEBASTIÃO", cidade: "Novo Horizonte - SP", preco: "300", folder: "Chácara São Sebastião" },
  { id: "carlos-zara", nome: "ÁREA DE LAZER CARLOS ZARA", cidade: "Novo Horizonte - SP", preco: "600", folder: "Área de lazer Carlos Zara" },
  { id: "recanto-do-sol", nome: "RECANTO PÔR DO SOL", cidade: "Novo Horizonte - SP", preco: "Consultar", folder: "Recanto do Sol" },
  { id: "assolini", nome: "ÁREA DE LAZER ASSOLINI", cidade: "Novo Horizonte - SP", preco: "Consultar", folder: "ÁREA DE LAZER ASSOLINI" }
];

const frasesSensoriais = [
  "Passar um momento com a família?",
  "Celebrar com os amigos?",
  "Criar memórias incríveis?",
  "Fazer um churrasco memorável?",
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
    <div className="min-h-screen bg-[#FDFCFB] font-sans text-black">
      <Sidebar />
      <HPCalculator />

      <header className="fixed top-0 w-full bg-white z-[100] border-b border-black/5 py-4 px-6 lg:px-12 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-4">
          <button onClick={() => window.dispatchEvent(new CustomEvent('openSidebar'))} className="p-2 hover:bg-black/5 rounded-full"><Menu size={24} /></button>
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-8 h-8 bg-[#00BFA6] rounded-lg flex items-center justify-center shadow-lg"><Flame size={18} fill="white" stroke="none" /></div>
            <span className="font-black text-xl italic uppercase tracking-tighter">BORA LÁ</span>
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2">
          <button onClick={() => window.dispatchEvent(new CustomEvent('openCalc'))} className="bg-white border border-black/10 shadow-lg px-8 py-3 rounded-full flex items-center gap-4 hover:shadow-xl transition-all group">
            <span className="text-[11px] font-black uppercase italic tracking-widest text-slate-400 group-hover:text-black">Calculadora de Churrasco</span>
            <div className="bg-[#1A1A1A] p-2 rounded-full text-white group-hover:bg-[#00BFA6] transition-colors"><Calculator size={14} /></div>
          </button>
        </div>
        <div className="w-10"></div>
      </header>

      <main className="pt-32 px-6 max-w-[1440px] mx-auto pb-20">
        <div className="text-center mb-16 h-24 flex flex-col items-center justify-center">
          <p className="text-2xl lg:text-4xl font-black italic uppercase tracking-tighter text-slate-300 mb-2">{frasesSensoriais[indexFrase]}</p>
          <h1 className="text-5xl lg:text-9xl font-black italic uppercase tracking-tighter leading-none text-slate-900">BORA <span className="text-[#00BFA6]">LÁ.</span></h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-24">
          {areasReais.map(area => (
            <div key={area.id} onClick={() => navigate(`/space/${area.id}`)} className="group cursor-pointer">
              <div className="relative aspect-[4/5] rounded-[50px] overflow-hidden mb-5 border border-black/5 shadow-sm group-hover:shadow-2xl transition-all duration-700">
                <img src={`/spaces/${area.folder}/foto1.jpg`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" />
              </div>
              <h3 className="text-xl font-black uppercase italic tracking-tighter mb-1">{area.nome}</h3>
              <span className="font-black text-2xl text-[#00BFA6] italic">R$ {area.preco}</span>
            </div>
          ))}
        </div>

        <section className="bg-black rounded-[60px] p-12 lg:p-20 text-white relative overflow-hidden shadow-2xl group flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2000')] bg-cover bg-center grayscale group-hover:grayscale-0 opacity-30 transition-all duration-[1.5s]"></div>
          <div className="relative z-10 max-w-2xl text-center lg:text-left">
            <h2 className="text-4xl lg:text-7xl font-black uppercase italic tracking-tighter leading-[0.85] mb-8">O TIME <span className="text-[#00BFA6]">COMPLETO</span> PARA O SEU EVENTO.</h2>
            <div className="flex flex-col gap-4 mb-10">
                <div className="flex items-center gap-3 justify-center lg:justify-start">
                    <CheckCircle2 size={20} className="text-[#00BFA6]" />
                    <p className="font-bold uppercase italic text-lg tracking-wider">Apoio total no planejamento.</p>
                </div>
            </div>
            <button onClick={() => navigate('/register-supplier')} className="bg-white text-black px-12 py-7 rounded-[30px] font-black uppercase italic text-xl hover:bg-[#00BFA6] hover:text-white transition-all shadow-xl active:scale-95">VER PARCEIROS</button>
          </div>
        </section>

        <footer className="mt-20 py-10 text-center border-t border-black/5">
            <p className="text-slate-300 font-black uppercase text-[10px] tracking-[0.5em]">BORA LÁ © 2026 | CONECTANDO EXPERIÊNCIAS</p>
        </footer>
      </main>
    </div>
  );
}