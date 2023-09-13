const express = require("express");

const router = express.Router();

const LoginController = require("../Controllers/LoginController");

router.post("/register", LoginController.register);

router.post("/login", LoginController.login);

module.exports = router;

