const UserSchema = require("../Models/UserSchema");
const ChatMessage = require('../Models/ChatMessageSchema');
const ChatChannel = require("../Models/ChatChannelSchema");

const getMessages = async (req, res) => {
    const userId = req.token.userId;
    const username = req.token.username;
    const channelId = req.params.channelId;

    try {
        const channel = await ChatChannel.findById(channelId);

        
        if (!channel) {
            return res.status(404).json({ error: 'Not found' });
        }

        if (!channel.members.some(member => member.userId === userId)) {
            return res.status(403).json({ error: 'Access denied' });
        }

        const documents = await ChatMessage.find({ channel: channelId });

        const messages = documents.map((document)=> ({
            ...document._doc,
            messagetype: document.sender === username ? 'user-message' : 'other-message'
        }));


        res.status(200).json({ messages });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const postMessage = async (req, res) => {
    const userId = req.token.userId;
    const username = req.token.username;
    const channelId = req.params.channelId;
    const text = req.body.text;

    try {
        const channel = await ChatChannel.findById(channelId);
        if (!channel) {
            return res.status(404).json({ message: 'Not found' });
        }

        if (!channel.members.some(member => member.userId === userId)) {
            return res.status(403).json({ message: 'Access denied' });
        }

        const newMessage = await ChatMessage.create({
            sender: username,
            channel: channelId,
            text: text,
            timestamp: Date.now()
        });

        res.status(201).json({ message: "Successfully posted message", newMessage });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const deleteAllMessages = async (channelId) => {
    try {

        await ChatMessage.deleteMany({channel: channelId});

    } catch (error) {
        console.error(error);
    }
}


module.exports = {
    getMessages,
    postMessage,
    deleteAllMessages
}
