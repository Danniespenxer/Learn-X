export async function getBadges() {
  const res = await fetch("/api/badges");
  if (!res.ok) throw new Error("Failed to fetch badges");
  return res.json();
}