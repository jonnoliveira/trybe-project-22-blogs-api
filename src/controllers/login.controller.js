const { loginService } = require('../services');
const { generateToken } = require('../auth/validateJWT');

const findByLogin = async (req, res) => {
  const { email } = req.body;
  const { type, message } = await loginService.findByLogin(email);

  if (type) return res.status(type).json({ message });

  const token = generateToken(message);

  return res.status(200).json({ token });
};

module.exports = {
  findByLogin,
};