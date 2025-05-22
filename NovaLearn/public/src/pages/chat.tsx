import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ChatWidget } from "../components/ChatWidget";
import { ChatProvider } from "../context/ChatContext";

const ChatPage: React.FC = () => (
  <>
    <Header />
    <main style={{ padding: "2em" }}>
      <ChatProvider>
        <ChatWidget />
      </ChatProvider>
    </main>
    <Footer />
  </>
);

export default ChatPage;