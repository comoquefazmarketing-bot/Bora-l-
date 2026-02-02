/* @author Felipe Makarios | Lead Architect */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Sparkles } from 'lucide-react';

const parceiros = [
  { id: 1, nome: "Dono de Área", img: "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=800", msg: "Olá! Quero cadastrar meu espaço." },
  { id: 2, nome: "DJ Profissional", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800", msg: "Olá! Sou DJ e quero ser parceiro." },
  { id: 3, nome: "Churrasqueiro", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800", msg: "Olá! Sou churrasqueiro profissional." },
  { id: 4, nome: "Buffet & Salgados", img: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800", msg: "Olá! Tenho buffet de salgados." },
  { id: 5, nome: "Equipe de Limpeza", img: "https://i.pinimg.com/736x/33/5d/0b/335d0bc3e9ba2597ddc2545cb242e544.jpg", msg: "Olá! Trabalho com limpeza de eventos." },
  { id: 6, nome: "Fotógrafo", img: "https://i.pinimg.com/736x/8d/29/ce/8d29cefd0d82b4c5e06b5748358ca70c.jpg", msg: "Olá! Sou fotógrafo profissional." },
  { id: 7, nome: "Segurança", img: "https://i.pinimg.com/736x/b6/2d/64/b62d645fbc0da2f76d383672228d484b.jpg", msg: "Olá! Faço segurança de eventos." },
  { id: 8, nome: "Decoração", img: "https://i.pinimg.com/1200x/75/56/bf/7556bfda277c43d19f127d82d857b24e.jpg", msg: "Olá! Sou decorador(a) de festas." },
  { id: 9, nome: "Barmen / Drinks", img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800", msg: "Olá! Sou Barman especializado." },
  { id: 10, nome: "Brinquedos Infláveis", img: "https://i.pinimg.com/736x/fe/7b/c6/fe7bc6fb42778b71b144446c526a5d19.jpg", msg: "Olá! Alugo brinquedos para festas." },
  { id: 11, nome: "Iluminação", img: "https://i.pinimg.com/1200x/31/45/cd/3145cdac05672d508372f7a974f6437a.jpg", msg: "Olá! Faço iluminação cênica." },
  { id: 12, nome: "Garçom / Buffet", img: "https://i.pinimg.com/736x/50/bf/1f/50bf1fdaa37422a31d7f0295e37b3625.jpg", msg: "Olá! Sou garçom profissional." }
];

export default function PartnersSelection() {
  const navigate = useNavigate();
  const whatsComercial = "5517988031679";

  const renderTitle = (name) => {
    if (name === "Churrasqueiro") {
      return (
        <h3 className="text-white font-black uppercase italic text-[1.35rem] sm:text-[1.45rem] lg:text-[1.85rem] tracking-[-0.08em] leading-none">
          {name}
        </h3>
      );
    }
    if (name === "DJ Profissional") {
      return (
        <h3 className="text-white font-black uppercase italic text-xl sm:text-2xl lg:text-[2.2rem] tracking-tighter leading-none">
          {name}
        </h3>
      );
    }
    return (
      <h3 className="text-white font-black uppercase italic text-2xl sm:text-3xl lg:text-4xl tracking-tighter leading-none">
        {name}
      </h3>
    );
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] pb-20">
      <main className="pt-32 px-6 lg:px-20 max-w-[1600px] mx-auto">
        <button onClick={() => navigate(-1)} className="mb-8 flex items-center gap-2 font-black uppercase italic text-[10px] tracking-widest text-slate-400 hover:text-black transition-all">
          <ArrowLeft size={16} /> VOLTAR PARA O INÍCIO
        </button>

        <section className="mb-16">
          <h1 className="text-6xl lg:text-9xl font-black uppercase italic tracking-tighter leading-[0.8] mb-8 text-[#00BFA6]">
            PARCEIRO.
          </h1>
          <div className="max-w-6xl border-l-4 border-[#00BFA6] pl-6 py-4 bg-white/50 backdrop-blur-sm rounded-r-3xl shadow-sm">
            <p className="text-2xl lg:text-3xl font-black text-slate-700 uppercase italic tracking-tighter leading-tight mb-4">
              ESTA É A NOSSA CURADORIA DE ELITE. CONECTAMOS DONOS DE ÁREAS A PROFISSIONAIS QUE TRANSFORMAM QUALQUER ESPAÇO EM UM EVENTO INESQUECÍVEL.
            </p>
          </div>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {parceiros.map((p) => (
            <div 
              key={p.id} 
              onClick={() => window.open('https://wa.me/' + whatsComercial + '?text=' + encodeURIComponent(p.msg), '_blank')}
              className="group relative h-[480px] rounded-[60px] overflow-hidden cursor-pointer shadow-xl border border-black/5 hover:scale-[1.02] transition-all duration-700 bg-slate-200"
            >
              <img src={p.img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-125" alt={p.nome} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="absolute bottom-12 left-8 right-8 text-left">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles size={12} className="text-[#00BFA6]" />
                  <span className="text-[#00BFA6] font-black uppercase text-[10px] tracking-[0.3em]">CONECTAR AGORA</span>
                </div>
                {renderTitle(p.nome)}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}