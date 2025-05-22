import React, { createContext, useState, ReactNode, useContext } from "react";

type ChatMessage = { sender: string; message: string; timestamp: string };

const ChatContext = createContext<{
  messages: ChatMessage[];
  addMessage: (msg: ChatMessage) => void;
}>({
  messages: [],
  addMessage: () => {},
});

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const addMessage = (msg: ChatMessage) => setMessages(old => [...old, msg]);
  return (
    <ChatContext.Provider value={{ messages, addMessage }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = () => useContext(ChatContext);