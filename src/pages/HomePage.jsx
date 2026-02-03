/* @author Felipe Makarios | Lead Architect - BORA LÁ */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Calculator, Menu, ArrowRight, Sparkles, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import BlogSection from '../components/BlogSection';
import GlobalB2BBanner from '../components/GlobalB2BBanner';

const areasReais = [
  { id: "top-burguer", nome: "RECANTO TOP BURGUER", cidade: "Novo Horizonte - SP", preco: "330", folder: "area de lazer top burguer" },
  { id: "rancho-paradise", nome: "RANCHO PARADISE BORBOREMA", cidade: "Borborema - SP", preco: "380", folder: "Rancho Paradise Borborema" },
  { id: "sao-sebastiao", nome: "CHÁCARA SÃO SEBASTIÃO", cidade: "Novo Horizonte - SP", preco: "300", folder: "chacara sao sebastiao" },
  { id: "carlos-zara", nome: "ÁREA DE LZER CARLOS ZARA", cidade: "Novo Horizonte - SP", preco: "600", folder: "Área de lazer Carlos Zara" },
  { id: "santa-clara", nome: "ESPAÇO SANTA CLARA", cidade: "Novo Horizonte - SP", preco: "300", folder: "espaco santa clara" },
  { id: "recanto-america", nome: "RECANTO AMÉRICA", cidade: "Novo Horizonte - SP", preco: "300", folder: "recanto america" },
  { id: "recanto-do-sol", nome: "RECANTO PÔR DO SOL", cidade: "Novo Horizonte - SP", preco: "Consultar", folder: "Recanto do Sol" },
  { id: "assolini", nome: "ÁREA DE LAZER ASSOLINI", cidade: "Novo Horizonte - SP", preco: "Consultar", folder: "ÁREA DE LAZER ASSOLINI" }
];

export default function HomePage() {
  const navigate = useNavigate();

  const RenderLetra = ({ letra, index, size = "text-[12vw] lg:text-[10rem]" }) => {
    const area = areasReais[index % areasReais.length];
    return (
      <span 
        className={`inline-block ${size} font-[1000] uppercase italic tracking-tighter leading-[0.8] select-none`}
        style={{
          backgroundImage: `url("/spaces/${area.folder}/foto1.webp")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          color: 'transparent',
          padding: '0 0.05em' // Evita o corte nas laterais da letra
        }}
      >
        {letra}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-[#00BFA6] selection:text-white">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-[100] bg-white/90 backdrop-blur-md border-b border-black/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.dispatchEvent(new CustomEvent('openSidebar'))}>
            <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center text-[#00BFA6] transition-transform group-hover:rotate-12">
              <Menu size={20} />
            </div>
            <span className="hidden sm:block font-black italic text-2xl tracking-tighter uppercase text-black">BORA LÁ.</span>
          </div>

          <div className="relative group">
            <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute -inset-2 bg-[#EE0000] rounded-full blur-xl" />
            <button onClick={() => window.dispatchEvent(new CustomEvent('openCalc'))} className="relative bg-[#EE0000] text-white px-8 py-3 rounded-full font-black uppercase italic text-[11px] tracking-widest flex items-center gap-3 shadow-xl border-b-4 border-black/20">
              <Calculator size={16} /> CALCULADORA DE CHURRASCO
            </button>
          </div>

          <button onClick={() => navigate('/blog')} className="group flex flex-col items-end">
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#00BFA6]">Mundo do Lazer</span>
            <span className="text-xs font-black uppercase italic flex items-center gap-1 text-black font-bold tracking-tighter">Blog Lá <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /></span>
          </button>
        </div>
      </nav>

      {/* HERO SECTION - ESPAÇO REDUZIDO (pt-32) */}
      <section className="pt-32 lg:pt-40 pb-16 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          
          {/* LADO ESQUERDO: BORA LÁ (Ajustado para não vazar) */}
          <div className="flex flex-col select-none shrink-0 overflow-visible">
            <div className="flex items-center gap-2 text-[#00BFA6] font-black uppercase tracking-[0.4em] text-[10px] mb-3">
              <Sparkles size={14} fill="currentColor" /> Expert em NH
            </div>
            <div className="flex leading-none">
              <RenderLetra letra="B" index={0} />
              <RenderLetra letra="O" index={1} />
              <RenderLetra letra="R" index={2} />
              <RenderLetra letra="A" index={3} />
            </div>
            <div className="flex -mt-6 lg:-mt-10 leading-none">
              <RenderLetra letra="L" index={4} />
              <RenderLetra letra="Á" index={5} />
              <RenderLetra letra="." index={6} />
            </div>
          </div>

          {/* LADO DIREITO: TEXTO E BOTÃO */}
          <div className="flex-1 text-center lg:text-left lg:pl-10">
            <div className="inline-flex items-center gap-2 bg-black text-[#00BFA6] px-4 py-1.5 rounded-full mb-6">
                <Zap size={14} fill="currentColor" />
                <span className="text-[9px] font-black uppercase tracking-[0.2em]">Tudo em um só lugar</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-[1000] uppercase italic tracking-tighter leading-[0.9] text-slate-900">
              O SEU PRÓXIMO <br /> FINAL DE SEMANA, <br />
              <span className="text-[#00BFA6]">RESOLVIDO EM <br /> POUCOS CLIQUES.</span>
            </h2>
            
            <div className="mt-10 flex justify-center lg:justify-start">
                <button onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })} className="group flex items-center gap-4 bg-black text-white px-8 py-4 rounded-2xl font-black uppercase italic text-xs hover:bg-[#00BFA6] transition-all shadow-xl active:scale-95">
                    Ver Áreas Disponíveis <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
          </div>

        </div>
      </section>

      {/* LISTAGEM DE ÁREAS */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-100">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <h2 className="text-4xl font-black uppercase italic tracking-tighter">Explorar <span className="text-[#00BFA6]">Região.</span></h2>
            <p className="text-slate-400 font-bold uppercase italic text-[10px] tracking-widest hidden lg:block">NH • Borborema • Itajobi</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {areasReais.map(area => (
            <div key={area.id} onClick={() => navigate(`/space/${area.id}`)} className="group cursor-pointer">
              <div className="relative aspect-[4/5] rounded-[45px] overflow-hidden mb-5 border border-black/5 group-hover:shadow-2xl transition-all duration-700 bg-slate-100">
                <img src={`/spaces/${area.folder}/foto1.webp`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]" alt={area.nome} />
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl flex items-center gap-2 shadow-sm">
                  <MapPin size={12} className="text-[#00BFA6]" />
                  <span className="text-[10px] font-black uppercase">{area.cidade}</span>
                </div>
              </div>
              <h3 className="text-xl font-black uppercase italic tracking-tighter leading-tight group-hover:text-[#00BFA6] transition-colors">{area.nome}</h3>
              <p className="text-slate-400 font-bold text-xs mt-2 uppercase italic tracking-widest">A partir de R$ {area.preco}</p>
            </div>
          ))}
        </div>

        <GlobalB2BBanner />
        <div className="mt-32">
          <BlogSection />
        </div>
      </section>

      <footer className="py-20 text-center text-slate-400 font-bold uppercase italic text-[10px] tracking-[0.5em] border-t border-slate-100">
        © 2026 BORA LÁ • FELIPE MAKARIOS
      </footer>
    </div>
  );
}