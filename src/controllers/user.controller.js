const { userService } = require('../services');
const { generateToken } = require('../auth/validateJWT');

const insert = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const { type, message } = await userService.insert(displayName, email, password, image);

  if (type) return res.status(type).json({ message });

  const token = generateToken(message);

  return res.status(201).json({ token });
};

const getAllUsers = async (_req, res) => {
  const { type, message } = await userService.getAllUsers();

  if (type) return res.status(type).json(message);

  return res.status(200).json(message);
};

module.exports = {
  insert,
  getAllUsers,
};