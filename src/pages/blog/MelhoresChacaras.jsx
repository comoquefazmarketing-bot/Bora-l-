import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import BlogClusterBanner from '../../components/BlogClusterBanner';

export default function MelhoresChacaras() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white">
      <main className="pt-40 pb-20 px-6 max-w-4xl mx-auto">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-[#00BFA6] font-black uppercase italic tracking-tighter mb-12 hover:gap-4 transition-all">
          <ChevronLeft size={20} /> VOLTAR AO UNIVERSO
        </button>

        <header className="mb-16">
          <span className="bg-slate-900 text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest italic mb-6 inline-block">
            Lazer
          </span>
          <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.85] text-slate-900">
            MELHORES CHÁCARAS EM NOVO HORIZONTE E REGIÃO
          </h1>
        </header>

        <section className="mb-20">
                    <p className="text-xl text-slate-700 leading-relaxed mb-6">
            Novo Horizonte e região consolidaram-se como um polo de lazer de alto padrão, oferecendo opções que vão desde refúgios rústicos até espaços com infraestrutura tecnológica de ponta. Ao procurar a chácara ideal, o primeiro ponto a avaliar é a capacidade logística da área de lazer em relação ao seu grupo. Espaços como o Recanto Top Burguer ou a Chácara São Sebastião são referências por equilibrarem áreas de sombra naturais com zonas de piscina integradas ao espaço gourmet.
          </p>
          <p className="text-xl text-slate-700 leading-relaxed mb-6">
            A infraestrutura de suporte é o que diferencia um lazer relaxante de um evento estressante. Verifique sempre a disponibilidade de freezers, a potência da iluminação para eventos noturnos e, principalmente, a segurança das cercas e portões se houver crianças no grupo. O mercado de NH tem evoluído para oferecer espaços 'plug-and-play', onde o locatário encontra desde utensílios de cozinha completos até sistemas de som bluetooth integrados, facilitando a organização do anfitrião.
          </p>
          <p className="text-xl text-slate-700 leading-relaxed mb-6">
            Por fim, a localização estratégica em relação ao centro de Novo Horizonte influencia diretamente na facilidade de reposição de insumos, como gelo e bebidas. Chácaras localizadas em perímetros de fácil acesso permitem que a logística do 'Bora Lá' funcione com perfeição. Escolher o espaço certo é garantir que o cenário do seu descanso seja tão memorável quanto os momentos vividos nele, elevando o padrão de lazer da nossa região.
          </p>
        </section>
      </main>
      <BlogClusterBanner />
    </div>
  );
}