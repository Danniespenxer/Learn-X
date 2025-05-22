import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Leaderboard from "../components/Leaderboard";

const LeaderboardPage = () => (
  <>
    <Header />
    <main style={{ padding: "2em" }}>
      <Leaderboard />
    </main>
    <Footer />
  </>
);

export default LeaderboardPage;