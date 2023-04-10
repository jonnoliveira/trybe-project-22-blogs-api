const { blogPostService } = require('../services');

const findAll = async (_req, res) => {
  const { type, message } = await blogPostService.findAll();

  if (type) return res.status(400).json({ message: 'Erro na requisição dos posts' });

  return res.status(200).json(message);
};

module.exports = {
  findAll,
};