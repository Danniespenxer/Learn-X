import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const quizzes = [
  { name: "Quiz 1", score: 8, total: 10 },
  { name: "Quiz 2", score: 10, total: 10 },
];

const QuizzesPage: React.FC = () => (
  <>
    <Header />
    <main style={{ padding: "2em" }}>
      <h2>Quizzes</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {quizzes.map(q => (
            <tr key={q.name}>
              <td>{q.name}</td>
              <td>{q.score}</td>
              <td>{q.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
    <Footer />
  </>
);

export default QuizzesPage;