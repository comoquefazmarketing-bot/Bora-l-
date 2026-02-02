import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Calculator, CheckCircle2, Megaphone } from 'lucide-react';
import { CONTENT_HUB } from '../data/contentHub';

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = CONTENT_HUB.artigos.find(a => a.slug === slug);

  if (!post) {
    return (
      <div className="pt-32 text-center font-black uppercase italic">
        <h2 className="text-2xl">Artigo não encontrado</h2>
        <button onClick={() => navigate('/blog')} className="mt-4 text-[#00BFA6] underline">Voltar</button>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-white pb-20 font-sans">
      <article className="max-w-3xl mx-auto px-6">
        
        {/* VOLTAR */}
        <button onClick={() => navigate('/blog')} className="flex items-center gap-2 text-slate-400 font-black uppercase text-[10px] mb-8 hover:text-[#00BFA6] transition-all">
          <ArrowLeft size={16} /> Voltar para o Blog
        </button>

        {/* PATROCINADOR / ADS */}
        {post.sponsor ? (
          <div className="mb-10 p-1 bg-gradient-to-r from-[#00BFA6] to-[#1F2937] rounded-[35px] shadow-xl">
             <div className="bg-white rounded-[31px] p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                   <div className="text-3xl">{post.sponsor.logo}</div>
                   <div>
                      <p className="text-[9px] font-black text-[#00BFA6] uppercase tracking-widest leading-none mb-1">ConteÃºdo Oferecido por:</p>
                      <h4 className="text-xl font-black text-[#1F2937] uppercase italic leading-tight">{post.sponsor.name}</h4>
                   </div>
                </div>
                <button className="bg-[#1F2937] text-white px-5 py-2.5 rounded-xl font-black uppercase text-[9px] tracking-widest">Ver Ofertas</button>
             </div>
          </div>
        ) : (
          <div className="mb-10 p-6 bg-slate-50 rounded-[35px] border border-dashed border-slate-200 flex items-center justify-between">
             <p className="text-[10px] font-bold text-slate-400 uppercase italic">Publicidade disponá­vel para este tema</p>
             <Megaphone size={18} className="text-slate-300" />
          </div>
        )}

        {/* CABEá€¡ALHO DO ARTIGO */}
        <div className="flex items-center gap-4 text-slate-400 text-[10px] font-black uppercase tracking-widest mb-4">
          <span className="text-[#00BFA6]">{post.tag}</span>
          <span>Ã¢â‚¬</span>
          <span className="flex items-center gap-1"><Calendar size={12}/> 30 JAN, 2026</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-black text-[#1F2937] uppercase italic tracking-tighter mb-10 leading-[0.85]">
          {post.title}
        </h1>

        {/* O TEXTO REAL (Renderizando o HTML do ContentHub) */}
        <div className="prose prose-slate max-w-none text-slate-600 font-medium leading-relaxed mb-16">
          <div 
            className="article-body text-lg"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
          
          <ul className="space-y-4 my-10 border-t border-slate-100 pt-10">
             {['Qualidade garantida', 'Praticidade no lazer', 'Economia real'].map(item => (
               <li key={item} className="flex items-center gap-3 font-black uppercase italic text-sm text-[#1F2937]">
                  <CheckCircle2 size={20} className="text-[#00BFA6]" /> {item}
               </li>
             ))}
          </ul>
        </div>

        {/* CTA FINAL */}
        <div className="bg-[#1F2937] p-12 rounded-[50px] text-center shadow-2xl relative overflow-hidden">
          <h3 className="text-3xl font-black text-white uppercase italic mb-8 relative z-10 leading-tight">
            Gostou das dicas? <br/>Planeje seu evento agora!
          </h3>
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('openCalc'))}
            className="bg-[#EE0000] text-white px-12 py-5 rounded-full font-black uppercase italic hover:scale-105 transition-all relative z-10 shadow-xl"
          >
            Abrir Calculadora de Churrasco
          </button>
        </div>
      </article>
    </div>
  );
}