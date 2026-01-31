import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { chatInput } = req.body;

  try {
    // Usando o modelo estável sem sufixos
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Você é a Karen, anfitriã cordial e sagaz do Bora Lá (Como Que Faz Marketing Digital). 
    Responda de forma elegante, prestativa e institucional. 
    Seu objetivo é ajudar com o aluguel de chácaras e uso do app (Calculadora de Churrasco, Guia, etc).
    Pergunta do usuário: ${chatInput}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return res.status(200).json({ output: text });
  } catch (error) {
    console.error("ERRO_FINAL:", error);
    return res.status(200).json({ output: "Olá! É um prazer atender você. Estou atualizando minhas informações para te dar a melhor resposta possível. Pode me perguntar novamente em um minutinho?" });
  }
}