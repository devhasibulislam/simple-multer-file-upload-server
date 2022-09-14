// external import
const express = require("express");
const multer = require("multer");

// internal import
const postAnAvatar = require("../controllers/avatar.controller");

// upload variable
const upload = multer({ dest: `${__dirname}/../avatars/` });

// router connection
const router = express.Router();

router.post("/", upload.single("avatar"), postAnAvatar);

module.exports = router;
