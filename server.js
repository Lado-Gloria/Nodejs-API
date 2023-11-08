// Import required packages and modules
const express = require("express");
const mongoose = require("mongoose");
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerOptions = require('./swaggerOptions');
const Book = require('./models/bookModels'); // Import the Book model
const app = express(); // Create an Express application
const PORT = 3000; // Define the port number


app.use(express.json()); // Parse incoming JSON requests

// Define routes and their corresponding handlers
const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/books/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/', (req, res) => {
  res.send("Hello Node Api");
});

// Get all books route
app.get('/books', async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Retrieve a single book by ID route
app.get('/books/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: `Can't find book with id ${id}` });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Create a new book route
app.post('/books', async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});


// Update a book by ID route
app.put('/books/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndUpdate(id, req.body, { new: true });
    if (!book) {
      return res.status(404).json({ message: `Can't find book with id ${id}` });
    }
    res.status(200).json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});


// Delete a book by ID route
app.delete('/books/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndDelete(id);
    if (!book) {
      return res.status(404).json({ message: `Can't find book with id ${id}` });
    }
    res.status(200).json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

// Blog route
app.get('/blog', (req, res) => {
  res.send("Hello blog, my name is Gloria");
});

// Establish a connection to the MongoDB database
mongoose.connect("mongodb+srv://Gloria:" +
  encodeURIComponent("lado@2022") +
  "@developapi.a36lfod.mongodb.net/Node-API?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    // If the connection is successful, start the Express server
    console.log('Connected to the database');
    app.listen(PORT, () => {
      console.log("Node Api app is running on port 3000");
    });
  })
  .catch((error) => {
    // If there is an error in connecting to the database, log the error
    console.error('Error connecting to the database:', error);
  });
