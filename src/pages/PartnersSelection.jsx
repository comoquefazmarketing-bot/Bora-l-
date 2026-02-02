/* @author Felipe Makarios | Lead Architect */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Sparkles } from 'lucide-react';

const parceiros = [
  { id: 1, nome: "Dono de área", img: "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=800", msg: "Olá! Quero cadastrar meu espaço." },
  { id: 2, nome: "DJ Profissional", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800", msg: "Olá! Sou DJ e quero ser parceiro." },
  { id: 3, nome: "Churrasqueiro", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800", msg: "Olá! Sou churrasqueiro profissional." },
  { id: 4, nome: "Buffet & Salgados", img: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800", msg: "Olá! Tenho buffet de salgados." },
  { id: 5, nome: "Equipe de Limpeza", img: "https://www.grupoiron.com/blog/wp-content/uploads/2021/06/equipe-de-limpeza-1024x701.png", msg: "Olá! Trabalho com limpeza de eventos." },
  { id: 6, nome: "Fotógrafo", img: "https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=800", msg: "Olá! Sou fotógrafo profissional." },
  { id: 7, nome: "Segurança", img: "https://www.clearway.co.uk/wp-content/uploads/2023/06/What-does-a-security-guard-do.webp", msg: "Olá! Faço segurança de eventos." },
  { id: 8, nome: "Decoração", img: "https://i.pinimg.com/736x/48/96/b5/4896b52c7367343afc008725ab962e36.webp", msg: "Olá! Sou decorador(a) de festas." },
  { id: 9, nome: "Barmen / Drinks", img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800", msg: "Olá! Sou Barman especializado." },
  { id: 10, nome: "Brinquedos Infláveis", img: "https://babyeventos.com.br/wp-content/uploads/2023/05/aluguel-de-toboga-inflavel-para-festa-1024x657.webp", msg: "Olá! Alugo brinquedos para festas." },
  { id: 11, nome: "Iluminação", img: "https://www.bromluzesom.com.br/site/conteudo/imagens/129.webp", msg: "Olá! Faço iluminação cáªnica." },
  { id: 12, nome: "Garçom / Buffet", img: "https://delikatessenbuffet.com.br/storage/app/uploads/sUWGXYDWEwVxM2ZZRwu45xQT5eDFZQDHr4Fqv2LK.webp", msg: "Olá! Sou garçom profissional." }
];

export default function PartnersSelection() {
  const navigate = useNavigate();
  const whatsComercial = "5517988031679";

  return (
    <div className="min-h-screen bg-[#FDFCFB] pb-20">
      <main className="pt-32 px-6 lg:px-20 max-w-[1600px] mx-auto">
        <button onClick={() => navigate(-1)} className="mb-8 flex items-center gap-2 font-black uppercase italic text-[10px] tracking-widest text-slate-400 hover:text-black transition-all">
          <ArrowLeft size={16} /> VOLTAR PARA O INáCIO
        </button>

        {/* SEá€¡ÃƒÆ’O DE TEXTO ESTRATá€°GICO */}
        <section className="mb-16">
          <h1 className="text-6xl lg:text-9xl font-black uppercase italic tracking-tighter leading-[0.8] mb-8">
            BORA LÁƒÂ,<br/><span className="text-[#00BFA6]">SEJA NOSSO PARCEIRO.</span>
          </h1>
          
          <div className="max-w-5xl border-l-4 border-[#00BFA6] pl-6 py-2 bg-white/50 backdrop-blur-sm rounded-r-3xl shadow-sm">
            <p className="text-xl lg:text-3xl font-bold text-slate-600 uppercase italic tracking-tighter leading-tight mb-6">
              Esta é a nossa curadoria de elite. Conectamos donos de áreas a profissionais que transformam qualquer espaço em um evento inesquecá­vel.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={24} className="text-[#00BFA6] mt-1 shrink-0" />
                <p className="text-xs font-black uppercase tracking-widest text-slate-400 leading-relaxed">
                  <span className="text-black block text-sm mb-1 font-black">DONOS DE áREA:</span> 
                  AUMENTE SUA OCUPAá€¡ÃƒÆ’O COM SERVIá€¡OS QUE VALORIZAM SEU ESPAá€¡O E GERAM MAIS RESERVAS.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={24} className="text-[#00BFA6] mt-1 shrink-0" />
                <p className="text-xs font-black uppercase tracking-widest text-slate-400 leading-relaxed">
                  <span className="text-black block text-sm mb-1 font-black">PRESTADORES:</span> 
                  ESTEJA ONDE OS CLIENTES ESTÃƒÆ’O. AGENDA CHEIA, CONEXá€¢ES FORTES E PARCERIAS DE SUCESSO.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* GRADE DE 4 COLUNAS COM TODOS OS 12 SERVIá€¡OS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {parceiros.map((p) => (
            <div 
              key={p.id} 
              onClick={() => window.open(`https://wa.me/${whatsComercial}?text=${encodeURIComponent(p.msg)}`, '_blank')}
              className="group relative h-[480px] rounded-[60px] overflow-hidden cursor-pointer shadow-xl border border-black/5 hover:scale-[1.02] transition-all duration-700 bg-slate-200"
            >
              <img 
                src={p.img} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-125" 
                alt={p.nome} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="absolute bottom-12 left-10 right-10 text-left">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles size={12} className="text-[#00BFA6]" />
                  <span className="text-[#00BFA6] font-black uppercase text-[10px] tracking-[0.3em]">CONECTAR AGORA</span>
                </div>
                <h3 className="text-white font-black uppercase italic text-3xl lg:text-4xl tracking-tighter leading-none">
                  {p.nome}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}