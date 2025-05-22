import React, { useEffect, useState } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function Dashboard() {
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [badges, setBadges] = useState<any[]>([]);
  const [certificates, setCertificates] = useState<any[]>([]);
  const token = localStorage.getItem("token");
  const userId = JSON.parse(atob(token?.split(".")[1] || "") || "{}").id;

  useEffect(() => {
    if (!token) {
      window.location.href = "/login";
      return;
    }
    axios.get(`${API}/api/ai/recommendations/${userId}`, { headers: { Authorization: `Bearer ${token}` } })
      .then(res => setRecommendations(res.data.recommended || []));
    axios.get(`${API}/api/badges/me`, { headers: { Authorization: `Bearer ${token}` } })
      .then(res => setBadges(res.data));
    axios.get(`${API}/api/certificates/me`, { headers: { Authorization: `Bearer ${token}` } })
      .then(res => setCertificates(res.data));
  }, [token, userId]);

  return (
    <div>
      <h1>Welcome to Learn X!</h1>
      <section>
        <h2>AI Recommendations</h2>
        <ul>
          {recommendations.map((rec, i) => (
            <li key={i}>Recommended Course/Video: {rec}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Your Badges</h2>
        <ul>
          {badges.map((b: any) => (
            <li key={b.id}>{b.name} <img src={b.icon_url} alt={b.name} width={24} height={24} /></li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Your Certificates</h2>
        <ul>
          {certificates.map((c: any) => (
            <li key={c.id}><a href={c.cert_url} target="_blank" rel="noopener noreferrer">Certificate for Course #{c.course_id}</a></li>
          ))}
        </ul>
      </section>
    </div>
  );
}