/* @author Felipe Makarios | Lead Architect - Bora Lá v2 */
import React, { useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, Calendar as CalendarIcon, Flame, Menu, Calculator, ArrowLeft, X } from 'lucide-react';

const spacesData = {
  "santa-clara": { nome: "ESPAÇO SANTA CLARA", rua: "Avenida Domingos Baraldo", numero: "875", bairro: "Santa Clara", cidade: "Novo Horizonte - SP", preco: "300", descricao: "Área de lazer ideal para festas familiares e confraternizações.", comodidades: ["Ar Condicionado", "Freezer", "Churrasqueira", "Piscina Aquecida"], folder: "espaco santa clara" },
  "recanto-america": { nome: "RECANTO AMÉRICA", rua: "Rua América", numero: "455", bairro: "Jardim América", cidade: "Novo Horizonte - SP", preco: "300", descricao: "Ambiente reservado e aconchegante para reunir amigos e família.", comodidades: ["Piscina", "Churrasqueira", "Wi-Fi"], folder: "recanto america" },
  "top-burguer": { nome: "RECANTO TOP BURGUER", rua: "Rua Carvalho Leme", numero: "615", bairro: "Centro", cidade: "Novo Horizonte - SP", preco: "330", descricao: "Localização central e lazer completo para seu evento.", comodidades: ["Piscina", "Churrasqueira", "Freezer Vertical"], folder: "area de lazer top burguer" },
  "rancho-paradise": { nome: "RANCHO PARADISE BORBOREMA", rua: "Caminho Turístico", numero: "S/N", bairro: "Orla", cidade: "Borborema - SP", preco: "380", descricao: "Experiência pé na água às margens do Rio Tietê.", comodidades: ["Acesso ao Rio", "Piscina", "Campo de Futebol"], folder: "Rancho Paradise Borborema" },
  "sao-sebastiao": { nome: "CHÁCARA SÃO SEBASTIÃO", rua: "Estrada Municipal", numero: "S/N", bairro: "Rural", cidade: "Novo Horizonte - SP", preco: "300", descricao: "Amplo espaço em meio à natureza.", comodidades: ["Natureza", "Piscina", "Campo de Futebol"], folder: "Chácara São Sebatião" },
  "carlos-zara": { nome: "ÁREA DE LAZER CARLOS ZARA", rua: "Rua Carlos Zara", numero: "100", bairro: "Residencial", cidade: "Novo Horizonte - SP", preco: "600", descricao: "Estrutura premium para eventos exclusivos.", comodidades: ["Premium", "Piscina", "Suítes"], folder: "Área de lazer Carlos Zara" },
  "recanto-do-sol": { nome: "RECANTO PÔR DO SOL", rua: "Avenida Principal", numero: "50", bairro: "Alto", cidade: "Novo Horizonte - SP", preco: "Consultar", descricao: "A melhor vista da cidade para o seu evento.", comodidades: ["Vista Panorâmica", "Piscina", "Deck Gourmet"], folder: "Recanto do Sol" },
  "assolini": { nome: "ÁREA DE LAZER ASSOLINI", rua: "Rua Assolini", numero: "200", bairro: "Centro", cidade: "Novo Horizonte - SP", preco: "Consultar", descricao: "Espaço moderno e funcional no coração da cidade.", comodidades: ["Moderno", "Piscina", "Som Integrado"], folder: "ÁREA DE LAZER ASSOLINI" }
};

export default function SpaceDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dateInputRef = useRef(null);
  const [dataSelecionada, setDataSelecionada] = useState('');
  const [zoomImg, setZoomImg] = useState(null);
  const space = spacesData[id];

  if (!space) return null;

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-left">
      {/* HEADER GLOBAL */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-[100] border-b border-black/5 py-4 px-6 lg:px-12 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/')} className="p-3 bg-black text-white rounded-full hover:scale-110 transition-all"><ArrowLeft size={24} /></button>
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-8 h-8 bg-[#00BFA6] rounded-lg flex items-center justify-center shadow-lg"><Flame size={18} fill="white" stroke="none" /></div>
            <span className="font-black text-xl italic uppercase tracking-tighter">BORA LÁ</span>
          </div>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 flex justify-center w-full pointer-events-none">
            <button onClick={() => window.dispatchEvent(new CustomEvent('openCalc'))} className="pointer-events-auto bg-[#E31C5F] text-white px-8 py-2.5 rounded-full flex items-center gap-3 shadow-lg">
              <span className="text-[10px] font-black uppercase italic tracking-widest">Calculadora de Churrasco</span>
              <div className="bg-white/20 p-1 rounded-md"><Calculator size={14} /></div>
            </button>
        </div>
      </header>

      {/* LIGHTBOX / ZOOM */}
      {zoomImg && (
        <div className="fixed inset-0 z-[10000] bg-black/95 flex items-center justify-center p-4 md:p-10" onClick={() => setZoomImg(null)}>
          <button className="absolute top-10 right-10 text-white"><X size={40} /></button>
          <img src={zoomImg} className="max-w-full max-h-full rounded-2xl shadow-2xl animate-in zoom-in-95 duration-300" />
        </div>
      )}

      {/* GALERIA CLICÁVEL */}
      <div className="pt-28 grid grid-cols-4 grid-rows-2 gap-2 h-[60vh] w-full px-2">
        <div className="col-span-2 row-span-2 overflow-hidden rounded-[40px] border-4 border-white shadow-xl cursor-zoom-in" onClick={() => setZoomImg(`/spaces/${space.folder}/foto1.jpg`)}>
          <img src={`/spaces/${space.folder}/foto1.jpg`} className="w-full h-full object-cover hover:scale-105 transition-all duration-700" />
        </div>
        {[2, 3, 4, 5].map((n) => (
          <div key={n} className="overflow-hidden rounded-[30px] border-4 border-white shadow-lg cursor-zoom-in" onClick={() => setZoomImg(`/spaces/${space.folder}/foto${n}.jpg`)}>
            <img src={`/spaces/${space.folder}/foto${n}.jpg`} className="w-full h-full object-cover hover:scale-110 transition-all duration-700" />
          </div>
        ))}
      </div>

      <main className="max-w-[1440px] mx-auto px-6 lg:px-20 py-16 flex flex-col lg:flex-row gap-20">
        <div className="flex-1">
          <h1 className="text-6xl lg:text-9xl font-black italic uppercase tracking-tighter leading-[0.75] text-slate-900 mb-8">{space.nome}</h1>
          <div className="flex items-center gap-3 text-slate-400 font-bold mb-12 text-xl italic uppercase"><MapPin size={26} className="text-[#00BFA6]" /> {space.rua}, {space.numero} - {space.cidade}</div>
          <div className="bg-white border border-black/5 p-10 rounded-[40px] mb-12 shadow-sm italic text-xl text-slate-600 font-medium leading-relaxed">"{space.descricao}"</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {space.comodidades.map((c, i) => (
              <div key={i} className="bg-white border border-black/5 p-6 rounded-[30px] font-black uppercase italic text-sm flex items-center gap-4">
                <div className="w-3 h-3 bg-[#00BFA6] rounded-full" /> {c}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-[450px]">
          <div className="bg-slate-950 text-white p-10 rounded-[50px] shadow-2xl sticky top-32 border border-white/10">
            <div className="flex items-baseline justify-between mb-8 border-b border-white/5 pb-8">
              <span className="text-6xl font-black italic text-[#00BFA6] tracking-tighter">{space.preco === 'Consultar' ? 'CONSULTAR' : `R$ ${space.preco}`}</span>
              <span className="text-white/30 font-bold uppercase text-[10px] ml-2">/ Diária</span>
            </div>
            
            <div className="mb-8 cursor-pointer bg-white/5 p-6 rounded-[30px] border border-white/10 relative" onClick={() => dateInputRef.current.showPicker()}>
              <label className="text-[9px] uppercase font-black tracking-[0.3em] text-[#00BFA6] block mb-2">QUANDO É O BORA LÁ?</label>
              <div className="flex items-center justify-between font-black text-xl italic uppercase">
                {dataSelecionada ? dataSelecionada.split('-').reverse().join('/') : 'SELECIONE A DATA'} <CalendarIcon size={20} className="text-[#00BFA6]" />
              </div>
              <input ref={dateInputRef} type="date" onChange={(e) => setDataSelecionada(e.target.value)} className="absolute inset-0 opacity-0 cursor-pointer" style={{ colorScheme: 'dark' }} />
            </div>

            <button onClick={() => window.open(`https://wa.me/5517992376515?text=Olá! Vi o ${space.nome} no App Bora Lá...`, '_blank')} className="w-full bg-[#00BFA6] text-black py-8 rounded-[30px] font-black uppercase italic text-2xl hover:bg-white transition-all shadow-xl active:scale-95">RESERVAR AGORA</button>
          </div>
        </div>
      </main>
    </div>
  );
}