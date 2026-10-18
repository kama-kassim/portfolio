"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type CSSProperties } from "react";
import type { Role } from "@/content/home";
import type { Project } from "@/content/projects";
import { PadlockIcon, Placeholder, RoleTag, Tape } from "./Scrapbook";

const filters: ("All" | Role)[] = ["All", "Designed + developed", "Developed", "Designed"];
const FIRST = 4;

export function WorkList({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [showAll, setShowAll] = useState(false);

  const shown = projects.filter((p) => filter === "All" || p.role === filter);
  const visible = showAll || filter !== "All" ? shown : shown.slice(0, FIRST);
  const hidden = shown.length - visible.length;

  return (
    <>
      <div role="group" aria-label="Filter projects by my role" className="flex flex-wrap gap-x-3 gap-y-3.5 pb-8">
        {filters.map((f, i) => {
          const on = f === filter;
          const count = f === "All" ? projects.length : projects.filter((p) => p.role === f).length;
          return (
            <button
              key={f}
              type="button"
              aria-pressed={on}
              onClick={() => setFilter(f)}
              className={`inline-flex min-h-11 cursor-pointer items-center rounded-full border-[2.5px] border-ink px-[18px] py-2.5 text-[17px] font-bold transition-transform duration-150 ${
                on ? "bg-accent text-white [text-shadow:2px_2px_0_var(--color-ink)] shadow-[4px_4px_0_var(--color-ink)]" : "bg-white"
              }`}
              style={{ rotate: `${[-2, 1.5, -1, 2][i]}deg` }}
            >
              {f}
              <span
                className={`ml-2 text-[13px] ${on ? "rounded-full bg-ink px-2 py-0.5 text-paper [text-shadow:none]" : "text-faint"}`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <div className="flex flex-col gap-16 pb-14 pt-10" aria-live="polite">
        {visible.map((p, i) => (
          <CaseFolder key={p.slug} p={p} n={projects.indexOf(p) + 1} flip={i % 2 === 1} />
        ))}
      </div>

      {hidden > 0 && (
        <div className="flex justify-center pb-10">
          <button type="button" onClick={() => setShowAll(true)} className="cursor-pointer text-lg font-extrabold underline">
            Show {hidden} more case files ↓
          </button>
        </div>
      )}
    </>
  );
}

function CaseFolder({ p, n, flip }: { p: Project; n: number; flip: boolean }) {
  const r = flip ? 1.5 : -1.5;
  return (
    <article className="relative mt-9">
      <div
        className={`absolute -top-[34px] flex h-[38px] items-center rounded-t-xl border-[2.5px] border-b-0 border-ink bg-kraft px-7 font-hand text-[26px] font-bold ${
          flip ? "right-10" : "left-10"
        }`}
        style={{ rotate: `${flip ? 1 : -1}deg` }}
      >
        case file {String(n).padStart(2, "0")}
      </div>
      <div className="grid items-center gap-10 rounded-[4px_14px_14px_14px] border-[2.5px] border-ink bg-kraft-light p-6 shadow-[0_22px_32px_-22px_rgba(35,31,32,0.45)] sm:p-11 lg:grid-cols-12 lg:px-12">
        <div className={`lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
          <div
            className="polaroid relative border-2 border-ink bg-white px-4 pb-2 pt-4 shadow-[0_16px_24px_-16px_rgba(35,31,32,0.4)]"
            style={{ "--r": `${r}deg` } as CSSProperties}
          >
            <Tape className={`-top-3.5 h-7 w-[100px] ${flip ? "left-6" : "right-6"}`} r={flip ? -4 : 4} />
            {p.image ? (
              <Image src={p.image} alt={`${p.name} homepage`} width={1200} height={750} />
            ) : (
              <Placeholder label={`${p.name} screenshot`} bare className="h-56 sm:h-[300px]" />
            )}
            <p className="mx-1 mt-1.5 text-right font-hand text-[28px] leading-tight text-muted">{p.year ?? "[year]"}</p>
          </div>
        </div>
        <div className={`flex flex-col gap-4 lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
          <div>
            <RoleTag role={p.role} />
          </div>
          <h2 className="m-0 text-3xl font-extrabold leading-[1.05] tracking-tight sm:text-[40px]">{p.name}</h2>
          <p className="m-0 text-lg leading-relaxed text-muted">{p.summary}</p>
          {!p.locked && <p className="m-0 text-[15px] font-semibold text-muted">{p.stack.join(" · ")}</p>}
          <div className="mt-1 flex flex-wrap items-center gap-4">
            <Link
              href={`/work/${p.slug}`}
              aria-label={`View ${p.name} case study${p.locked ? " (password protected)" : ""}`}
              className="btn-comic btn-primary px-[22px] py-3 text-lg"
            >
              View case study
              {p.locked ? (
                <PadlockIcon className="h-[18px] w-[15px] text-white [filter:drop-shadow(2px_2px_0_var(--color-ink))]" />
              ) : (
                <span aria-hidden="true">→</span>
              )}
            </Link>
            {p.liveUrl ? (
              <a href={p.liveUrl} target="_blank" rel="noreferrer" className="font-bold">
                Live site ↗
              </a>
            ) : (
              <span className="font-bold text-faint">[live site link]</span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
