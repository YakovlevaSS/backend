const router = require('express').Router()

const {
    getUsers,
    getUserById, 
    createUser,
    updateUser,
    deleteUser,
    // takeBook,
    // returnBook
} = require("../controllers/users");

router.get('/users', getUsers);
router.get('/users/:userID', getUserById);
router.post('/users', createUser);
router.patch('/users/:userID', updateUser);
router.delete('/users/:userID', deleteUser);
// router.post('/users/:userID/books/:bookID', takeBook);
// router.post('/users/:userID/books/:bookID', returnBook);

module.exports = router;