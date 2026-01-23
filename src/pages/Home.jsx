/* @author Felipe Makarios | Lead Architect - Bora Lá */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, ArrowUpRight, Star, Sparkles } from 'lucide-react';

const areasReais = [
  { id: "top-burguer", nome: "RECANTO TOP BURGUER", cidade: "Novo Horizonte - SP", preco: "330", folder: "area de lazer top burguer" },
  { id: "rancho-paradise", nome: "RANCHO PARADISE BORBOREMA", cidade: "Borborema - SP", preco: "380", folder: "Rancho Paradise Borborema" },
  { id: "sao-sebastiao", nome: "CHÁCARA SÃO SEBASTIÃO", cidade: "Novo Horizonte - SP", preco: "300", folder: "Chácara São Sebastião" },
  { id: "carlos-zara", nome: "ÁREA DE LAZER CARLOS ZARA", cidade: "Novo Horizonte - SP", preco: "600", folder: "Área de lazer Carlos Zara" },
  { id: "recanto-do-sol", nome: "RECANTO PÔR DO SOL", cidade: "Novo Horizonte - SP", preco: "Consultar", folder: "Recanto do Sol" },
  { id: "assolini", nome: "ÁREA DE LAZER ASSOLINI", cidade: "Novo Horizonte - SP", preco: "Consultar", folder: "ÁREA DE LAZER ASSOLINI" }
];

const slidesB2B = [
  {
    dor: "Cansado de gente que só pergunta e não fecha nada?",
    solucao: "Aqui você fala com quem já está com a festa marcada.",
    img: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=1200&auto=format&fit=crop", // Buffet Profissional
    tag: "CLIENTE DE VERDADE"
  },
  {
    dor: "Seu brinquedo parado no galpão é dinheiro perdido.",
    solucao: "A gente te mostra para quem está organizando o evento agora.",
    img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=1200&auto=format&fit=crop", // PULA-PULA / BRINQUEDO (CORRETO)
    tag: "AGENDA CHEIA"
  },
  {
    dor: "Faz a melhor comida da região mas ninguém te acha?",
    solucao: "Apareça no cardápio de quem acabou de alugar a área.",
    img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop", // Churrasco/Comida
    tag: "BUFFET & CHURRASCO"
  },
  {
    dor: "Sua decoração é linda, mas o estoque vive guardado?",
    solucao: "Transforme festas simples em eventos de alto padrão.",
    img: "https://images.unsplash.com/photo-1478146896981-b80fe463b33e?q=80&w=1200&auto=format&fit=crop", // Decoração Premium
    tag: "DECORAÇÃO"
  },
  {
    dor: "Gasta com propaganda e o telefone não toca?",
    solucao: "Esteja no lugar certo, na hora que a festa está saindo.",
    img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop", // Evento Geral
    tag: "NEGÓCIO FECHADO"
  },
  {
    dor: "É DJ ou músico e quer tocar todo final de semana?",
    solucao: "Seja a primeira opção de entretenimento dos nossos usuários.",
    img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop", // DJ/Som
    tag: "SOM & ILUMINAÇÃO"
  }
];

const frasesImpacto = [
  "Quer descansar?",
  "Aquele momento com a família...",
  "Bora fazer aquele churrasco?",
  "O cenário perfeito para o seu fim de semana.",
  "E aí, quem leva a carne?",
  "O lugar ideal para criar memórias reais."
];

export default function Home() {
  const navigate = useNavigate();
  const [indexFrase, setIndexFrase] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const fraseTimer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndexFrase((prev) => (prev + 1) % frasesImpacto.length);
        setFade(true);
      }, 500);
    }, 8000);

    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesB2B.length);
    }, 5000);

    return () => {
      clearInterval(fraseTimer);
      clearInterval(slideTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFCFB] selection:bg-[#00BFA6] pb-0 font-sans text-left">
      {/* HERO SECTION */}
      <section className="hidden lg:grid grid-cols-12 gap-12 max-w-[1440px] mx-auto px-10 pt-16 mb-20 items-center">
        <div className="col-span-5">
          <h1 className="text-[120px] font-black uppercase italic tracking-tighter leading-[0.75] text-slate-900">
            BORA<br/><span className="text-[#00BFA6]">LÁ.</span>
          </h1>
          <div className="h-16 mt-10"> 
            <p className={`text-slate-400 font-bold uppercase text-[13px] tracking-[0.3em] max-w-sm transition-all duration-700 ${fade ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
              {frasesImpacto[indexFrase]}
            </p>
          </div>
        </div>
        <div className="col-span-7 grid grid-cols-3 gap-4 h-[400px]">
          {areasReais.slice(0, 3).map((area) => (
            <div key={area.id} onClick={() => navigate(`/space/${area.id}`)} className="relative group overflow-hidden rounded-[50px] cursor-pointer shadow-2xl bg-slate-100">
              <img src={`/spaces/${area.folder}/foto1.jpg`} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-125" alt={area.nome} />
              <div className="absolute inset-0 bg-[#00BFA6]/40 opacity-0 group-hover:opacity-100 backdrop-blur-md transition-all duration-500 flex items-center justify-center">
                <ArrowUpRight className="text-white" size={40} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VITRINE */}
      <div className="max-w-[1440px] mx-auto px-10 mb-32">
        <h2 className="text-5xl lg:text-8xl font-black uppercase italic tracking-tighter mb-16 text-slate-900">
          LUGARES <span className="text-[#00BFA6]">INCRÍVEIS.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-left">
          {areasReais.map((area) => (
            <div key={area.id} onClick={() => navigate(`/space/${area.id}`)} className="group cursor-pointer">
              <div className="h-[450px] rounded-[60px] overflow-hidden relative shadow-sm border border-black/5 bg-white">
                <img src={`/spaces/${area.folder}/foto1.jpg`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={area.nome} />
                <div className="absolute top-8 left-8 bg-white/90 backdrop-blur px-5 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                  <MapPin size={12} className="text-[#00BFA6]" /> {area.cidade}
                </div>
              </div>
              <div className="mt-8 px-4">
                <h3 className="text-2xl font-black uppercase italic tracking-tighter text-slate-900">{area.nome}</h3>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xl font-black text-[#00BFA6]">{area.preco === "Consultar" ? "Consultar" : `R$ ${area.preco}`}<small className="text-[10px] text-slate-400 tracking-normal ml-2">/ dia</small></span>
                  <div className="flex items-center gap-1 text-yellow-500"><Star size={14} fill="currentColor" /><span className="text-slate-900 text-xs font-black">4.9</span></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BANNER COMERCIAL REFINADO (SEM YOGA!) */}
      <section className="relative w-full h-[550px] overflow-hidden bg-black mt-20">
        {slidesB2B.map((slide, i) => (
          <div 
            key={i}
            className={`absolute inset-0 transition-all duration-[1200ms] ease-in-out flex items-center ${
              currentSlide === i ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
            }`}
          >
            <div className="absolute inset-0">
              <img src={slide.img} className="w-full h-full object-cover opacity-40" alt="" />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
            </div>
            <div className="relative z-10 max-w-[1440px] mx-auto w-full px-10 flex flex-col lg:flex-row justify-between items-center gap-12 text-left">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 bg-[#00BFA6] text-black px-4 py-1 rounded-full mb-8">
                  <Sparkles size={14} fill="black" />
                  <span className="font-black uppercase text-[10px] tracking-[0.2em]">{slide.tag}</span>
                </div>
                <h3 className="text-white text-4xl lg:text-7xl font-black uppercase italic tracking-tighter leading-[0.85] mb-6">
                  {slide.dor}
                </h3>
                <p className="text-[#00BFA6] font-bold uppercase text-lg italic tracking-wider">
                  {slide.solucao}
                </p>
              </div>
              <button 
                onClick={() => navigate('/register-supplier')}
                className="bg-white text-black px-12 py-10 rounded-2xl font-black uppercase italic tracking-tighter text-2xl hover:bg-[#00BFA6] transition-all shadow-2xl active:scale-95 whitespace-nowrap"
              >
                QUERO TRABALHAR MAIS
              </button>
            </div>
          </div>
        ))}
        <div className="absolute bottom-10 left-10 flex gap-2">
          {slidesB2B.map((_, i) => (
            <div key={i} className={`h-1 transition-all duration-500 ${currentSlide === i ? 'w-12 bg-[#00BFA6]' : 'w-4 bg-white/20'}`}></div>
          ))}
        </div>
      </section>

      <footer className="py-20 text-center bg-white border-t border-black/5">
        <p className="text-slate-300 font-black uppercase text-[10px] tracking-[0.5em]">
          BORA LÁ © 2026 | DESIGN BY FELIPE MAKARIOS
        </p>
      </footer>
    </div>
  );
}