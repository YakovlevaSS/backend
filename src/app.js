const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require("mongoose");
const userRouter = require("./routes/users");
const booksRouter = require("./routes/users");

const corsOption = require('./middleware/cors')

const app = express();
dotenv.config();

const { PORT = 3000, API_URL = "http://127.0.0.1", MONGO_URL = "mongodb://127.0.0.1:27017/backend"  } = process.env;

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

app.use(cors())
app.use(corsOption);

app.use(userRouter);
app.use(booksRouter);

app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`CORS-enabled, Ссылка на сервер: ${API_URL}:${PORT}`);
});
