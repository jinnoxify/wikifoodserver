const express = require("express");
const mongoose = require("mongoose");
const user = require("./routes/userRouter");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

const port = 9000 || process.env.PORT;

app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

app.use("/users", user);

mongoose.connect(
  process.env.MONGODB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err) => {
    if (err) throw err;
    console.log("MongoDB connection its working");
  }
);

app.listen(port, () => {
  console.log(`server up and running on ${port}`);
});
