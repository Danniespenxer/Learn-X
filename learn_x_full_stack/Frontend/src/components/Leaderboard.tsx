import React from "react";
export default function Leaderboard({ users }: { users: { name: string, points: number }[] }) {
  return (
    <div>
      <h3>Leaderboard</h3>
      <ol>
        {users.map((u, i) => (
          <li key={i}>{u.name} - {u.points} pts</li>
        ))}
      </ol>
    </div>
  );
}