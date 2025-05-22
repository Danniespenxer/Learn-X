import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Button from "../../components/Button";

const RegisterPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) return setErr("Username and password required.");
    alert("Registered! (demo)");
  };

  return (
    <>
      <Header />
      <main style={{ padding: "2em" }}>
        <h2>Register</h2>
        <form onSubmit={handleSubmit} style={{ maxWidth: 320 }}>
          <div>
            <label>Username</label>
            <input value={username} onChange={e => setUsername(e.target.value)} autoFocus />
          </div>
          <div>
            <label>Password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          {err && <div style={{ color: "red" }}>{err}</div>}
          <Button type="submit">Register</Button>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default RegisterPage;