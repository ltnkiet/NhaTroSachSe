'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {
      Review.belongsTo(models.Post, { foreignKey: 'postId', as: 'post' });
      Review.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    }
  }
  Review.init({
    postId: DataTypes.STRING,
    userId: DataTypes.STRING,
    star: DataTypes.INTEGER,
    comment: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};