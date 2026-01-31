const { OpenAI } = require("openai");

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { chatInput } = req.body;

  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return res.status(200).json({ output: "DÉBITO TÉCNICO: A chave OPENAI_API_KEY não foi detectada no ambiente. Verifique o painel da Vercel." });
  }

  const openai = new OpenAI({ apiKey });

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { 
          role: "system", 
          content: "Você é a Karen, a anfitriã cordial do Bora Lá. Representante da Como Que Faz Marketing Digital. Ajude com o aluguel de chácaras e explique as funções do app como a Calculadora de Churrasco. Seja elegante e prestativa." 
        },
        { role: "user", content: chatInput }
      ],
    });

    return res.status(200).json({ output: response.choices[0].message.content });
  } catch (error) {
    return res.status(200).json({ output: `DÉBITO TÉCNICO: ${error.message}` });
  }
}