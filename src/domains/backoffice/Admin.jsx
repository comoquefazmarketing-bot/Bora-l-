import React, { useState } from "react";
import { Save, Phone, User, DollarSign, MapPin, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { spacesData as initialData } from "../../data/spaces";

export default function Admin() {
  const navigate = useNavigate();
  const [spaces, setSpaces] = useState(initialData);
  const [status, setStatus] = useState("");

  const handleChange = (id, field, value) => {
    setSpaces(prev => prev.map(s => s.id === id ? { ...s, [field]: value } : s));
  };

  const generatePowerShell = () => {
    const dataString = JSON.stringify(spaces, null, 2)
      .replace(/"([^"]+)":/g, '$1:') // Remove aspas das chaves
      .replace(/"/g, "'"); // Troca aspas duplas por simples para o JS
    
    const command = `
$pathData = "E:\\BORA LÁ\\web-app\\src\\data\\spaces.js"
$codeData = @"
export const spacesData = ${dataString};
"@
[System.IO.File]::WriteAllText($pathData, $codeData, [System.Text.Encoding]::UTF8)
Write-Host "âœ… Dados sincronizados via Admin! Tum Dum!" -ForegroundColor Green`;
    
    navigator.clipboard.writeText(command);
    setStatus("Comando PowerShell copiado! Cole no terminal para salvar.");
    setTimeout(() => setStatus(""), 5000);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8 font-sans">
      <header className="max-w-6xl mx-auto flex justify-between items-center mb-10">
        <div>
          <button onClick={() => navigate("/")} className="flex items-center gap-2 text-slate-400 font-bold uppercase text-[10px] tracking-widest mb-2 hover:text-black">
            <ArrowLeft size={14}/> Voltar ao App
          </button>
          <h1 className="text-3xl font-black uppercase italic tracking-tighter">Painel de Controle BORA LÁ</h1>
        </div>
        <button 
          onClick={generatePowerShell}
          className="bg-black text-[#00BFA6] px-8 py-4 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl flex items-center gap-3"
        >
          <Save size={20} /> Salvar AlteraçÃµes
        </button>
      </header>

      {status && <div className="max-w-6xl mx-auto mb-6 bg-[#00BFA6] text-black p-4 rounded-xl font-bold text-center animate-bounce">{status}</div>}

      <div className="max-w-6xl mx-auto space-y-4">
        {spaces.map(space => (
          <div key={space.id} className="bg-white p-6 rounded-[30px] shadow-sm border border-slate-100 grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
            <div>
              <label className="block text-[9px] font-black uppercase text-slate-400 mb-2">Nome do Espaço</label>
              <div className="flex items-center gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100 font-bold text-slate-400">{space.title}</div>
            </div>
            <div>
              <label className="block text-[9px] font-black uppercase text-slate-400 mb-2 flex items-center gap-1"><User size={10}/> Proprietário</label>
              <input value={space.owner} onChange={(e) => handleChange(space.id, 'owner', e.target.value)} className="w-full bg-slate-50 p-3 rounded-xl border border-slate-200 font-bold focus:border-[#00BFA6] outline-none" />
            </div>
            <div>
              <label className="block text-[9px] font-black uppercase text-slate-400 mb-2 flex items-center gap-1"><Phone size={10}/> WhatsApp (Com 55)</label>
              <input value={space.phone} onChange={(e) => handleChange(space.id, 'phone', e.target.value)} className="w-full bg-slate-50 p-3 rounded-xl border border-slate-200 font-bold focus:border-[#00BFA6] outline-none" />
            </div>
            <div>
              <label className="block text-[9px] font-black uppercase text-slate-400 mb-2 flex items-center gap-1"><DollarSign size={10}/> Preço/Diária</label>
              <input value={space.price} onChange={(e) => handleChange(space.id, 'price', e.target.value)} className="w-full bg-slate-50 p-3 rounded-xl border border-slate-200 font-bold focus:border-[#00BFA6] outline-none" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}