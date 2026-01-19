import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LayoutGrid, Save, Sparkles, Image as ImageIcon, MapPin } from 'lucide-react';

export default function RegisterSpace() {
  const navigate = useNavigate();
  const [isGenerating, setIsGenerating] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    location: '',
    description: ''
  });

  // A LIA TRABALHANDO: Gera uma descrição comercial
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

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex">
      {/* SIDEBAR ADMIN */}
      <aside className="w-72 bg-slate-900 p-8 flex flex-col text-white">
        <div className="mb-12">
          <h2 className="text-[#00BFA6] font-black uppercase tracking-tighter text-2xl italic">Lia Admin</h2>
          <p className="text-[9px] text-slate-500 uppercase tracking-widest font-bold">Gerenciamento de Inventário</p>
        </div>
        
        <nav className="space-y-4 flex-1">
          <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
            <p className="text-[10px] font-black uppercase text-[#00BFA6] mb-2">Status da IA</p>
            <p className="text-xs text-slate-400">Lia está online e pronta para redigir novos anúncios.</p>
          </div>
        </nav>

        <button onClick={() => navigate('/')} className="text-slate-500 text-[10px] font-black uppercase tracking-widest hover:text-white transition-all">Voltar para Vitrine</button>
      </aside>

      {/* FORMULÁRIO DE CADASTRO */}
      <main className="flex-1 p-12 lg:p-20 overflow-y-auto">
        <header className="max-w-3xl mx-auto mb-12 flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-black text-slate-900 uppercase italic tracking-tighter">Cadastrar Nova Área</h1>
            <p className="text-slate-400 font-medium">Preencha os detalhes para Lia processar o anúncio.</p>
          </div>
          <button onClick={askLiaToHelp} className="flex items-center gap-2 bg-slate-900 text-[#00BFA6] px-6 py-3 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:scale-105 transition-all shadow-xl">
            <Sparkles size={16} /> {isGenerating ? 'Lia pensando...' : 'Pedir ajuda da Lia'}
          </button>
        </header>

        <form className="max-w-3xl mx-auto grid grid-cols-2 gap-8 bg-white p-12 rounded-[50px] shadow-sm border border-slate-100">
          <div className="col-span-2 space-y-2">
            <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-4">Título do Anúncio</label>
            <input type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} placeholder="Ex: Chácara Alpha Sensorial" className="w-full bg-slate-50 border-none rounded-2xl py-5 px-8 focus:ring-2 focus:ring-[#00BFA6]/20 outline-none transition-all font-bold" />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-4">Valor da Diária (R$)</label>
            <input type="number" value={formData.price} onChange={e => setFormData({...formData, price: e.target.value})} placeholder="800" className="w-full bg-slate-50 border-none rounded-2xl py-5 px-8 focus:ring-2 focus:ring-[#00BFA6]/20 outline-none transition-all font-bold" />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-4 flex items-center gap-1"><MapPin size={12}/> Localização</label>
            <input type="text" value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})} placeholder="Novo Horizonte - SP" className="w-full bg-slate-50 border-none rounded-2xl py-5 px-8 focus:ring-2 focus:ring-[#00BFA6]/20 outline-none transition-all font-bold" />
          </div>

          <div className="col-span-2 space-y-2">
            <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-4">Descrição Comercial (Pela Lia)</label>
            <textarea rows="4" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full bg-slate-50 border-none rounded-[30px] py-6 px-8 focus:ring-2 focus:ring-[#00BFA6]/20 outline-none transition-all font-medium text-slate-600" />
          </div>

          <button type="button" className="col-span-2 bg-[#00BFA6] text-slate-900 py-6 rounded-[30px] font-black uppercase text-xs tracking-[0.3em] shadow-lg shadow-[#00BFA6]/20 hover:scale-[1.01] transition-all flex items-center justify-center gap-3">
            <Save size={20} /> Salvar e Publicar na Vitrine
          </button>
        </form>
      </main>
    </div>
  );
}