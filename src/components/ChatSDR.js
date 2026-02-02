import React, { useState } from 'react';
import { MessageCircle, X, Home, Calculator, Star, User, Handshake, BarChart } from 'lucide-react';

const ChatSDR = () => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = "5511933515087";

  const options = [
    { id: "LOCACAO", label: "Locação de Chácaras", icon: <Home size={18} />, msg: "Olá Karen! Gostaria de informaçÃµes sobre locação de chácaras." },
    { id: "CALC", label: "Calculadora de Churrasco", icon: <Calculator size={18} />, msg: "Oi! Preciso de ajuda com a Calculadora de Churrasco." },
    { id: "ANUNCIO", label: "Anunciar minha Chácara", icon: <Star size={18} />, msg: "Olá! Sou proprietário e quero anunciar minha chácara no BORA LÁ." },
    { id: "PARCERIA", label: "Quero ser Parceiro", icon: <Handshake size={18} />, msg: "Olá! Tenho interesse em uma parceria comercial com o BORA LÁ e a Como Que Faz." },
    { id: "SUPORTE", label: "Falar com Consultor", icon: <User size={18} />, msg: "Olá! Gostaria de falar com o suporte do BORA LÁ." }
  ];

  const handleRedirect = (opt) => {
    // BACKOFFICE LOG: Rastreamento de interesse
    console.log(`[ANALYTICS] Interesse detectado: ${opt.id} Ã s ${new Date().toLocaleString()}`);
    
    // Se você tiver Google Analytics instalado, o comando abaixo ativa:
    // if (window.gtag) { window.gtag('event', 'clique_sdr', { 'assunto': opt.id }); }

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(opt.msg)}`;
    window.open(url, '_blank');
  };

  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 9999 }}>
      {isOpen && (
        <div style={{ 
          backgroundColor: 'white', borderRadius: '15px', marginBottom: '15px', 
          boxShadow: '0 8px 25px rgba(0,0,0,0.2)', width: '280px', overflow: 'hidden',
          border: '1px solid #e0e0e0'
        }}>
          <div style={{ backgroundColor: '#0984E3', padding: '15px', color: 'white' }}>
            <h4 style={{ margin: 0 }}>Karen AI | SDR</h4>
            <p style={{ margin: 0, fontSize: '11px', opacity: 0.8 }}>Análise de interesse ativa ðŸ“Š</p>
          </div>
          <div style={{ padding: '10px' }}>
            {options.map((opt, i) => (
              <button key={i} onClick={() => handleRedirect(opt)} style={{
                width: '100%', display: 'flex', alignItems: 'center', gap: '10px',
                padding: '12px', marginBottom: '8px', border: '1px solid #f0f0f0',
                borderRadius: '8px', backgroundColor: '#fff', cursor: 'pointer',
                textAlign: 'left'
              }}>
                <span style={{ color: '#0984E3' }}>{opt.icon}</span>
                <span style={{ fontSize: '14px', fontWeight: '500', color: '#333' }}>{opt.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
      
      <button onClick={() => setIsOpen(!isOpen)} style={{
        backgroundColor: isOpen ? '#d63031' : '#0984E3', color: 'white',
        border: 'none', borderRadius: '50%', width: '60px', height: '60px',
        display: 'flex', alignItems: 'center', justifyContent: 'center', 
        cursor: 'pointer', boxShadow: '0 4px 15px rgba(0,0,0,0.3)', marginLeft: 'auto'
      }}>
        {isOpen ? <X size={30} /> : <MessageCircle size={30} />}
      </button>
    </div>
  );
};

export default ChatSDR;