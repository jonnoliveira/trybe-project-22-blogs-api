const { blogPostService } = require('../services');

const findAll = async (_req, res) => {
  const { type, message } = await blogPostService.findAll();

  if (type) return res.status(400).json({ message: 'Erro na requisição dos posts' });

  return res.status(200).json(message);
};

const findById = async (req, res) => {
  const { id } = req.params;

  const { type, message } = await blogPostService.findById(id);

  if (type) return res.status(type).json({ message });

  return res.status(200).json(message);
};

module.exports = {
  findAll,
  findById,
};