"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Posts", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      title: {
        type: Sequelize.STRING,
      },
      labelCode: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      attributesId: {
        type: Sequelize.STRING,
      },
      categoryCode: {
        type: Sequelize.STRING,
      },
      priceCode: {
        type: Sequelize.STRING,
      },
      areaCode: {
        type: Sequelize.STRING,
      },
      provinceCode: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.TEXT,
      },
      totalRating: {
        type: Sequelize.FLOAT,
      },
      userId: {
        type: Sequelize.STRING,
      },
      overviewId: {
        type: Sequelize.STRING,
      },
      imagesId: {
        type: Sequelize.STRING,
      },
      priceNumber: {
        type: Sequelize.FLOAT,
      },
      areaNumber: {
        type: Sequelize.FLOAT,
      },
      status: {
        type: Sequelize.ENUM,
        values: ["pending", "active"],
        defaultValue: 'pending'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE(3),
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
    });

  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Posts");
  },
};
