/* @author Felipe Makarios | Creator - BORA LÁ */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Zap, ChevronRight, Calculator, Star } from "lucide-react";
import BlogSection from '../components/BlogSection';
import BlogClusterBanner from '../components/BlogClusterBanner';

export default function BlogPage() {
  const navigate = useNavigate();
  const openCalc = () => window.dispatchEvent(new CustomEvent('openCalc'));

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white font-sans">
      <Helmet>
        <title>Inteligência em Lazer | BLOG LÁ.</title>
        <meta name="mobile-web-app-capable" content="yes" />
      </Helmet>

      <header className="pt-24 pb-12 px-6 max-w-7xl mx-auto text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-2 text-[#00BFA6] mb-4">
          <Zap size={18} fill="currentColor" />
          <span className="text-[10px] font-black uppercase tracking-[0.4em]">Cultura de Elite</span>
        </div>
        <h1 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-none">
          BLOG <span className="text-[#00BFA6]">LÁ.</span>
        </h1>
      </header>

      <section className="px-6 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="relative aspect-video rounded-[40px] overflow-hidden border border-white/10 shadow-2xl bg-black">
              <iframe className="w-full h-full" src="https://www.youtube.com/embed/qWypdDbIL3Y" title="Bora Lá" frameBorder="0" allowFullScreen></iframe>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div onClick={openCalc} className="flex-1 bg-[#EE0000] p-8 rounded-[40px] hover:scale-[1.02] transition-all cursor-pointer shadow-xl flex flex-col justify-center">
              <Calculator size={32} className="mb-4 animate-pulse" />
              <h4 className="text-2xl font-black uppercase italic leading-tight mb-2">Calculadora Pro</h4>
              <p className="text-white/80 text-xs font-bold uppercase tracking-tighter mb-4">Logística bruta para seu evento em NH.</p>
              <div className="bg-black/20 py-2 px-4 rounded-full text-[10px] font-black uppercase w-fit">Abrir Agora</div>
            </div>
            <div onClick={() => navigate('/blog/segredo-costela')} className="flex-1 bg-[#242424] p-8 rounded-[40px] border border-white/5 hover:border-[#00BFA6] transition-all cursor-pointer flex flex-col justify-center">
              <Star size={24} className="text-[#00BFA6] mb-4" />
              <h4 className="text-xl font-black uppercase italic leading-tight text-white">Método Costela</h4>
              <div className="flex items-center gap-2 text-[10px] font-black uppercase text-gray-500 mt-2">Ler Técnica <ChevronRight size={14} /></div>
            </div>
          </div>
        </div>
      </section>

      <BlogSection />
      <BlogClusterBanner />
      <footer className="py-20 text-center text-gray-600 text-[10px] font-black uppercase tracking-[0.5em]">Felipe Makarios • BORA LÁ</footer>
    </div>
  );
}