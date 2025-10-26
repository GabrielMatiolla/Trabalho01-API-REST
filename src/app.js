const express = require('express');
const cors = require('cors');
require('dotenv').config();

const clienteRoutes = require('./routes/clienteRoutes');
const produtoRoutes = require('./routes/produtoRoutes');
const pedidoRoutes = require('./routes/pedidoRoutes');

const app = express();
const PORT = process.env.API_PORT || 3000;

app.use(cors());
app.use(express.json()); 

app.use('/api', clienteRoutes);
app.use('/api', produtoRoutes);
app.use('/api', pedidoRoutes);

app.get('/', (req, res) => {
    res.send('API da Loja Online está funcionando!');
});

app.use((req, res) => {
    res.status(404).json({ error: 'Rota não encontrada' });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});