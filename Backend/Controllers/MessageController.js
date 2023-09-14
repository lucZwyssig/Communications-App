const UserSchema = require("../Models/UserSchema");
const ChatMessage = require('../Models/ChatMessageSchema');
const ChatChannel = require("../Models/ChatChannelSchema");

const getMessages = async (req, res) => {
    const userId = req.userId.username;
    const channelId = req.params.channelId;

    try {
        const channel = await ChatChannel.findById(channelId);

        if (!channel.members.includes(userId)) {
            return res.status(403).json({ error: 'Access denied' });
        }

        const messages = await ChatMessage.find({ channel: channelId });

        res.status(200).json({ messages });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const postMessage = async (req, res) => {
    const userId = req.userId.username;
    const channelId = req.params.channelId;
    const text = req.body.text; 

    try {
        const channel = await ChatChannel.findById(channelId);
        if (!channel) {
            return res.status(404).json({ message: 'Not found' });
        }
        if (!channel.members.includes(userId)) {
            return res.status(403).json({ message: 'Access denied' });
        }
        const newMessage = await ChatMessage.create({ sender: userId, channel: channelId, text: text, timestamp: Date.now() }); 

        res.status(201).json({ message: "successfully posted message", newMessage });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = {
    getMessages,
    postMessage
}
