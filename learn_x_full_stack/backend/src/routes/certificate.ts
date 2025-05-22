import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import { issueCertificate, getUserCertificates } from "../models/Certificate";

const router = express.Router();

router.post("/", authMiddleware, async (req, res) => {
  const { course_id, cert_url } = req.body;
  try {
    const cert = await issueCertificate(req.user.id, course_id, cert_url);
    res.json(cert);
  } catch {
    res.status(500).json({ error: "Failed to issue certificate" });
  }
});

router.get("/me", authMiddleware, async (req, res) => {
  try {
    const certs = await getUserCertificates(req.user.id);
    res.json(certs);
  } catch {
    res.status(500).json({ error: "Failed to fetch certificates" });
  }
});

export default router;