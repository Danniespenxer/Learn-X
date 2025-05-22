import React, { useEffect, useState } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function Assignments() {
  const [assignments, setAssignments] = useState<any[]>([]);
  const [submission, setSubmission] = useState<File | null>(null);
  const [message, setMessage] = useState("");
  const params = new URLSearchParams(window.location.search);
  const assignment_id = params.get("assignment_id");
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (assignment_id) {
      axios.get(`${API}/api/assignments/${assignment_id}`, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => setAssignments([res.data]));
    } else {
      window.location.href = "/courses";
    }
  }, [assignment_id, token]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!submission) return setMessage("No file selected");
    const formData = new FormData();
    formData.append("file", submission);
    try {
      await axios.post(`${API}/api/assignments/submit/${assignment_id}`, formData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMessage("Assignment submitted!");
    } catch (err: any) {
      setMessage(err.response?.data?.error || "Upload failed");
    }
  };

  return (
    <div>
      <h2>Assignment</h2>
      <ul>
        {assignments.map((a: any) => (
          <li key={a.id}>
            <b>{a.title}</b> - {a.description} <br />
            Due: {a.due_date ? new Date(a.due_date).toLocaleString() : "N/A"}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input type="file" onChange={e => setSubmission(e.target.files?.[0] || null)} />
        <button type="submit">Submit Assignment</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}