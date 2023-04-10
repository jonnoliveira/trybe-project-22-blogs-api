const validUpdatePost = (title, content) => {
  if (!title || !content) return { type: 400, message: 'Some required fields are missing' };

  return { type: null, message: '' };
};

module.exports = {
  validUpdatePost,
};