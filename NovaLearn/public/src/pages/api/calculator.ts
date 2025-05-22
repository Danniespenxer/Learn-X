import type { NextApiRequest, NextApiResponse } from "next";

// Evaluate math expressions (DANGER: for demo only)
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { expr } = req.body;
    try {
      // eslint-disable-next-line no-eval
      const result = eval(expr.replace("^", "**"));
      res.status(200).json({ result });
    } catch {
      res.status(400).json({ error: "Invalid expression" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}