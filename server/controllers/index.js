const express = require('express');
const addOrder = require('./postOrder');
const postFeedback = require('./postFeedback');
const auth = require('./middlewares/auth');
const login = require('./login');
const logout = require('./logout');
const getMeals = require('./getMeals');

const router = express.Router();

router.post('/login', login);
router.get('/meals', getMeals);
router.use(auth);
router.post('/post-feedback', postFeedback);
router.post('/order', addOrder);
router.get('/logout', logout);
module.exports = router;
