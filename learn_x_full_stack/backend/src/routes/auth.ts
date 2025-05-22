import express from "express";
import jwt from "jsonwebtoken";
import { createUser, findUserByEmail, comparePassword } from "../models/User";

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || "changeme";

router.post("/register", async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    const existing = await findUserByEmail(email);
    if (existing) return res.status(400).json({ error: "Email already exists" });
    const user = await createUser(name, email, password, role);
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Registration failed" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await findUserByEmail(email);
    if (!user) return res.status(404).json({ error: "User not found" });
    const valid = await comparePassword(password, user.password);
    if (!valid) return res.status(401).json({ error: "Invalid credentials" });

    const payload = { id: user.id, email: user.email, role: user.role };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });
    res.json({ token, user: payload });
  } catch (err) {
    res.status(500).json({ error: "Login failed" });
  }
});

export default router;