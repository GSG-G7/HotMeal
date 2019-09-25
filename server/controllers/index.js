const express = require('express');
const postFeedback = require('./postFeedback');
const auth = require('./middlewares/auth');
const login = require('./login');
const logout = require('./logout');
const getMeals = require('./getMeals');

const router = express.Router();

router.post('/login', login);
router.use(auth);
router.post('/post-feedback', postFeedback);
router.get('/meals', getMeals);
router.get('/logout', logout);
module.exports = router;
