const express = require("express");

const router = express.Router();

const LoginController = require("../Controllers/LoginController");

const TestController = require("../Controllers/TestController");

const ChatController = require("../Controllers/ChatController");

router.post("/register", LoginController.register);

router.post("/login", LoginController.login);

router.get("/test", LoginController.verify, TestController.test);

router.delete("/logout", LoginController.verify, LoginController.logout);

router.get("/chats/:channelId/messages", LoginController.verify, ChatController.getMessages);

router.get("/chats/channels", LoginController.verify, ChatController.getChannels);

module.exports = router;

