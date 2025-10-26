const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

router.get('/produtos', produtoController.getAllProdutos);

router.post('/admin/produtos', produtoController.createProduto);

router.put('/admin/produtos/:id', produtoController.updateProduto);

router.delete('/admin/produtos/:id', produtoController.deleteProduto);

module.exports = router;