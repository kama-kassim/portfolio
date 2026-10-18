"use server";

export type ContactState = { ok?: boolean; error?: string; fields?: Record<string, string> };

const reasons = ["I'm hiring", "A project", "Just saying hi"];

/**
 * Sends the postcard through Resend (https://resend.com) when RESEND_API_KEY and CONTACT_TO
 * are set. Until then it tells the visitor to email instead, so no message is ever lost silently.
 */
export async function sendMessage(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const reason = reasons.includes(String(formData.get("reason"))) ? String(formData.get("reason")) : reasons[0];
  const fields = { name, email, message, reason };

  if (formData.get("company_website")) return { ok: true }; // honeypot: bots fill hidden fields
  if (!name || !email || !message) return { error: "Please fill in your name, email and a message.", fields };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { error: "That email doesn't look right. Mind checking it?", fields };
  if (message.length > 5000) return { error: "That's a long postcard! Please keep it under 5,000 characters.", fields };

  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;
  if (!key || !to) return { error: "The form isn't connected yet. Please email me directly instead.", fields };

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM ?? "Portfolio <onboarding@resend.dev>",
      to,
      reply_to: email,
      subject: `${reason}: message from ${name}`,
      text: `${message}\n\n— ${name} (${email})`,
    }),
  });
  if (!res.ok) return { error: "Something went wrong sending that. Please try again, or email me directly.", fields };
  return { ok: true };
}
