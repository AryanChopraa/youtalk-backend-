'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
  }

  User.init({
    Name: DataTypes.STRING,
    Password: DataTypes.STRING,
    email: DataTypes.STRING,
    OpenAI_APIKey: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};