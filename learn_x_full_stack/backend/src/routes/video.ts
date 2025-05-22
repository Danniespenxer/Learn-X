import express from "express";
import multer from "multer";
import path from "path";
import { addVideo, getVideosByCourse } from "../models/Video";
import { authMiddleware, instructorMiddleware } from "../middlewares/authMiddleware";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../uploads/videos"));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname.replace(/\s+/g, '_'));
  }
});
const upload = multer({ storage });

router.post(
  "/:courseId/upload",
  authMiddleware,
  instructorMiddleware,
  upload.single("video"),
  async (req, res) => {
    const { courseId } = req.params;
    const { title, transcript } = req.body;
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });
    const video_url = `/uploads/videos/${req.file.filename}`;
    try {
      const video = await addVideo(Number(courseId), title, video_url, transcript || "");
      res.json(video);
    } catch (err) {
      res.status(500).json({ error: "Failed to upload video" });
    }
  }
);

router.get("/:courseId", authMiddleware, async (req, res) => {
  try {
    const videos = await getVideosByCourse(Number(req.params.courseId));
    res.json(videos);
  } catch (err) {
    res.status(500).json({ error: "Failed to get videos" });
  }
});

export default router;