import React from "react";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const posts = [
  { author: "Alice", content: "Try watching the video lessons twice." },
  { author: "Bob", content: "Check the sample questions at the end." },
];

const ThreadPage: React.FC = () => {
  const { query } = useRouter();

  return (
    <>
      <Header />
      <main style={{ padding: "2em" }}>
        <h2>Discussion Thread #{query.id}</h2>
        <ul>
          {posts.map((p, i) => (
            <li key={i}>
              <strong>{p.author}:</strong> {p.content}
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default ThreadPage;