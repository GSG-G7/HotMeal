module.exports = (req, res) => {
  res.clearCookie('hotmeal_token').send({ statusCode: 200 });
};
