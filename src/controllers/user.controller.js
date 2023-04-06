const jwt = require('jsonwebtoken');
const { userService } = require('../services');

const secret = process.env.JWT_SECRET;

const insert = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const { type, message } = await userService.insert(displayName, email, password, image);

  if (type) return res.status(type).json({ message });

  const jwtConfig = { expiresIn: '1d', algorithm: 'HS256' };
  
  const token = jwt.sign({ data: { userId: message.id } }, secret, jwtConfig);

  return res.status(201).json({ token });
};

module.exports = {
  insert,
};