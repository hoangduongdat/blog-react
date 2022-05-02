const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require('cors');
const path = require('path');



app.use(cors());

// file
const multer = require("multer");


//Router
const authRouter = require("./routes/auth");
const userRouter = require("./routes/users");
const postsRouter = require("./routes/posts");
const categoryRouter = require("./routes/categories");

//config
dotenv.config();
app.use(express.json());

app.use("/images", express.static(path.join(__dirname, "/images")))

//connect DB
mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("connected to mongoDB"))
  .catch((err) => console.log(err));

// processing file(images)

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images")
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name)
  }
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded")
})



//routes
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/posts", postsRouter);
app.use("/api/categories", categoryRouter);
app.get("/", (req, res) => {
  res.status(200).json("connect thanh cong")
});


//connect sever
app.listen("5000", () => {
  console.log("Back end is running");
});
