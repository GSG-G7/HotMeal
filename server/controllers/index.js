const express = require('express');
const postFeedback = require('./postFeedback');

const router = express.Router();

router.post('/postfeedback', postFeedback);

router.use((req, res) => {
  res.status(400).send('Client Error');
});
// eslint-disable-next-line no-unused-vars
router.use((err, req, res, next) => {
  res.status(500).send('Internal server error');
});

module.exports = router;
