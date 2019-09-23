const postFeedback = require('../database/queries/postFeedback');
const feedbackSchema = require('../validation/feedback');

module.exports = (req, res, next) => {
  feedbackSchema
    .validateAsync(req.body)
    .then((data) => postFeedback(data))
    .then(() => {
      res.status(200).send({ statusCode: 200, message: 'Your feedback has sent!' });
    })
    .catch((err) => {
      if (err.details) {
        if (err.details[0].message) {
          res.status(401).send({ statusCode: 401, message: err.details[0].message });
        }
      } else {
        next(err);
      }
    });
};
