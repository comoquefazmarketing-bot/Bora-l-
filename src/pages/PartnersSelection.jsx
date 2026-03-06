/* @author Felipe Makarios | Lead Architect - BORA LÁ */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const whatsKaren = "5511933515087";

const CATEGORIAS = [
  { id: 1, nome: "Dono de Área", img: "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=800", isFree: true },
  { id: 2, nome: "Churrasqueiro", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800" },
  { id: 3, nome: "DJ e Som", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800" },
  { id: 4, nome: "Garçons", img: "https://www.clean-house-sp.com.br/imagens/informacoes/servicos-garcons-festas-sp-01.webp" },
  { id: 5, nome: "Buffet", img: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800" },
  { id: 6, nome: "Limpeza", img: "https://whiteningmultiservicos.com.br/wp-content/uploads/2024/06/2024-06-20-limpeza-pos-festa-802x506.jpg" },
  { id: 7, nome: "Barman", img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800" },
  { id: 12, nome: "Mesas e Cadeiras", img: "https://image.portaldacidade.com/unsafe/1200x628/filters:watermark(https://bucket.portaldacidade.com/guides-api/img/watermarks/selo-guiacomercial.png,-0,-0,0)/https://bucket.portaldacidade.com/painel-do-franqueado/img/category_guide/locacao-de-mesas-e-cadeiras-5c6dad79df617.jpg" }
];

export default function PartnersSelection() {
  const navigate = useNavigate();

  const handleAction = (p) => {
    if (p.isFree) {
      const msg = encodeURIComponent("Olá! Sou Dono de Área e quero cadastrar meu espaço gratuitamente no BORA LÁ.");
      window.open(`https://wa.me/${whatsKaren}?text=${msg}`, '_blank');
    } else {
      // FORÇANDO A IDA PARA A LANDING PAGE DE INVESTIMENTO
      navigate('/investir');
    }
  };

  return (
    <div className="min-h-screen bg-white text-black pb-20 pt-32 px-6">
      <div className="max-w-7xl mx-auto">
        <button onClick={() => navigate('/')} className="mb-8 flex items-center gap-2 font-black uppercase italic text-[10px] tracking-widest text-slate-400 hover:text-black transition-all">
          <ArrowLeft size={16} /> VOLTAR PARA O INÍCIO
        </button>
        <header className="mb-16 border-l-8 border-[#00BFA6] pl-8">
          <h1 className="text-5xl lg:text-8xl font-[1000] uppercase italic tracking-tighter leading-[0.85] mb-6">QUER <span className="text-[#00BFA6]">ANUNCIAR?</span></h1>
          <p className="text-lg lg:text-2xl font-bold text-slate-500 uppercase italic tracking-tighter leading-tight max-w-xl">
            As áreas de lazer têm <span className="text-black underline">CADASTRO GRÁTIS</span>. <br/>
            Prestadores: vejam os <span className="text-black">PLANOS DE INVESTIMENTO</span>.
          </p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIAS.map((p) => (
            <div key={p.id} onClick={() => handleAction(p)} 
              className="group relative h-[450px] rounded-[45px] overflow-hidden cursor-pointer shadow-2xl border border-black/5 hover:scale-[1.02] transition-all">
              <img src={p.img} className="absolute inset-0 w-full h-full object-cover" alt={p.nome} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-8 right-8 text-left">
                <h3 className="text-white font-[1000] uppercase italic text-2xl tracking-tighter leading-none mb-6">{p.nome}</h3>
                <div className="flex items-center justify-between py-4 border-t border-white/10 text-white font-black uppercase italic text-[10px] tracking-widest group-hover:text-[#00BFA6] transition-colors">
                  {p.isFree ? "CADASTRAR GRÁTIS" : "VER INVESTIMENTO"} <ArrowRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}