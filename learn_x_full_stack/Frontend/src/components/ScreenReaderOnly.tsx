import React from "react";
export default function ScreenReaderOnly({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      position: "absolute", width: "1px", height: "1px", margin: "-1px", overflow: "hidden", clip: "rect(0,0,0,0)", border: 0, padding: 0
    }}>
      {children}
    </span>
  );
}