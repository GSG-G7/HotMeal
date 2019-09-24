const postFeedback = require('../database/queries/postFeedback');
const feedbackSchema = require('../validation/feedback');

module.exports = (req, res, next) => {
  feedbackSchema
    .validateAsync(req.body)
    .then(postFeedback)
    .then(() => {
      res.status(201).send({ statusCode: 201, message: 'Your feedback has sent!' });
    })
    .catch((err) => {
      if (err.details) {
        if (err.details[0].message) {
          res.status(400).send({ statusCode: 400, error: err.details[0].message });
        }
      } else {
        next(err);
      }
    });
};
