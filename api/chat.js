import fetch from 'node-fetch';
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');
  const N8N_URL = process.env.N8N_URL || 'http://192.168.1.5:5678/webhook-test/conversa-lia';
  try {
    const response = await fetch(N8N_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body)
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Erro na Karen', details: error.message });
  }
}