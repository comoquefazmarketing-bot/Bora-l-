import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { generateText } from 'ai';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { chatInput } = req.body;

  try {
    // Tenta pegar o nome novo OU o antigo (Segurança máxima)
    const api_key = process.env.GOOGLE_GENERATIVE_AI_API_KEY || process.env.GEMINI_API_KEY;

    if (!api_key) {
      return res.status(200).json({ output: "DÉBITO TÉCNICO: Nenhuma chave (GOOGLE ou GEMINI) foi encontrada na Vercel. Verifique o painel Settings." });
    }

    const google = createGoogleGenerativeAI({ apiKey: api_key });

    const { text } = await generateText({
      model: google('gemini-1.5-flash'), // Voltando para o Flash que é mais rápido
      system: `Você é a Karen, a anfitriã cordial e sagaz do Bora Lá.
      Desenvolvido por: Felipe Makarios (Como Que Faz Marketing Digital).
      Tom de voz: Educada, institucional e resolutiva.
      Sempre ajude com o aluguel de chácaras e finalize com um convite gentil.`,
      prompt: chatInput,
    });

    return res.status(200).json({ output: text });
  } catch (error) {
    return res.status(200).json({ output: `DÉBITO TÉCNICO: ${error.message}` });
  }
}