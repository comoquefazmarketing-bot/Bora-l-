/* @author Felipe Makarios | Lead Architect - BORA LÁ */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Zap } from 'lucide-react';

const whatsKaren = "5511933515087";

const SERVICOS = [
  { id: 1, nome: "Churrasqueiro", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800", msg: "Olá! Gostaria de reservar um CHURRASQUEIRO para meu evento." },
  { id: 2, nome: "DJ e Som", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800", msg: "Olá! Gostaria de reservar um DJ para meu evento." },
  { id: 3, nome: "Garçons", img: "https://www.clean-house-sp.com.br/imagens/informacoes/servicos-garcons-festas-sp-01.webp", msg: "Olá! Preciso de uma equipe de GARÇONS para meu evento." },
  { id: 4, nome: "Buffet / Salgados", img: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800", msg: "Olá! Gostaria de um orçamento de BUFFET para meu evento." },
  { id: 5, nome: "Limpeza Pós-Festa", img: "https://whiteningmultiservicos.com.br/wp-content/uploads/2024/06/2024-06-20-limpeza-pos-festa-802x506.jpg", msg: "Olá! Preciso de equipe para LIMPEZA após meu evento." },
  { id: 6, nome: "Barman e Drinks", img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800", msg: "Olá! Gostaria de um BARMAN para meu evento." },
  { id: 7, nome: "Segurança", img: "https://prevencaoseguranca.com.br/wp-content/uploads/2025/01/eventos1.jpg", msg: "Olá! Gostaria de contratar SEGURANÇA para meu evento." },
  { id: 8, nome: "Decoração", img: "https://greenpallaceeventos.com.br/wp-content/uploads/2023/05/Ideias-criativas-para-festas-tematicas-720x484.jpeg", msg: "Olá! Gostaria de orçamento para DECORAÇÃO de festa." },
  { id: 9, nome: "Brinquedos", img: "https://babyeventos.com.br/wp-content/uploads/2023/02/aluguel-de-brinquedos-para-festa-baby-eventos.jpg", msg: "Olá! Quero alugar BRINQUEDOS para festa infantil." },
  { id: 10, nome: "Foto e Vídeo", img: "https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=800", msg: "Olá! Gostaria de orçamento de FOTOGRAFIA para meu evento." },
  { id: 11, nome: "Iluminação", img: "https://som.rio.br/wp-content/uploads/2019/09/concert-852575_1280.jpg", msg: "Olá! Preciso de ILUMINAÇÃO para meu evento." },
  { id: 12, nome: "Mesas e Cadeiras", img: "https://image.portaldacidade.com/unsafe/1200x628/filters:watermark(https://bucket.portaldacidade.com/guides-api/img/watermarks/selo-guiacomercial.png,-0,-0,0)/https://bucket.portaldacidade.com/painel-do-franqueado/img/category_guide/locacao-de-mesas-e-cadeiras-5c6dad79df617.jpg", msg: "Olá! Gostaria de alugar MESAS E CADEIRAS." }
];

export default function HireServices() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white text-black pb-20">
      <main className="pt-32 px-6 max-w-7xl mx-auto text-left">
        <button onClick={() => navigate('/')} className="mb-8 flex items-center gap-2 font-black uppercase italic text-[10px] tracking-widest text-slate-400">
          <ArrowLeft size={16} /> VOLTAR
        </button>
        <header className="mb-16 border-l-8 border-[#00BFA6] pl-8">
          <h1 className="text-5xl lg:text-8xl font-[1000] uppercase italic tracking-tighter leading-[0.85] mb-6">RESERVE SUA <br/><span className="text-[#00BFA6]">EQUIPE.</span></h1>
          <p className="text-lg lg:text-2xl font-bold text-slate-500 uppercase italic tracking-tighter leading-tight max-w-4xl">
            O BORA LÁ encontrou os melhores de Novo Horizonte para você. <span className="text-black block mt-2 underline decoration-[#00BFA6] decoration-4">Escolha o serviço e garanta sua data agora.</span>
          </p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICOS.map((s) => (
            <div key={s.id} onClick={() => window.open(`https://wa.me/${whatsKaren}?text=${encodeURIComponent(s.msg)}`, '_blank')} className="group relative h-[450px] rounded-[45px] overflow-hidden cursor-pointer shadow-2xl border border-black/5 hover:scale-[1.02] transition-all duration-500">
              <img src={s.img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={s.nome} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent"></div>
              <div className="absolute bottom-10 left-8 right-8">
                <h3 className="text-white font-[1000] uppercase italic text-2xl tracking-tighter leading-none mb-6">{s.nome}</h3>
                <div className="flex items-center gap-3 py-4 border-t border-white/10 text-white font-black uppercase italic text-[10px] tracking-widest">
                  <Zap size={14} fill="currentColor" className="text-[#00BFA6]" /> RESERVAR AGORA
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}