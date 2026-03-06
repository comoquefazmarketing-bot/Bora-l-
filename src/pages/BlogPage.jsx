/* @author Felipe Makarios | Lead Architect - BORA LÁ */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calculator, Zap, ChevronRight, Sparkles } from 'lucide-react';
import { CONTENT_HUB } from '../data/contentHub';

export default function BlogPage() {
  const navigate = useNavigate();
  const openCalc = () => window.dispatchEvent(new CustomEvent('openCalc'));

  return (
    <div className="min-h-screen bg-white text-slate-900 pt-24">
      <header className="px-6 max-w-7xl mx-auto mb-16">
        <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter text-slate-900">
          BLOG <span className="text-[#00BFA6]">LÁ.</span>
        </h1>
      </header>

      <section className="px-6 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 rounded-[40px] overflow-hidden bg-slate-100 aspect-video shadow-2xl">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/qWypdDbIL3Y" title="Bora Lá" frameBorder="0" allowFullScreen></iframe>
          </div>

          <div 
            onClick={openCalc}
            className="bg-[#EE0000] p-10 rounded-[40px] text-white shadow-2xl shadow-red-500/20 cursor-pointer hover:scale-[1.02] transition-all flex flex-col justify-center relative overflow-hidden group"
          >
            <Calculator size={80} className="absolute -right-4 -top-4 opacity-10" />
            <h4 className="text-3xl font-black uppercase italic leading-none mb-4">Calculadora de<br/>Churrasco</h4>
            <p className="text-white/80 text-xs font-bold uppercase leading-relaxed mb-8">
              Planeje sem erros. Nossa inteligência calcula carne, bebidas e insumos para seu evento em Novo Horizonte. Economia garantida para sua família.
            </p>
            <div className="bg-white text-[#EE0000] py-4 rounded-2xl text-center font-black uppercase italic text-xs">
              Começar Planejamento
            </div>
          </div>
        </div>
      </section>

      {/* LISTAGEM DE ARTIGOS */}
      <section className="px-6 max-w-7xl mx-auto pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CONTENT_HUB.map((art) => (
            <div key={art.id} onClick={() => navigate(`/blog/${art.slug}`)} className="p-8 rounded-[40px] border border-slate-100 hover:border-[#00BFA6] transition-all cursor-pointer bg-white shadow-sm">
              <span className="text-[10px] font-black text-[#00BFA6] uppercase tracking-[0.3em] italic block mb-4">{art.tag}</span>
              <h4 className="text-2xl font-black uppercase italic leading-tight text-slate-900">{art.title}</h4>
              <div className="flex items-center justify-between mt-8 text-[#00BFA6]">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">BORA LÁ • FELIPE MAKARIOS</span>
                <ChevronRight size={20} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}