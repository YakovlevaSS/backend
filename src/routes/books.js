const router = require("express").Router();

const {
  getBooks,
  getUBookById,
  createBook,
  updateBook,
  deleteBook,
} = require("../controllers/books");

router.get("/books", getBooks);
router.get("/books/:bookID", getUBookById);
router.post("/books", createBook);
router.patch("/books/:bookID", updateBook);
router.delete("/books/:bookID", deleteBook);

module.exports = router;