import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useAuth } from "../hooks/useAuth";
import { Badge } from "../components/Badge";
import Certificate from "../components/Certificate";

const Profile: React.FC = () => {
  const { state } = useAuth();
  return (
    <>
      <Header />
      <main style={{ padding: "2em" }}>
        <h2>Profile</h2>
        <p>
          <strong>Username:</strong> {state.user?.username || "Guest"}
        </p>
        <h3>Badges</h3>
        <Badge name="Starter" />
        <Badge name="Quiz Master" />
        <Badge name="Course Completer" />
        <h3>Certificate</h3>
        <Certificate username={state.user?.username || "Guest"} course="Sample Course" />
      </main>
      <Footer />
    </>
  );
};

export default Profile;