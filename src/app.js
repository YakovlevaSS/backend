const express = require('express');
const dotenv = require('dotenv');
const userRouter = require('./routes/users')
const booksRouter = require('./routes/users')

const app = express();
dotenv.config();

const { PORT = 3000, API_URL = 'http://127.0.0.1' } = process.env;



app.get('/', (request, response) => {
    response.status(200);
    response.send("Hello, World!");
});

app.use(userRouter)
app.use(booksRouter)

app.listen(PORT, () => {
    console.log(`Ссылка на сервер: ${API_URL}:${PORT}`);
});