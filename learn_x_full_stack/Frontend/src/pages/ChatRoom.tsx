import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function ChatRoom() {
  const { courseId } = useParams();
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState("");
  const ws = useRef<WebSocket | null>(null);
  const token = localStorage.getItem("token");
  const user = JSON.parse(atob(token?.split(".")[1] || "") || "{}");

  useEffect(() => {
    axios.get(`${API}/api/chat/${courseId}`, { headers: { Authorization: `Bearer ${token}` } })
      .then(res => setMessages(res.data));
    ws.current = new WebSocket(`ws://localhost:5000/ws/chat`);
    ws.current.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      setMessages(m => [...m, msg]);
    };
    return () => { ws.current?.close(); };
  }, [courseId, token]);

  const send = () => {
    if (!input) return;
    const msg = { course_id: courseId, user_id: user.id, name: user.email, content: input, sent_at: new Date().toISOString() };
    ws.current?.send(JSON.stringify(msg));
    setInput("");
  };

  return (
    <div>
      <h3>Course Chat</h3>
      <div style={{ height: 200, overflowY: "auto", border: "1px solid #ccc" }}>
        {messages.map((msg, i) => (
          <div key={i}>
            <strong>{msg.name || "User"}:</strong> {msg.content}
            <span style={{ fontSize: 10, color: "#888" }}> ({new Date(msg.sent_at).toLocaleTimeString()})</span>
          </div>
        ))}
      </div>
      <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type a message..." />
      <button onClick={send}>Send</button>
    </div>
  );
}