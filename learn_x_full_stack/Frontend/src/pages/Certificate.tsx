import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function Certificate() {
  const { courseId } = useParams();
  const [cert, setCert] = useState<any>(null);
  const [message, setMessage] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios.get(`${API}/api/certificates/me`, { headers: { Authorization: `Bearer ${token}` } })
      .then(res => {
        const certForCourse = (res.data || []).find((c: any) => c.course_id === Number(courseId));
        setCert(certForCourse);
      });
  }, [courseId, token]);

  if (!cert) return <div>No certificate found. Complete the course to earn one!</div>;

  return (
    <div>
      <h2>Your Certificate</h2>
      <a href={cert.cert_url} target="_blank" rel="noopener noreferrer">
        <img src={cert.cert_url} alt="Certificate" width={600} />
      </a>
      <p>Issued at: {new Date(cert.issued_at).toLocaleString()}</p>
    </div>
  );
}