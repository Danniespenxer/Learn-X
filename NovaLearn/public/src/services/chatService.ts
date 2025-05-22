export async function sendMessage(message: string) {
  const res = await fetch("/api/chat", {
    method: "POST",
    body: JSON.stringify({ message }),
    headers: { "Content-Type": "application/json" },
  });
  if (!res.ok) throw new Error("Failed to send message");
  return res.json();
}