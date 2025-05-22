import express from "express";
import multer from "multer";
import path from "path";
import { authMiddleware, instructorMiddleware } from "../middlewares/authMiddleware";
import { createAssignment, getAssignments, submitAssignment, getAssignmentSubmissions } from "../models/Assignment";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../uploads/assignments"));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname.replace(/\s+/g, '_'));
  }
});
const upload = multer({ storage });

router.post("/:course_id", authMiddleware, instructorMiddleware, async (req, res) => {
  const { title, description, due_date } = req.body;
  try {
    const assignment = await createAssignment(Number(req.params.course_id), title, description, due_date);
    res.json(assignment);
  } catch {
    res.status(500).json({ error: "Failed to create assignment" });
  }
});

router.get("/:course_id", authMiddleware, async (req, res) => {
  try {
    const assignments = await getAssignments(Number(req.params.course_id));
    res.json(assignments);
  } catch {
    res.status(500).json({ error: "Failed to fetch assignments" });
  }
});

router.post("/submit/:assignment_id", authMiddleware, upload.single("file"), async (req, res) => {
  const { assignment_id } = req.params;
  if (!req.file) return res.status(400).json({ error: "No file uploaded" });
  try {
    const submission = await submitAssignment(Number(assignment_id), req.user.id, `/uploads/assignments/${req.file.filename}`);
    res.json(submission);
  } catch {
    res.status(500).json({ error: "Failed to submit assignment" });
  }
});

router.get("/submissions/:assignment_id", authMiddleware, instructorMiddleware, async (req, res) => {
  try {
    const subs = await getAssignmentSubmissions(Number(req.params.assignment_id));
    res.json(subs);
  } catch {
    res.status(500).json({ error: "Failed to fetch submissions" });
  }
});

export default router;