import { Pool } from "pg";
import bcrypt from "bcrypt";
const pool = new Pool();

export type UserRole = "student" | "instructor" | "admin";
export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: UserRole;
}

export async function createUser(name: string, email: string, password: string, role: UserRole = "student") {
  const hashedPassword = await bcrypt.hash(password, 10);
  const result = await pool.query(
    "INSERT INTO users (name, email, password, role) VALUES ($1, $2, $3, $4) RETURNING id, name, email, role",
    [name, email, hashedPassword, role]
  );
  return result.rows[0];
}

export async function findUserByEmail(email: string) {
  const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
  return result.rows[0];
}

export async function findUserById(id: number) {
  const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
  return result.rows[0];
}

export async function comparePassword(candidate: string, hash: string) {
  return await bcrypt.compare(candidate, hash);
}