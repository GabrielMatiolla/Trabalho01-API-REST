const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

router.post('/clientes', clienteController.createCliente);

router.get('/clientes/:id/pedidos', clienteController.getPedidosByCliente);

module.exports = router;