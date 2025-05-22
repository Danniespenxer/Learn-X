import { Pool } from "pg";
const pool = new Pool();

export async function awardBadge(user_id: number, badge_id: number) {
  const result = await pool.query(
    `INSERT INTO user_badges (user_id, badge_id, awarded_at)
     VALUES ($1, $2, NOW())
     ON CONFLICT (user_id, badge_id) DO NOTHING
     RETURNING *`,
    [user_id, badge_id]
  );
  return result.rows[0];
}

export async function getUserBadges(user_id: number) {
  const result = await pool.query(
    `SELECT badges.* FROM badges
     JOIN user_badges ON badges.id = user_badges.badge_id
     WHERE user_badges.user_id = $1`, [user_id]
  );
  return result.rows;
}

export async function getAllBadges() {
  const result = await pool.query(`SELECT * FROM badges`);
  return result.rows;
}