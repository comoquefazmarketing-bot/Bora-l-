const { OpenAI } = require("openai");

module.exports = async (req, res) => {
  // Habilitar CORS para evitar bloqueios de navegador
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { chatInput } = req.body;
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return res.status(200).json({ output: "Olá! Sou a Karen. Estou em treinamento rápido (chave ausente na Vercel). Felipe, verifique as variáveis de ambiente!" });
  }

  const openai = new OpenAI({ apiKey });

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { 
          role: "system", 
          content: "Você é a Karen, a anfitriã cordial e sagaz do Bora Lá. Representante da Como Que Faz Marketing Digital. Ajude com chácaras em Novo Horizonte e ferramentas como a Calculadora de Churrasco. Seu tom é elegante e prestativa." 
        },
        { role: "user", content: chatInput }
      ],
    });

    return res.status(200).json({ output: completion.choices[0].message.content });
  } catch (error) {
    console.error(error);
    return res.status(200).json({ output: `ERRO DE CONEXÃO: ${error.message}` });
  }
};