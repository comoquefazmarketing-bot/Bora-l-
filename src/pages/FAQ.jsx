import React from 'react';
import { MessageCircle, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function FAQ() {
  const navigate = useNavigate();
  const faqs = [
    {
      q: "Como faço para reservar uma área de lazer?",
      a: "É muito simples! O Bora Lá liga as pontas para você. Escolha o espaço que gostou e clique no botão do WhatsApp. Você fala direto com o dono, sem taxas extras de reserva.",
      cta: "Ver Áreas e Chamar Dono"
    },
    {
      q: "O App é confiável?",
      a: "Sim! O Bora Lá é uma iniciativa da agência Como Que Faz, do Felipe Makarios. Fazemos a curadoria manual de todas as áreas de lazer de Novo Horizonte para sua segurança.",
      cta: "Falar com Suporte"
    },
    {
      q: "Como funciona a Calculadora de Churrasco?",
      a: "Ela calcula a quantidade exata de carne, carvão e bebidas para o seu grupo, evitando desperdício e falta de comida. É só clicar no ícone de churrasco no menu!",
      cta: "Calcular agora"
    }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb', paddingBottom: '50px', fontFamily: 'sans-serif' }}>
      <div style={{ padding: '20px', backgroundColor: 'white', display: 'flex', alignItems: 'center', gap: '15px', borderBottom: '1px solid #eee' }}>
        <button onClick={() => navigate('/')} style={{ border: 'none', background: 'none', cursor: 'pointer' }}><ArrowLeft /></button>
        <h1 style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: 0 }}>Dúvidas Frequentes</h1>
      </div>

      <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
        {faqs.map((f, i) => (
          <div key={i} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '15px', marginBottom: '20px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#111', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <CheckCircle2 color="#00BFA6" size={20} /> {f.q}
            </h3>
            <p style={{ color: '#666', lineHeight: '1.5', marginBottom: '15px' }}>{f.a}</p>
            <button 
              onClick={() => navigate('/')}
              style={{ width: '100%', padding: '12px', borderRadius: '10px', border: 'none', backgroundColor: '#f3f4f6', fontWeight: 'bold', cursor: 'pointer' }}
            >
              {f.cta}
            </button>
          </div>
        ))}

        <div style={{ marginTop: '40px', padding: '30px', backgroundColor: '#111', borderRadius: '20px', color: 'white', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Ainda tem dúvidas?</h2>
          <p style={{ color: '#aaa', marginBottom: '20px' }}>Fale direto com nosso atendimento no WhatsApp.</p>
          <a 
            href="https://wa.me/5511933515087" 
            style={{ display: 'inline-block', backgroundColor: '#25D366', color: 'white', padding: '15px 30px', borderRadius: '50px', fontWeight: '900', textDecoration: 'none', fontSize: '1.1rem' }}
          >
            CHAMAR AGORA
          </a>
        </div>
      </div>
    </div>
  );
}