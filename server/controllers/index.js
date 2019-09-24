const express = require('express');
const postFeedback = require('./feedback.test');

const router = express.Router();

router.post('/post-feedback', postFeedback);

module.exports = router;
