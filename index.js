// external imports
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");

// internal imports
const errorHandler = require("./middleware/error.middleware");
const userRouter = require("./routes/user.route");
const avatarRouter = require("./routes/avatar.route");

// application connection
const app = express();
const port = process.env.PORT || 5000;

// middleware connection
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    credentials: true,
    optionsSuccessStatus: 204,
  })
);
app.use(express.json());
app.use(express.static("avatars"));

// router connection
app.use("/user", userRouter);
app.use("/avatar", avatarRouter);

// global error handler
app.use(errorHandler);

// DB connection
mongoose
  .connect(process.env.ATLAS_URI, {
    dbName: "file-upload",
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Successfully connect Mongoose with MongoDB.");
  });

// enable backend connection
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "OK",
    description: "The request is OK",
  });
});

// enable port
app.listen(port, () => {
  console.log(`App listening on port ${port}.`);
});
