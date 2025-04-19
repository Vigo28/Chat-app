import Converation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: recieverId } = req.params;
        const senderId = req.user._id;

        let conversation = await Converation.findOne({
            participants: { $all: [senderId, recieverId] },
        })

        if (!conversation) {
            conversation = await Converation.create({
                participants: [senderId, recieverId],
            });
        }

        const newMessage = new Message({
            senderId,
            recieverId,
            message,
        })

        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }

        //SOCKET.IO

        await Promise.all([conversation.save(), newMessage.save()])

        res.status(201).json(newMessage);
    } catch (error) {
        console.error("Error sending message:", error.message);
        res.status(500).json({ error: "Internal server error" });

    }
};

export const getMessage = async (req, res) => {
    try {
        const { id: recieverId } = req.params;
        const senderId = req.user._id;

        const conversation = await Converation.findOne({
            participants: { $all: [senderId, recieverId] },
        }).populate("messages");

        if (!conversation) {
            return res.status(200).json([]);
        }

        const messages = conversation.messages
        res.status(200).json(messages);
    } catch (error) {
        console.error("Error getting messages:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}