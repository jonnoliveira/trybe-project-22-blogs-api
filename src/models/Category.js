const CategoryModel = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
  },
  {
    timestamp: false,
    underscored: true
  });

  CategoryModel.associate = (models) => {
    CategoryModel.hasMany(models.PostCategory,
      { foreignKey: 'category_id', as: 'PostCategory' })
  }

  return Category;
};

module.exports = CategoryModel;