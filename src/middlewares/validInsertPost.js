const validInsertPost = (title, content, categoryIds) => {
  if (!title || !content || !categoryIds) {
 return { type: 400,
    message: 'Some required fields are missing' }; 
}

  return { type: null, message: '' };
};

module.exports = {
  validInsertPost,
};