/* @author Felipe Makarios | Lead Architect - Bora Lá */
import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, ArrowLeft, Camera, CheckCircle2, ShieldCheck } from 'lucide-react';

const AIRTABLE_TOKEN = "patiEBmJuIklc75sW"; 
const BASE_ID = "apppozTUADmOu0mjRS";
const TABLE_NAME = "Leads";

// ÁREAS QUE VOCÊ JÁ TINHA (LEGADO)
const legacySpaces = [
  { id: "top-burguer", title: "RECANTO TOP BURGUER", phone: "5517991178961", folder: "area de lazer top burguer", location: "Rua Manoel Neves, 969, Novo Horizonte - SP", price: "330", capacity: "50", description: ["10 Mesas de Madeira", "40 Cadeiras", "TV LED Smart", "Internet Wi-Fi", "Piscina Aquecimento Solar", "2 Freezers", "Geladeira", "Fogão com Gás", "Banheiro Masc/Fem"] },
  { id: "rancho-paradise", title: "RANCHO PARADISE BORBOREMA", phone: "", folder: "Rancho Paradise Borborema", location: "Condomínio Village Tietê, Borborema - SP", price: "380", capacity: "5", description: ["Rio Tietê", "2 Suítes com Ar Condicionado", "Piscina com SPA", "Rampa para Barco", "Pier de Pesca", "Condomínio 24h", "Parque Infantil", "Quadra de Vôlei"] },
  { id: "sao-sebastiao", title: "CHÁCARA SÃO SEBASTIÃO", phone: "5517992376515", folder: "Chácara São Sebastião", location: "Novo Horizonte - SP", price: "300", capacity: "100" },
  { id: "carlos-zara", title: "ÁREA DE LAZER CARLOS ZARA", phone: "5517997179203", folder: "Área de lazer Carlos Zara", location: "Av. Cônego Alfredo Reith, 1363", price: "600", capacity: "60" },
  { id: "recanto-do-sol", title: "RECANTO PÔR DO SOL", phone: "5517992489873", folder: "Recanto do Sol", location: "R. Alexandre Baraldo, 433, Novo Horizonte - SP", price: "Consultar", capacity: "80" },
  { id: "assolini", title: "ÁREA DE LAZER ASSOLINI", phone: "5517992119367", folder: "ÁREA DE LAZER ASSOLINI", location: "R. Mário Benedicto da Silva, 1305, Novo Horizonte - SP", price: "Consultar", capacity: "40" }
];

export default function SpaceDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dateInputRef = useRef(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mainImg, setMainImg] = useState(0);
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    // 1. Tenta achar no Legado primeiro
    const legacy = legacySpaces.find(s => s.id === id);
    if (legacy) {
      setData({ type: 'legacy', ...legacy });
      setLoading(false);
    } else {
      // 2. Se não achar, busca no Airtable
      fetch(`https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}/${id}`, {
        headers: { Authorization: `Bearer ${AIRTABLE_TOKEN}` }
      })
      .then(res => res.json())
      .then(resData => {
        setData({ type: 'airtable', ...resData.fields });
        setLoading(false);
      })
      .catch(() => setLoading(false));
    }
    window.scrollTo(0,0);
  }, [id]);

  if (loading) return <div className="min-h-screen flex items-center justify-center font-black italic uppercase">Buscando Experiência...</div>;
  if (!data) return <div className="min-h-screen flex items-center justify-center font-black italic uppercase">Espaço não localizado</div>;

  // Normalização das fotos (se for legado usa pasta local, se for airtable usa URL)
  const isAirtable = data.type === 'airtable';
  const title = isAirtable ? data["Área de Lazer"] : data.title;
  const price = data.price || data.Preco;
  const fotos = isAirtable 
    ? (data.Attachments?.map(a => a.url) || []) 
    : Array.from({ length: 10 }, (_, i) => `/spaces/${data.folder}/foto${i + 1}.jpg`);

  const handleWhatsApp = () => {
    const msg = `Olá! Vi o anúncio do *${title}* no Portal Bora Lá e gostaria de consultar a disponibilidade para ${selectedDate || 'uma data em breve'}.`;
    const fone = isAirtable ? data.WhatsApp?.replace(/\D/g,'') : data.phone;
    window.open(`https://wa.me/${fone}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] pb-24 pt-36 text-black font-sans text-left">
      <div className="max-w-7xl mx-auto px-6">
        <button onClick={() => navigate(-1)} className="flex items-center gap-3 text-slate-400 hover:text-[#00BFA6] transition-all mb-12 font-black uppercase text-xs tracking-widest">
          <ArrowLeft size={18} /> VOLTAR PARA BUSCA
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-12">
            
            {/* GALERIA */}
            <div className="space-y-6">
              <div className="relative rounded-[60px] overflow-hidden shadow-2xl h-[550px] bg-slate-100 ring-1 ring-black/5">
                <img src={fotos[mainImg]} className="w-full h-full object-cover" alt={title} onError={(e) => e.target.src = fotos[0]} />
                <div className="absolute top-8 right-8 bg-black/50 backdrop-blur-lg text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-3 italic">
                  <Camera size={18} /> FOTO {mainImg + 1}
                </div>
              </div>
              <div className="grid grid-cols-5 md:grid-cols-10 gap-4">
                {fotos.slice(0, 10).map((url, i) => (
                  <button key={i} onClick={() => setMainImg(i)} className={`h-20 rounded-2xl overflow-hidden border-4 transition-all ${mainImg === i ? 'border-[#00BFA6]' : 'border-transparent opacity-40'}`}>
                    <img src={url} className="w-full h-full object-cover" onError={(e) => e.target.closest('button').style.display = 'none'} />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-[0.9] text-slate-900">{title}</h1>
              <div className="flex items-center gap-4 text-slate-400 font-bold uppercase tracking-[0.2em] text-sm italic">
                <MapPin size={24} className="text-[#00BFA6]" />
                <span>{data.location || data.Endereco}</span>
              </div>
            </div>

            {/* INFRAESTRUTURA */}
            <div className="space-y-8">
              <h3 className="text-4xl font-black uppercase italic tracking-tighter border-l-[12px] border-[#00BFA6] pl-8">INFRAESTRUTURA</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(isAirtable ? data.Comodidades?.split(',') : data.description)?.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <CheckCircle2 size={20} className="text-[#00BFA6]" />
                    <span className="font-bold uppercase text-[10px] tracking-widest text-slate-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CARD LATERAL */}
          <div className="lg:col-span-4 h-fit sticky top-40">
            <div className="bg-white rounded-[70px] p-12 shadow-2xl border border-black/5">
              <div className="space-y-10 text-center">
                <p className="text-[#00BFA6] font-black uppercase tracking-[0.4em] text-xs italic">BORA LÁ</p>
                <h2 className="text-4xl font-black italic tracking-tighter">R$ {price}</h2>
                <div onClick={() => dateInputRef.current.showPicker()} className="bg-slate-50 p-10 rounded-[45px] border border-slate-100 cursor-pointer">
                  <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-4 italic">DATA DO EVENTO</label>
                  <input ref={dateInputRef} type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} className="w-full bg-transparent border-none text-xl font-black italic outline-none text-slate-900" />
                </div>
                <button onClick={handleWhatsApp} className="w-full bg-[#00BFA6] text-black py-10 rounded-[45px] font-black uppercase italic tracking-tighter text-2xl hover:bg-black hover:text-[#00BFA6] transition-all shadow-2xl">SOLICITAR AGORA</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}