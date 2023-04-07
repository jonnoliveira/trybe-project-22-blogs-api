const jwt = require('jsonwebtoken');

const secretkey = process.env.JWT_SECRET;

const configJWT = {
    expiresIn: '10d',
    algorithm: 'HS256',
};

const generateToken = (payload) => {
    const token = jwt.sign({ payload }, secretkey, configJWT);
    return token;
};

const validateToken = (token) => {
  if (!token) return { message: 'Token not found' };
  const isValid = jwt.verify(token, secretkey);
  return isValid;
};

module.exports = {
    generateToken,
    validateToken,
};