import React from "react";
import { Link } from "react-router-dom";
export default function Recommendations({ recommendations }: { recommendations: any[] }) {
  return (
    <div>
      <h4>Recommended for You</h4>
      <ul>
        {recommendations.map((rec, i) => (
          <li key={i}>
            <Link to={`/courses/${rec}`}>Course/Video #{rec}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}