export async function getCertificates() {
  const res = await fetch("/api/certificates");
  if (!res.ok) throw new Error("Failed to fetch certificates");
  return res.json();
}