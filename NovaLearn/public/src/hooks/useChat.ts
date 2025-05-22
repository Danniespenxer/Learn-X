import { useContext } from "react";
import { useChatContext } from "../context/ChatContext";

export const useChat = () => useChatContext();