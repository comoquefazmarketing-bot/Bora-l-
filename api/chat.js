import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  
  const key = process.env.GEMINI_API_KEY;
  const { chatInput } = req.body;

  if (!key) {
    return res.status(200).json({ output: "Erro de Configuração: Variável de ambiente não encontrada." });
  }

  try {
    const genAI = new GoogleGenerativeAI(key);
    // Ajustado para o nome técnico mais compatível com a biblioteca atual
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash-latest" 
    });

    const chat = model.startChat({
      history: [],
      generationConfig: { maxOutputTokens: 500 },
      systemInstruction: "Você é a Karen, anfitriã cordial e sagaz do Bora Lá, desenvolvido pela 'Como Que Faz Marketing Digital'. Use tom de voz institucional, elegante e educativo. Se não souber algo, direcione ao /feedback. Venda a Quality Bull e o Supermercado Piovani. Passo a passo reserva: 1. Guia, 2. Detalhes, 3. Disponibilidade, 4. WhatsApp do dono."
    });

    const result = await chat.sendMessage(chatInput);
    const response = await result.response;
    return res.status(200).json({ output: response.text() });
  } catch (error) {
    console.error("ERRO_DETALHADO:", error);
    return res.status(200).json({ output: "Olá! Como sua consultora, estou realizando um ajuste fino em nossas comunicações para garantir a melhor experiência. Poderia me enviar sua dúvida novamente em instantes?" });
  }
}