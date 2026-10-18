"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { UNLOCK_COOKIE, passwordMatches, passwordToken } from "@/lib/caseLock";

export type UnlockState = { error?: string };

export async function unlock(slug: string, _prev: UnlockState, formData: FormData): Promise<UnlockState> {
  const attempt = String(formData.get("password") ?? "");
  const token = passwordToken();
  if (!token) return { error: "Case studies aren't set up yet. Please email me instead." };
  if (!passwordMatches(attempt)) return { error: "That's not it. Check the password I sent, or ask me for it." };

  const jar = await cookies();
  jar.set(UNLOCK_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 days: one unlock opens every case study
  });
  revalidatePath(`/work/${slug}`);
  return {};
}
