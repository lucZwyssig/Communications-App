const mongoose = require("mongoose");

const ChatChannelSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  members: [
      {
          _id: false, 
          userId: { type: String, required: true },
          username: { type: String, required: true },
      },
  ],
});

module.exports = mongoose.model("ChatChannel", ChatChannelSchema, "ChatChannel");
