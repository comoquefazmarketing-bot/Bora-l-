import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  
  const { chatInput } = req.body;
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

  try {
    // Testando o modelo padrão mais estável
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const result = await model.generateContent(`Você é a Karen, anfitriã do Bora Lá. Responda: ${chatInput}`);
    const text = result.response.text();

    return res.status(200).json({ output: text });
  } catch (error) {
    // Isso vai nos mostrar o erro real no chat para resolvermos de vez
    return res.status(200).json({ output: `DEBUG_ERROR: ${error.message}` });
  }
}