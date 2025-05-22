import React, { useEffect, useState } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function Badges() {
  const [badges, setBadges] = useState<any[]>([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios.get(`${API}/api/badges/me`, { headers: { Authorization: `Bearer ${token}` } })
      .then(res => setBadges(res.data));
  }, [token]);

  return (
    <div>
      <h2>Your Badges</h2>
      <ul>
        {badges.map((b: any) => (
          <li key={b.id}>
            <img src={b.icon_url} alt={b.name} width={24} height={24} /> {b.name} - {b.description}
          </li>
        ))}
      </ul>
    </div>
  );
}