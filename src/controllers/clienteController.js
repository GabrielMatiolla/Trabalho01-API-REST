const pool = require('../config/database');

exports.createCliente = async (req, res) => {
    const { nome, altura, nascimento, cidade_id } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO clientes (nome, altura, nascimento, cidade_id) VALUES (?, ?, ?, ?)',
            [nome, altura, nascimento, cidade_id]
        );
        res.status(201).json({ id: result.insertId, ...req.body });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao cadastrar cliente', details: error.message });
    }
};

exports.getPedidosByCliente = async (req, res) => {
    const { id } = req.params;
    try {
        const [pedidos] = await pool.query('SELECT * FROM pedidos WHERE cliente_id = ?', [id]);
        if (pedidos.length === 0) {
            return res.status(404).json({ message: 'Nenhum pedido encontrado para este cliente.' });
        }
        res.status(200).json(pedidos);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar pedidos do cliente', details: error.message });
    }
};