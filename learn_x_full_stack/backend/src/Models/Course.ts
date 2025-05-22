import { Pool } from "pg";
const pool = new Pool();

export interface Course {
  id: number;
  title: string;
  description: string;
  instructor_id: number;
}

export async function createCourse(title: string, description: string, instructor_id: number) {
  const result = await pool.query(
    "INSERT INTO courses (title, description, instructor_id) VALUES ($1, $2, $3) RETURNING *",
    [title, description, instructor_id]
  );
  return result.rows[0];
}

export async function getAllCourses() {
  const result = await pool.query("SELECT * FROM courses");
  return result.rows;
}

export async function getCourseById(id: number) {
  const result = await pool.query("SELECT * FROM courses WHERE id = $1", [id]);
  return result.rows[0];
}

export async function enrollStudent(course_id: number, student_id: number) {
  const result = await pool.query(
    "INSERT INTO enrollments (course_id, student_id) VALUES ($1, $2) RETURNING *",
    [course_id, student_id]
  );
  return result.rows[0];
}

export async function getEnrolledCourses(student_id: number) {
  const result = await pool.query(
    `SELECT courses.* FROM courses
     JOIN enrollments ON courses.id = enrollments.course_id
     WHERE enrollments.student_id = $1`,
    [student_id]
  );
  return result.rows;
}