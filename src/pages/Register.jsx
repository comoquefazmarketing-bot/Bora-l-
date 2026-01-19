/* @author Felipe Makarios | Creator & Lead Architect - Bora Lá / Manda Lá */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, MapPin, Store, Database, Send } from 'lucide-react';

export default function Register() {
  const navigate = useNavigate();
  const [step, setStep] = useState('choice'); // choice, form
  const [type, setType] = useState(''); // proprietario, mandala
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui simulamos a gravação no banco de dados
    setSent(true);
    setTimeout(() => navigate('/'), 3000);
  };

  if (sent) {
    return (
      <div className="min-h-screen bg-[#FDFCFB] flex flex-col items-center justify-center p-8 text-center">
        <div className="bg-[#00BFA6]/10 p-6 rounded-full text-[#00BFA6] mb-6 animate-bounce">
          <Database size={48} />
        </div>
        <h2 className="text-4xl font-black uppercase italic tracking-tighter">Dados Enviados!</h2>
        <p className="text-[#B2B0AB] font-bold uppercase text-[10px] tracking-widest mt-4">Nossa equipe comercial analisará seu perfil e entrará em contato.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#1A1A1A] font-sans pb-20">
      <nav className="p-8 flex justify-between items-center max-w-7xl mx-auto">
        <button onClick={() => step === 'form' ? setStep('choice') : navigate('/')} className="flex items-center gap-2 font-black uppercase text-[10px] tracking-widest hover:text-[#00BFA6] transition-all">
          <ArrowLeft size={16} /> Voltar
        </button>
        <img src="/logo.png" alt="Bora Lá" className="w-32 h-auto" />
      </nav>

      <main className="max-w-5xl mx-auto px-8">
        {step === 'choice' ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <header className="text-center mb-16">
              <h1 className="text-6xl font-black uppercase italic tracking-tighter mb-4">Seja um Parceiro.</h1>
              <p className="text-[#B2B0AB] font-bold uppercase text-[10px] tracking-[0.4em]">Escolha como você quer crescer com o Bora Lá</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div onClick={() => { setType('proprietario'); setStep('form'); }} className="group bg-white p-12 rounded-[50px] border border-[#F0EFEA] shadow-xl cursor-pointer hover:border-[#00BFA6] transition-all">
                <div className="bg-[#00BFA6]/10 w-16 h-16 rounded-3xl flex items-center justify-center text-[#00BFA6] mb-8 group-hover:scale-110 transition-transform"><MapPin size={32} /></div>
                <h3 className="text-3xl font-black uppercase italic mb-4">Proprietário</h3>
                <p className="text-[#B2B0AB] font-bold text-sm mb-8 leading-relaxed">Quero alugar minha chácara ou área de lazer.</p>
                <button className="bg-[#1A1A1A] text-white px-8 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest group-hover:bg-[#00BFA6]">Cadastrar Imóvel</button>
              </div>

              <div onClick={() => { setType('mandala'); setStep('form'); }} className="group bg-[#1A1A1A] p-12 rounded-[50px] shadow-2xl cursor-pointer hover:border-[#FF4500] border border-transparent transition-all">
                <div className="bg-[#FF4500]/20 w-16 h-16 rounded-3xl flex items-center justify-center text-[#FF4500] mb-8 group-hover:scale-110 transition-transform"><Store size={32} /></div>
                <h3 className="text-3xl font-black uppercase italic mb-4 text-white">Manda Lá</h3>
                <p className="text-white/40 font-bold text-sm mb-8 leading-relaxed">Adega, Conveniência ou Lanchonete.</p>
                <button className="bg-[#FF4500] text-white px-8 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest">Ser Parceiro</button>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto animate-in fade-in zoom-in-95 duration-500">
            <header className="mb-12">
              <span className="text-[#00BFA6] font-black uppercase text-[10px] tracking-widest">Cadastro de Parceiro</span>
              <h2 className="text-4xl font-black uppercase italic tracking-tighter mt-2">Dados do {type === 'proprietario' ? 'Imóvel' : 'Estabelecimento'}</h2>
            </header>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input required placeholder="Nome do Responsável" className="w-full bg-white border border-[#F0EFEA] p-5 rounded-2xl outline-none focus:border-[#00BFA6] font-bold" />
                <input required placeholder="Nome do Local/Empresa" className="w-full bg-white border border-[#F0EFEA] p-5 rounded-2xl outline-none focus:border-[#00BFA6] font-bold" />
              </div>
              <input required type="email" placeholder="E-mail para contato" className="w-full bg-white border border-[#F0EFEA] p-5 rounded-2xl outline-none focus:border-[#00BFA6] font-bold" />
              <input required placeholder="WhatsApp (DDD + Número)" className="w-full bg-white border border-[#F0EFEA] p-5 rounded-2xl outline-none focus:border-[#00BFA6] font-bold" />
              <textarea placeholder="Fale um pouco sobre o espaço/serviço..." rows="4" className="w-full bg-white border border-[#F0EFEA] p-5 rounded-2xl outline-none focus:border-[#00BFA6] font-bold"></textarea>
              
              <button type="submit" className="w-full bg-[#1A1A1A] text-white py-6 rounded-2xl font-black uppercase text-xs tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-[#00BFA6] transition-all">
                <Send size={18} /> Solicitar Credenciamento
              </button>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}