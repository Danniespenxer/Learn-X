import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Button from "../../components/Button";

const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Demo: accept any
    if (!username || !password) return setErr("Username and password required.");
    login("dummy.jwt.token");
  };

  return (
    <>
      <Header />
      <main style={{ padding: "2em" }}>
        <h2>Login</h2>
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
          <Button type="submit">Login</Button>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default LoginPage;