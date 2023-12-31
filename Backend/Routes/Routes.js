const express = require("express");

const router = express.Router();

const LoginController = require("../Controllers/LoginController");

const TestController = require("../Controllers/TestController");

const ChannelController = require("../Controllers/ChannelController");

const MessageController = require("../Controllers/MessageController");

const MailController = require("../Controllers/MailController");

router.post("/register", LoginController.register);

router.post("/login", LoginController.login);

router.post("/mail", LoginController.verify, MailController.sendMail);

router.delete("/logout", LoginController.verify, LoginController.logout);

router.get("/chats/:channelId/messages", LoginController.verify, MessageController.getMessages);

router.get("/chats/channels", LoginController.verify, ChannelController.getChannels);

router.post("/chats/channel", LoginController.verify, ChannelController.addChannel);

router.post("/chats/:channelId/messages", LoginController.verify, MessageController.postMessage);

router.post("/chats/:channelId", LoginController.verify, ChannelController.addUser);

router.get("/chats/:channelId/users", LoginController.verify, ChannelController.getUsers);

router.delete("/chats/:channelId/users", LoginController.verify, ChannelController.leaveChannel);



module.exports = router;

