"use client";

import Image from "next/image";
import { useActionState, useState } from "react";
import { sendMessage, type ContactState } from "@/app/contact/actions";
import { site } from "@/content/site";
import { Tape } from "./Scrapbook";

const reasons = ["I'm hiring", "A project", "Just saying hi"];
const line =
  "w-full border-0 border-b-[2.5px] border-ink bg-transparent px-0.5 py-2 text-xl outline-none focus-visible:border-accent-dark focus-visible:outline-none";
const label = "text-[13px] font-extrabold tracking-[2px] text-muted";

export function ContactForm() {
  const [state, action, pending] = useActionState<ContactState, FormData>(sendMessage, {});
  const [reason, setReason] = useState(reasons[0]);

  if (state.ok) {
    return (
      <div role="status" className="relative mx-auto flex max-w-xl rotate-2 flex-col gap-2 border-[2.5px] border-ink bg-white px-7 py-8 shadow-[0_16px_24px_-16px_rgba(35,31,32,0.4)]">
        <Tape className="left-1/2 -top-4 w-[110px] -translate-x-1/2" r={-2} />
        <div aria-hidden="true" className="absolute -right-4 -top-6 rotate-12 rounded-lg border-4 border-accent-dark bg-paper/90 px-3.5 py-1.5 text-[22px] font-extrabold tracking-[4px] text-accent-dark">
          SENT
        </div>
        <Image src="/oyen.svg" alt="" width={120} height={70} className="-rotate-6" />
        <p className="m-0 text-[26px] font-extrabold tracking-tight">Got it, thank you!</p>
        <p className="m-0 text-[17px] leading-relaxed text-muted">
          Your note is on its way. I&apos;ll reply within <span className="whitespace-nowrap">1–2 days</span>.
        </p>
        <p className="m-0 mt-2 font-hand text-2xl text-accent-dark">(Oyen is delivering it)</p>
      </div>
    );
  }

  const f = state.fields ?? {};
  return (
    <form
      action={action}
      className="relative grid gap-10 rounded-md border-[2.5px] border-ink bg-white px-6 py-9 shadow-[0_16px_24px_-16px_rgba(35,31,32,0.4)] sm:px-12 sm:py-11 lg:-rotate-[0.6deg] lg:grid-cols-[minmax(0,1fr)_2px_360px] lg:gap-11"
    >
      <Tape className="-top-4 left-14 w-[130px]" r={-3} />
      <Tape className="-top-4 right-14 w-[130px]" r={3} />
      <input type="hidden" name="reason" value={reason} />
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <div className="flex flex-col gap-3.5">
        <label htmlFor="message" className={label}>
          YOUR MESSAGE
        </label>
        <textarea
          id="message"
          name="message"
          required
          maxLength={5000}
          defaultValue={f.message}
          placeholder="Hi Kama, …"
          className="h-[300px] w-full resize-none border-0 bg-[repeating-linear-gradient(transparent_0,transparent_39px,#d9d1c3_39px,#d9d1c3_41px)] px-0.5 font-hand text-3xl leading-[41px] outline-none"
        />
        <div role="group" aria-label="What's it about?" className="flex flex-wrap gap-2.5">
          {reasons.map((r) => (
            <button
              key={r}
              type="button"
              aria-pressed={r === reason}
              onClick={() => setReason(r)}
              className={`min-h-11 cursor-pointer rounded-full border-2 border-ink px-4 py-2 text-base font-bold ${
                r === reason ? "bg-accent text-white [text-shadow:1.5px_1.5px_0_var(--color-ink)]" : "bg-white"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      <div aria-hidden="true" className="hidden rounded-sm bg-ink lg:block" />

      <div className="flex flex-col gap-[22px]">
        <div className="flex items-start justify-between">
          <div aria-hidden="true" className="relative flex h-24 w-[120px] items-center justify-center">
            <svg width="120" height="96" viewBox="0 0 120 96" className="absolute inset-0">
              <circle cx="54" cy="48" r="40" fill="none" stroke="var(--color-accent-dark)" strokeWidth="2.5" strokeDasharray="5 4" />
              <path d="M4 30 Q30 22 56 30 T110 30 M4 48 Q30 40 56 48 T110 48 M4 66 Q30 58 56 66 T110 66" stroke="var(--color-accent-dark)" strokeWidth="2" fill="none" opacity="0.7" />
            </svg>
            <span className="relative bg-white px-1.5 py-0.5 text-xs font-extrabold tracking-[2px] text-accent-dark">MALAYSIA</span>
          </div>
          <div aria-hidden="true" className="h-[116px] w-24 rotate-3 border-[2.5px] border-dashed border-ink bg-white p-1.5">
            <div className="flex h-full w-full items-center justify-center bg-accent">
              <Image src="/oyen.svg" alt="" width={70} height={42} />
            </div>
          </div>
        </div>
        <p className="m-0 mt-1.5 font-hand text-3xl leading-none">To: Kama Kassim</p>
        <label className="flex flex-col gap-1">
          <span className={label}>YOUR NAME</span>
          <input type="text" name="name" required autoComplete="name" defaultValue={f.name} className={line} />
        </label>
        <label className="flex flex-col gap-1">
          <span className={label}>YOUR EMAIL</span>
          <input type="email" name="email" required autoComplete="email" defaultValue={f.email} className={line} />
        </label>
        {state.error && (
          <p role="alert" className="m-0 flex items-start gap-2 text-base font-semibold leading-snug text-[#9a3412]">
            <span aria-hidden="true" className="mt-px flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-dark text-sm font-extrabold text-white">
              !
            </span>
            <span>
              {state.error}{" "}
              <a href={`mailto:${site.email}`} className="underline">
                {site.email}
              </a>
            </span>
          </p>
        )}
        <button type="submit" disabled={pending} className="btn-comic btn-primary mt-2 cursor-pointer self-start whitespace-nowrap px-[26px] py-3.5 text-lg disabled:opacity-60">
          {pending ? "Sending…" : "Send it →"}
        </button>
      </div>
    </form>
  );
}
