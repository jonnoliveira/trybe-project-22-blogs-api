const PostCategoryModel = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory',
  {
    postId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    categoryId: { 
      type: DataTypes.INTEGER,
      foreignKey: true,
     }
  },
  {
    timestamp: false,
    underscored: true
  });

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'categoryId',
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blog_posts',
      through: PostCategory,
      foreignKey: 'postId',
    });
  }  

  return PostCategory;
};

module.exports = PostCategoryModel;