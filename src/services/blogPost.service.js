const { Op } = require('sequelize');

const { BlogPost, Category, User, PostCategory } = require('../models');

const { validateToken } = require('../auth/validateJWT');
const { validUpdatePost } = require('../middlewares/validUpdatePost');
const { validInsertPost } = require('../middlewares/validInsertPost');

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

const insert = async (authorization, title, content, categoryIds) => {
  const { payload } = validateToken(authorization);
  const isValid = validInsertPost(title, content, categoryIds);

  if (isValid.type) return isValid;

  const categories = await Category.findAndCountAll({
    where: { id: categoryIds },
  });

  if (categories.count !== categoryIds.length) {
    return { type: 400, message: 'one or more "categoryIds" not found' }; 
  }

  const newPost = await BlogPost.create({
    title, content, userId: payload, published: new Date(), updated: new Date(),
  });

  categories.rows
    .map((category) => PostCategory.create({ postId: newPost.id, categoryId: category.id }));

  return { type: null, message: newPost };
};

const remove = async (authorization, id) => {
  const { payload } = validateToken(authorization);
  
  const post = await BlogPost.findOne({
    where: { id },
  });
  
  if (!post) return { type: 404, message: 'Post does not exist' };
  if (post.userId !== payload) return { type: 401, message: 'Unauthorized user' };

  return { type: null, message: null };
};

module.exports = {
  findAll,
  findById,
  update,
  findByQuery,
  insert,
  remove,
};