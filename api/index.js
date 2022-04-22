const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/users");
const postsRouter = require("./routes/posts");

dotenv.config();
app.use(express.json());

//connect DB
mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("connected to mongoDB"))
  .catch((err) => console.log(err));

//routes
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/posts", postsRouter);

//connect sever
app.listen("5000", () => {
  console.log("Back end is running");
});