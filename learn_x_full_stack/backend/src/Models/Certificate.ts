import { Pool } from "pg";
const pool = new Pool();

export async function issueCertificate(user_id: number, course_id: number, cert_url: string) {
  const result = await pool.query(
    "INSERT INTO certificates (user_id, course_id, cert_url, issued_at) VALUES ($1, $2, $3, NOW()) RETURNING *",
    [user_id, course_id, cert_url]
  );
  return result.rows[0];
}

export async function getUserCertificates(user_id: number) {
  const result = await pool.query(
    "SELECT * FROM certificates WHERE user_id = $1", [user_id]
  );
  return result.rows;
}