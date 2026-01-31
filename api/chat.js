import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { chatInput } = req.body;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini", // Modelo ultra rápido e estável
      messages: [
        { 
          role: "system", 
          content: "Você é a Karen, a consultora oficial e anfitriã sagaz do Bora Lá. Representante da Como Que Faz Marketing Digital. Sua voz é cordial, educada e resolutiva. Ajude com o aluguel de chácaras e o uso do app (Calculadora de Churrasco, Guia, etc). Sempre termine com um convite gentil à ação." 
        },
        { role: "user", content: chatInput }
      ],
      temperature: 0.7,
    });

    return res.status(200).json({ output: response.choices[0].message.content });
  } catch (error) {
    console.error("Erro OpenAI:", error);
    return res.status(200).json({ output: "Olá! Sou a Karen. Estou apenas recalibrando meus sistemas para te dar a melhor atenção possível. Pode me dar um 'oi' novamente?" });
  }
}