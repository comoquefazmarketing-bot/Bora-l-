/* @author Felipe Makarios | Lead Architect - BORA LÁ */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, Minus, HelpCircle, MessageCircle, Sparkles, ShieldCheck } from 'lucide-react';

const faqs = [
  {
    q: "Como faço para reservar uma área de lazer?",
    a: "É simples: navegue pelas opções, escolha a sua favorita e clique no botão do WhatsApp. Você falará diretamente com o responsável ou com a Karen (nossa central). Não cobramos taxas extras de intermediação."
  },
  {
    q: "O pagamento é feito pelo aplicativo?",
    a: "Não. O BORA LÁ funciona como uma vitrine de elite. O pagamento e as condições de contrato são combinados diretamente entre você e o proprietário, garantindo total liberdade e o melhor preço sem taxas de app."
  },
  {
    q: "Posso visitar a chácara antes de alugar?",
    a: "Com certeza! Recomendamos sempre que, ao falar com o proprietário pelo WhatsApp, você agende uma visita rápida para conhecer o local e tirar suas dúvidas pessoalmente antes de efetuar o depósito."
  },
  {
    q: "E se eu precisar cancelar a reserva?",
    a: "Cada proprietário possui sua própria política de cancelamento e devolução. Sugerimos que você pergunte sobre essas regras no momento do fechamento para evitar surpresas."
  },
  {
    q: "As fotos do site são reais?",
    a: "Sim! Fazemos uma curadoria manual. Se identificarmos que um local não condiz com as fotos, ele é imediatamente removido da nossa plataforma para manter o selo de qualidade BORA LÁ."
  },
  {
    q: "Quero ser um parceiro comercial (Buffet, DJ, etc), como faço?",
    a: "Clique em 'Seja um Parceiro' no menu lateral. Nossa comercial Karen avaliará seu perfil. Buscamos profissionais que entregam um serviço de excelência em Novo Horizonte e região."
  },
  {
    q: "O BORA LÁ cobra para anunciar?",
    a: "Temos diferentes modelos de parceria, desde planos gratuitos até destaques premium. Fale com a Karen para entender qual o melhor formato para o seu negócio brilhar."
  },
  {
    q: "Como a Calculadora de Churrasco ajuda no meu evento?",
    a: "Ela foi criada pelo Felipe para evitar desperdício. Baseado no número de pessoas, ela te dá a lista exata de carnes, bebidas e acompanhamentos, ajudando você a economizar e não deixar ninguém com fome."
  }
];

export default function FAQ() {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6 selection:bg-[#00BFA6] selection:text-white">
      <div className="max-w-4xl mx-auto">
        
        <header className="mb-20">
          <button onClick={() => navigate('/')} className="flex items-center gap-2 font-black uppercase text-[10px] tracking-widest text-slate-400 mb-8 hover:text-[#00BFA6] transition-colors">
            <ArrowLeft size={16} /> Voltar para a Home
          </button>
          
          <div className="flex items-center gap-2 text-[#00BFA6] mb-4 font-black uppercase italic text-[10px] tracking-[0.4em]">
            <ShieldCheck size={16} fill="currentColor" /> Segurança & Transparência
          </div>
          
          <h1 className="text-5xl md:text-8xl font-[1000] uppercase italic tracking-tighter leading-[0.85] text-slate-900">
            VOCÊ PERGUNTA, <br/>
            <span className="text-[#00BFA6]">A GENTE RESPONDE.</span>
          </h1>
        </header>

        <div className="grid gap-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={`border-2 rounded-[40px] transition-all duration-500 ${openIndex === i ? 'border-[#00BFA6] bg-slate-50 shadow-xl shadow-slate-100' : 'border-slate-100 bg-white hover:border-slate-200'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-8 md:p-10 flex items-center justify-between text-left"
              >
                <span className="font-[1000] uppercase italic text-sm md:text-lg tracking-tight text-slate-900 pr-4">
                  {faq.q}
                </span>
                <div className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center transition-all ${openIndex === i ? 'bg-[#00BFA6] text-white rotate-180' : 'bg-slate-100 text-slate-400'}`}>
                  {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 ${openIndex === i ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-10 pb-10">
                  <p className="text-slate-500 font-bold uppercase text-[11px] md:text-xs leading-relaxed tracking-wide border-t border-slate-200 pt-6">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 p-16 bg-slate-900 rounded-[60px] text-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-10 opacity-5 text-white group-hover:scale-110 transition-transform duration-1000">
             <HelpCircle size={200} />
          </div>
          
          <div className="relative z-10">
            <Sparkles className="text-[#00BFA6] mx-auto mb-6" size={32} />
            <h3 className="text-4xl font-[1000] uppercase italic text-white mb-6">Ainda tem dúvidas?</h3>
            <p className="text-slate-400 font-bold uppercase text-[10px] tracking-[0.3em] mb-10 max-w-md mx-auto leading-relaxed">
              Não fique na dúvida. Nossa assistente Karen está pronta para te atender agora.
            </p>
            <button 
              onClick={() => window.open('https://wa.me/5511933515087?text=Olá Karen, tenho uma dúvida específica sobre o Bora Lá!', '_blank')}
              className="bg-[#00BFA6] text-white px-12 py-6 rounded-full font-black uppercase italic text-sm hover:scale-105 transition-all shadow-xl flex items-center gap-3 mx-auto"
            >
              <MessageCircle size={20} /> Conversar com a Karen
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}