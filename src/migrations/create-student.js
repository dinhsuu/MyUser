"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Students", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      // email: { type: Sequelize.STRING },
      name: { type: Sequelize.STRING },
      password: { type: Sequelize.STRING },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Students");
  },
};
