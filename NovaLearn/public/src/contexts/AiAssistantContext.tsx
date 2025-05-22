import React, { createContext, useState, ReactNode } from "react";
import { fetchAiResponse } from "../services/aiService";

type Message = { role: "user" | "ai"; content: string };
type AiAssistantContextType = {
  messages: Message[];
  sendMessage: (msg: string) => void;
  isLoading: boolean;
};

export const AiAssistantContext = createContext<AiAssistantContextType>({
  messages: [],
  sendMessage: () => {},
  isLoading: false,
});

export const AiAssistantProvider = ({ children }: { children: ReactNode }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (msg: string) => {
    setMessages(prev => [...prev, { role: "user", content: msg }]);
    setIsLoading(true);
    const aiReply = await fetchAiResponse(msg);
    setMessages(prev => [...prev, { role: "ai", content: aiReply }]);
    setIsLoading(false);
  };

  return (
    <AiAssistantContext.Provider value={{ messages, sendMessage, isLoading }}>
      {children}
    </AiAssistantContext.Provider>
  );
};