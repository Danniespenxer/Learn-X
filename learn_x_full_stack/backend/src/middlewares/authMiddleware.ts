import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "changeme";

export function authMiddleware(req: any, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: "No token" });
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ error: "Invalid token" });
  }
}
export function instructorMiddleware(req: any, res: Response, next: NextFunction) {
  if (req.user.role !== "instructor") return res.status(403).json({ error: "Instructor only" });
  next();
}
export function adminMiddleware(req: any, res: Response, next: NextFunction) {
  if (req.user.role !== "admin") return res.status(403).json({ error: "Admin only" });
  next();
}