const { Op } = require('sequelize');

const { BlogPost, Category, User } = require('../models');

const { validateToken } = require('../auth/validateJWT');
const { validUpdatePost } = require('../middlewares/validUpdatePost');

const findAll = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return { type: null, message: posts };
};

const findById = async (id) => {
  const post = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  if (!post) return { type: 404, message: 'Post does not exist' };

  return { type: null, message: post };
};

const update = async (authorization, id, title, content) => {
  const { payload } = validateToken(authorization);
  const isValid = validUpdatePost(title, content);

  if (isValid.type) return isValid;

  const post = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  
  if (!post) return { type: 404, message: 'Post does not exist' };
  if (post.user.id !== payload) return { type: 401, message: 'Unauthorized user' };

  post.title = title;
  post.content = content;

  return { type: null, message: post };
};

const findByQuery = async (q) => {
  const posts = await BlogPost.findAll({
    where: { 
      [Op.or]: [{ title: { [Op.like]: `%${q}%` } }, { content: { [Op.like]: `%${q}%` } }],
    },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return { type: null, message: posts };
};

module.exports = {
  findAll,
  findById,
  update,
  findByQuery,
};