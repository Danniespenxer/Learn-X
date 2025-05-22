export async function evaluateExpression(expr: string): Promise<number> {
  const res = await fetch("/api/calculator", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ expr }),
  });
  if (!res.ok) throw new Error("Failed to evaluate expression");
  const data = await res.json();
  return data.result;
} 