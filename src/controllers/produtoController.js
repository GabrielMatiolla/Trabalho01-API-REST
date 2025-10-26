const pool = require('../config/database');

exports.createProduto = async (req, res) => {
    const { nome, preco, quantidade, categoria_id } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO produtos (nome, preco, quantidade, categoria_id) VALUES (?, ?, ?, ?)',
            [nome, preco, quantidade, categoria_id]
        );
        res.status(201).json({ message: 'Produto criado com sucesso!', id: result.insertId });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar produto', details: error.message });
    }
};

exports.getAllProdutos = async (req, res) => {
    try {
        const [produtos] = await pool.query('SELECT * FROM produtos WHERE quantidade > 0');
        res.status(200).json(produtos);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao consultar produtos', details: error.message });
    }
};

exports.updateProduto = async (req, res) => {
    const { id } = req.params;
    const { nome, preco, quantidade, categoria_id } = req.body;
    try {
        await pool.query(
            'UPDATE produtos SET nome = ?, preco = ?, quantidade = ?, categoria_id = ? WHERE id = ?',
            [nome, preco, quantidade, categoria_id, id]
        );
        res.status(200).json({ message: 'Produto atualizado com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar produto', details: error.message });
    }
};

exports.deleteProduto = async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM produtos WHERE id = ?', [id]);
        res.status(200).json({ message: 'Produto excluído com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir produto', details: error.message });
    }
};