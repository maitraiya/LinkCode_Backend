const express = require("express");
const router = express.Router();

const contactUsController = require('../controllers/contact');

router.post("/contact", contactUsController.user_submit);

// router.post("/login", contactUsController.user_login);

module.exports = router;
