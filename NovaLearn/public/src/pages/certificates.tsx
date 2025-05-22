import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Certificate from "../components/Certificate";

const CertificatesPage: React.FC = () => (
  <>
    <Header />
    <main style={{ padding: "2em" }}>
      <h2>Your Certificates</h2>
      <Certificate username="Jane Doe" course="React Mastery" />
    </main>
    <Footer />
  </>
);

export default CertificatesPage;