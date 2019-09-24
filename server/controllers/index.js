const express = require('express');
const addOrder = require('./order');

const router = express.Router();
router.post('/order', addOrder);

module.exports = router;
