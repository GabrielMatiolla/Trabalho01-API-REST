const pool = require('../config/database');

exports.createPedido = async (req, res) => {
    const { endereco, cliente_id, produtos } = req.body; 
    
    if (!endereco || !cliente_id || !produtos || produtos.length === 0) {
        return res.status(400).json({ error: 'Dados inválidos para criar o pedido.' });
    }
    
    const connection = await pool.getConnection();

    try {
        await connection.beginTransaction();

        const horario = new Date();
        const [pedidoResult] = await connection.query(
            'INSERT INTO pedidos (horario, endereco, cliente_id) VALUES (?, ?, ?)',
            [horario, endereco, cliente_id]
        );
        const pedidoId = pedidoResult.insertId;

        for (const produto of produtos) {
            await connection.query(
                'INSERT INTO pedidos_produtos (pedido_id, produto_id, preco, quantidade) VALUES (?, ?, ?, ?)',
                [pedidoId, produto.produto_id, produto.preco, produto.quantidade]
            );
            await connection.query(
                'UPDATE produtos SET quantidade = quantidade - ? WHERE id = ?',
                [produto.quantidade, produto.produto_id]
            );
        }

        await connection.commit();
        res.status(201).json({ message: 'Pedido realizado com sucesso!', pedidoId });

    } catch (error) {
        await connection.rollback();
        res.status(500).json({ error: 'Erro ao realizar pedido', details: error.message });
    } finally {
        connection.release();
    }
};

exports.getAllPedidos = async (req, res) => {
     try {
        const [pedidos] = await pool.query(`
            SELECT p.id, p.horario, p.endereco, c.nome as cliente_nome
            FROM pedidos p
            JOIN clientes c ON p.cliente_id = c.id
            ORDER BY p.horario DESC
        `);
        res.status(200).json(pedidos);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao consultar pedidos', details: error.message });
    }
};