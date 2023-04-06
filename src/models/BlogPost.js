const BlogPostModel = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    title: {
      type: DataTypes.STRING
    },
    content: {
      type: DataTypes.STRING
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      }
    },
    published: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updated: {
      allowNull: false,
      type: DataTypes.DATE
    }
  },
  {
    timestamps: true,
    createdAt: 'published',
    updatedAt: 'updated',
    underscored: true
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User,
      { foreignKey: 'userId', as: 'users' });
  };

  return BlogPost;
};

module.exports = BlogPostModel;