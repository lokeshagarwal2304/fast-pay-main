const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

router.post('/transaction', transactionController.makeTransaction);
router.get('/transactions/:upi_id', transactionController.getTransactions);

module.exports = router;
