import type { AppProps } from "next/app";
import "../styles/globals.css";
import { AuthProvider } from "../context/AuthContext";
import { CourseProvider } from "../context/CourseContext";
import { ChatProvider } from "../context/ChatContext";
import { AiAssistantProvider } from "../context/AiAssistantContext";
import { CalculatorProvider } from "../context/CalculatorContext";
import { useEffect } from "react";
import { useRouter } from "next/router";
import "../i18n";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // Example: scroll to top on route change
    const handleRouteChange = () => window.scrollTo(0, 0);
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <AuthProvider>
      <CourseProvider>
        <ChatProvider>
          <AiAssistantProvider>
            <CalculatorProvider>
              <Component {...pageProps} />
            </CalculatorProvider>
          </AiAssistantProvider>
        </ChatProvider>
      </CourseProvider>
    </AuthProvider>
  );
}

export default MyApp;