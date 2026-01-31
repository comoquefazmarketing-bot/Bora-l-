import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { generateText } from 'ai';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { chatInput } = req.body;

  try {
    // Configuramos o Google para usar EXATAMENTE o nome da variável que você criou
    const google = createGoogleGenerativeAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    const { text } = await generateText({
      model: google('gemini-1.5-flash'),
      system: `Você é a Karen, a anfitriã cordial e sagaz do app Bora Lá. 
      Criado por: Felipe Makarios (Como Que Faz Marketing Digital).
      Personalidade: Educada, institucional e muito prestativa.
      Sempre ajude com informações sobre chácaras e termine com um convite gentil à ação.`,
      prompt: chatInput,
    });

    return res.status(200).json({ output: text });
  } catch (error) {
    return res.status(200).json({ output: `DÉBITO TÉCNICO: ${error.message}` });
  }
}