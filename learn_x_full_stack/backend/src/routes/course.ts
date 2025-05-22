import express from "express";
import { createCourse, getAllCourses, getCourseById, enrollStudent, getEnrolledCourses } from "../models/Course";
import { authMiddleware, instructorMiddleware } from "../middlewares/authMiddleware";

const router = express.Router();

router.post("/", authMiddleware, instructorMiddleware, async (req, res) => {
  const { title, description } = req.body;
  const instructor_id = req.user.id;
  try {
    const course = await createCourse(title, description, instructor_id);
    res.json(course);
  } catch (err) {
    res.status(500).json({ error: "Course creation failed" });
  }
});

router.get("/", authMiddleware, async (_req, res) => {
  try {
    const courses = await getAllCourses();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: "Fetching courses failed" });
  }
});

router.get("/:id", authMiddleware, async (req, res) => {
  try {
    const course = await getCourseById(Number(req.params.id));
    if (!course) return res.status(404).json({ error: "Not found" });
    res.json(course);
  } catch (err) {
    res.status(500).json({ error: "Fetching course failed" });
  }
});

router.post("/:id/enroll", authMiddleware, async (req, res) => {
  const course_id = Number(req.params.id);
  const student_id = req.user.id;
  if (req.user.role !== "student") return res.status(403).json({ error: "Only students can enroll" });
  try {
    const enrollment = await enrollStudent(course_id, student_id);
    res.json(enrollment);
  } catch (err) {
    res.status(500).json({ error: "Enrollment failed" });
  }
});

router.get("/me/enrolled", authMiddleware, async (req, res) => {
  try {
    const courses = await getEnrolledCourses(req.user.id);
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch enrolled courses" });
  }
});

export default router;