import express from "express";
// import { getUsers } from "../../client/src/components/menu/Conversations.jsx";

import { addUser, getUser } from "../controller/userController.js";
import {
  newConversation,
  getConversation,
} from "../controller/conversationController.js";

import { newMessage, getMessage } from "../controller/messageController.js";

const route = express.Router();

route.post("/add", addUser);
route.get("/users", getUser);

route.post("/conversation/add", newConversation);
route.post("/conversation/get", getConversation);

route.post("/message/add", newMessage);
route.get("/message/get/:id", getMessage);

export default route;
