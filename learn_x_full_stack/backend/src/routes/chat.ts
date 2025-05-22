import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import { addChatMessage, getChatForCourse } from "../models/Chat";

const router = express.Router();

router.get("/:course_id", authMiddleware, async (req, res) => {
  try {
    const messages = await getChatForCourse(Number(req.params.course_id));
    res.json(messages);
  } catch {
    res.status(500).json({ error: "Failed to fetch chat" });
  }
});

router.post("/:course_id", authMiddleware, async (req, res) => {
  try {
    const msg = await addChatMessage(Number(req.params.course_id), req.user.id, req.body.content);
    res.json(msg);
  } catch {
    res.status(500).json({ error: "Failed to send message" });
  }
});

export default router;