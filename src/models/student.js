'use strict';
import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    static associate(models) {}
  }
  Student.init(
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      name: DataTypes.STRING,
      email: { type: DataTypes.STRING, unique: true },
      password: DataTypes.STRING
    },
    {
      sequelize,
      timestamps: false,
      modelName: 'Student'
    }
  );
  return Student;
};
