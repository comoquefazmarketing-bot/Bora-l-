/* @author Felipe Makarios | Lead Architect - Bora Lá */
import React, { useState } from 'react';
import { Save, Check, Loader2, UploadCloud, Users, Bed, Bath, Image as ImageIcon } from 'lucide-react';

const CLOUD_NAME = "dvzi1lywl"; 
const UPLOAD_PRESET = "borala_preset"; 
const AIRTABLE_TOKEN = "patiEBmJuIklc75sW"; 
const BASE_ID = "apppozTUADmOu0mjRS";
const TABLE_NAME = "Leads";

const AMENITIES_LIST = ["Wi-Fi", "Piscina", "Churrasqueira", "Ar-condicionado", "Cozinha", "TV", "Pet Friendly"];

export default function Admin() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [imageFiles, setImageFiles] = useState([]); // Agora é um Array
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [area, setArea] = useState({ 
    nome: '', whatsapp: '', preco: '', endereco: '',
    quartos: '0', banheiros: '0', capacidade: '0', regras: '' 
  });

  const toggleAmenity = (name) => {
    setSelectedAmenities(prev => 
      prev.includes(name) ? prev.filter(item => item !== name) : [...prev, name]
    );
  };

  const handleSave = async () => {
    if (!area.nome || imageFiles.length === 0 || !area.endereco) { 
      alert("Felipe, preencha Nome, Endereço e selecione ao menos uma Foto!"); return; 
    }
    setLoading(true);

    try {
      const enderecoCodificado = encodeURIComponent(area.endereco);
      const iframeSimples = `https://maps.google.com/maps?q=${enderecoCodificado}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

      // 1. Upload de MÚLTIPLAS Fotos para Cloudinary
      const uploadedImages = [];
      for (const file of imageFiles) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', UPLOAD_PRESET);
        
        const cloudRes = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, { method: 'POST', body: formData });
        const cloudData = await cloudRes.json();
        uploadedImages.push({ url: cloudData.secure_url });
      }

      // 2. Salvar tudo no Airtable (com o array de fotos)
      const airtableData = {
        records: [{
          fields: {
            "Proprietário": "Felipe",
            "Área de Lazer": area.nome,
            "WhatsApp": area.whatsapp,
            "Preco": area.preco,
            "Endereco": area.endereco,
            "Mapa_Iframe": iframeSimples, 
            "Quartos": parseInt(area.quartos),
            "Banheiros": parseInt(area.banheiros),
            "Capacidade": parseInt(area.capacidade),
            "Comodidades": selectedAmenities.join(', '),
            "Regras": area.regras,
            "Attachments": uploadedImages // Envia a lista completa de fotos
          }
        }]
      };

      const res = await fetch(`https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${AIRTABLE_TOKEN}`, 'Content-Type': 'application/json' },
        body: JSON.stringify(airtableData)
      });

      if (res.ok) {
        setSuccess(true);
        setSelectedAmenities([]);
        setArea({ nome: '', whatsapp: '', preco: '', endereco: '', quartos: '0', banheiros: '0', capacidade: '0', regras: '' });
        setImageFiles([]);
        setTimeout(() => setSuccess(false), 3000);
      }
    } catch (e) { console.error(e); alert("Erro ao salvar!"); } finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 lg:p-12 font-sans text-left text-slate-900">
      <div className="max-w-4xl mx-auto bg-white rounded-[40px] shadow-2xl overflow-hidden border border-slate-100">
        <div className="bg-black p-8 text-white">
          <h1 className="text-2xl font-black italic tracking-tighter uppercase">GALERIA <span className="text-[#00BFA6]">BORA LÁ.</span></h1>
        </div>

        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <input type="text" placeholder="NOME DA ÁREA" value={area.nome} className="w-full bg-slate-100 border-none rounded-2xl p-4 font-bold" onChange={(e) => setArea({...area, nome: e.target.value})} />
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="PREÇO" value={area.preco} className="w-full bg-slate-100 border-none rounded-2xl p-4 font-bold" onChange={(e) => setArea({...area, preco: e.target.value})} />
              <input type="text" placeholder="WHATSAPP" value={area.whatsapp} className="w-full bg-slate-100 border-none rounded-2xl p-4 font-bold" onChange={(e) => setArea({...area, whatsapp: e.target.value})} />
            </div>
            <input type="text" placeholder="ENDEREÇO COMPLETO" value={area.endereco} className="w-full bg-slate-100 border-none rounded-2xl p-4 font-bold" onChange={(e) => setArea({...area, endereco: e.target.value})} />
            
            <div className="grid grid-cols-3 gap-2">
               <div className="bg-slate-100 p-4 rounded-2xl text-center">
                 <Bed className="mx-auto text-slate-400 mb-1" size={16} />
                 <input type="number" value={area.quartos} className="w-full bg-transparent border-none text-center p-0 font-black focus:ring-0 text-slate-900" onChange={(e)=>setArea({...area, quartos: e.target.value})} />
               </div>
               <div className="bg-slate-100 p-4 rounded-2xl text-center">
                 <Bath className="mx-auto text-slate-400 mb-1" size={16} />
                 <input type="number" value={area.banheiros} className="w-full bg-transparent border-none text-center p-0 font-black focus:ring-0 text-slate-900" onChange={(e)=>setArea({...area, banheiros: e.target.value})} />
               </div>
               <div className="bg-slate-100 p-4 rounded-2xl text-center">
                 <Users className="mx-auto text-slate-400 mb-1" size={16} />
                 <input type="number" value={area.capacidade} className="w-full bg-transparent border-none text-center p-0 font-black focus:ring-0 text-slate-900" onChange={(e)=>setArea({...area, capacidade: e.target.value})} />
               </div>
            </div>
          </div>

          <div className="space-y-4 text-left">
            <label className="text-[10px] font-black uppercase text-slate-400">Comodidades</label>
            <div className="grid grid-cols-2 gap-2">
              {AMENITIES_LIST.map(item => (
                <button key={item} onClick={() => toggleAmenity(item)} className={`p-2 rounded-xl text-[10px] font-bold border transition-all ${selectedAmenities.includes(item) ? 'bg-[#00BFA6] text-white border-[#00BFA6]' : 'bg-white text-slate-400 border-slate-100'}`}>
                  {item}
                </button>
              ))}
            </div>
            
            <textarea placeholder="Regras da casa..." value={area.regras} className="w-full bg-slate-100 border-none rounded-2xl p-4 text-sm h-20 text-slate-900" onChange={(e)=>setArea({...area, regras: e.target.value})} />
            
            {/* NOVO CAMPO DE MULTI-FOTOS */}
            <label className="flex flex-col items-center justify-center w-full min-h-[100px] border-2 border-dashed border-[#00BFA6]/30 rounded-2xl cursor-pointer bg-[#00BFA6]/5 hover:bg-[#00BFA6]/10 transition-all">
              <div className="flex items-center gap-2">
                <ImageIcon className="text-[#00BFA6]" size={20} />
                <span className="text-[10px] font-black uppercase text-[#00BFA6]">
                  {imageFiles.length > 0 ? `${imageFiles.length} Fotos Selecionadas` : "Selecionar Fotos da Galeria"}
                </span>
              </div>
              <input type="file" multiple className="hidden" onChange={(e) => setImageFiles(Array.from(e.target.files))} />
            </label>

            <button onClick={handleSave} disabled={loading} className="w-full bg-black text-white p-5 rounded-2xl font-black uppercase italic hover:bg-[#00BFA6] transition-all flex items-center justify-center gap-2 shadow-xl">
              {loading ? <Loader2 className="animate-spin" /> : success ? <Check /> : "PUBLICAR COM GALERIA"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}