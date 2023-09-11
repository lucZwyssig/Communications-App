const express = require("express");

const router = express.Router();

const LoginController = require("../Controllers/LoginController");

router.post("/login", LoginController.login);

//router.post("/register", LoginController.register);

module.exports = router;

