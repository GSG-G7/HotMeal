const getMealsByCat = require('../database/queries/getMealsByCat');

const getMeals = (req, res, next) => {
  let { category = 'main' } = req.query;
  if (category) category = category.toLowerCase();
  getMealsByCat(category)
    .then((result) => (result.rows.length
      ? res.status(200).send({ code: 200, data: result.rows })
      : res.status(400).send({
        code: 400,
        error: 'Bad Request: there is no such category'
      })),)
    .catch((err) => next(err));
};

module.exports = getMeals;
