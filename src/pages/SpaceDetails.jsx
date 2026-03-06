/* @author Felipe Makarios | Lead Architect - BORA LÁ v4.7 */
import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  MapPin, ArrowLeft, Calendar, MessageCircle, 
  Grid, X, Info, CheckCircle2 
} from 'lucide-react';

const spacesData = {
  "top-burguer": { 
    nome: "RECANTO TOP BURGUER", folder: "area de lazer top burguer", preco: "330", whats: "5517991178961", cap: "50", fotos: 5,
    endereco: "Rua Manoel Neves, 969 - Pq. dos Ipês (Atrás do Clube da Usina Estiva)",
    desc: "Espaço completo com foco em conforto e lazer térmico no coração de NH.",
    itens: ["10 Mesas de Madeira", "40 Cadeiras", "TV LED Smart", "Internet Wi-Fi", "Piscina com Aquecimento Solar", "2 Freezers", "Geladeira", "Fogão + Gás"],
    tabela: "01 dia: R$ 330 | 02 dias: R$ 600 | 03 dias: R$ 800"
  },
  "rancho-paradise": { 
    nome: "RANCHO PARADISE", folder: "Rancho Paradise Borborema", preco: "380", whats: "5517992376515", cap: "25", fotos: 4,
    endereco: "Condomínio Village Tietê - Borborema/SP",
    desc: "Ideal para pesca e lazer náutico em ambiente familiar.",
    itens: ["Acesso ao Rio", "Área de Churrasco", "Piscina", "Cozinha Montada", "Estacionamento"],
    tabela: "Diária: R$ 380,00"
  },
  "sao-sebastiao": { 
    nome: "CHÁCARA SÃO SEBASTIÃO", folder: "chacara sao sebastiao", preco: "300", whats: "5517992376515", cap: "120", fotos: 4,
    endereco: "Setor de Chácaras - Novo Horizonte/SP",
    desc: "Amplo espaço para grandes eventos, casamentos e confraternizações corporativas.",
    itens: ["Amplo Salão", "Estacionamento Interno", "Área Verde", "Cozinha Industrial", "Churrasqueira Grande"],
    tabela: "Diária: R$ 300,00"
  },
  "carlos-zara": { 
    nome: "ÁREA DE LAZER CARLOS ZARA", folder: "Área de lazer Carlos Zara", preco: "600", whats: "5517992376515", cap: "100", fotos: 4,
    endereco: "Novo Horizonte/SP",
    desc: "Estrutura premium para festas inesquecíveis e grandes grupos.",
    itens: ["Piscina Grande", "Área Gourmet", "Freezer", "Mesas e Cadeiras", "Espaço Amplo"],
    tabela: "Diária: R$ 600,00"
  },
  "santa-clara": { 
    nome: "ESPAÇO SANTA CLARA", folder: "espaco santa clara", preco: "300", whats: "5517992376515", cap: "60", fotos: 3,
    endereco: "Novo Horizonte/SP",
    desc: "Conforto e praticidade para sua família e amigos.",
    itens: ["Churrasqueira", "Piscina", "Cozinha", "Banheiros"],
    tabela: "Diária: R$ 300,00"
  },
  "recanto-america": { 
    nome: "RECANTO AMÉRICA", folder: "recanto america", preco: "300", whats: "5517992376515", cap: "50", fotos: 3,
    endereco: "Novo Horizonte/SP",
    desc: "Ótima localização e área de lazer completa para o final de semana.",
    itens: ["Área de Lazer", "Piscina", "Churrasqueira", "Geladeira"],
    tabela: "Diária: R$ 300,00"
  },
  "por-do-sol": { 
    nome: "RECANTO PÔR DO SOL", folder: "Recanto do Sol", preco: "Consulte", whats: "5517992376515", cap: "80", fotos: 3,
    endereco: "Novo Horizonte/SP",
    desc: "Vista privilegiada e ambiente relaxante para sua comemoração.",
    itens: ["Piscina", "Churrasqueira", "Amplo Espaço", "Cozinha"],
    tabela: "Consulte valores via WhatsApp"
  },
  "assolini": { 
    nome: "ÁREA DE LAZER ASSOLINI", folder: "ÁREA DE LAZER ASSOLINI", preco: "Consulte", whats: "5517992376515", cap: "100", fotos: 3,
    endereco: "Novo Horizonte/SP",
    desc: "Espaço amplo com excelente infraestrutura para seu evento.",
    itens: ["Área Coberta", "Piscina", "Churrasqueira", "Mesas"],
    tabela: "Consulte disponibilidade"
  },
  "flamboyant": { 
    nome: "RECANTO FLAMBOYANT", folder: "area de lazer flamboyant", preco: "Consulte", whats: "5511934402804", cap: "40", fotos: 6,
    endereco: "Novo Horizonte/SP (5 min do centro)",
    desc: "Espaço aconchegante com dormitório, ideal para pequenos grupos.",
    itens: ["1 Dormitório (4 pessoas)", "Fogão a Gás e Lenha", "Mesas e Cadeiras", "2 Banheiros"],
    tabela: "Valores sob consulta"
  },
  "morada-sol": { 
    nome: "MORADA DO SOL", folder: "area de lazer morada do sol", preco: "350", whats: "5517991338266", cap: "45", fotos: 5,
    endereco: "Novo Horizonte/SP",
    desc: "Perfeita para descanso em família. Proibido festas abertas ao público.",
    itens: ["Cozinha Equipada", "Ambiente Seguro", "Piscina", "Regras de Silêncio"],
    tabela: "Diária: R$ 350,00"
  },
  "club-fest": { 
    nome: "CLUB FEST SOLAREMAX", folder: "area de lazer e conforto club fest solaremax", preco: "500", whats: "5517991988003", cap: "100", fotos: 8,
    endereco: "Novo Horizonte/SP",
    desc: "Privacidade total sem vizinhos ao redor e piscina aquecida.",
    itens: ["Piscina Aquecida", "Rede de Biribol", "Churrasqueira", "Amplo Estacionamento", "Camas"],
    tabela: "Diária: R$ 500,00"
  },
  "lopes-eventos": { 
    nome: "LOPES EVENTOS", folder: "lopes eventos", preco: "Consulte", whats: "5517997394107", cap: "100+", fotos: 7,
    endereco: "Novo Horizonte/SP",
    desc: "Área diferenciada com lindo quiosque para noivados e festas amplas.",
    itens: ["1 Quarto", "Fogão Industrial", "2 Churrasqueiras", "Lindo Quiosque", "Ilha com 2 Pias"],
    tabela: "Eventos Grandes - Consulte"
  }
};

export default function SpaceDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const space = spacesData[id];
  const [showGallery, setShowGallery] = useState(false);
  const [dataSelecionada, setDataSelecionada] = useState('');
  const dateInputRef = useRef(null);

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!space) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center font-black p-10 bg-white">
        <h2 className="text-4xl italic tracking-tighter mb-8 text-slate-200">Área não integrada</h2>
        <button onClick={() => navigate('/')} className="bg-black text-white px-10 py-4 rounded-full text-xs uppercase italic">Voltar ao Início</button>
      </div>
    );
  }

  const getImg = (n) => `/spaces/${space.folder}/foto${n}.webp`;
  const fallbackImg = (e) => { e.target.src = e.target.src.replace('.webp', '.jpg'); };

  return (
    <div className="min-h-screen bg-white text-slate-900 pb-20 selection:bg-[#00BFA6] selection:text-white font-sans">
      {/* MODAL GALERIA AIRBNB */}
      {showGallery && (
        <div className="fixed inset-0 z-[1000] bg-white overflow-y-auto animate-in slide-in-from-bottom duration-500">
          <div className="max-w-5xl mx-auto p-6">
            <div className="flex justify-between items-center mb-12 sticky top-0 bg-white/90 py-6 backdrop-blur-md z-10 border-b">
              <button onClick={() => setShowGallery(false)} className="bg-black text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all"><X size={24} /></button>
              <h2 className="text-2xl font-black uppercase italic tracking-tighter">{space.nome}</h2>
            </div>
            <div className="grid grid-cols-1 gap-8">
              {[...Array(space.fotos)].map((_, i) => (
                <img key={i} src={getImg(i+1)} onError={fallbackImg} className="w-full rounded-[40px] shadow-2xl" alt="" />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* NAV FIXA */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-black/5 px-6 py-4 flex justify-between items-center">
        <button onClick={() => navigate('/')} className="font-black uppercase italic text-[10px] flex items-center gap-2 hover:text-[#00BFA6] transition-colors">
          <ArrowLeft size={16} /> Voltar
        </button>
        <div className="flex items-center gap-2 font-black italic text-xl uppercase tracking-tighter">
          <span className="text-[#00BFA6]">BORA</span>LÁ.
        </div>
      </nav>

      <main className="pt-24 px-4 md:px-8 max-w-[1440px] mx-auto">
        {/* GRID PREMIUM 5 FOTOS */}
        <div className="relative group cursor-pointer mb-12 h-[450px] md:h-[650px] rounded-[50px] overflow-hidden bg-slate-100 shadow-2xl" onClick={() => setShowGallery(true)}>
          <div className="grid grid-cols-4 grid-rows-2 gap-2 h-full">
            <div className="col-span-4 md:col-span-2 row-span-2 overflow-hidden">
              <img src={getImg(1)} onError={fallbackImg} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]" />
            </div>
            {[2, 3, 4, 5].map((n) => (
              <div key={n} className="hidden md:block overflow-hidden relative border-l-2 border-white/10">
                <img src={getImg(n <= space.fotos ? n : 1)} onError={fallbackImg} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
              </div>
            ))}
          </div>
          <button className="absolute bottom-10 right-10 bg-white border border-black/10 px-8 py-4 rounded-3xl font-black uppercase italic text-xs flex items-center gap-3 shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:bg-black hover:text-white transition-all">
            <Grid size={18} className="text-[#00BFA6]" /> Ver {space.fotos} fotos
          </button>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <h1 className="text-6xl md:text-9xl font-[1000] uppercase italic tracking-tighter leading-[0.8] mb-8">{space.nome}</h1>
            <div className="flex items-center gap-2 text-[#00BFA6] font-black uppercase text-xs tracking-widest mb-12">
              <MapPin size={16} /> {space.endereco}
            </div>

            <div className="bg-slate-50 p-12 rounded-[60px] border border-black/5 mb-12 shadow-sm">
               <h3 className="font-black uppercase italic mb-8 flex items-center gap-3 text-slate-400">
                 <Info size={22} /> Acomodações & Estrutura
               </h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {space.itens.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-slate-800 font-bold uppercase text-xs tracking-tight">
                       <CheckCircle2 size={20} className="text-[#00BFA6]" /> {item}
                    </div>
                  ))}
               </div>
            </div>

            <p className="text-3xl text-slate-400 font-medium leading-tight border-l-8 border-[#00BFA6] pl-10 italic">"{space.desc}"</p>
          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-32 bg-white rounded-[70px] p-12 shadow-[0_60px_120px_-20px_rgba(0,0,0,0.2)] border border-black/5">
              <div className="text-center mb-10">
                <p className="text-[10px] font-black uppercase text-slate-300 tracking-[5px] mb-4">Investimento</p>
                <div className="text-8xl font-[1000] italic tracking-tighter text-black leading-none">
                   {space.preco === "Consulte" ? "SOB CONSULTA" : `R$ ${space.preco}`}
                </div>
                <div className="mt-6 inline-block bg-[#00BFA6]/10 text-[#00BFA6] px-6 py-2 rounded-full font-black uppercase italic text-xs tracking-tighter">
                  {space.tabela}
                </div>
              </div>

              <div onClick={() => dateInputRef.current?.showPicker()} className="group bg-slate-50 p-10 rounded-[45px] border border-black/5 hover:border-[#00BFA6] transition-all cursor-pointer relative mb-8">
                  <p className="text-[10px] font-black uppercase text-slate-400 group-hover:text-[#00BFA6] tracking-widest">Selecione a Data</p>
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-3xl font-black italic uppercase">
                      {dataSelecionada ? new Date(dataSelecionada).toLocaleDateString('pt-BR') : "QUANDO?"}
                    </span>
                    <Calendar className="text-slate-300 group-hover:text-[#00BFA6]" size={28} />
                  </div>
                  <input type="date" ref={dateInputRef} onChange={(e) => setDataSelecionada(e.target.value)} className="absolute inset-0 opacity-0 cursor-pointer" />
              </div>

              <button 
                onClick={() => window.open(`https://wa.me/${space.whats}?text=Olá! Vi no Bora Lá e gostaria de reservar o ${space.nome}${dataSelecionada ? ' para o dia ' + new Date(dataSelecionada).toLocaleDateString('pt-BR') : ''}`)}
                className="w-full bg-black hover:bg-[#00BFA6] text-white py-12 rounded-[50px] font-[1000] uppercase italic text-4xl shadow-2xl active:scale-95 transition-all flex items-center justify-center gap-4 group"
              >
                <MessageCircle size={32} className="group-hover:rotate-12 transition-transform" /> Reservar
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}