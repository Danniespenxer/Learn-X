import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Toast from "../components/Toast";

const notifications = [
  { type: "success", message: "Assignment submitted!" },
  { type: "info", message: "New course available." },
  { type: "error", message: "Quiz deadline missed!" },
];

const NotificationsPage: React.FC = () => (
  <>
    <Header />
    <main style={{ padding: "2em" }}>
      <h2>Notifications</h2>
      {notifications.map((n, idx) => (
        <Toast key={idx} type={n.type as any} message={n.message} />
      ))}
    </main>
    <Footer />
  </>
);

export default NotificationsPage;