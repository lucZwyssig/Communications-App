const UserSchema = require("../Models/UserSchema");
const ChatChannel = require("../Models/ChatChannelSchema");
const ChatMessageController = require("./MessageController");

const getChannels = async (req, res) => {
    const userId = req.token.userId;
    try {
        const channels = await ChatChannel.find({ 'members.userId': userId });
        res.status(200).json({ channels });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const addChannel = async (req, res) => {
    try {
        const userId = req.token.userId;
        const username = req.token.username;
        const { channelName } = req.body;

        if (!channelName) {
            return res.status(400).json({ message: 'Channel name is required' });
        }

        const newMember = {
            userId,
            username,
        };

        const newChannel = await ChatChannel.create({ name: channelName, members: [newMember] });
        res.status(201).json({ message: "Channel created"});
    } catch (error) {
        if (error.code === 11000) {
            res.status(409).json({ message: 'Channel already exists' });
            console.log(error)
        } else {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
        }
    }
};

const leaveChannel = async(req,res) => {
    try{
        const userId = req.token.userId;
        const channelId = req.params.channelId;
        const channel = await ChatChannel.findById(channelId);

        if(!channel){
            return res.status(404).json({ message: "Not found" });
        }

        if (!channel.members.some(member => member.userId.toString() === userId.toString())) {
            return res.status(404).json({ message: "Not found" });
        }

        const Index = channel.members.findIndex(member => member.userId.toString() === userId.toString());

        channel.members.splice(Index, 1);

        if(channel.members.length === 0){
            await ChatChannel.findByIdAndDelete(channel);
            await ChatMessageController.deleteAllMessages(channelId);
            return res.json({message: "channel deleted"}).status(200);
        }

        await channel.save();
        res.json({message: "deleted"}).status(200);   

    } catch(error){
        console.log(error);
    }
}

const getUsers = async (req, res) => {
    try{
        const userId = req.token.userId;
        const channelId = req.params.channelId;
        const channel = await ChatChannel.findById(channelId);

        if(!channel){
            return res.status(404).json({ message: "Not found" });
        }

        if (!channel.members.some(member => member.userId.toString() === userId.toString())) {
            return res.status(404).json({ message: 'Not found' });
        }

        const users = channel.members.map(user => user.username);

        res.status(200).json({users: users});
    } catch (error){
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const addUser = async (req, res) => {
    try {
        const userId = req.token.userId;
        const usernameInput = req.body.usernameInput;
        const channelId = req.params.channelId;

        const user = await UserSchema.findOne({ username: usernameInput });

        if (!user) {
            return res.status(404).json({ message: " User Not found" });
        }

        const channel = await ChatChannel.findById(channelId);

        if (!channel) {
            return res.status(404).json({ message: "Not found" });
        }

        if (!channel.members.some(member => member.userId.toString() === userId.toString())) {
            return res.status(404).json({ message: 'Not found' });
        }

        if (channel.members.some(member => member.userId.toString() === user._id.toString())) {
            return res.status(400).json({ message: "User already exists in the channel" });
        }

        channel.members.push({ userId: user._id, username: user.username });
        await channel.save();

        res.status(201).json({ message: "User added" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};



module.exports = {
    getChannels,
    addChannel,
    addUser,
    getUsers,
    leaveChannel
}
