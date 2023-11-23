const router = require("express").Router();

const {
  getBooks,
  getUBookById,
  createBook,
  updateBook,
  deleteBook,
} = require("../controllers/books");

app.get("/books", getBooks);
app.get("/books/:bookID", getUBookById);
app.post("/books", createBook);
app.put("/books/:bookID", updateBook);
app.delete("/books/:bookID", deleteBook);
