const express = require('express');
const addOrder = require('./postOrder');
const postFeedback = require('./postFeedback');
const getMeals = require('./getMeals');

const router = express.Router();
router.post('/order', addOrder);


router.get('/meals', getMeals);
router.post('/post-feedback', postFeedback);

module.exports = router;
