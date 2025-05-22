import { Pool } from "pg";
const pool = new Pool();

export async function createAssignment(course_id: number, title: string, description: string, due_date: string) {
  const result = await pool.query(
    "INSERT INTO assignments (course_id, title, description, due_date) VALUES ($1, $2, $3, $4) RETURNING *",
    [course_id, title, description, due_date]
  );
  return result.rows[0];
}

export async function getAssignments(course_id: number) {
  const result = await pool.query(
    "SELECT * FROM assignments WHERE course_id = $1", [course_id]
  );
  return result.rows;
}

export async function submitAssignment(assignment_id: number, student_id: number, file_url: string) {
  const result = await pool.query(
    "INSERT INTO assignment_submissions (assignment_id, student_id, file_url, submitted_at) VALUES ($1, $2, $3, NOW()) RETURNING *",
    [assignment_id, student_id, file_url]
  );
  return result.rows[0];
}

export async function getAssignmentSubmissions(assignment_id: number) {
  const result = await pool.query(
    "SELECT * FROM assignment_submissions WHERE assignment_id = $1", [assignment_id]
  );
  return result.rows;
}