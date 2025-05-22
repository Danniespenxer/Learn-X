import React from "react";
import Link from "next/link";

const Header: React.FC = () => (
  <header style={{
    background: "#38bdf8",
    color: "#fff",
    padding: "1.5em 2em",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }}>
    <h1 style={{ margin: 0, fontWeight: 700 }}>Nova X</h1>
    <nav>
      <Link href="/dashboard"><a style={{ margin: "0 1em", color: "#fff" }}>Dashboard</a></Link>
      <Link href="/courses"><a style={{ margin: "0 1em", color: "#fff" }}>Courses</a></Link>
      <Link href="/leaderboard"><a style={{ margin: "0 1em", color: "#fff" }}>Leaderboard</a></Link>
      <Link href="/profile"><a style={{ margin: "0 1em", color: "#fff" }}>Profile</a></Link>
      <Link href="/ai-assistant"><a style={{ margin: "0 1em", color: "#fff" }}>Nova Ai</a></Link>
    </nav>
  </header>
);

export default Header;