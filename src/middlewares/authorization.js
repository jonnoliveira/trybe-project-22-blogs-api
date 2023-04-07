const { validateToken } = require('../auth/validateJWT');

const authToken = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const returnToken = validateToken(authorization);
    if (returnToken.message) return res.status(401).json(returnToken);
    req.user = returnToken;
    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  authToken,
};