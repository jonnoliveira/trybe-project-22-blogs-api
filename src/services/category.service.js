const { Category } = require('../models');

const insert = async (name) => {
  const category = await Category.create({ name });

  return { type: null, message: category };
};

module.exports = {
  insert,
};