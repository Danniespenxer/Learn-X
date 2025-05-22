import React from "react";

const Certificate: React.FC<{ username: string; course: string }> = ({ username, course }) => (
  <div style={{
    border: "2px solid #fbbf24",
    padding: "2em",
    borderRadius: "1em",
    background: "#fffbe8",
    maxWidth: 400,
    margin: "2em auto",
    textAlign: "center"
  }}>
    <h1>🎓 Certificate of Completion</h1>
    <p>This certifies that</p>
    <h2>{username}</h2>
    <p>has successfully completed</p>
    <h3>{course}</h3>
    <p>Congratulations!</p>
  </div>
);

export default Certificate;