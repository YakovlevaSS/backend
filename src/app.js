const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require('body-parser');
const cors = require('cors');

const userRouter = require("./routes/users");
const booksRouter = require("./routes/users");

const corsOption = require('./middleware/cors')

const app = express();
dotenv.config();

const { PORT = 3000, API_URL = "http://127.0.0.1" } = process.env;

// app.get("/", (request, response) => {
//   response.status(200);
//   response.send("Hello, World!");
// });
app.use(cors(corsOption))
app.use(corsOption);

app.use(userRouter);
app.use(booksRouter);

app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Ссылка на сервер: ${API_URL}:${PORT}`);
});
