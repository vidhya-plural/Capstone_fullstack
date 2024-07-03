

const { DataTypes } = require('sequelize');
const sequelize = require('./src/utils/db');

const Genre = sequelize.define('Genre', {
  genre_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  genre_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Genre;
