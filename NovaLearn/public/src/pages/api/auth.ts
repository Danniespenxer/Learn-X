import type { NextApiRequest, NextApiResponse } from "next";

// Demo handler for authentication
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    // In real life, verify credentials and return JWT
    const { username } = req.body;
    // Dummy JWT (base64 payload with username)
    const payload = Buffer.from(JSON.stringify({ sub: "1", username, roles: ["student"] })).toString("base64url");
    const token = `header.${payload}.signature`;
    res.status(200).json({ token });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}