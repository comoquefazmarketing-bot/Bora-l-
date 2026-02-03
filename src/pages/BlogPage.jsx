/* @author Felipe Makarios | Creator - BORA LÁ */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Sparkles, Zap, ArrowRight, PlayCircle, Image as ImageIcon } from "lucide-react";

import BlogSection from '../components/BlogSection';
import BlogClusterBanner from '../components/BlogClusterBanner';

export default function BlogPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 selection:bg-[#00BFA6] selection:text-white">
      <Helmet>
        <title>Blog Bora Lá | Lazer e Cultura em Novo Horizonte</title>
        <meta name="description" content="O guia definitivo para o seu lazer em Novo Horizonte." />
      </Helmet>

      {/* HEADER EDITORIAL */}
      <header className="pt-32 pb-16 px-6 max-w-7xl mx-auto border-b border-slate-200">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-[#00BFA6] font-black uppercase tracking-[0.4em] text-[10px] mb-6">
              <Zap size={14} fill="currentColor" /> Inteligência em Lazer
            </div>
            <h1 className="text-7xl md:text-9xl font-black uppercase italic tracking-tighter leading-[0.8]">
              BLOG <span className="text-[#00BFA6]">LÁ.</span>
            </h1>
          </div>
          <div className="text-right hidden md:block pb-2">
            <p className="text-slate-400 font-bold uppercase italic text-xs tracking-widest">By Felipe Makarios</p>
            <div className="h-1 w-20 bg-[#00BFA6] ml-auto mt-2"></div>
          </div>
        </div>
      </header>

      {/* DESTAQUE INVERTIDO: VÍDEO (ESQUERDA) | CULTURA (DIREITA) */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* VÍDEO EM DESTAQUE (GRANDE) */}
          <div className="md:col-span-8 bg-black rounded-[3rem] p-4 shadow-2xl border-4 border-white overflow-hidden group relative aspect-video">
            <div className="absolute top-8 left-8 z-10 flex items-center gap-2 bg-red-600 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest animate-pulse">
              <PlayCircle size={12} /> Live Now
            </div>
            <iframe 
              className="w-full h-full rounded-[2rem]" 
              src="https://www.youtube.com/embed/qWypdDbIL3Y" 
              frameBorder="0" 
              allowFullScreen
            ></iframe>
          </div>

          {/* CARD LATERAL: ESSÊNCIA & CULTURA (ANTIGO MANIFESTO) */}
          <div 
            onClick={() => navigate('/blog/manifesto')}
            className="md:col-span-4 bg-[#1F2937] rounded-[3rem] p-10 text-white relative overflow-hidden group cursor-pointer shadow-xl flex flex-col justify-between"
          >
            <Sparkles className="absolute -right-10 -top-10 text-[#00BFA6]/10 group-hover:rotate-12 transition-transform duration-700" size={250} />
            
            <div className="relative z-10">
              <span className="text-[#00BFA6] font-black uppercase italic text-[10px] tracking-widest">Nossa Visão</span>
              <h2 className="text-4xl font-black uppercase italic tracking-tighter leading-none mt-4">
                BORA LÁ:<br/>Essência & Cultura.
              </h2>
            </div>

            <div className="relative z-10 mt-8">
              <p className="text-slate-400 font-medium text-sm mb-6 group-hover:text-white transition-colors">
                Por que acreditamos que o lazer de qualidade é o segredo de uma vida épica em Novo Horizonte.
              </p>
              <div className="flex items-center gap-2 text-white font-black uppercase italic text-xs group-hover:gap-4 transition-all">
                Conhecer filosofia <ArrowRight size={16} className="text-[#00BFA6]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE ARTIGOS COM FOTOS (Pente Fino Visual) */}
      <section className="py-20 px-6 bg-slate-100/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-black uppercase italic tracking-tighter">Explorar <span className="text-[#00BFA6]">Matérias</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* CARD 1: COSTELA */}
            <article onClick={() => navigate('/blog/segredo-costela')} className="group cursor-pointer">
              <div className="relative h-64 mb-6 overflow-hidden rounded-[2.5rem] shadow-lg">
                <img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800" alt="Costela" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-6 left-6 bg-[#EE0000] text-white px-4 py-1 rounded-full text-[10px] font-black uppercase">Gastronomia</span>
              </div>
              <h3 className="text-2xl font-black uppercase italic leading-tight group-hover:text-[#00BFA6] transition-colors">O Segredo da Costela que Derrete</h3>
            </article>

            {/* CARD 2: CHÁCARAS */}
            <article onClick={() => navigate('/blog/melhores-areas-lazer-nh')} className="group cursor-pointer">
              <div className="relative h-64 mb-6 overflow-hidden rounded-[2.5rem] shadow-lg">
                <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800" alt="Lazer" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-6 left-6 bg-[#00BFA6] text-white px-4 py-1 rounded-full text-[10px] font-black uppercase">Review</span>
              </div>
              <h3 className="text-2xl font-black uppercase italic leading-tight group-hover:text-[#00BFA6] transition-colors">Tour pelas Chácaras de Elite em NH</h3>
            </article>

            {/* CARD 3: CHECKLIST */}
            <article onClick={() => navigate('/blog/checklist-chacara')} className="group cursor-pointer">
              <div className="relative h-64 mb-6 overflow-hidden rounded-[2.5rem] shadow-lg border-2 border-white">
                <img src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=800" alt="Checklist" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-6 left-6 bg-[#1F2937] text-white px-4 py-1 rounded-full text-[10px] font-black uppercase">Logística</span>
              </div>
              <h3 className="text-2xl font-black uppercase italic leading-tight group-hover:text-[#00BFA6] transition-colors">Checklist: Não passe vergonha no churrasco</h3>
            </article>
          </div>
        </div>
      </section>

      <BlogClusterBanner />

      <footer className="py-20 text-center text-slate-400 font-bold uppercase italic text-[10px] tracking-[0.5em]">
        © 2026 BORA LÁ • NOVO HORIZONTE
      </footer>
    </div>
  );
}