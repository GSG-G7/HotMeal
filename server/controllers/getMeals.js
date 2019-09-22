const getMealsByCat = require('../database/queries/getMealsByCat');

const getMeals = (err, req, res, next) => {
  const { category } = req.query;
  getMealsByCat(category)
    .then((result) => res.status(200).send({ code: 200, data: result }))
    .catch(() => next(err));
};

module.exports = getMeals;
