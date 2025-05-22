import React from "react";

const badges = [
  { name: "Starter", icon: "🏅" },
  { name: "Quiz Master", icon: "🎲" },
  { name: "Course Completer", icon: "🎓" },
];

export const Badge = ({ name }: { name: string }) => {
  const badge = badges.find(b => b.name === name);
  return (
    <span title={name} style={{ fontSize: "1.5em", margin: "0 0.2em" }}>
      {badge ? badge.icon : "🏅"}
    </span>
  );
};