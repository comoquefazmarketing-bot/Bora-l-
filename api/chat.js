import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  
  const key = process.env.GEMINI_API_KEY;
  const { chatInput } = req.body;

  if (!key) {
    return res.status(200).json({ output: "Erro de Configuração: A chave GEMINI_API_KEY não foi encontrada nas variáveis de ambiente da Vercel." });
  }

  try {
    const genAI = new GoogleGenerativeAI(key);
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      systemInstruction: "Você é a Karen, anfitriã cordial do Bora Lá. Responda de forma educada e institucional."
    });

    const result = await model.generateContent(chatInput);
    const response = await result.response;
    return res.status(200).json({ output: response.text() });
  } catch (error) {
    console.error("ERRO_DETALHADO:", error);
    return res.status(200).json({ output: `Erro na API do Google: ${error.message}. Verifique se a API de Linguagem está ativa.` });
  }
}