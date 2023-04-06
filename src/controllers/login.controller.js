const jwt = require('jsonwebtoken');
const { loginService } = require('../services');

const secret = process.env.JWT_SECRET;

const findByLogin = async (req, res) => {
  const { email } = req.body;
  const { type, message } = await loginService.findByLogin(email);

  if (type) return res.status(type).json({ message });

  const jwtConfig = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };
  
  const token = jwt.sign({ data: { userId: message.id } }, secret, jwtConfig);

  return res.status(200).json({ token });
};

module.exports = {
  findByLogin,
};