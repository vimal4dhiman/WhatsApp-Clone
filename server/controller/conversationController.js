import Conversation from "../model/Conversation.js";

export const newConversation = async (request, response) => {
  let senderId = request.body.senderId;
  let receiverId = request.body.receiverId;
  try {
    const exist = await Conversation.findOne({
      members: { $all: { receiverId, senderId } },
    });

    if (exist) {
      response.status(200).json(`Conversation already exists`);
      return;
    }

    const newConversation = new Conversation({
      members: [senderId, receiverId],
    });

    await newConversation.save();
    response.status(200).json(`New conversation added successfully`);
  } catch (error) {
    response.status(500).json(error);
  }
};
