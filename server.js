/* @author Felipe Makarios | Creator - Bora Lá */
import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
app.use(cors());
app.use(express.json());

// ROTA INTERNA DIRETA PARA O N8N
const N8N_URL = 'http://192.168.1.5:5678/webhook-test/conversa-lia';

app.post('/api/chat', async (req, res) => {
    try {
        console.log('📩 Recebido do Front-end');
        const response = await fetch(N8N_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(req.body)
        });
        const data = await response.json();
        console.log('✅ Resposta do n8n enviada ao Front');
        res.json(data);
    } catch (error) {
        console.error('❌ Erro na comunicação interna:', error.message);
        res.status(500).json({ error: 'N8N em 192.168.1.5 não respondeu' });
    }
});

app.listen(3001, () => {
    console.log('🚀 API Bora Lá ON: http://192.168.1.5:3001');
    console.log('🔗 Apontando para n8n: ' + N8N_URL);
});