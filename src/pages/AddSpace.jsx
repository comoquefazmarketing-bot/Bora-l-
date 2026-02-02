import React, { useState } from "react";
import { Save, Image as ImageIcon, MapPin, Users, Info, ShieldCheck } from "lucide-react";

export default function AddSpace() {
  const [formData, setFormData] = useState({
    nome: "",
    tipo: "Chácara",
    cidade: "Novo Horizonte",
    estado: "SP",
    preco: "",
    capacidade: "",
    fraseCurta: "",
    descricao: "",
    regras: "",
    comodidades: []
  });

  const todasComodidades = [
    "Wi-Fi", "Estacionamento", "Churrasqueira", "Piscina", 
    "Ar Condicionado", "Cozinha", "Som Ambiente", "TV", 
    "Banheiros", "Ãrea Verde", "Segurança"
  ];

  const toggleComodidade = (item) => {
    setFormData(prev => ({
      ...prev,
      comodidades: prev.comodidades.includes(item) 
        ? prev.comodidades.filter(i => i !== item)
        : [...prev.comodidades, item]
    }));
  };

  return (
    <div className="min-h-screen bg-[#F0F2F5] p-4 md:p-12 font-sans">
      <div className="max-w-5xl mx-auto bg-white rounded-[50px] shadow-2xl overflow-hidden border border-white">
        
        {/* Header Sensorial */}
        <div className="bg-slate-900 p-12 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-4xl font-black tracking-tighter uppercase">Novo Espaço de Lazer</h1>
            <p className="text-[#00BFA6] font-bold mt-2 uppercase tracking-widest text-sm">Painel do Criador: Felipe Makarios</p>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00BFA6] rounded-full blur-[100px] opacity-20 -mr-32 -mt-32"></div>
        </div>

        <div className="p-8 md:p-16 space-y-12">
          
          {/* Seção 1: InformaçÃµes Básicas */}
          <section className="space-y-6">
            <h2 className="flex items-center gap-2 text-xl font-black text-slate-800 uppercase tracking-tight">
              <Info className="text-[#00BFA6]" /> InformaçÃµes Básicas
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 ml-4">Nome do Espaço *</label>
                <input className="w-full p-5 bg-slate-50 rounded-[25px] border-none focus:ring-2 ring-[#00BFA6] font-bold" placeholder="Ex: Chácara Vista Alegre" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 ml-4">Tipo de Espaço *</label>
                <select className="w-full p-5 bg-slate-50 rounded-[25px] border-none focus:ring-2 ring-[#00BFA6] font-bold">
                  <option>Chácara</option>
                  <option>Piscina / Ãrea de Lazer</option>
                  <option>Salão de Festas</option>
                  <option>Outro</option>
                </select>
              </div>
            </div>
          </section>

          {/* Seção 2: Localização e Valores */}
          <section className="space-y-6">
             <div className="grid md:grid-cols-4 gap-6">
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 ml-4">Cidade *</label>
                  <input className="w-full p-5 bg-slate-50 rounded-[25px] border-none focus:ring-2 ring-[#00BFA6] font-bold text-slate-500" defaultValue="Novo Horizonte" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 ml-4">Estado</label>
                  <input className="w-full p-5 bg-slate-50 rounded-[25px] border-none focus:ring-2 ring-[#00BFA6] font-bold text-slate-500" defaultValue="SP" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 ml-4">Capacidade</label>
                  <input className="w-full p-5 bg-slate-50 rounded-[25px] border-none focus:ring-2 ring-[#00BFA6] font-bold" placeholder="50" />
                </div>
             </div>
             <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 ml-4">Preço por Diária (R$) *</label>
                <input className="w-full p-5 bg-slate-50 rounded-[25px] border-none focus:ring-2 ring-[#00BFA6] font-bold text-2xl text-[#00BFA6]" placeholder="500" />
             </div>
          </section>

          {/* Seção 3: ConteÃºdo Emocional */}
          <section className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-slate-400 ml-4">Frase Curta (Emocional)</label>
              <input className="w-full p-5 bg-slate-50 rounded-[25px] border-none focus:ring-2 ring-[#00BFA6] font-bold italic" placeholder="Ideal para aquele churrasco de domingo com a famÃ­lia" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-slate-400 ml-4">Descrição Completa</label>
              <textarea className="w-full p-6 bg-slate-50 rounded-[35px] border-none focus:ring-2 ring-[#00BFA6] font-medium h-32" placeholder="Descreva seu espaço de forma detalhada..."></textarea>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-slate-400 ml-4 flex items-center gap-1">
                <ShieldCheck size={12} /> Regras do Espaço
              </label>
              <textarea className="w-full p-6 bg-slate-50 rounded-[35px] border-none focus:ring-2 ring-[#00BFA6] font-medium h-24" placeholder="Ex: Não é permitido som alto após 22h..."></textarea>
            </div>
          </section>

          {/* Seção 4: Comodidades (Igual ao seu print) */}
          <section className="space-y-6">
            <h2 className="text-xl font-black text-slate-800 uppercase tracking-tight">Comodidades</h2>
            <div className="flex flex-wrap gap-3">
              {todasComodidades.map(item => (
                <button 
                  key={item}
                  onClick={() => toggleComodidade(item)}
                  className={`px-6 py-3 rounded-full font-bold text-sm transition-all border-2 ${
                    formData.comodidades.includes(item) 
                    ? "bg-[#00BFA6] border-[#00BFA6] text-white shadow-lg shadow-[#00BFA6]/30" 
                    : "bg-white border-slate-100 text-slate-400 hover:border-slate-200"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </section>

          {/* Seção 5: Fotos (Pasta do Windows) */}
          <section className="p-12 border-4 border-dashed border-slate-100 rounded-[50px] text-center space-y-4 group hover:border-[#00BFA6]/30 transition-colors">
            <div className="bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
              <ImageIcon className="text-slate-300 group-hover:text-[#00BFA6]" size={32} />
            </div>
            <p className="font-black text-slate-400 uppercase text-xs tracking-widest">
              As fotos devem ser salvas na pasta:<br/>
              <span className="text-slate-900 lowercase font-mono">public/spaces/[nome-do-lazer]</span>
            </p>
          </section>

          <button className="w-full bg-[#00BFA6] text-white py-8 rounded-[35px] font-black text-2xl shadow-2xl shadow-[#00BFA6]/40 hover:translate-y-[-4px] active:scale-95 transition-all flex items-center justify-center gap-4">
            <Save size={28} /> CRIAR ESPAÃ‡O NO BORALÃ
          </button>

        </div>
      </div>
    </div>
  );
}