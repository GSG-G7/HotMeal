const express = require('express');
const postFeedback = require('./postFeedback');
const auth = require('./middlewares/auth');
const login = require('./login');
const logout = require('./logout');

const router = express.Router();

router.post('/login', login);
router.use(auth); // why
router.post('/post-feedback', postFeedback);
router.get('/logout', logout);
module.exports = router;
