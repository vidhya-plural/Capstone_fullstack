// server.js

const express = require('express');
const bodyParser = require('body-parser');
const bookRoutes = require('./src/routes/bookRoutes');
const sequelize = require('./src/utils/db');
const Book = require('./src/models/Book'); // Import Book model
const Author = require('./src/models/Author'); // Import Author model
const Genre = require('./src/models/Genre'); // Import Genre model

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/books', bookRoutes);

// Database sync
sequelize.sync({ force: false }) // Set force to true if you want to drop tables and re-create
  .then(() => {
    console.log('Database synced');
  })
  .catch(err => {
    console.error('Database sync error:', err);
  });

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
