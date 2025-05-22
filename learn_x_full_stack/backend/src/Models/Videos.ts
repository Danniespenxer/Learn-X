import { Pool } from "pg";
const pool = new Pool();

export async function addVideo(course_id: number, title: string, video_url: string, transcript: string = "") {
  const result = await pool.query(
    "INSERT INTO videos (course_id, title, video_url, transcript) VALUES ($1, $2, $3, $4) RETURNING *",
    [course_id, title, video_url, transcript]
  );
  return result.rows[0];
}

export async function getVideosByCourse(course_id: number) {
  const result = await pool.query(
    "SELECT * FROM videos WHERE course_id = $1", [course_id]
  );
  return result.rows;
}