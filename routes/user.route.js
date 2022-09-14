// external import
const express = require("express");

// internal import
const userController = require("../controllers/user.controller");

// router connection
const router = express.Router();

// user credentials
router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.postAnUser);

router
  .route("/:id")
  .delete(userController.deleteAnUser)
  .patch(userController.updateAnUser);

module.exports = router;
