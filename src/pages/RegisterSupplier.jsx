/* @author Felipe Makarios | Lead Architect */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

const parceiros = [
  { id: 1, nome: "Dono de Área", img: "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=800", msg: "Olá! Quero cadastrar meu espaço." },
  { id: 2, nome: "DJ Profissional", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800", msg: "Olá! Sou DJ e quero ser parceiro." },
  { id: 3, nome: "Churrasqueiro", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800", msg: "Olá! Sou churrasqueiro profissional." },
  { id: 4, nome: "Buffet & Salgados", img: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800", msg: "Olá! Tenho buffet de salgados." },
  { id: 5, nome: "Equipe de Limpeza", img: "https://www.grupoiron.com/blog/wp-content/uploads/2021/06/equipe-de-limpeza-1024x701.png", msg: "Olá! Trabalho com limpeza de eventos." },
  { id: 6, nome: "Fotógrafo", img: "https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=800", msg: "Olá! Sou fotógrafo profissional." },
  { id: 7, nome: "Segurança", img: "https://www.clearway.co.uk/wp-content/uploads/2023/06/What-does-a-security-guard-do.webp", msg: "Olá! Faço segurança de eventos." },
  { id: 8, nome: "Decoração", img: "https://i.pinimg.com/736x/48/96/b5/4896b52c7367343afc008725ab962e36.jpg", msg: "Olá! Sou decorador(a) de festas." },
  { id: 9, nome: "Barmen / Drinks", img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800", msg: "Olá! Sou Barman especializado." },
  { id: 10, nome: "Brinquedos Infláveis", img: "https://babyeventos.com.br/wp-content/uploads/2023/05/aluguel-de-toboga-inflavel-para-festa-1024x657.jpg", msg: "Olá! Alugo brinquedos para festas." },
  { id: 11, nome: "Iluminação", img: "https://www.bromluzesom.com.br/site/conteudo/imagens/129.jpg", msg: "Olá! Faço iluminação cênica." },
  { id: 12, nome: "Garçom / Buffet", img: "https://delikatessenbuffet.com.br/storage/app/uploads/sUWGXYDWEwVxM2ZZRwu45xQT5eDFZQDHr4Fqv2LK.jpg", msg: "Olá! Sou garçom profissional." }
];

export default function RegisterSupplier() {
  const navigate = useNavigate();
  const whatsComercial = "5517988031679";

  return (
    <div className="min-h-screen bg-white text-black pb-20">
      {/* Header removido daqui pois agora é Global via App.jsx */}
      
      <main className="pt-32 px-6 max-w-7xl mx-auto">
        <button onClick={() => navigate(-1)} className="mb-8 flex items-center gap-2 font-black uppercase italic text-[10px] tracking-widest text-slate-400 hover:text-black transition-all">
          <ArrowLeft size={16} /> VOLTAR PARA O INÍCIO
        </button>

        <section className="mb-16">
          <h1 className="text-5xl lg:text-8xl font-black uppercase italic tracking-tighter leading-[0.85] mb-6">
            BORA LÁ,<br/><span className="text-[#00BFA6]">SEJA NOSSO PARCEIRO.</span>
          </h1>
          
          <div className="max-w-4xl border-l-4 border-[#00BFA6] pl-6 py-2">
            <p className="text-lg lg:text-2xl font-bold text-slate-500 uppercase italic tracking-tighter leading-tight mb-4">
              Esta é a nossa curadoria de elite. Conectamos donos de áreas a profissionais que transformam qualquer espaço em um evento inesquecível.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-2 text-left">
                <CheckCircle2 size={18} className="text-[#00BFA6] mt-1 shrink-0" />
                <p className="text-xs font-black uppercase tracking-tight text-slate-400">
                  <span className="text-black">DONOS DE ÁREA:</span> AUMENTE SUA OCUPAÇÃO COM SERVIÇOS QUE VALORIZAM SEU ESPAÇO.
                </p>
              </div>
              <div className="flex items-start gap-2 text-left">
                <CheckCircle2 size={18} className="text-[#00BFA6] mt-1 shrink-0" />
                <p className="text-xs font-black uppercase tracking-tight text-slate-400">
                  <span className="text-black">PRESTADORES:</span> ESTEJA ONDE OS CLIENTES ESTÃO. AGENDA CHEIA E PARCERIAS FORTES.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {parceiros.map((p) => (
            <div key={p.id} onClick={() => window.open(`https://wa.me/${whatsComercial}?text=${encodeURIComponent(p.msg)}`, '_blank')}
              className="group relative h-[400px] rounded-[40px] overflow-hidden cursor-pointer shadow-xl border border-black/5 hover:scale-[1.02] transition-all duration-500">
              <img src={p.img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={p.nome} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-left">
                <p className="text-[#00BFA6] font-black uppercase text-[10px] tracking-widest mb-2">CONECTAR AGORA</p>
                <h3 className="text-white font-black uppercase italic text-2xl tracking-tighter">{p.nome}</h3>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}