import { google } from '@ai-sdk/google';
import { generateText } from 'ai';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { chatInput } = req.body;

  try {
    // Mudamos para o 'gemini-1.5-pro', que é o modelo mais estável e inteligente
    const { text } = await generateText({
      model: google('gemini-1.5-pro'), 
      system: `Você é a Karen, a anfitriã cordial e sagaz do app Bora Lá. 
      Representante da Como Que Faz Marketing Digital.
      Personalidade: Educada, institucional e prestativa.
      Sempre ajude com informações sobre chácaras e termine com um convite gentil à ação.`,
      prompt: chatInput,
    });

    return res.status(200).json({ output: text });
  } catch (error) {
    console.error("ERRO_TECNICO:", error);
    return res.status(200).json({ output: `DÉBITO TÉCNICO: ${error.message}` });
  }
}