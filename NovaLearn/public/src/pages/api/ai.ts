import type { NextApiRequest, NextApiResponse } from "next";

// Demo AI handler: replace with real AI API call!
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { question } = req.body;
  let answer = "Let me help you with that! (AI response demo)";
  if (question?.toLowerCase().includes("certificate")) {
    answer = "To earn a certificate, complete all required modules and pass the final quiz!";
  }
  res.status(200).json({ answer });
}