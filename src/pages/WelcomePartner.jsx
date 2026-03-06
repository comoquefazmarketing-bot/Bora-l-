/* @author Felipe Makarios | Lead Architect - BORA LÁ */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, MessageSquare, Image, Download, ArrowRight, ShieldCheck, Star } from 'lucide-react';

const whatsKaren = "5511933515087";

export default function WelcomePartner() {
  const navigate = useNavigate();

  const handleSendAssets = () => {
    const msg = "Olá Karen! Acabei de assinar o plano do BORA LÁ. Seguem as fotos e informações da minha empresa para ativação do meu perfil.";
    window.open(`https://wa.me/${whatsKaren}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* HEADER DE CELEBRAÇÃO */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#00BFA6]/10 text-[#00BFA6] rounded-full mb-8 animate-bounce">
            <CheckCircle2 size={40} />
          </div>
          <h1 className="text-5xl md:text-7xl font-[1000] uppercase italic tracking-tighter leading-none text-slate-900 mb-6">
            BEM-VINDO <br/><span className="text-[#00BFA6]">À ELITE.</span>
          </h1>
          <p className="text-slate-500 font-bold uppercase text-[11px] tracking-[0.2em] max-w-lg mx-auto leading-relaxed">
            Seu pagamento foi confirmado. Você acaba de garantir sua presença oficial na maior plataforma de eventos de Novo Horizonte.
          </p>
        </div>

        {/* PRÓXIMOS PASSOS (O BACKOFFICE) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* CARD 1: ENVIO DE DADOS */}
          <div className="bg-white p-10 rounded-[50px] border-2 border-slate-100 shadow-sm hover:border-[#00BFA6] transition-all group">
            <div className="w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Image size={24} />
            </div>
            <h3 className="text-xl font-[1000] uppercase italic text-slate-900 mb-4">Ative seu Perfil</h3>
            <p className="text-xs font-bold text-slate-500 uppercase leading-relaxed mb-8">
              Precisamos de 5 fotos de alta qualidade, seu logotipo e seu link de cardápio/preços.
            </p>
            <button 
              onClick={handleSendAssets}
              className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black uppercase italic text-[10px] flex items-center justify-center gap-2 hover:bg-[#00BFA6] transition-all"
            >
              Enviar para Karen <MessageSquare size={14} />
            </button>
          </div>

          {/* CARD 2: SELO DE PARCEIRO */}
          <div className="bg-slate-900 p-10 rounded-[50px] shadow-2xl shadow-slate-900/20 relative overflow-hidden">
            <Star className="absolute -top-4 -right-4 text-white/5" size={120} />
            <div className="w-12 h-12 bg-[#00BFA6] text-white rounded-2xl flex items-center justify-center mb-6">
              <Download size={24} />
            </div>
            <h3 className="text-xl font-[1000] uppercase italic text-white mb-4">Selo de Elite</h3>
            <p className="text-xs font-bold text-white/60 uppercase leading-relaxed mb-8">
              Baixe agora seu selo oficial de parceiro e use em suas redes sociais para gerar autoridade.
            </p>
            <button 
              className="w-full py-4 bg-white text-slate-900 rounded-2xl font-black uppercase italic text-[10px] flex items-center justify-center gap-2 hover:scale-105 transition-all"
            >
              Baixar Selos <ArrowRight size={14} />
            </button>
          </div>

        </div>

        {/* MENSAGEM DO CRIADOR (FELIPE) */}
        <div className="bg-[#00BFA6]/5 rounded-[60px] p-12 border border-[#00BFA6]/20 relative">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center gap-2 text-[#00BFA6] mb-4 justify-center md:justify-start">
                <ShieldCheck size={16} />
                <span className="font-black uppercase italic text-[10px]">Compromisso BORA LÁ</span>
              </div>
              <p className="text-slate-700 font-bold italic text-lg leading-tight mb-4">
                "Nosso objetivo não é apenas te anunciar, é garantir que você seja a primeira escolha de quem está planejando um momento especial."
              </p>
              <p className="text-[10px] font-black uppercase text-slate-400">Felipe Makarios — Lead Architect</p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
            <button onClick={() => navigate('/')} className="text-[10px] font-black uppercase text-slate-400 hover:text-[#00BFA6] underline underline-offset-4">
                Voltar para a Calculadora de Churrasco
            </button>
        </div>

      </div>
    </div>
  );
}