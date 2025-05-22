import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import { updateProgress, getProgress } from "../models/VideoProgress";

const router = express.Router();

router.post("/", authMiddleware, async (req, res) => {
  const { video_id, watched_seconds, completed } = req.body;
  const student_id = req.user.id;
  try {
    const progress = await updateProgress(student_id, video_id, watched_seconds, completed);
    res.json(progress);
  } catch (err) {
    res.status(500).json({ error: "Failed to update progress" });
  }
});

router.get("/:video_id", authMiddleware, async (req, res) => {
  const student_id = req.user.id;
  const { video_id } = req.params;
  try {
    const progress = await getProgress(student_id, Number(video_id));
    res.json(progress || {});
  } catch (err) {
    res.status(500).json({ error: "Failed to get progress" });
  }
});

export default router;