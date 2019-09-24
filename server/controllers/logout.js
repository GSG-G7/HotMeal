module.exports = (req, res) => {
  res.cleerCookie('HotmealToken').send({ statusCode: 200 });
};
