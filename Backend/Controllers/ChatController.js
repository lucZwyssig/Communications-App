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

const getChannels = async (req, res) => {
    const userId = req.userId.username;
    try {
        const channels = await ChatChannel.find({members: userId});
        res.status(200).json({ channels });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
    
}

/*const addChannel = async (req, res) => {
    try {
    const userId = req.userId.username;
    const channelName = req.body;
    const newChannel = await ChatChannel.create
    }
}*/

module.exports = {
    getMessages,
    getChannels
}
