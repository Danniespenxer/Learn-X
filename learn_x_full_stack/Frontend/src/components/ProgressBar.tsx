import React from "react";
export default function ProgressBar({ value, max }: { value: number; max: number }) {
  return (
    <div style={{ width: "100%", background: "#eee", borderRadius: 4 }}>
      <div style={{
        width: `${(value / max) * 100}%`,
        background: "#3b82f6",
        height: 8,
        borderRadius: 4
      }} />
    </div>
  );
}