/* @author Felipe Makarios | Creator - BORA LÁ */
import React from "react";
import { Flame, CheckCircle2, Calendar, Phone, Users, Rocket, ArrowRight } from "lucide-react";

export default function BlogManifesto() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white font-sans selection:bg-[#c4a457] selection:text-black">
      {/* HEADER DO ARTIGO */}
      <header className="relative py-20 px-6 overflow-hidden bg-gradient-to-b from-[#242424] to-[#1a1a1a]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#c4a457]/10 border border-[#c4a457]/20 px-4 py-2 rounded-full mb-6 text-[#c4a457]">
            <Rocket size={16} />
            <span className="text-xs font-black uppercase tracking-[0.3em]">Manifesto BORA LÁ</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter mb-6 uppercase">
            Como o BORA LÁ facilita o <span className="text-[#c4a457]">planejamento</span> do seu evento
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-medium max-w-2xl mx-auto italic">
            "Transformando a organização de eventos de algo subjetivo e disperso em uma experiÃªncia moderna e eficiente."
          </p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 pb-24 space-y-16">
        
        {/* SEÃ‡ÃƒO 01: CATÃLOGO */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 text-[#c4a457] mb-2">
            <CheckCircle2 size={24} />
            <h2 className="text-2xl font-black uppercase italic">Catálogo completo de espaços</h2>
          </div>
          <p className="text-gray-300 leading-relaxed text-lg">
            Com o BORA LÁ, você encontra diversas áreas de lazer catalogadas com imagens, localizaçÃµes, preços e comodidades em um só lugar. Isso significa:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {['Comparar opçÃµes rapidamente', 'Ver informaçÃµes detalhadas sem perguntar', 'Economizar tempo na escolha ideal'].map((item, i) => (
              <li key={i} className="bg-[#242424] p-4 rounded-xl border-l-4 border-[#c4a457] text-sm font-bold uppercase italic">
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* SEÃ‡ÃƒO 02: DISPONIBILIDADE */}
        <section className="bg-[#242424] p-8 rounded-[2rem] border border-white/5 shadow-2xl">
          <div className="flex items-center gap-3 text-[#c4a457] mb-4">
            <Calendar size={24} />
            <h2 className="text-2xl font-black uppercase italic">Disponibilidade em tempo real</h2>
          </div>
          <p className="text-gray-300 leading-relaxed text-lg">
            Em vez de perguntar para cada proprietário se a data desejada está disponÃ­vel, o BORA LÁ permite que você consulte datas diretamente no app â€” tudo organizado e padronizado.
          </p>
        </section>

        {/* SEÃ‡ÃƒO 03: COMUNICAÃ‡ÃƒO */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 text-[#c4a457] mb-2">
            <Phone size={24} />
            <h2 className="text-2xl font-black uppercase italic">Comunicação mais eficiente</h2>
          </div>
          <p className="text-gray-300 leading-relaxed text-lg">
            Depois de escolher o local e configurar seu evento, você pode entrar em contato direto com o proprietário ou fornecedores através de <strong>mensagens prontas</strong>, otimizando a comunicação.
          </p>
        </section>

        {/* SEÃ‡ÃƒO 04: SERVIÃ‡OS */}
        <section className="border-t border-white/10 pt-12 space-y-6">
          <div className="flex items-center gap-3 text-[#c4a457]">
            <Flame size={24} fill="currentColor" />
            <h2 className="text-2xl font-black uppercase italic">Conectando serviços complementares</h2>
          </div>
          <p className="text-gray-300 leading-relaxed text-lg">
            O seu evento planejado do começo ao fim com parceiros locais que já entendem o seu propósito:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['DJs e MÃºsicos', 'Buffet', 'Decoração', 'Gelo e Bebidas'].map((s) => (
              <div key={s} className="bg-[#151515] p-3 text-center rounded-lg border border-white/5 text-[10px] font-black uppercase tracking-widest">
                {s}
              </div>
            ))}
          </div>
        </section>

        {/* SEÃ‡ÃƒO 05: UTILIDADE */}
        <section className="space-y-8">
          <div className="flex items-center gap-3 text-[#c4a457]">
            <Users size={24} />
            <h2 className="text-2xl font-black uppercase italic">Uma ferramenta Ãºtil para todos</h2>
          </div>
          <div className="space-y-3">
             {[
               { t: 'Usuários finais', d: 'Planejam eventos com facilidade' },
               { t: 'Proprietários', d: 'Ganham visibilidade e reservas qualificadas' },
               { t: 'Fornecedores', d: 'Recebem pedidos diretos e relevantes' },
               { t: 'Turismo local', d: 'Favorece a economia criativa' }
             ].map(i => (
               <div key={i.t} className="flex justify-between items-center p-4 bg-[#1a1a1a] border-b border-white/5 group hover:bg-[#242424] transition-all">
                  <span className="font-black italic uppercase text-[#c4a457]">{i.t}</span>
                  <span className="text-gray-500 text-xs font-bold uppercase tracking-tighter">{i.d}</span>
               </div>
             ))}
          </div>
        </section>

        {/* CONCLUSÃO E CTA */}
        <footer className="pt-16 border-t border-[#c4a457]/30 text-center space-y-10">
          <div className="space-y-4">
            <h2 className="text-3xl font-black italic uppercase">O jeito moderno de organizar lazer</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Se você quer planejar um evento sem complicação ou oferecer seus serviços para quem já está no momento de decidir, o BORA LÁ é a solução que veio para ficar.
            </p>
          </div>
          
          <button onClick={() => window.open('https://bora-la.vercel.app', '_blank')} 
            className="group relative inline-flex items-center gap-4 bg-[#c4a457] text-black px-10 py-5 rounded-full font-black uppercase italic text-xl hover:scale-105 transition-all active:scale-95 shadow-[0_20px_40px_-10px_rgba(196,164,87,0.4)]"
          >
            Usar Calculadora de Churrasco
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </button>
          
          <p className="text-gray-600 font-mono text-xs uppercase tracking-[0.5em] pt-10">
            Criado por Felipe Makarios • Novo Horizonte/SP
          </p>
        </footer>
      </main>
    </div>
  );
}