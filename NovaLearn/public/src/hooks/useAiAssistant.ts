import { useContext } from "react";
import { AiAssistantContext } from "../context/AiAssistantContext";

export const useAiAssistant = () => useContext(AiAssistantContext);