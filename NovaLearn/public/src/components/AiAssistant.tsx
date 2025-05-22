import React, { useContext } from "react";
import { AiAssistantContext } from "../context/AiAssistantContext";
import styles from "../styles/AiAssistant.module.css";

const AiAssistant: React.FC = () => {
  const { messages, sendMessage, isLoading } = useContext(AiAssistantContext);
  const [input, setInput] = React.useState("");

  const handleSend = () => {
    if (input.trim()) {
      sendMessage(input);
      setInput("");
    }
  };

  return (
    <div className={styles.aiAssistant}>
      <h2>🤖 AI Study Buddy</h2>
      <div className={styles.messages}>
        {messages.map((msg, idx) => (
          <div key={idx} className={msg.role === "user" ? styles.user : styles.ai}>
            <span>{msg.content}</span>
          </div>
        ))}
        {isLoading && <div className={styles.ai}>AI is typing…</div>}
      </div>
      <div className={styles.inputRow}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Ask me anything about your course…"
          aria-label="Type your question for the AI learning assistant"
        />
        <button onClick={handleSend} disabled={isLoading || !input.trim()}>
          Send
        </button>
      </div>
    </div>
  );
};

export default AiAssistant;