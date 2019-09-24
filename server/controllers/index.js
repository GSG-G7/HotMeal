const express = require('express');
const postFeedback = require('./postFeedback');

const login = require('./login');

const router = express.Router();

router.post('/login', login);
router.post('/post-feedback', postFeedback);

module.exports = router;
