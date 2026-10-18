"use client";

import Image from "next/image";
import Link from "next/link";
import { useActionState, useState } from "react";
import { unlock, type UnlockState } from "@/app/work/[slug]/actions";
import { site } from "@/content/site";

export function PasswordGate({ slug }: { slug: string }) {
  const [state, action, pending] = useActionState<UnlockState, FormData>(unlock.bind(null, slug), {});
  const [show, setShow] = useState(false);
  const err = state.error;

  return (
    <section className="grid items-center gap-14 px-5 pb-28 pt-10 sm:px-10 lg:grid-cols-12 lg:pb-32 lg:pl-60 lg:pr-48 lg:pt-[72px]">
      <div className="flex flex-col gap-[22px] lg:col-span-6">
        <h1 className="m-0 text-5xl font-extrabold leading-[0.95] tracking-[-0.03em] [text-wrap:balance] sm:text-7xl lg:text-[84px]">
          This one&apos;s locked.
        </h1>
        <p className="m-0 max-w-[520px] text-xl leading-relaxed">
          The work is real, but the client asked me to keep it private. Enter the password to read the full case study.
        </p>
        <p className="m-0 max-w-[520px] text-[17px] leading-relaxed text-muted">
          No password?{" "}
          <a href={`mailto:${site.email}?subject=Case%20study%20password`} className="font-bold">
            Email me
          </a>{" "}
          and I&apos;ll send it. I reply within <span className="whitespace-nowrap">1–2 days</span>.
        </p>
      </div>

      <div className="relative pt-[34px] lg:col-span-6">
        <div aria-hidden="true" className="absolute left-0 top-1.5 h-[46px] w-40 rounded-t-xl border-[2.5px] border-b-0 border-ink bg-[#cdb48e]" />
        <form
          action={action}
          className="relative flex flex-col gap-[18px] rounded-[0_14px_14px_14px] border-[2.5px] border-ink bg-kraft px-6 pb-9 pt-11 shadow-[0_16px_24px_-16px_rgba(35,31,32,0.4)] sm:px-10"
        >
          <div className="flex items-center gap-4">
            <svg width="40" height="46" viewBox="0 0 48 56" aria-hidden="true" className="shrink-0">
              <path d="M13 25 V16 C13 8 19 3 24 3 C30 3 35 8 35 16 V25" stroke="var(--color-ink)" strokeWidth="3.5" fill="none" strokeLinecap="round" />
              <rect x="5" y="24" width="38" height="29" rx="5" fill="var(--color-accent)" stroke="var(--color-ink)" strokeWidth="3" />
              <circle cx="24" cy="36" r="3.6" fill="var(--color-ink)" />
              <path d="M24 39 V45" stroke="var(--color-ink)" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <div className="flex flex-col gap-0.5">
              <span className="text-[22px] font-extrabold">Password protected</span>
              <span className="text-[15px] font-semibold text-muted">One password opens every private case study.</span>
            </div>
          </div>

          <label className="flex flex-col gap-2">
            <span className="text-[13px] font-extrabold tracking-[2px] text-muted">PASSWORD</span>
            <span
              className={`flex h-14 items-center rounded-[10px] border-[2.5px] bg-white ${err ? "border-accent-dark" : "border-ink"}`}
            >
              <input
                type={show ? "text" : "password"}
                name="password"
                required
                autoComplete="current-password"
                aria-invalid={err ? true : undefined}
                aria-describedby={err ? "pw-error" : undefined}
                placeholder="Password"
                className="h-full min-w-0 flex-1 rounded-[10px] border-0 bg-transparent px-4 text-lg outline-none"
              />
              <button
                type="button"
                onClick={() => setShow((s) => !s)}
                className="mr-2.5 cursor-pointer px-2.5 py-1.5 text-[15px] font-bold text-muted underline"
              >
                {show ? "Hide" : "Show"}
              </button>
            </span>
          </label>

          {err && (
            <p id="pw-error" role="alert" className="m-0 flex items-start gap-2 text-base font-semibold leading-snug text-[#9a3412]">
              <span aria-hidden="true" className="mt-px flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-dark text-sm font-extrabold text-white">
                !
              </span>
              {err}
            </p>
          )}

          <button type="submit" disabled={pending} className="btn-comic btn-primary cursor-pointer px-6 py-3.5 text-lg disabled:opacity-60">
            {pending ? "Checking…" : "Unlock case study →"}
          </button>
          <Link href="/work" className="self-center font-bold">
            Back to all work
          </Link>
        </form>
        <Image
          src="/oyen.svg"
          alt=""
          width={130}
          height={76}
          className="absolute -bottom-6 -right-3 rotate-6 sm:-right-6"
        />
      </div>
    </section>
  );
}
