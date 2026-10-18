// Server-only helpers (uses node:crypto and request cookies).
import { createHash, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

export const UNLOCK_COOKIE = "cs_unlocked";

/** Hash of the current password. Changing the password logs everyone out. */
export function passwordToken() {
  const pw = process.env.CASE_STUDY_PASSWORD;
  if (!pw) return null;
  return createHash("sha256").update(`case-study:${pw}`).digest("hex");
}

export function passwordMatches(attempt: string) {
  const pw = process.env.CASE_STUDY_PASSWORD;
  if (!pw) return false;
  const a = createHash("sha256").update(attempt).digest();
  const b = createHash("sha256").update(pw).digest();
  return timingSafeEqual(a, b);
}

export async function isUnlocked() {
  const token = passwordToken();
  if (!token) return false;
  const jar = await cookies();
  return jar.get(UNLOCK_COOKIE)?.value === token;
}
