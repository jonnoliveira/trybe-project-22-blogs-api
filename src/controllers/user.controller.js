const { userService } = require('../services');
const { generateToken } = require('../auth/validateJWT');

const insert = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const { type, message } = await userService.insert(displayName, email, password, image);

  if (type) return res.status(type).json({ message });

  const token = generateToken(message);

  return res.status(201).json({ token });
};

const findAll = async (_req, res) => {
  const { type, message } = await userService.findAll();

  if (type) return res.status(type).json(message);

  return res.status(200).json(message);
};

const findById = async (req, res) => {
  const { id } = req.params;

  const { type, message } = await userService.findById(id);

  if (type) return res.status(type).json({ message });

  return res.status(200).json(message);
};

module.exports = {
  insert,
  findAll,
  findById,
};