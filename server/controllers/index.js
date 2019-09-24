const express = require('express');
const postFeedback = require('./postFeedback');

const router = express.Router();

router.post('/post-feedback', postFeedback);

module.exports = router;
