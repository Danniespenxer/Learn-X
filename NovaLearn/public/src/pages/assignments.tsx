import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const assignments = [
  { name: "Essay 1", due: "2025-05-25", status: "Submitted" },
  { name: "Project", due: "2025-06-01", status: "Pending" },
];

const AssignmentsPage: React.FC = () => (
  <>
    <Header />
    <main style={{ padding: "2em" }}>
      <h2>Assignments</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Due</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map(a => (
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.due}</td>
              <td>{a.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
    <Footer />
  </>
);

export default AssignmentsPage;
