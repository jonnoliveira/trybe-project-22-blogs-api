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

  await User.create({ displayName, email, password, image });

  const findNewUser = await User.findOne({
    where: { email },
    attributes: { exclude: ['password', 'image'] },
  });

  return { type: null, message: findNewUser.dataValues.id };
};

const getAllUsers = async () => {
  const allUsers = await User.findAll({
    attributes: { exclude: ['password'] },
  });

  if (!allUsers) return { type: 400, message: 'Ocorreu algum erro no getAllUsers' };

  return { type: null, message: allUsers };
};

module.exports = {
  insert,
  getAllUsers,
};