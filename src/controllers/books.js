const books = require("../models/books");

const getBooks = (req, res) => {
  books.find({})
  .then((books) => {
    res.status(200).send(books);
  })
  .catch((e) => {
    res.status(500).send(e.message);
  });
};

const getUBookById = (req, res) => {
  const { bookID } = req.params;
  books.findById(bookID)
    .then((book) => {
      res.status(200).send(book);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

const createBook = async (req, res) => {
  try {
    const book = await books.create({ ...req.body });
    res.status(201).send(book);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateBook = (req, res) => {
  const { bookID } = req.params;
  const data = req.body;
  books.findByIdAndUpdate(bookID, data, { new: true, runValidators: true })
    .then((book) => {
      res.status(200).send(book);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

const deleteBook = (req, res) => {
  const { bookID } = req.params;
  books.findByIdAndDelete(bookID)
    .then(() => {
      res.status(200).send("Book deleted");
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

module.exports = {
  getBooks,
  getUBookById,
  createBook,
  updateBook,
  deleteBook,
};
