const BlogPostModel = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  },
  {
    timestamps: true,
    createdAt: 'published',
    updatedAt: 'updated',
    underscored: true
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User,
      { foreignKey: 'id', as: 'users' });
  };

  BlogPost.associate = (models) => {
    BlogPost.hasMany(models.PostCategory,
      { foreignKey: 'post_id', as: 'PostCategory' })
  }

  return BlogPost;
};

module.exports = BlogPostModel;