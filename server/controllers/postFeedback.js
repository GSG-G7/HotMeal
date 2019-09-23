const Joi = require('@hapi/joi');
const { postFeedback } = require('../database/config/connection');
const { schema } = require('../validation/feedback');

exports.PostFeedback = (req, res, next) => {
  Joi.validate(req.body, schema, (err) => {
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
