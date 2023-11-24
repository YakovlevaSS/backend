const users = require("../models/users");

const getUsers = (req, res) => {
    users.find({})
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
}

const getUserById = (req, res) => {
    const { userID } = req.params;
    users.findById(userID)
      .then((user) => {
        res.status(200).send(user);
      })
      .catch((e) => {
        res.status(500).send(e.message);
      });
}

const createUser = (req, res) => {
    const data = req.body;
    users.create(data)
      .then((user) => {
        res.status(201).send(user);
      })
      .catch((e) => {
        res.status(500).send(e.message);
      });
}

const updateUser = (req, res) => {
    const { userID } = req.params;
    const data = req.body;
    users.findByIdAndUpdate(userID, data, { new: true, runValidators: true })
      .then((user) => {
        res.status(200).send(user);
      })
      .catch((e) => {
        res.status(500).send(e.message);
      });
}

const deleteUser = (req, res) => {
    const { userID } = req.params;
    users.findByIdAndDelete(userID)
      .then((user) => {
        res.status(200).send("User deleted");
      })
      .catch((e) => {
        res.status(500).send(e.message);
      });
}

// const takeBook = (req, res) => {

// }

// const returnBook = (req, res) => {

// }

module.exports = {
    getUsers,
    getUserById, 
    createUser,
    updateUser,
    deleteUser,
    // takeBook,
    // returnBook
}
