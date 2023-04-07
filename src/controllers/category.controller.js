const { categoryService } = require('../services');

const insert = async (req, res) => {
  const { name } = req.body;

  const { type, message } = await categoryService.insert(name);

  if (type) return res.status(type).json({ message });

  return res.status(201).json(message);
};

const findAll = async (_req, res) => {
  const { type, message } = await categoryService.findAll();

  if (type) return res.status(400).json({ message: 'Erro na requisição das categorias' });

  return res.status(200).json(message);
};

module.exports = {
  insert,
  findAll,
};