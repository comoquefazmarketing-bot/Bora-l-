/* @author Felipe Makarios | Creator - Bora Lá */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Youtube, Tv, BookText, ArrowRight, Info } from "lucide-react";

const articles = [
  {
    id: "a1",
    tag: "O Aplicativo",
    title: "Bora Lá: O manifesto por festas sem estresse",
    excerpt: "Nascido em Novo Horizonte, o Bora Lá une tecnologia e curadoria para transformar a forma como você planeja seu lazer.",
    slug: "manifesto-bora-la"
  },
  {
    id: "a2",
    tag: "Dicas",
    title: "O segredo da Costela Perfeita",
    excerpt: "Aprenda a escolher o corte ideal e o tempo de fogo para surpreender seus convidados no próximo churrasco.",
    slug: "segredo-costela"
  },
  {
    id: "a3",
    tag: "Logística",
    title: "Checklist: Não esqueça o básico",
    excerpt: "Do carvão ao gelo: a lista definitiva para você não precisar sair da chácara no meio da diversão.",
    slug: "checklist-chacara"
  },
  {
    id: "a4",
    tag: "Local",
    title: "As melhores áreas de lazer de NH",
    excerpt: "Fizemos um tour pelas chácaras mais completas da nossa região. Veja o que cada uma oferece.",
    slug: "melhores-chacaras-nh"
  }
];

export default function BlogPage() {
  const navigate = useNavigate();

  return (
    <div className="pt-24 min-h-screen bg-[#D1D5DB] pb-20 font-sans">
      
      {/* HEADER */}
      <section className="max-w-6xl mx-auto px-6 mb-12">
        <h1 className="text-7xl font-black text-[#1F2937] uppercase italic tracking-tighter">
          Blog <span className="text-[#00BFA6]">Lá.</span>
        </h1>
        <p className="text-xl font-bold text-slate-600 uppercase italic mt-2">
          O universo de lazer e gastronomia local.
        </p>
      </section>

      {/* GRID EM "L" INVERTIDO */}
      <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* VÍDEO (Lado Esquerdo - 2 colunas) */}
        <div className="md:col-span-2 md:row-span-2">
          <div className="flex items-center gap-2 mb-4">
             <Youtube className="text-[#EE0000]" size={20} />
             <h2 className="text-xs font-black uppercase italic tracking-widest text-[#1F2937]">TV Bora Lá</h2>
          </div>
          <div className="aspect-video bg-black rounded-[40px] overflow-hidden border-[8px] border-[#1F2937] shadow-2xl">
            <iframe 
              className="w-full h-full" 
              src="https://www.youtube.com/embed/qWypdDbIL3Y" 
              title="Costela na Brasa"
              frameBorder="0" 
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* ANÚNCIO (Topo Direito) */}
        <div className="bg-[#1F2937] rounded-[35px] p-8 border-b-[8px] border-[#00BFA6] shadow-xl flex flex-col justify-center">
           <span className="text-[9px] font-black text-[#00BFA6] uppercase tracking-widest mb-2">Publicidade Local</span>
           <h4 className="text-white text-xl font-black uppercase italic leading-tight">
             Espaço disponível para marcas de Novo Horizonte
           </h4>
           <div className="mt-4 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center font-black text-white text-xs">ADS</div>
        </div>

        {/* ARTIGO 1 (Abaixo do Anúncio, fecha o L) */}
        <div 
          onClick={() => navigate(`/blog/${articles[0].slug}`)} 
          className="bg-white p-6 rounded-[35px] border-b-4 border-black/10 hover:border-[#00BFA6] transition-all cursor-pointer group shadow-sm flex flex-col justify-between"
        >
          <div>
            <span className="text-[9px] font-black text-[#00BFA6] uppercase tracking-widest mb-2 block">{articles[0].tag}</span>
            <h3 className="text-lg font-black text-[#1F2937] uppercase italic leading-tight group-hover:text-[#00BFA6]">{articles[0].title}</h3>
            <p className="text-slate-500 text-xs mt-3 line-clamp-3 font-medium">{articles[0].excerpt}</p>
          </div>
          <ArrowRight size={16} className="text-[#00BFA6] self-end mt-4" />
        </div>

        {/* LINHA DE BASE (Os outros 3 artigos) */}
        {articles.slice(1).map((artigo) => (
          <div 
            key={artigo.id} 
            onClick={() => navigate(`/blog/${artigo.slug}`)}
            className="bg-white p-6 rounded-[35px] border-b-4 border-black/10 hover:border-[#00BFA6] transition-all cursor-pointer group shadow-sm flex flex-col h-full"
          >
            <span className="text-[9px] font-black text-[#00BFA6] uppercase tracking-widest mb-2 block">{artigo.tag}</span>
            <h3 className="text-lg font-black text-[#1F2937] uppercase italic leading-tight group-hover:text-[#00BFA6]">{artigo.title}</h3>
            <p className="text-slate-500 text-xs mt-3 line-clamp-2 font-medium flex-1">{artigo.excerpt}</p>
            <div className="mt-4 flex justify-end">
               <ArrowRight size={16} className="text-[#00BFA6] opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        ))}

      </section>
    </div>
  );
}