import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Flame, Scale, Users } from 'lucide-react';
import BlogClusterBanner from '../../components/BlogClusterBanner';

export default function GuiaPicanha() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white pt-40 pb-20 px-6">
      <article className="max-w-4xl mx-auto">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-[#00BFA6] font-black uppercase italic mb-12"><ChevronLeft size={20} /> VOLTAR</button>
        <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter mb-12 leading-none">O GUIA DA <span className="text-[#00BFA6]">PICANHA</span></h1>
        <div className="space-y-8 text-xl text-slate-700 leading-relaxed">
          <p>A picanha é a estrela incontestável do churrasco brasileiro, mas o sucesso para 20 pessoas exige precisão técnica. Selecionar peças de 1.1kg é o primeiro passo para garantir que você não leve coxão duro pelo preço de picanha.</p>
          <p>O cálculo ideal prevê 450g de proteína por adulto. Para o seu grupo, 3.5kg de picanha premium, acompanhados de linguiça e fraldinha, criam o equilíbrio perfeito entre sofisticação e saciedade sem desperdício.</p>
          <p>O segredo final está no descanso: aguardar 3 minutos após o fogo permite que os sucos se redistribuam, garantindo a suculência que é a marca registrada do Universo Bora Lá.</p>
        </div>
      </article>
      <BlogClusterBanner />
    </div>
  );
}