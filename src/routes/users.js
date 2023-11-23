const router = require("express").Router();

const {
    getUsers,
    getUserById, 
    createUser,
    updateUser,
    deleteUser,
    takeBook,
    returnBook
} = require("../controllers/users");

app.get('/users', getUsers);
app.get('/users/:userID', getUserById);
app.post('/users', createUser);
app.put('/users/:userID', updateUser);
app.delete('/users/:userID', deleteUser);
app.post('/users/:userID/books/:bookID', takeBook);
app.post('/users/:userID/books/:bookID', returnBook);