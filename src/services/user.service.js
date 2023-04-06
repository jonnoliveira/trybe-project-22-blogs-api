const { User } = require('../models');

const findByLogin = async (name, email) => {
  User.findOne({
    where: { name },
    include: [{ model: User, as: 'users' }],
  });
};

module.exports = {
  findByLogin,
};