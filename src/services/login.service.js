const { User } = require('../models');

const findByLogin = async (email) => {
  const user = await User.findOne({
    where: { email },
    attributes: { exclude: ['password'] },
  });

  if (!user) return { type: 400, message: 'Invalid fields' };

  return { type: null, message: user.id };
};

module.exports = {
  findByLogin,
};