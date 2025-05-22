import type { NextApiRequest, NextApiResponse } from "next";

// Demo handler for chat messages
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { message } = req.body;
    // Echo the message
    res.status(200).json({ reply: `[Echo] ${message}` });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}