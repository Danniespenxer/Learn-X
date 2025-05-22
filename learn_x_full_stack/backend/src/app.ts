import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import http from "http";
import { Server as WebSocketServer } from "ws";

import authRoutes from "./routes/auth";
import courseRoutes from "./routes/course";
import videoRoutes from "./routes/video";
import progressRoutes from "./routes/progress";
import badgeRoutes from "./routes/badge";
import chatRoutes from "./routes/chat";
import assignmentRoutes from "./routes/assignment";
import certificateRoutes from "./routes/certificate";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads/videos", express.static(path.join(__dirname, "../uploads/videos")));
app.use("/uploads/assignments", express.static(path.join(__dirname, "../uploads/assignments")));

app.get("/", (_req, res) => { res.send("Welcome to Learn X API!"); });

app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/progress", progressRoutes);
app.use("/api/badges", badgeRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/assignments", assignmentRoutes);
app.use("/api/certificates", certificateRoutes);

const server = http.createServer(app);
const wss = new WebSocketServer({ server, path: "/ws/chat" });
wss.on("connection", (ws) => {
  ws.on("message", (message) => {
    wss.clients.forEach(client => {
      if (client.readyState === ws.OPEN) {
        client.send(message);
      }
    });
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Learn X backend running on port ${PORT}`);
  console.log(`WebSocket chat running on ws://localhost:${PORT}/ws/chat`);
});