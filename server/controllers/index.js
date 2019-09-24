const express = require('express');

const router = express.Router();

const getMeals = require('./getMeals');

router.get('/meals', getMeals);

module.exports = router;
