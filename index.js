// external imports
const express = require("express");
const cors = require("cors");

// internal imports
const dbConnection = require("./utils/db.util");
const errorHandler = require("./middleware/error.middleware");
const userRouter = require("./routes/user.route");
const avatarRouter = require("./routes/avatar.route");

// application connection
const app = express();
const port = process.env.PORT || 5000;

// middleware connection
app.use(cors());
app.use(express.json());
app.use(express.static("avatars"));

// router connection
app.use("/user", userRouter);
app.use("/avatar", avatarRouter);

// global error handler
app.use(errorHandler);

// DB connection
dbConnection();

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
