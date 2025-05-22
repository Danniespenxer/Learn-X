import type { NextApiRequest, NextApiResponse } from "next";

const badges = [
  { name: "Starter", icon: "🏅" },
  { name: "Quiz Master", icon: "🎲" },
  { name: "Course Completer", icon: "🎓" },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json({ badges });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}