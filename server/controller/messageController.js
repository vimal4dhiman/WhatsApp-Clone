import Message from "../modal/Message.js";
import Conversation from "../modal/Conversation.js";
import message from "../modal/Message.js";

export const newMessage = async (request, response) => {
  const newMessage = new Message(request.body);
  //   console.log(request.body, newMessage);
  try {
    await newMessage.save();
    response.status(200).json("Message has been sent successfully");
  } catch (error) {
    response.status(500).json(error);
  }
};

export const getMessage = async (request, response) => {
  try {
    const messages = await message.find({ conversationId: request.params.id });
    await Conversation.findByIdAndUpdate(request.body.conversationId, {
      message: request.body.text,
    });
    response.status(200).json(messages);
  } catch (error) {
    response.status(500).json(error);
  }
};
