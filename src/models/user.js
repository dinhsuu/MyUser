"use strict";
import { Model } from "sequelize";

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {}
  }
  User.init(
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      name: DataTypes.STRING,
      // email: { type: DataTypes.STRING, unique: true },
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};


// import { DataTypes } from "sequelize";
// import Sequelize from "../helpers/Sequelize.js";

// export default Sequelize.instance.define("user", {
//   id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
//   name: DataTypes.STRING,
//   password: DataTypes.STRING,
// });