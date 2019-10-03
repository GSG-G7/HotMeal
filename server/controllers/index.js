const express = require('express');
const addOrder = require('./postOrder');
const postFeedback = require('./postFeedback');
const auth = require('./middlewares/auth');
const login = require('./login');
const logout = require('./logout');
const getMeals = require('./getMeals');

const router = express.Router();

router.post('/login', login);
router.post('/post-feedback', postFeedback);
router.get('/meals', getMeals);
router.post('/order', addOrder);
router.get('/logout', logout);
router.use(auth);
module.exports = router;
