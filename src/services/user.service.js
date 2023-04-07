const { User } = require('../models');

const { validInsertion } = require('../middlewares/validInsertion');

const insert = async (displayName, email, password, image) => {
  const isValid = validInsertion(displayName, email, password);
  if (isValid.type) return isValid;

  const existingEmail = await User.findOne({
    where: { email },
    attributes: { exclude: ['password', 'image', 'id', 'displayName'] },
  });

  if (existingEmail) return { type: 409, message: 'User already registered' };

  const user = await User.create({ displayName, email, password, image });

  return { type: null, message: user.id };
};

const findAll = async () => {
  const allUsers = await User.findAll({
    attributes: { exclude: ['password'] },
  });

  if (!allUsers) return { type: 400, message: 'Ocorreu algum erro no getAllUsers' };

  return { type: null, message: allUsers };
};

const findById = async (id) => {
  const user = await User.findOne({
    where: { id },
    attributes: { exclude: ['password'] },
  });

  if (!user) return { type: 404, message: 'User does not exist' };

  return { type: null, message: user };
};

module.exports = {
  insert,
  findAll,
  findById,
};