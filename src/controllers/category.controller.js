const { categoryService } = require('../services');

const insert = async (req, res) => {
  const { name } = req.body;

  const { type, message } = await categoryService.insert(name);

  if (type) return res.status(type).json({ message });

  return res.status(201).json(message);
};

module.exports = {
  insert,
};