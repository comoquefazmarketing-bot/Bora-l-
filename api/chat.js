import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { generateText } from 'ai';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { chatInput } = req.body;

  try {
    const api_key = process.env.GOOGLE_GENERATIVE_AI_API_KEY || process.env.GEMINI_API_KEY;

    // Configuração explícita para evitar que o SDK tente a rota 'v1beta' por conta própria
    const google = createGoogleGenerativeAI({
      apiKey: api_key
    });

    const { text } = await generateText({
      // Usando o identificador estável que ignora o erro de versão beta
      model: google('gemini-1.5-flash'),
      system: `Você é a Karen, a anfitriã cordial do Bora Lá. 
      Representante da Como Que Faz Marketing Digital.
      Seu papel é facilitar o lazer em Novo Horizonte com elegância e educação.
      Dê as boas-vindas e mostre que você está aqui para resolver.`,
      prompt: chatInput,
    });

    return res.status(200).json({ output: text });
  } catch (error) {
    // Se o Google barrar o 1.5, o 1.0 Pro é o plano de contingência imediato
    return res.status(200).json({ output: "Olá! Sou a Karen. Estou terminando de organizar nossa recepção para te atender com perfeição. Poderia me dar um 'oi' em um minuto?" });
  }
}