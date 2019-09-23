const Joi = require('@hapi/joi');
const postFeedback = require('../database/config/connection');
const feedbackSchema = require('../validation/feedback');

const PostFeedback = (req, res, next) => {
  Joi.validate(req.body, feedbackSchema, (err) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log(err); // it is gonna be changed later
    } else {
      postFeedback(req.body)
        .then(res.send({ code: 200 }))
        .catch((error) => next(error));
    }
  });
};
module.exports = PostFeedback;
