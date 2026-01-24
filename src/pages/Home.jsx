
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

    img: "https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=1200&auto=format&fit=crop", 

    tag: "CLIENTE DE VERDADE"

  },

  {

    dor: "Seu brinquedo parado no galpão é dinheiro perdido.",

    solucao: "A gente te mostra para quem está organizando o evento agora.",

    img: "https://babyherois.com.br/wp-content/uploads/2021/02/2021-02-2-como-escolher-o-brinquedo-inflavel-ideal.jpg",

    tag: "AGENDA CHEIA"

  },

  {

    dor: "Gasta com propaganda e o telefone não toca?",

    solucao: "Esteja no lugar certo, na hora que a festa está saindo.",

    img: "https://jobcontent.com.br/wp-content/uploads/2025/09/marketing-que-nao-vende.webp",

    tag: "NEGÓCIO FECHADO"

  },

  {

    dor: "Sua decoração é linda, mas o estoque vive guardado?",

    solucao: "Transforme festas simples em eventos de alto padrão.",

    img: "https://curitifestas.com.br/wp-content/uploads/2023/12/Tema-de-Aniversario-Adulto-10.jpeg",

    tag: "DECORAÇÃO"

  },

  {

    dor: "É DJ ou músico e quer tocar todo final de semana?",

    solucao: "Seja a primeira opção de entretenimento dos nossos usuários.",

    img: "https://centerdebutantes.com.br/wp-content/uploads/2024/02/banda-ou-dj.jpg",

    tag: "SOM & ILUMINAÇÃO"

  },

  {

    dor: "Faz a melhor comida da região mas ninguém te acha?",

    solucao: "Apareça no cardápio de quem acabou de alugar a área.",

    img: "https://static.wixstatic.com/media/83cfc1_149a62893c7244c791c1d7c7f1f7da47~mv2.jpeg",

    tag: "BUFFET & CHURRASCO"

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

    }, 10000);



    return () => {

      clearInterval(fraseTimer);

      clearInterval(slideTimer);

    };

  }, []);



  return (

    <div className="min-h-screen bg-[#FDFCFB] selection:bg-[#00BFA6] pb-0 font-sans text-left">

      <section className="hidden lg:grid grid-cols-12 gap-12 max-w-[1440px] mx-auto px-10 pt-16 mb-20 items-center">

        <div className="col-span-5 text-left">

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



      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 mb-20 lg:mb-32">

        <h2 className="text-4xl lg:text-8xl font-black uppercase italic tracking-tighter mb-10 lg:mb-16 text-slate-900 text-left">

          LUGARES <span className="text-[#00BFA6]">INCRÍVEIS.</span>

        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">

          {areasReais.map((area) => (

            <div key={area.id} onClick={() => navigate(`/space/${area.id}`)} className="group cursor-pointer">

              <div className="h-[350px] lg:h-[450px] rounded-[40px] lg:rounded-[60px] overflow-hidden relative shadow-sm border border-black/5 bg-white text-left">

                <img src={`/spaces/${area.folder}/foto1.jpg`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={area.nome} />

                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2">

                  <MapPin size={10} className="text-[#00BFA6]" /> {area.cidade}

                </div>

              </div>

              <div className="mt-6 px-2 text-left">

                <h3 className="text-xl lg:text-2xl font-black uppercase italic tracking-tighter text-slate-900">{area.nome}</h3>

                <div className="mt-4 flex items-center justify-between">

                  <span className="text-lg lg:text-xl font-black text-[#00BFA6]">{area.preco === "Consultar" ? "Consultar" : `R$ ${area.preco}`}<small className="text-[10px] text-slate-400 tracking-normal ml-2">/ dia</small></span>

                  <div className="flex items-center gap-1 text-yellow-500"><Star size={14} fill="currentColor" /><span className="text-slate-900 text-xs font-black">4.9</span></div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>



      <section className="relative w-full min-h-[500px] lg:h-[550px] overflow-hidden bg-black mt-10">

        {slidesB2B.map((slide, i) => (

          <div 

            key={i}

            className={`absolute inset-0 transition-all duration-[1500ms] ease-in-out flex items-center ${

              currentSlide === i ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'

            }`}

          >

            <div className="absolute inset-0 z-0">

              <img src={slide.img} className="w-full h-full object-cover opacity-70 lg:opacity-60" alt="" />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 lg:bg-gradient-to-r lg:from-black lg:via-black/20 to-transparent"></div>

            </div>

            <div className="relative z-10 max-w-[1440px] mx-auto w-full px-6 lg:px-10 flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-8 lg:gap-12 text-left py-12 lg:py-0">

              <div className="max-w-2xl text-center lg:text-left">

                <div className="inline-flex items-center gap-2 bg-[#00BFA6] text-black px-4 py-1 rounded-full mb-6 lg:mb-8 shadow-xl">

                  <span className="font-black uppercase text-[10px] tracking-[0.2em] flex items-center gap-2">

                    <Sparkles size={14} fill="black" /> {slide.tag}

                  </span>

                </div>

                <h3 className="text-white text-3xl md:text-5xl lg:text-7xl font-black uppercase italic tracking-tighter leading-none mb-4 lg:mb-6 [text-shadow:_0_4px_8px_rgb(0_0_0_/_40%)]">

                  {slide.dor}

                </h3>

                <p className="text-[#00BFA6] font-bold uppercase text-base lg:text-lg italic tracking-wider bg-black/40 inline-block px-2 rounded">

                  {slide.solucao}

                </p>

              </div>

              <button 

                onClick={() => navigate('/register-supplier')}

                className="w-full lg:w-auto bg-white text-black px-8 lg:px-12 py-6 lg:py-10 rounded-2xl font-black uppercase italic tracking-tighter text-xl lg:text-2xl hover:bg-[#00BFA6] hover:text-white transition-all shadow-2xl active:scale-95 whitespace-nowrap"

              >

                QUERO TRABALHAR MAIS

              </button>

            </div>

          </div>

        ))}

      </section>



      <footer className="py-16 lg:py-20 text-center bg-white border-t border-black/5">

        <p className="text-slate-300 font-black uppercase text-[10px] tracking-[0.5em]">

          BORA LÁ © 2026 | DEUS SEJA LOUVADO

        </p>

      </footer>

    </div>

  );

}
