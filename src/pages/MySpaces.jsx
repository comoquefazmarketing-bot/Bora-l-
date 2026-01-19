import React, { useState } from "react";
import { Plus, Building, X, MapPin, Info, Save, Loader2, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// URL do teu Webhook n8n (Cloudflare Tunnel)
const N8N_WEBHOOK_URL = "https://showers-faulkio-stephen.trycloudflare.com/webhook/conversa-lia";

export default function MySpaces() {
  const [showForm, setShowForm] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const [spaces, setSpaces] = useState([
    {
      id: 1,
      name: "Top Burguer - Área de Lazer",
      address: "Rua Manoel Neves, 969 - Parque dos Ipês",
      status: "Ativo",
      image: "/spaces/area de lazer top burguer/foto1.jpg"
    }
  ]);

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    price: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    const payload = {
      ...formData,
      timestamp: new Date().toISOString(),
      origem: "App Bora Lá - Painel do Proprietário",
      autor: "Felipe Makarios"
    };

    try {
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setSuccess(true);
        setTimeout(() => {
          setSpaces([{ id: Date.now(), ...formData, status: "Em Análise", image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=500" }, ...spaces]);
          setShowForm(false);
          setSuccess(false);
          setFormData({ name: "", address: "", price: "", description: "" });
        }, 2000);
      }
    } catch (error) {
      console.error("Erro na ligação n8n:", error);
      alert("Erro ao ligar ao n8n. Verifica se o túnel está ativo!");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen p-8 md:p-12 bg-[#FAFAF9]">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Sensorial */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tighter">Meus Espaços</h1>
            <p className="text-[#00BFA6] font-bold uppercase text-[10px] tracking-[0.2em] mt-2">Ligação n8n Ativa</p>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="h-16 px-8 rounded-[24px] bg-[#00BFA6] text-white font-black shadow-xl shadow-[#00BFA6]/20 flex items-center gap-3 hover:scale-105 transition-all"
          >
            <Plus className="w-6 h-6" />
            Adicionar Espaço
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {spaces.map((space) => (
            <motion.div layout key={space.id} className="bg-white rounded-[40px] overflow-hidden shadow-sm border border-slate-100 group">
              <div className="h-48 overflow-hidden relative">
                <img src={space.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={space.name} />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-[#00BFA6] px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest shadow-sm">
                  {space.status}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-black text-slate-900 text-xl mb-1">{space.name}</h3>
                <p className="text-slate-400 text-sm font-bold truncate">{space.address}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal n8n */}
        <AnimatePresence>
          {showForm && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowForm(false)} className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" />
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="bg-white w-full max-w-xl rounded-[40px] shadow-2xl relative z-10 overflow-hidden"
              >
                <div className="p-10">
                  {success ? (
                    <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} className="flex flex-col items-center justify-center py-10 text-center">
                      <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle className="w-10 h-10 text-emerald-500" />
                      </div>
                      <h2 className="text-2xl font-black text-slate-900">Enviado com sucesso!</h2>
                      <p className="text-slate-400 font-bold mt-2">O n8n já está a processar o teu espaço.</p>
                    </motion.div>
                  ) : (
                    <>
                      <div className="flex justify-between items-center mb-8 text-left">
                        <h2 className="text-3xl font-black text-slate-900 tracking-tighter italic">Novo Cadastro</h2>
                        <button onClick={() => setShowForm(false)} className="p-2 bg-slate-100 rounded-full hover:rotate-90 transition-transform"><X className="w-5 h-5 text-slate-400" /></button>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <input required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl font-bold focus:ring-2 focus:ring-[#00BFA6]" placeholder="Nome do Espaço" />
                        <input required value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl font-bold focus:ring-2 focus:ring-[#00BFA6]" placeholder="Endereço Completo" />
                        <input required type="number" value={formData.price} onChange={e => setFormData({...formData, price: e.target.value})} className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl font-bold focus:ring-2 focus:ring-[#00BFA6]" placeholder="Valor por período (R$)" />
                        
                        <div className="p-4 bg-[#F5E9DA]/30 rounded-2xl border border-[#F5E9DA] flex gap-3 text-xs font-bold text-slate-600">
                          <Info className="w-5 h-5 text-[#00BFA6] shrink-0" />
                          Os dados serão enviados para o n8n e salvos na planilha automaticamente.
                        </div>

                        <button 
                          disabled={isSending}
                          type="submit" 
                          className="w-full py-5 rounded-[24px] bg-[#00BFA6] text-white font-black text-lg shadow-xl shadow-[#00BFA6]/20 flex items-center justify-center gap-3 active:scale-95 transition-all disabled:opacity-50"
                        >
                          {isSending ? <Loader2 className="w-6 h-6 animate-spin" /> : <Save className="w-6 h-6" />}
                          {isSending ? "A ligar ao n8n..." : "Guardar e Enviar"}
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}