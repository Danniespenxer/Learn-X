import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const threads = [
  { id: 1, title: "How to pass the first quiz?" },
  { id: 2, title: "Certificate eligibility explained" },
];

const ForumPage: React.FC = () => (
  <>
    <Header />
    <main style={{ padding: "2em" }}>
      <h2>Discussion Forum</h2>
      <ul>
        {threads.map(t => (
          <li key={t.id}>
            <a href={`/discussion-forum/${t.id}`}>{t.title}</a>
          </li>
        ))}
      </ul>
    </main>
    <Footer />
  </>
);

export default ForumPage;
