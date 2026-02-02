import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Smartphone, Home, User } from 'lucide-react';

export default function LeadForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({ nome: '', area: '', whatsapp: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const baseId = 'appozTUADmOu0mjRS'; 
    const tableId = 'tblCOBSVMMjnteqMS'; 
    const token = 'patiEBmJuIklc75sW.3cf4b8ab8f0ab2c568b2bd65b519addb673bc8c945cf85f3ea02f0f10b20da9f'; 

    try {
      const response = await fetch(`https://api.airtable.com/v0/${baseId}/${tableId}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fields: {
            "Proprietário": formData.nome.trim(),
            "Ãrea de Lazer": formData.area.trim(),
            "WhatsApp": String(formData.whatsapp).trim() // Garante envio como texto
          }
        })
      });

      if (response.ok) {
        setSent(true);
      } else {
        const errorData = await response.json();
        console.error("Erro Airtable:", errorData);
        alert(`Erro: Mude a coluna WhatsApp no Airtable para 'Single line text'.`);
      }
    } catch (error) {
      alert("Verifique sua conexão.");
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="min-h-screen bg-[#0A0A0B] flex items-center justify-center p-6 text-center font-sans">
        <div className="max-w-md w-full bg-white/[0.02] backdrop-blur-3xl p-12 rounded-[60px] border border-white/5 shadow-2xl">
          <CheckCircle className="text-[#00BFA6] mx-auto mb-6" size={50} />
          <h2 className="text-white text-2xl font-black uppercase italic tracking-tighter mb-4">Enviado!</h2>
          <p className="text-slate-400 text-sm font-medium mb-10 leading-relaxed">Felipe, os dados já estão no banco. Entraremos em contato!</p>
          <button onClick={() => navigate('/')} className="w-full bg-[#00BFA6] text-slate-900 py-4 rounded-2xl font-black uppercase tracking-widest text-[9px]">Voltar</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0B] flex flex-col items-center justify-center p-6 font-sans">
      <button onClick={() => navigate('/')} className="absolute top-10 left-10 text-white/30 hover:text-[#00BFA6] flex items-center gap-2 font-black uppercase text-[9px] tracking-widest">
        <ArrowLeft size={14} /> Voltar
      </button>

      <div className="max-w-md w-full">
        <div className="text-center mb-10">
          <h1 className="text-white text-3xl font-black uppercase italic tracking-tighter mb-2">Anuncie Aqui</h1>
          <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-[8px]">Solicite a ativação da sua vitrine</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white/[0.01] border border-white/5 p-10 rounded-[55px] space-y-6">
          <div className="space-y-2">
            <label className="text-[8px] font-black text-slate-500 uppercase tracking-widest ml-4 flex items-center gap-2"><User size={12} className="text-[#00BFA6]"/> Proprietário</label>
            <input required type="text" placeholder="Nome completo" className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 px-7 text-white font-bold outline-none text-sm" onChange={(e) => setFormData({...formData, nome: e.target.value})} />
          </div>

          <div className="space-y-2">
            <label className="text-[8px] font-black text-slate-500 uppercase tracking-widest ml-4 flex items-center gap-2"><Home size={12} className="text-[#00BFA6]"/> Ãrea de Lazer</label>
            <input required type="text" placeholder="Nome do espaço" className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 px-7 text-white font-bold outline-none text-sm" onChange={(e) => setFormData({...formData, area: e.target.value})} />
          </div>

          <div className="space-y-2">
            <label className="text-[8px] font-black text-slate-500 uppercase tracking-widest ml-4 flex items-center gap-2"><Smartphone size={12} className="text-[#00BFA6]"/> WhatsApp</label>
            <input required type="text" placeholder="DDD + NÃºmero" className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 px-7 text-white font-bold outline-none text-sm" onChange={(e) => setFormData({...formData, whatsapp: e.target.value})} />
          </div>

          <button type="submit" disabled={loading} className="w-full bg-[#00BFA6] text-slate-900 py-5 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] transition-all flex items-center justify-center mt-4">
            {loading ? "Gravando..." : "Confirmar Cadastro"}
          </button>
        </form>
      </div>
    </div>
  );
}