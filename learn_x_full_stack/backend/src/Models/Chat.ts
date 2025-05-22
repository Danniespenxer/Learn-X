import { Pool } from "pg";
const pool = new Pool();

export async function addChatMessage(course_id: number, user_id: number, content: string) {
  const result = await pool.query(
    `INSERT INTO chat_messages (course_id, user_id, content, sent_at)
     VALUES ($1, $2, $3, NOW()) RETURNING *`,
    [course_id, user_id, content]
  );
  return result.rows[0];
}

export async function getChatForCourse(course_id: number) {
  const result = await pool.query(
    `SELECT chat_messages.*, users.name FROM chat_messages
     JOIN users ON chat_messages.user_id = users.id
     WHERE chat_messages.course_id = $1
     ORDER BY sent_at ASC`, [course_id]
  );
  return result.rows;
}