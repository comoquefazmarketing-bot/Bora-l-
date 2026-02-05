/* @author Felipe Makarios | Creator - BORA LÁ */
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronLeft, Calendar, User, Share2, Calculator } from 'lucide-react';
import { CONTENT_HUB } from '../data/contentHub';

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Proteção: Garantir que CONTENT_HUB existe antes de fazer o find
  const artigo = (CONTENT_HUB || []).find(a => a.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!artigo) {
    return (
      <div className="min-h-screen bg-[#1a1a1a] flex flex-col items-center justify-center text-white p-6">
        <h2 className="text-2xl font-black mb-4 uppercase italic">Artigo não encontrado</h2>
        <button onClick={() => navigate('/blog')} className="text-[#00BFA6] font-bold uppercase italic flex items-center gap-2">
          <ChevronLeft size={20} /> Voltar ao Blog
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white font-sans selection:bg-[#00BFA6]">
      <Helmet>
        <title>{artigo.title} | BORA LÁ.</title>
        <meta name="mobile-web-app-capable" content="yes" />
      </Helmet>

      <article className="max-w-4xl mx-auto pt-32 pb-20 px-6">
        <button onClick={() => navigate('/blog')} className="flex items-center gap-2 text-[#00BFA6] font-black uppercase italic text-[10px] mb-8 hover:translate-x-[-4px] transition-all">
          <ChevronLeft size={16} /> Voltar para o Blog
        </button>

        <div className="flex items-center gap-2 text-[#00BFA6] mb-4">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] border border-[#00BFA6] px-2 py-0.5 rounded">
            {artigo.tag}
          </span>
        </div>

        <h1 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter leading-none mb-8">
          {artigo.title}
        </h1>

        <div className="flex flex-wrap items-center gap-6 text-gray-500 text-[10px] font-black uppercase italic mb-12 border-y border-white/5 py-6">
          <div className="flex items-center gap-2"><User size={14} /> Felipe Makarios</div>
          <div className="flex items-center gap-2"><Calendar size={14} /> Fev 2026</div>
          <div className="ml-auto flex items-center gap-2 text-white cursor-pointer hover:text-[#00BFA6] transition-all">
            <Share2 size={14} /> Compartilhar
          </div>
        </div>

        <div 
          className="prose prose-invert prose-p:text-gray-400 prose-p:leading-relaxed prose-p:text-lg prose-headings:text-white prose-headings:uppercase prose-headings:italic prose-headings:font-black"
          dangerouslySetInnerHTML={{ __html: artigo.content }} 
        />

        {/* Banner de Patrocínio */}
        <div className="mt-20 p-8 bg-[#242424] rounded-[40px] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Patrocínio</span>
            <h4 className="text-2xl font-black uppercase italic text-white">{artigo.sponsor.name}</h4>
          </div>
          <a href={artigo.sponsor.link} target="_blank" rel="noreferrer" className="bg-[#00BFA6] text-black font-black uppercase italic px-8 py-4 rounded-2xl hover:scale-105 active:scale-95 transition-all text-sm">
            Falar no WhatsApp
          </a>
        </div>
      </article>
    </div>
  );
}