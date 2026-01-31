import { google } from '@ai-sdk/google';
import { generateText } from 'ai';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { chatInput } = req.body;

  try {
    // Teste de presença da chave (sem exibir a chave toda por segurança)
    const hasKey = !!process.env.GEMINI_API_KEY;
    if (!hasKey) throw new Error("A variável GEMINI_API_KEY não foi encontrada no ambiente da Vercel.");

    const { text } = await generateText({
      model: google('gemini-1.5-flash'),
      prompt: chatInput,
    });

    return res.status(200).json({ output: text });
  } catch (error) {
    // A Karen vai cuspir o erro técnico para nós matarmos a charada
    return res.status(200).json({ output: `DÉBITO TÉCNICO: ${error.message}` });
  }
}