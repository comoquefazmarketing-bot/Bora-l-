import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import BlogClusterBanner from '../../components/BlogClusterBanner';

export default function DescansoFamilia() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white">
      <main className="pt-40 pb-20 px-6 max-w-4xl mx-auto">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-[#00BFA6] font-black uppercase italic tracking-tighter mb-12 hover:gap-4 transition-all">
          <ChevronLeft size={20} /> VOLTAR AO UNIVERSO
        </button>

        <header className="mb-16">
          <span className="bg-slate-900 text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest italic mb-6 inline-block">
            Estilo de Vida
          </span>
          <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.85] text-slate-900">
            DESCANSO E FÉRIAS: COMO ORGANIZAR O LAZER EM FAMÍLIA
          </h1>
        </header>

        <section className="mb-20">
                <p className="text-xl text-slate-700 leading-relaxed mb-6">
        Organizar o lazer em família exige um planejamento que contemple todas as gerações, desde o espaço seguro para os pequenos até o conforto necessário para os mais velhos. O descanso real só acontece quando a logística está resolvida antecipadamente, permitindo que os momentos de conexão não sejam interrompidos por imprevistos evitáveis. Definir um cronograma flexível é a chave para que o lazer não se torne uma obrigação, mas uma extensão do bem-estar familiar.
      </p>
      <p className="text-xl text-slate-700 leading-relaxed mb-6">
        A escolha do ambiente deve priorizar a versatilidade. Áreas de lazer que oferecem opções de entretenimento variadas — como piscinas climatizadas, campos de futebol e áreas de jogos cobertas — garantem que o descanso continue independentemente das condições climáticas. Além disso, a divisão de tarefas na organização do churrasco ou das refeições é um pilar comercial do backoffice doméstico: quando todos colaboram, o lazer é democratizado e o descanso é efetivo para todos.
      </p>
      <p className="text-xl text-slate-700 leading-relaxed mb-6">
        Encerrar um período de férias ou um final de semana com a sensação de renovação é o objetivo do Universo Bora Lá. Investir tempo na escolha certa do local e na preparação dos detalhes é o que transforma uma simples viagem em uma tradição familiar. Em Novo Horizonte, temos o privilégio de contar com cenários ideais para construir essas memórias, reforçando a importância de pausar a rotina para valorizar o que realmente importa: o tempo de qualidade juntos.
      </p>
        </section>
      </main>
      <BlogClusterBanner />
    </div>
  );
}