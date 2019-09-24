const express = require('express');
const postFeedback = require('./postFeedback');
const auth = require('./auth');
const login = require('./login');
const logout = require('./logout');

const router = express.Router();

router.use(auth);
router.post('/login', login);
router.post('/post-feedback', postFeedback);
router.get('/logout', logout);
module.exports = router;
