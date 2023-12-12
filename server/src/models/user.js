"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Post, { foreignKey: "userId", as: "user" });
      User.hasMany(models.Review, { foreignKey: "userId", as: "reviewer" });

    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      phone: DataTypes.INTEGER,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      zalo: DataTypes.STRING,
      fbUrl: DataTypes.STRING,
      avatar: DataTypes.BLOB,
      role: DataTypes.ENUM('user', 'admin'),
      passwordChangedAt: DataTypes.STRING,
      passwordResetToken: DataTypes.STRING,
      passwordResetExpires: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  
  return User;
};
