import type { NextApiRequest, NextApiResponse } from "next";

const demoCourses = [
  { id: "1", title: "Next.js Mastery", description: "Deep dive into Next.js!", imageUrl: "/ai/ai-avatar.png", progress: 40, completed: false },
  { id: "2", title: "React for Beginners", description: "Learn React from scratch!", imageUrl: "/ai/ai-avatar.png", progress: 80, completed: true },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json({ courses: demoCourses });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}