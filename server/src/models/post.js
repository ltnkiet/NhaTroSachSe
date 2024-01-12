"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      Post.belongsTo(models.Image, { foreignKey: 'imagesId', targetKey: 'id', as: 'images' })
      Post.belongsTo(models.Attribute, { foreignKey: 'attributesId', targetKey: 'id', as: 'attributes' })
      Post.belongsTo(models.Overview, { foreignKey: 'overviewId', targetKey: 'id', as: 'overviews' })
      Post.belongsTo(models.User, { foreignKey: 'userId', targetKey: 'id', as: 'user' })
      Post.hasMany(models.Review, { foreignKey: 'postId', targetKey: 'id', as: 'review' });
    }
  }
  Post.init(
    {
      title: DataTypes.STRING,
      labelCode: DataTypes.STRING,
      address: DataTypes.STRING,
      attributesId: DataTypes.STRING,
      categoryCode: DataTypes.STRING,
      priceCode: DataTypes.STRING,
      areaCode: DataTypes.STRING,
      provinceCode: DataTypes.STRING,
      description: DataTypes.TEXT,
      userId: DataTypes.STRING,
      overviewId: DataTypes.STRING,
      imagesId: DataTypes.STRING,
      reviewId: DataTypes.STRING,
      priceNumber: DataTypes.FLOAT,
      areaNumber: DataTypes.FLOAT,
      status: DataTypes.ENUM('pending', 'active')
    },
    {
      sequelize,
      modelName: "Post",
    }
  );
  return Post;
};
