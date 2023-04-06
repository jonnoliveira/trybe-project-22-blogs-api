const PostCategoryModel = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory',
  {
    postId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'blog_posts',
          key: 'id',
        },
        primaryKey: true,
      },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'categories',
        key: 'id',
      },
      primaryKey: true,
    },
  },
  {
    timestamp: false,
    underscored: true
  });

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: 'PostCategory',
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blog_posts',
      through: 'PostCategory',
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  }  

  return PostCategory;
};

module.exports = PostCategoryModel;