import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import { awardBadge, getUserBadges, getAllBadges } from "../models/Badge";

const router = express.Router();

router.get("/", authMiddleware, async (_req, res) => {
  try {
    const badges = await getAllBadges();
    res.json(badges);
  } catch {
    res.status(500).json({ error: "Failed to fetch badges" });
  }
});

router.get("/me", authMiddleware, async (req, res) => {
  try {
    const badges = await getUserBadges(req.user.id);
    res.json(badges);
  } catch {
    res.status(500).json({ error: "Failed to fetch user badges" });
  }
});

router.post("/award", authMiddleware, async (req, res) => {
  const { user_id, badge_id } = req.body;
  try {
    const badge = await awardBadge(user_id, badge_id);
    res.json(badge);
  } catch {
    res.status(500).json({ error: "Failed to award badge" });
  }
});

export default router;