const express = require("express");

const router = express.Router();

const LoginController = require("../Controllers/LoginController");

const TestController = require("../Controllers/TestController");

router.post("/register", LoginController.register);

router.post("/login", LoginController.login);

router.get("/test", LoginController.verify, TestController.test);


module.exports = router;

