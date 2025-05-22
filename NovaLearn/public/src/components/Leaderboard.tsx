import React from "react";

type User = { name: string; score: number };
const dummyData: User[] = [
  { name: "Alice", score: 1800 },
  { name: "Bob", score: 1600 },
  { name: "You", score: 1400 },
];

const Leaderboard: React.FC = () => (
  <div>
    <h2>Leaderboard</h2>
    <ol>
      {dummyData.map((u, idx) => (
        <li key={u.name}>
          <strong>{u.name}</strong> — {u.score} pts
        </li>
      ))}
    </ol>
  </div>
);

export default Leaderboard;