const loginRouter = require('./login.router');
const userRouter = require('./user.router');
const categoryRouter = require('./category.router');
const blogPostRouter = require('./blogPost.router');
const removeRouter = require('./remove.router');

module.exports = {
  loginRouter,
  userRouter,
  categoryRouter,
  blogPostRouter,
  removeRouter,
};