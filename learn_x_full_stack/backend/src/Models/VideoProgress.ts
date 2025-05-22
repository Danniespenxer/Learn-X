import { Pool } from "pg";
const pool = new Pool();

export async function updateProgress(student_id: number, video_id: number, watched_seconds: number, completed: boolean) {
  const result = await pool.query(
    `INSERT INTO video_progress (student_id, video_id, watched_seconds, completed, updated_at)
     VALUES ($1, $2, $3, $4, NOW())
     ON CONFLICT (student_id, video_id)
     DO UPDATE SET watched_seconds = $3, completed = $4, updated_at = NOW()
     RETURNING *`,
    [student_id, video_id, watched_seconds, completed]
  );
  return result.rows[0];
}

export async function getProgress(student_id: number, video_id: number) {
  const result = await pool.query(
    "SELECT * FROM video_progress WHERE student_id = $1 AND video_id = $2",
    [student_id, video_id]
  );
  return result.rows[0];
}