# Nodejs-API
# Node API

This is a Node.js API for managing books. It provides endpoints to perform CRUD operations on books stored in a MongoDB database.

## Requirements

- Node.js
- MongoDB

## Installation

1. Clone the repository:

   ```shell
   git clone <repository-url>

## Install dependencies:
  
  npm install
```

## Set up the MongoDB connection:
Make sure you have MongoDB installed and running.
Modify the connection string in the code to match your MongoDB configuration. Locate the mongoose.connect function call in the code and update the connection URL accordingly

## Start the server:
npm run serve.js
```
The server will start running on port 3000.

## API Endpoints
GET /books: Get all books.
GET /books/:id: Get a single book by ID.
POST /books: Create a new book.
PUT /books/:id: Update a book by ID.
DELETE /books/:id: Delete a book by ID.

curl http://localhost:3000/books
```
curl http://localhost:3000/books/<book-id>
```
curl -X DELETE http://localhost:3000/books/<book-id>
```
curl -X POST -H "Content-Type: application/json" -d '{"title": "Book Title", "author": "Book Author"}' http://localhost:3000/books
```
curl -X PUT -H "Content-Type: application/json" -d '{"title": "Updated Title"}' http://localhost:3000/books/<book-id>
```
