const { GoogleGenerativeAI } = require("@google/generative-ai");

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { chatInput } = req.body;

  // Usa o nome padrão que você configurou
  const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENERATIVE_AI_API_KEY || process.env.GEMINI_API_KEY);

  try {
    // Forçando a versão estável 'gemini-1.5-flash' sem passar por rotas beta
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: `Aja como a Karen, anfitriã cordial do Bora Lá (Como Que Faz Marketing Digital). Responda com educação e foque em ajudar com lazer e chácaras. Pergunta: ${chatInput}` }] }],
    });

    const response = await result.response;
    return res.status(200).json({ output: response.text() });
  } catch (error) {
    console.error("ERRO_REAL:", error.message);
    // Se ainda der erro de versão, tentamos o modelo 1.0 Pro que é o "tanque de guerra" do Google
    try {
        const fallbackModel = genAI.getGenerativeModel({ model: "gemini-1.0-pro" });
        const fallbackResult = await fallbackModel.generateContent(`Olá, sou a Karen. ${chatInput}`);
        return res.status(200).json({ output: fallbackResult.response.text() });
    } catch (finalError) {
        return res.status(200).json({ output: "Olá! Sou a Karen, consultora do Bora Lá. Estamos com uma instabilidade momentânea nos nossos servidores de IA, mas já estamos resolvendo. Por favor, tente novamente em instantes!" });
    }
  }
}