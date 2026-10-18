import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import type { Project } from "@/content/projects";
import { PadlockIcon, Placeholder, Tape } from "./Scrapbook";

const wrap = "px-5 sm:px-10 lg:pl-40 lg:pr-24";
const shadow = "shadow-[0_16px_24px_-16px_rgba(35,31,32,0.4)]";
const label = "text-xs font-extrabold tracking-[2px] text-faint";

function Shot({ label: l, r = 0, caption, h = "h-[300px]", tape = "right-8" }: { label: string; r?: number; caption?: string; h?: string; tape?: string }) {
  return (
    <figure className={`polaroid relative m-0 border-2 border-ink bg-white px-3.5 pb-2.5 pt-3.5 ${shadow}`} style={{ "--r": `${r}deg` } as CSSProperties}>
      <Tape className={`-top-3.5 h-[30px] w-[110px] ${tape}`} r={r > 0 ? 4 : -4} />
      <Placeholder label={l} className={h} />
      {caption && <figcaption className="mt-2.5 font-hand text-2xl text-muted">{caption}</figcaption>}
    </figure>
  );
}

function StepHead({ title, note, line }: { title: string; note?: string; line: string }) {
  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex flex-wrap items-baseline gap-x-[18px] gap-y-1">
        <h2 className="m-0 text-4xl font-extrabold tracking-[-0.03em] sm:text-[44px]">{title}</h2>
        {note && <p className="m-0 -rotate-2 self-start font-hand text-[26px] text-accent-dark">{note}</p>}
      </div>
      <p className="m-0 max-w-[640px] text-lg leading-relaxed text-muted sm:text-[19px]">{line}</p>
    </div>
  );
}

export function CaseStudy({ p, next }: { p: Project; next: Project }) {
  const designedByMe = p.role !== "Developed";
  const live = p.liveUrl ?? "#";
  return (
    <>
      {/* Hero */}
      <section className={`grid items-center gap-12 pb-24 pt-10 lg:grid-cols-12 lg:pb-28 lg:pt-14 ${wrap}`}>
        <div className="flex flex-col gap-[22px] lg:col-span-7">
          <nav aria-label="Breadcrumb" className="text-[15px] font-semibold text-faint">
            <Link href="/work" className="text-muted">
              Work
            </Link>{" "}
            <span aria-hidden="true">/</span> <span aria-current="page" className="text-ink">{p.name}</span>
          </nav>
          <h1 className="m-0 text-5xl font-extrabold leading-[0.92] tracking-[-0.035em] [text-wrap:balance] sm:text-7xl lg:text-[92px]">{p.name}</h1>
          <p className="m-0 max-w-[600px] text-2xl font-bold leading-tight tracking-tight [text-wrap:balance] sm:text-[30px]">
            <span className="bg-[linear-gradient(transparent_62%,var(--color-tape)_62%,var(--color-tape)_92%,transparent_92%)] px-0.5">
              [Outcome headline, e.g. a site the client updates without a developer]
            </span>
          </p>
          <p className="m-0 max-w-[560px] text-xl leading-relaxed">{p.summary}</p>
          <div className="mt-1 flex flex-wrap items-center gap-4">
            <a href={live} target="_blank" rel="noreferrer" className="btn-comic btn-primary px-6 py-3.5 text-lg">
              Visit live site ↗
            </a>
            <Link href="/work" className="text-[17px] font-bold">
              Back to all work
            </Link>
          </div>
        </div>
        <aside aria-label="Project at a glance" className={`relative rotate-[0.8deg] rounded-lg border-[2.5px] border-ink bg-white px-6 pb-[18px] pt-[22px] lg:col-span-5 ${shadow}`}>
          <svg className="absolute -top-6 left-[30px]" width="26" height="60" viewBox="0 0 26 60" aria-hidden="true">
            <path d="M8 50 L8 10 C8 4 18 4 18 10 L18 44 C18 52 4 52 4 44 L4 16" stroke="var(--color-ink)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          </svg>
          <p className="mb-1 mt-0 font-hand text-[26px] text-accent-dark">at a glance</p>
          {[
            ["MY ROLE", p.role === "Developed" ? "Front-end developer (developed, not designed)" : p.role === "Designed" ? "Designer" : "Designer and front-end developer"],
            ["STACK", p.stack.join(" · ")],
            ["CLIENT · YEAR", `[client or agency] · ${p.year ?? "[year]"}`],
            ["RESULT", "[One outcome, e.g. the client builds new pages without a developer]"],
          ].map(([k, v], i, arr) => (
            <div key={k} className={`flex flex-col gap-[3px] py-3 ${i < arr.length - 1 ? "border-b-[1.5px] border-dashed border-[#b7aea4]" : ""}`}>
              <span className={label}>{k}</span>
              <span className="text-[17px] font-bold">{v}</span>
            </div>
          ))}
        </aside>
      </section>

      <ol className={`m-0 flex list-none flex-col p-0 pb-24 ${wrap}`}>
        {/* Handoff */}
        <li className="flex flex-col gap-7 pb-28">
          <StepHead
            title={designedByMe ? "From my design" : "The handoff"}
            note={designedByMe ? "designed by me" : "design by the UI/UX team"}
            line={designedByMe ? "I designed it first, then built it to match, section by section." : "The UI/UX team designed it. I built it to match, section by section."}
          />
          <div className="relative grid gap-16 md:grid-cols-2 md:gap-[72px]">
            <Shot label="a section in the design file" r={-1.2} caption="the design" tape="left-8" />
            <Shot label="the same section, live on the site" r={1} caption="what I built" />
            <svg className="absolute left-1/2 top-[130px] -ml-[34px] hidden md:block" width="68" height="40" viewBox="0 0 68 40" aria-hidden="true">
              <path d="M4 24 C20 8 40 8 58 20" stroke="var(--color-accent-dark)" strokeWidth="3" fill="none" strokeLinecap="round" />
              <path d="M48 10 L60 21 L46 28" stroke="var(--color-accent-dark)" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </li>

        {/* Pages gallery */}
        <li className="flex flex-col gap-7 pb-28">
          <StepHead title="The pages" note="all live" line="[One line on how the pages are built, e.g. every page is made from reusable blocks.]" />
          <figure className={`relative m-0 border-2 border-ink bg-white px-[18px] pb-2.5 pt-[18px] ${shadow}`}>
            <Tape className="left-1/2 -top-4 w-[130px] -translate-x-1/2" r={2} />
            <Placeholder label="full homepage screenshot, live site" className="h-72 sm:h-[560px]" />
            <figcaption className="mt-2.5 flex items-baseline justify-between gap-4">
              <span className="font-hand text-[26px] text-muted">the homepage</span>
              <a href={live} target="_blank" rel="noreferrer" className="font-bold">
                Open the live site ↗
              </a>
            </figcaption>
          </figure>
          <div className="mt-4 grid gap-12 sm:grid-cols-2">
            {["page 2", "page 3", "page 4", "page 5"].map((pg, i) => (
              <Shot key={pg} label={`[${pg}]`.slice(1, -1)} r={[0, 0.6, 0, -0.6][i]} caption={`[${pg} name]`} h="h-52 sm:h-[300px]" tape={i % 2 ? "right-6" : "left-6"} />
            ))}
          </div>
        </li>

        {/* Mobile */}
        <li className="flex flex-col gap-7 pb-28">
          <StepHead title="On every screen" note="thumb-friendly" line="[One line on how you made it work on phones.]" />
          <div className="flex flex-wrap items-start justify-center gap-10 sm:gap-[72px]">
            {[-3, 1.5, -1].map((r, i) => (
              <div key={i} className={`w-[200px] rounded-[34px] bg-ink p-3 sm:w-[230px] ${shadow}`} style={{ rotate: `${r}deg`, marginTop: [0, 40, 10][i] }}>
                <Placeholder label={["homepage, mobile", "a page, mobile", "another page, mobile"][i]} className="h-[400px] rounded-3xl sm:h-[470px]" />
              </div>
            ))}
          </div>
        </li>

        {/* Tricky bit */}
        <li className="pb-28">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="flex flex-col gap-2.5 lg:col-span-5">
              <StepHead title="The tricky bit" note="the part I'm proudest of" line="[The trickiest part and how you solved it, in one line.]" />
              <div className="relative mt-[18px] flex h-[340px] w-[340px] max-w-full -rotate-3 flex-col justify-center gap-3.5 border-2 border-ink bg-[#fff3c4] px-6 pb-[22px] pt-[26px] shadow-[0_14px_20px_-14px_rgba(35,31,32,0.45)]">
                <Tape className="left-1/2 -top-3.5 h-[26px] w-[90px] -translate-x-1/2" r={2} />
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-extrabold tracking-[2px] text-muted">ONE DECISION</span>
                  <p className="m-0 font-hand text-[26px] leading-[1.15]">[What you chose and why]</p>
                </div>
                <div className="flex flex-col gap-1 border-t-[1.5px] border-dashed border-ink pt-3">
                  <span className="text-xs font-extrabold tracking-[2px] text-muted">ONE LIMITATION</span>
                  <p className="m-0 font-hand text-[26px] leading-[1.15]">[What you&apos;d do differently or what it can&apos;t do yet]</p>
                </div>
              </div>
            </div>
            <div className="flex lg:col-span-7 [&>figure]:flex-1">
              <Shot label="before / after, or the bug in action" r={1.2} caption="how I fixed it" h="h-64 lg:h-full lg:min-h-[320px]" />
            </div>
          </div>
        </li>

        {/* Launch */}
        <li className="flex flex-col gap-6">
          <StepHead title="Launch" line="What changed once it went live." />
          <div className="flex flex-wrap gap-4">
            {[
              ["LIVE SINCE", "[Launch month + year]"],
              ["LIGHTHOUSE", "[Lighthouse score]"],
              ["NOW THE CLIENT CAN", "[What the client can do now]"],
            ].map(([k, v]) => (
              <span key={k} className="flex flex-col gap-1 rounded-lg border-2 border-ink bg-white px-[18px] py-3 text-lg font-bold">
                <span className={label}>{k}</span>
                {v}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2.5">
            <span className={`${label} mr-1.5`}>BUILT WITH</span>
            {[...p.stack, "Claude (AI-assisted)"].map((s) => (
              <span key={s} className="rounded-full border-2 border-ink bg-white px-3.5 py-[7px] text-[15px] font-bold">
                {s}
              </span>
            ))}
          </div>
          <div className="mt-2.5 flex flex-wrap items-center gap-7">
            <div className="-rotate-[8deg] rounded-lg border-4 border-accent-dark px-[18px] py-2 text-[26px] font-extrabold tracking-[4px] text-accent-dark outline-2 outline-offset-[3px] outline-accent-dark [outline-style:solid]">
              SHIPPED
            </div>
            <Image src="/oyen.svg" alt="" width={120} height={70} className="rotate-6" />
            <p className="m-0 font-hand text-[28px]">Oyen approves.</p>
          </div>
        </li>
      </ol>

      {/* Next project */}
      <section className={`pb-32 pt-10 ${wrap}`}>
        <div className="grid gap-8 lg:grid-cols-12">
          <Link
            href={`/work/${next.slug}`}
            className={`flex items-center gap-6 rounded-[14px] border-[2.5px] border-ink bg-white p-[22px] no-underline lg:col-span-7 ${shadow}`}
          >
            <Placeholder label={next.name} className="h-[120px] w-[180px] shrink-0 max-sm:hidden" />
            <div className="flex flex-col gap-1.5">
              <span className="text-sm font-extrabold tracking-[2px] text-accent-dark">NEXT PROJECT</span>
              <span className="inline-flex items-center gap-2 text-3xl font-extrabold tracking-tight">
                {next.name}
                {next.locked ? <PadlockIcon className="h-5 w-[17px] text-accent-dark" /> : <span aria-hidden="true">→</span>}
              </span>
              <span className="text-[15px] font-semibold text-muted">{next.role}</span>
            </div>
          </Link>
          <div className="flex flex-col justify-center gap-3.5 rounded-[14px] border-[2.5px] border-dashed border-ink bg-paper px-6 py-[22px] lg:col-span-5">
            <p className="m-0 font-hand text-[28px] text-accent-dark">like what you see?</p>
            <div className="flex items-center gap-3.5">
              <Link href="/contact" className="btn-comic btn-primary px-6 py-3.5 text-lg">
                Let&apos;s talk →
              </Link>
              <Link href="/work" className="font-bold">
                All work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
