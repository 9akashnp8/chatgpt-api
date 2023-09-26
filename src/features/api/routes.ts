import express from "express";

import { conversationController } from "./controllers/index.js";

export const router = express.Router();
router.use(express.json())

router.post("/conversation", conversationController)
