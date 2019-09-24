const express = require('express');
const postFeedback = require('./postFeedback');

const router = express.Router();

const getMeals = require('./getMeals');

router.get('/meals', getMeals);
router.post('/post-feedback', postFeedback);

module.exports = router;
