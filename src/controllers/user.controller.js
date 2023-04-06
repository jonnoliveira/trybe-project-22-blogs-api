const { userService } = require('../services');

const findByLogin = async (req, res) => {
  const { email, password } = req.body;
  const result = await userService.findByLogin(email, password);
  console.log(result);
  // if (type) return res.status(type).json(message);

  // return res.status(200).json(message);
};

module.exports = {
  findByLogin,
};