const CategoryModel = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name:  {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    timestamp: false,
    underscored: true
  });

  return Category;
};

module.exports = CategoryModel;