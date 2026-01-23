/* @author Felipe Makarios | Creator & Lead Architect */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Save, ArrowLeft, Camera, MapPin, CheckCircle } from 'lucide-react';

export default function RegisterSpace() {
  const navigate = useNavigate();
  const [isGenerating, setIsGenerating] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    title: '', price: '', location: '', description: ''
  });

  const askLiaToHelp = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setFormData({
        ...formData,
        description: `Experiência sensorial única em ${formData.location || 'nossa região'}. Espaço sofisticado com acabamento premium, ideal para momentos inesquecíveis. O ambiente perfeito para quem busca lazer com propósito.`
      });
      setIsGenerating(false);
    }, 1500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => navigate('/'), 3000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#F5F2ED] flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-500">
        <div className="bg-[#00BFA6] w-24 h-24 rounded-full flex items-center justify-center text-white mb-8 shadow-2xl">
          <CheckCircle size={48} className="animate-bounce" />
        </div>
        <h2 className="text-4xl font-black uppercase italic tracking-tighter">Espaço <br/><span className="text-[#00BFA6]">Em Avaliação.</span></h2>
        <p className="text-black/40 font-bold uppercase text-[10px] tracking-widest mt-6">Retornaremos em breve.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F2ED] py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <button onClick={() => navigate(-1)} className="mb-10 flex items-center gap-2 font-black uppercase text-[10px] tracking-[3px] text-black/30 hover:text-[#00BFA6] transition-all">
          <ArrowLeft size={16} /> Voltar
        </button>

        <header className="mb-12">
          <h1 className="text-5xl font-black uppercase italic tracking-tighter leading-none mb-4">
            Rentabilize seu <br/><span className="text-[#00BFA6]">Espaço.</span>
          </h1>
          <div className="flex justify-between items-center mt-8">
            <p className="text-[10px] font-black uppercase tracking-[4px] text-black/40">Credenciamento Premium</p>
            <button onClick={askLiaToHelp} className="flex items-center gap-2 bg-black text-[#00BFA6] px-5 py-3 rounded-2xl font-black uppercase text-[9px] tracking-widest hover:scale-105 transition-all shadow-xl">
              <Sparkles size={14} /> {isGenerating ? 'Lia pensando...' : 'IA: Gerar Descrição'}
            </button>
          </div>
        </header>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white/50 backdrop-blur-xl p-8 lg:p-12 rounded-[40px] border border-black/5 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-2 space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest ml-4 text-black/40">Título da Propriedade</label>
              <input required value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} placeholder="Ex: Rancho Sensorial Paradise" className="w-full bg-white border-none rounded-2xl py-5 px-8 outline-none focus:ring-2 focus:ring-[#00BFA6] font-bold" />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest ml-4 text-black/40">Localização</label>
              <input required value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})} placeholder="Cidade - SP" className="w-full bg-white border-none rounded-2xl py-5 px-8 outline-none focus:ring-2 focus:ring-[#00BFA6] font-bold" />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest ml-4 text-black/40">Valor da Diária (R$)</label>
              <input required type="number" value={formData.price} onChange={e => setFormData({...formData, price: e.target.value})} placeholder="0.00" className="w-full bg-white border-none rounded-2xl py-5 px-8 outline-none focus:ring-2 focus:ring-[#00BFA6] font-bold" />
            </div>

            <div className="col-span-2 space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest ml-4 text-black/40">Descrição (Toque da Lia)</label>
              <textarea rows="4" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full bg-white border-none rounded-[25px] py-6 px-8 outline-none focus:ring-2 focus:ring-[#00BFA6] font-medium text-black/70" />
            </div>
          </div>

          <button type="submit" className="w-full bg-[#00BFA6] text-white py-6 rounded-[25px] font-black uppercase text-[11px] tracking-[4px] shadow-2xl shadow-[#00BFA6]/30 flex items-center justify-center gap-3 hover:brightness-110 transition-all mt-8">
            <Save size={20} /> Publicar na Vitrine
          </button>
        </form>
      </div>
    </div>
  );
}