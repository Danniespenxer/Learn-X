import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/Toast.module.css";

// Minimal real-time chat mock, replace with real WebSocket
export const ChatWidget: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSend = () => {
    if (input.trim()) {
      setMessages(prev => [...prev, input]);
      setInput("");
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className={styles.toast}>
      <h2>💬 Discussion</h2>
      <div style={{ minHeight: 100, maxHeight: 240, overflowY: "auto", background: "#f3f4f6", padding: 8, borderRadius: 8 }}>
        {messages.map((msg, i) => (
          <div key={i}>{msg}</div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div style={{ display: "flex", gap: 4, marginTop: 8 }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && handleSend()}
          placeholder="Type a message…"
          style={{ flex: 1 }}
        />
        <button onClick={handleSend} disabled={!input.trim()}>Send</button>
      </div>
    </div>
  );
};