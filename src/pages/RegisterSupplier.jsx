/* @author Felipe Makarios | Lead Architect - BORA LÁ */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const whatsComercial = "5517988031679";

const CATEGORIAS = [
  { id: 1, nome: "Dono de Área", img: "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=800", msg: "Olá! Tenho uma área de lazer e quero anunciar no BORA LÁ." },
  { id: 2, nome: "Churrasqueiro", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800", msg: "Olá! Sou churrasqueiro e quero ser um parceiro BORA LÁ." },
  { id: 3, nome: "DJ e Som", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800", msg: "Olá! Trabalho com som/DJ e quero anunciar no BORA LÁ." },
  { id: 4, nome: "Garçons", img: "https://www.clean-house-sp.com.br/imagens/informacoes/servicos-garcons-festas-sp-01.webp", msg: "Olá! Tenho equipe de garçons e quero ser parceiro." },
  { id: 5, nome: "Buffet", img: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800", msg: "Olá! Tenho Buffet e quero entrar para o site." },
  { id: 6, nome: "Limpeza", img: "https://whiteningmultiservicos.com.br/wp-content/uploads/2024/06/2024-06-20-limpeza-pos-festa-802x506.jpg", msg: "Olá! Trabalho com limpeza e quero ser parceiro." },
  { id: 7, nome: "Barman", img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800", msg: "Olá! Sou Barman e quero anunciar meus serviços." },
  { id: 8, nome: "Segurança", img: "https://prevencaoseguranca.com.br/wp-content/uploads/2025/01/eventos1.jpg", msg: "Olá! Ofereço segurança para festas e quero anunciar." },
  { id: 9, nome: "Decoração", img: "https://greenpallaceeventos.com.br/wp-content/uploads/2023/05/Ideias-criativas-para-festas-tematicas-720x484.jpeg", msg: "Olá! Sou decorador(a) e quero entrar no BORA LÁ." },
  { id: 10, nome: "Brinquedos", img: "https://babyeventos.com.br/wp-content/uploads/2023/02/aluguel-de-brinquedos-para-festa-baby-eventos.jpg", msg: "Olá! Alugo brinquedos e quero ser um parceiro." },
  { id: 11, nome: "Foto e Vídeo", img: "https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=800", msg: "Olá! Sou fotógrafo e quero anunciar meu trabalho." },
  { id: 12, nome: "Aluguel de Mesas", img: "https://image.portaldacidade.com/unsafe/1200x628/filters:watermark(https://bucket.portaldacidade.com/guides-api/img/watermarks/selo-guiacomercial.png,-0,-0,0)/https://bucket.portaldacidade.com/painel-do-franqueado/img/category_guide/locacao-de-mesas-e-cadeiras-5c6dad79df617.jpg", msg: "Olá! Alugo mesas e materiais para festas." }
];

export default function RegisterSupplier() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white text-black pb-20">
      <main className="pt-32 px-6 max-w-7xl mx-auto text-left">
        <button onClick={() => navigate('/')} className="mb-8 flex items-center gap-2 font-black uppercase italic text-[10px] tracking-widest text-slate-400">
          <ArrowLeft size={16} /> VOLTAR
        </button>
        <header className="mb-16">
          <h1 className="text-5xl lg:text-8xl font-[1000] uppercase italic tracking-tighter leading-[0.85] mb-6 text-left">QUER <span className="text-[#00BFA6]">ANUNCIAR?</span></h1>
          <p className="text-lg lg:text-2xl font-bold text-slate-500 uppercase italic tracking-tighter leading-tight max-w-xl text-left border-l-4 border-[#00BFA6] pl-6">
            Sua agenda cheia começa aqui. <span className="text-black">Escolha sua categoria e entre para a maior vitrine de Novo Horizonte.</span>
          </p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIAS.map((p) => (
            <div key={p.id} onClick={() => window.open(`https://wa.me/${whatsComercial}?text=${encodeURIComponent(p.msg)}`, '_blank')}
              className="group relative h-[450px] rounded-[45px] overflow-hidden cursor-pointer shadow-2xl border border-black/5 hover:scale-[1.02] transition-all duration-500">
              <img src={p.img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={p.nome} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent"></div>
              <div className="absolute bottom-10 left-8 right-8 text-left">
                <h3 className="text-white font-[1000] uppercase italic text-2xl tracking-tighter leading-none mb-6">{p.nome}</h3>
                <div className="flex items-center justify-between py-4 border-t border-white/10 text-white font-black uppercase italic text-[10px] tracking-widest group-hover:text-[#00BFA6] transition-colors">
                  QUERO APARECER AQUI <ArrowRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}