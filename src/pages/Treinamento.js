import React from 'react';
import { Target, Heart, ShieldCheck, Zap, Award } from 'lucide-react';

const Treinamento = () => {
  const sections = [
    {
      icon: <Target size={24} color="#0984E3" />,
      title: "Nossa Missão: O Propósito Bora Lá",
      content: "Nós não vendemos apenas locação de chácaras. Nós entregamos o cenário para as melhores memórias das famílias. Quando você fala com um cliente, você é a ponte entre o estresse do dia a dia e o lazer perfeito. Acredite: o que fazemos muda o fim de semana de alguém."
    },
    {
      icon: <Award size={24} color="#0984E3" />,
      title: "A Autoridade: Como Que Faz",
      content: "Você representa a 'Como Que Faz Marketing Digital', a agência do Felipe Makarios. Somos referência em transformar ideias em realidade. Transmita essa segurança: somos profissionais, organizados e apaixonados pelo que fazemos. O cliente precisa sentir que está em boas mãos."
    },
    {
      icon: <Zap size={24} color="#0984E3" />,
      title: "A Estrela: Calculadora de Churrasco",
      content: "Isso aqui é o nosso diferencial tecnológico! É o 'uau' do cliente. Use com orgulho. 'Já conhece nossa calculadora? Ela faz tudo por você!'. Mostre que o app é inteligente e foi feito para facilitar a vida dele."
    },
    {
      icon: <Heart size={24} color="#0984E3" />,
      title: "O Toque Humano (A Verdade)",
      content: "Nunca seja um robô. Se o cliente está em dúvida, ajude-o como se fosse para um amigo. A verdade na voz vem da empatia. Se a chácara é boa para crianças, diga com entusiasmo! Se não sabe algo, diga que vai buscar a melhor resposta com o Felipe. Transparência gera venda."
    },
    {
      icon: <ShieldCheck size={24} color="#0984E3" />,
      title: "Sua Postura Comercial",
      content: "Você é uma Consultora de Lazer. Sua meta é fazer o cliente se sentir acolhido. Um atendimento excepcional faz o cliente voltar e indicar o app. Você é a cara do Bora Lá!"
    }
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', backgroundColor: '#F0F2F5', minHeight: '100vh' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px', background: 'linear-gradient(135deg, #0984E3 0%, #6C5CE7 100%)', padding: '40px 20px', borderRadius: '15px', color: 'white' }}>
        <h1 style={{ margin: '0', fontSize: '28px' }}>Manifesto de Cultura</h1>
        <p style={{ opacity: '0.9', fontSize: '18px' }}>Seja a voz do Bora Lá</p>
      </header>

      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        {sections.map((section, index) => (
          <div key={index} style={{ 
            backgroundColor: 'white', 
            padding: '25px', 
            borderRadius: '15px', 
            marginBottom: '20px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
            borderLeft: '5px solid #0984E3'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              {section.icon}
              <h3 style={{ margin: '0 0 0 10px', color: '#2D3436' }}>{section.title}</h3>
            </div>
            <p style={{ color: '#636E72', lineHeight: '1.6', fontSize: '16px' }}>{section.content}</p>
          </div>
        ))}
      </div>

      <footer style={{ marginTop: '50px', textAlign: 'center', paddingBottom: '30px' }}>
        <p style={{ color: '#2D3436', fontWeight: 'bold' }}>Idealizado por Felipe Makarios</p>
        <p style={{ color: '#B2BEC3', fontSize: '14px' }}>Como Que Faz Marketing Digital ®</p>
      </footer>
    </div>
  );
};

export default Treinamento;