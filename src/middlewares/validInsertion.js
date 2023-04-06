const { newUserSchema } = require('../Joi/schema');

const validInsertion = (displayName, email, password) => {
  const { error } = newUserSchema.validate({ displayName, email, password });

  if (error) return { type: 400, message: error.message };

  return { type: null, message: '' };
};

module.exports = {
  validInsertion,
};