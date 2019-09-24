const express = require('express');
const postFeedback = require('./postFeedback');
const getMeals = require('./getMeals');

const router = express.Router();


router.get('/meals', getMeals);
router.post('/post-feedback', postFeedback);

module.exports = router;
