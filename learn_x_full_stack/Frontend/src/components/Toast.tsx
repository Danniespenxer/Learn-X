import React from "react";
export default function Toast({ message, onClose }: { message: string; onClose: () => void }) {
  if (!message) return null;
  return (
    <div style={{
      position: "fixed", bottom: 20, right: 20, background: "#222", color: "#fff", padding: 16, borderRadius: 8, zIndex: 9999
    }}>
      {message}
      <button onClick={onClose} style={{ marginLeft: 12, background: "none", color: "#fff", border: "none" }}>✕</button>
    </div>
  );
}