// src/models/Book.js

const { DataTypes } = require('sequelize');
const sequelize = require('./src/utils/db');

const Book = sequelize.define('Book', {
  book_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  genre_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  publication_date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
});

module.exports = Book;
