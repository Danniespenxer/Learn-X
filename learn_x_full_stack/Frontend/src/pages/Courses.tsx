import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function Courses() {
  const [courses, setCourses] = useState<any[]>([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      window.location.href = "/login";
      return;
    }
    axios.get(`${API}/api/courses`, { headers: { Authorization: `Bearer ${token}` } })
      .then(res => setCourses(res.data))
      .catch(() => setCourses([]));
  }, [token]);

  return (
    <div>
      <h2>Courses</h2>
      <Link to="/register">Register</Link> | <Link to="/login">Login</Link>
      <ul>
        {courses.map(c => (
          <li key={c.id}>
            <Link to={`/courses/${c.id}`}>{c.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}