import React from "react";

const Footer: React.FC = () => (
  <footer style={{
    background: "#f1f5f9",
    color: "#444",
    textAlign: "center",
    padding: "1em 0",
    borderTop: "1px solid #e5e7eb",
    marginTop: "2em"
  }}>
    <small>© {new Date().getFullYear()} Nova X. All rights reserved.</small>
  </footer>
);

export default Footer;