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

const update = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const { authorization } = req.headers;

  const { type, message } = await blogPostService.update(authorization, id, title, content);

  if (type) return res.status(type).json({ message });

  return res.status(200).json(message);
};

const findByQuery = async (req, res) => {
  const { q } = req.query;

  const { type, message } = await blogPostService.findByQuery(q);

  if (type) return res.status(type).json({ message });

  return res.status(200).json(message);
};

const insert = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { authorization } = req.headers;

  const { type, message } = await blogPostService
  .insert(authorization, title, content, categoryIds);

  if (type) return res.status(type).json({ message });

  return res.status(201).json(message);
};

module.exports = {
  findAll,
  findById,
  update,
  findByQuery,
  insert,
};