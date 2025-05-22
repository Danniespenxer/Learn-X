import React from "react";
import AiAssistant from "../components/AiAssistant";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AiAssistantProvider } from "../context/AiAssistantContext";

const AiAssistantPage: React.FC = () => (
  <>
    <Header />
    <main style={{ padding: "2em" }}>
      <AiAssistantProvider>
        <AiAssistant />
      </AiAssistantProvider>
    </main>
    <Footer />
  </>
);

export default AiAssistantPage;