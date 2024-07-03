// src/controllers/bookController.js

const Book = require('../models/Book');

// GET /books
async function getBooks(req, res) {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// POST /books
async function addBook(req, res) {
  try {
    const { title, author_id, genre_id, price, publication_date } = req.body;
    const newBook = await Book.create({ title, author_id, genre_id, price, publication_date });
    res.status(201).json(newBook);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Invalid data' });
  }
}

// Export controller functions
module.exports = {
  getBooks,
  addBook,
  // Add other CRUD operations here
};
