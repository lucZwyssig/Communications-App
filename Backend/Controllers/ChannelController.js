const UserSchema = require("../Models/UserSchema");
const ChatMessage = require('../Models/ChatMessageSchema');
const ChatChannel = require("../Models/ChatChannelSchema");

//TODO add middleware to check if user has access to channel
const getChannels = async (req, res) => {
    const userId = req.userId.username;
    try {
        const channels = await ChatChannel.find({ members: userId });
        res.status(200).json({ channels });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }

}

const addChannel = async (req, res) => {
    try {
        const userId = req.userId.username;
        const { channelName } = req.body;

        if (!channelName) {
            return res.status(400).json({ message: 'Channel name is required' });
        }

        const newChannel = await ChatChannel.create({ name: channelName, members: [userId] });
        res.status(201).json({ message: "Channel created", channel: newChannel });
    } catch (error) {
        {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
};

const addUser = async (req, res) => {
    try {
        const userId = req.userId.username;
        const email = req.body.email;
        const channelId = req.params.channelId;

        const user = await UserSchema.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const channel = await ChatChannel.findById(channelId);

        if (!channel) {
            return res.status(404).json({ message: "Channel not found" });
        }

        if (channel.members.indexOf(userId) === -1) {
            return res.status(403).json({ message: 'Access denied' });
        }

        if (channel.members.includes(user._id)) {
            return res.status(400).json({ message: "User already exists in the channel" });
        }

        channel.members.push(user._id);
        await channel.save();

        res.status(201).json({ message: "User added" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};


const getUsers = async (req, res) => {
    const channelId = req.params.channelId;
    
}





module.exports = {
    getChannels,
    addChannel,
    addUser
}
