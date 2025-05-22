export async function fetchAiResponse(question: string): Promise<string> {
  // Call your AI API here (mocked for demo)
  const res = await fetch("/api/ai", {
    method: "POST",
    body: JSON.stringify({ question }),
    headers: { "Content-Type": "application/json" },
  });
  const data = await res.json();
  return data.answer || "Sorry, I couldn't understand that!";
}