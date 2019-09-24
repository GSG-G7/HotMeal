const express = require('express');
const addOrder = require('./order');
const postFeedback = require('./postFeedback');

const router = express.Router();
router.post('/order', addOrder);

router.post('/post-feedback', postFeedback);

module.exports = router;
