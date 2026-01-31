import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { generateText } from 'ai';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { chatInput } = req.body;

  try {
    const api_key = process.env.GOOGLE_GENERATIVE_AI_API_KEY || process.env.GEMINI_API_KEY;

    if (!api_key) {
      return res.status(200).json({ output: "DÉBITO TÉCNICO: Chave não encontrada na Vercel." });
    }

    const google = createGoogleGenerativeAI({ apiKey: api_key });

    const { text } = await generateText({
      // Mudança crucial: usando o identificador de modelo estável
      model: google('models/gemini-1.5-flash-latest'), 
      system: `Você é a Karen, a anfitriã cordial e sagaz do Bora Lá. 
      Representante da Como Que Faz Marketing Digital.
      Personalidade: Educada, institucional e prestativa.
      Sempre ajude com informações sobre chácaras e termine com um convite gentil à ação.`,
      prompt: chatInput,
    });

    return res.status(200).json({ output: text });
  } catch (error) {
    // Se ainda der erro, vamos tentar o modelo 1.0 que é o mais compatível de todos
    return res.status(200).json({ output: `DÉBITO TÉCNICO: ${error.message}` });
  }
}