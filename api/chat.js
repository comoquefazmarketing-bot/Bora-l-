import { google } from '@ai-sdk/google';
import { generateText } from 'ai';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  
  const { chatInput } = req.body;

  try {
    const { text } = await generateText({
      model: google('models/gemini-1.5-flash'),
      system: `Você é a Karen, a anfitriã cordial e sagaz do app Bora Lá, desenvolvido pela 'Como Que Faz Marketing Digital'. 
      Personalidade: Educada, institucional e prestativa.
      Objetivo: Ajudar no aluguel de chácaras em Novo Horizonte e explicar o app.
      Instruções de Reserva: 1. Guia, 2. Detalhes, 3. Disponibilidade, 4. WhatsApp do dono.
      Sempre termine com um convite cordial à ação.`,
      prompt: chatInput,
    });

    return res.status(200).json({ output: text });
  } catch (error) {
    console.error("Erro Vercel AI SDK:", error);
    return res.status(500).json({ output: "Olá! Como sua consultora, estou refinando nossos sistemas para te atender melhor. Poderia tentar novamente em alguns segundos?" });
  }
}