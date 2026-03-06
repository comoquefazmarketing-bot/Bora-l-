/* @author Felipe Makarios | Lead Architect - BORA LÁ */
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronLeft, Share2, Zap } from 'lucide-react';
import { CONTENT_HUB } from '../data/contentHub';

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const artigo = CONTENT_HUB.find(a => a.slug === slug);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!artigo) {
    return (
      <div className="min-h-screen bg-[#1a1a1a] flex flex-col items-center justify-center text-white font-black italic uppercase">
        <Zap size={40} className="text-[#EE0000] mb-4 animate-pulse" />
        <h2 className="text-2xl mb-4">Artigo não encontrado</h2>
        <button onClick={() => navigate('/blog')} className="bg-white text-black px-6 py-2 rounded-full text-xs">Voltar ao Blog</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white pb-20 selection:bg-[#00BFA6] selection:text-white">
      <Helmet><title>{artigo.title} | BLOG LÁ.</title></Helmet>
      
      <div className="max-w-4xl mx-auto px-6 pt-32">
        <button onClick={() => navigate('/blog')} className="flex items-center gap-2 text-[#00BFA6] font-black uppercase italic text-[10px] mb-8 hover:tracking-widest transition-all">
          <ChevronLeft size={16} /> Voltar ao Hub de Inteligência
        </button>

        <div className="flex items-center gap-3 mb-6">
           <span className="bg-[#00BFA6] text-black px-4 py-1 rounded-full font-black text-[10px] uppercase italic">{artigo.tag}</span>
           <span className="text-gray-600 text-[10px] font-black uppercase tracking-widest">Publicado por Felipe Makarios</span>
        </div>

        <h1 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter leading-none mb-12">{artigo.title}</h1>

        <div 
          className="prose prose-invert prose-p:text-gray-400 prose-p:text-lg prose-p:leading-relaxed prose-headings:text-white prose-headings:font-black prose-headings:uppercase prose-headings:italic prose-strong:text-[#00BFA6] max-w-none mb-20" 
          dangerouslySetInnerHTML={{ __html: artigo.content }} 
        />

        {/* FOOTER DO POST COM SPONSOR */}
        <div className="bg-gradient-to-r from-[#242424] to-[#1a1a1a] p-10 rounded-[40px] border border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-2">Oferecimento Especial</p>
            <h4 className="text-3xl font-black italic uppercase tracking-tighter text-white">{artigo.sponsor.name}</h4>
          </div>
          <a href={artigo.sponsor.link} target="_blank" rel="noopener noreferrer" className="bg-[#00BFA6] hover:bg-white text-black px-10 py-4 rounded-full font-black uppercase italic text-xs transition-all shadow-xl">
            Falar com Parceiro
          </a>
        </div>
      </div>
    </div>
  );
}