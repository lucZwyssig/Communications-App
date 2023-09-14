const mongoose = require("mongoose");

const ChatChannelSchema = new mongoose.Schema({
    name: { type: String, required: true },
    members: [{ type: String }],
    
});

module.exports = mongoose.model("ChatChannel", ChatChannelSchema, "ChatChannel");
