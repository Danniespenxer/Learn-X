import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Badge } from "../components/Badge";

const badges = ["Starter", "Quiz Master", "Course Completer"];

const BadgesPage: React.FC = () => (
  <>
    <Header />
    <main style={{ padding: "2em" }}>
      <h2>Your Badges</h2>
      <div style={{ fontSize: "2em" }}>
        {badges.map(b => <Badge key={b} name={b} />)}
      </div>
    </main>
    <Footer />
  </>
);

export default BadgesPage;