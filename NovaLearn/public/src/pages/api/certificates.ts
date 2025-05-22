import type { NextApiRequest, NextApiResponse } from "next";

const certificates = [
  { username: "Jane Doe", course: "React Mastery", date: "2025-04-10" }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json({ certificates });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}