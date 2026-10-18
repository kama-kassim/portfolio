import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { featured, process, stickers, type FeaturedProject } from "@/content/home";
import { site } from "@/content/site";
import { PadlockIcon, Placeholder, RoleTag, Tape } from "@/components/Scrapbook";

const wrap = "px-5 sm:px-10 lg:pl-60 lg:pr-48";

export default function Home() {
  return (
    <>
      <Hero />
      <RecentPages />
      <Process />
      <Skills />
      <DoodleCorner />
      <Postcard />
    </>
  );
}

function Hero() {
  return (
    <section id="top" className={`relative flex flex-col items-center pb-24 pt-10 text-center lg:pb-36 lg:pt-20 ${wrap}`}>
      <div className="relative z-10 -mb-6 w-56 sm:w-72 lg:-mb-9 lg:w-[380px]">
        <Image
          src="/oyen.svg"
          alt="Oyen, a doodled cat face, peeking over the headline"
          width={380}
          height={224}
          priority
          className="h-auto w-full"
        />
        <p className="absolute left-[118%] top-[-14px] m-0 hidden w-60 rotate-[4deg] text-left font-hand text-[32px] leading-[1.1] lg:block">
          I am allergic to cats,
          <br />
          But they so cute!
        </p>
      </div>

      <div className="relative flex max-w-[980px] -rotate-1 flex-col items-center gap-5 rounded-md border-[3px] border-ink bg-white px-6 pb-10 pt-12 shadow-[0_18px_30px_-18px_rgba(35,31,32,0.35)] sm:px-12 lg:gap-[22px] lg:px-[72px] lg:pb-12 lg:pt-14">
        <Tape className="-left-7 top-4 w-28 lg:w-[130px]" r={-32} />
        <Tape className="-right-7 top-4 w-28 lg:w-[130px]" r={32} />
        <p className="m-0 font-hand text-2xl text-accent-dark sm:text-3xl lg:text-4xl">
          hi, I&apos;m Kama Kassim, a front-end developer
        </p>
        <h1 className="m-0 text-5xl font-extrabold leading-[0.98] tracking-[-0.03em] sm:text-7xl lg:text-[92px]">
          The dev who{" "}
          <span className="relative inline-block">
            designs.
            <svg
              className="draw-in absolute -left-1.5 top-[92%] h-auto w-[105%]"
              viewBox="0 0 350 34"
              aria-hidden="true"
            >
              <path d="M4 14 C70 7 170 4 250 7 C290 8 320 10 344 12" stroke="var(--color-accent)" strokeWidth="7" fill="none" strokeLinecap="round" />
              <path d="M26 27 C110 20 210 19 318 24" stroke="var(--color-accent)" strokeWidth="4" fill="none" strokeLinecap="round" />
            </svg>
          </span>
        </h1>
        <p className="m-0 max-w-[640px] text-lg leading-relaxed text-muted [text-wrap:balance] sm:text-[22px]">
          I make websites look right and work right. Design and code, from the same pair of hands.
        </p>
        <div className="mt-2 flex flex-col gap-4 sm:flex-row">
          <Link href="/work" className="btn-comic btn-primary px-7 py-4 text-xl lg:text-[22px]">
            Flip through my work
          </Link>
          <a href={site.cv} className="btn-comic btn-secondary px-7 py-4 text-xl lg:text-[22px]">
            Grab my CV
          </a>
        </div>
        <p className="mt-1.5 flex items-center gap-2.5 text-base font-medium text-muted">
          <span className="h-2.5 w-2.5 rounded-full border-2 border-ink bg-green-600" />
          Open to front-end roles · based in Malaysia
        </p>
      </div>

      <svg
        className="absolute left-[884px] top-[110px] hidden xl:block"
        style={{ transform: "rotate(139deg) scaleX(-0.95)" }}
        width="180"
        height="110"
        viewBox="0 0 180 110"
        aria-hidden="true"
      >
        <path d="M165 25 C130 8 60 18 22 75" stroke="var(--color-accent)" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M40 68 L22 75 L23 56" stroke="var(--color-accent)" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </section>
  );
}

function ProjectCard({ p, r, big = false }: { p: FeaturedProject; r: number; big?: boolean }) {
  return (
    <article
      className={`polaroid relative flex flex-col border-2 border-ink bg-white shadow-[0_16px_24px_-16px_rgba(35,31,32,0.4)] ${
        big ? "gap-4 px-5 pb-8 pt-5" : "gap-3 px-4 pb-6 pt-4"
      }`}
      style={{ "--r": `${r}deg` } as CSSProperties}
    >
      <Tape className={`left-1/2 -top-4 -translate-x-1/2 ${big ? "w-36" : "w-28"}`} r={big ? 3 : -4} />
      {p.image ? (
        <Image src={p.image} alt={`${p.name} homepage`} width={1200} height={750} className="border-2 border-ink" />
      ) : (
        <Placeholder label={`${p.name} screenshot`} className={big ? "min-h-[300px] flex-1" : "h-[150px]"} />
      )}
      <div>
        <RoleTag role={p.role} />
      </div>
      <h3 className={`m-0 font-extrabold tracking-tight ${big ? "text-4xl" : "text-[26px]"}`}>{p.name}</h3>
      {big && p.summary && <p className="m-0 max-w-[560px] text-lg leading-relaxed text-muted">{p.summary}</p>}
      <Link
        href={`/work/${p.slug}`}
        className="inline-flex items-center gap-2 self-start font-bold"
        aria-label={`View ${p.name} case study${p.locked ? " (password protected)" : ""}`}
      >
        View case study
        {p.locked ? <PadlockIcon className="h-4 w-3.5 text-accent-dark" /> : <span aria-hidden="true">→</span>}
      </Link>
    </article>
  );
}

function RecentPages() {
  const [first, ...rest] = featured;
  return (
    <section id="work" className={`flex flex-col gap-10 pb-24 pt-10 ${wrap}`}>
      <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
        <h2 className="m-0 text-4xl font-extrabold tracking-[-0.03em] sm:text-6xl">Recent pages</h2>
        <p className="m-0 font-hand text-3xl text-faint sm:text-[34px]">stuck in here with tape</p>
        <Link href="/work" className="text-lg font-extrabold sm:ml-auto">
          See all work →
        </Link>
      </div>
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="flex lg:col-span-7 [&>article]:flex-1">
          <ProjectCard p={first} r={-1.5} big />
        </div>
        <div className="flex flex-col gap-9 lg:col-span-5">
          {rest.map((p, i) => (
            <ProjectCard key={p.slug} p={p} r={i === 0 ? 2 : -1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className={`grid gap-10 pb-24 pt-14 lg:grid-cols-12 lg:gap-12 ${wrap}`}>
      <div className="flex flex-col gap-5 lg:col-span-5">
        <h2 className="m-0 text-4xl font-extrabold tracking-[-0.03em] sm:text-6xl">My to-do list</h2>
        <p className="m-0 max-w-[420px] text-xl leading-relaxed text-muted">
          Same four steps on every project, whether it&apos;s a Shopify store or a Next.js site.
        </p>
      </div>
      <ol className="m-0 flex list-none flex-col gap-6 p-0 pt-1.5 lg:col-span-7 lg:gap-0">
        {process.map((s) => (
          <li key={s.title} className="flex items-start gap-5 lg:min-h-20">
            <svg width="34" height="34" viewBox="0 0 34 34" className="shrink-0" aria-hidden="true">
              <rect x="3" y="3" width="28" height="28" rx="4" stroke="currentColor" strokeWidth="3" fill="none" />
              {s.done && (
                <path d="M8 17 L15 24 L30 4" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              )}
            </svg>
            <div>
              <h3 className="m-0 text-[26px] font-extrabold leading-tight">
                {s.title}
                <span className="sr-only">{s.done ? " (done)" : " (next)"}</span>
              </h3>
              <p className="mt-0.5 text-lg text-muted">{s.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

const stickerStyle = {
  design: "bg-white",
  both: "bg-accent text-white [text-shadow:2px_2px_0_var(--color-ink)]",
  code: "bg-ink text-paper",
};

function Skills() {
  return (
    <section id="skills" className={`flex flex-col gap-8 pb-28 pt-14 ${wrap}`}>
      <div className="flex flex-col gap-2">
        <span className="text-sm font-extrabold tracking-[2px] text-accent-dark">SKILLS</span>
        <h2 className="m-0 text-4xl font-extrabold tracking-[-0.03em] sm:text-6xl">Stickers I&apos;ve collected</h2>
      </div>
      <ul className="m-0 flex max-w-[1100px] list-none flex-wrap gap-x-4 gap-y-[18px] p-0">
        {stickers.map((s) => (
          <li
            key={s.label}
            tabIndex={0}
            className={`sticker cursor-default select-none rounded-full border-[2.5px] border-ink px-5 py-3 text-lg font-bold sm:text-xl ${stickerStyle[s.kind]}`}
            style={{ "--r": `${s.r}deg` } as CSSProperties}
          >
            {s.label}
          </li>
        ))}
      </ul>
      <p className="m-0 font-hand text-[28px] text-muted sm:text-[32px]">white = design · ink = code · orange = both</p>
    </section>
  );
}

function DoodleCorner() {
  const art = [
    { label: "artwork", r: -7, pos: "left-0 top-10 z-10 lg:left-3.5", tr: -4 },
    { label: "favourite artwork", r: 2, pos: "left-[28%] top-2 z-30 lg:left-[170px]", tr: 3 },
    { label: "artwork", r: 7, pos: "left-[56%] top-12 z-20 lg:left-[326px]", tr: -6 },
  ];
  return (
    <section id="playground" className={`grid items-center gap-10 pb-28 pt-14 lg:grid-cols-12 lg:gap-12 ${wrap}`}>
      <div className="flex flex-col gap-5 lg:col-span-5">
        <h2 className="m-0 text-4xl font-extrabold tracking-[-0.03em] sm:text-6xl">Doodle corner</h2>
        <p className="m-0 -rotate-[1.5deg] font-hand text-[32px] text-accent-dark">off the clock, I draw.</p>
        <p className="m-0 max-w-[440px] text-xl leading-relaxed text-muted">
          Anime-style characters, fan art and original designs. It&apos;s where most of my eye for colour and composition
          comes from.
        </p>
        <Link href="/playground" className="btn-comic btn-secondary mt-2 self-start px-6 py-3.5 text-xl">
          See the playground →
        </Link>
      </div>
      <div className="relative h-[300px] sm:h-[360px] lg:col-span-7">
        {art.map((a, i) => (
          <figure
            key={i}
            className={`polaroid absolute m-0 w-[40%] max-w-[190px] border-2 border-ink bg-white px-3 pb-10 pt-3 shadow-[0_16px_24px_-16px_rgba(35,31,32,0.4)] ${a.pos}`}
            style={{ "--r": `${a.r}deg` } as CSSProperties}
          >
            <Tape className="left-1/2 -top-3.5 h-[26px] w-[90px] -translate-x-1/2" r={a.tr} />
            <div className="flex h-44 items-center justify-center bg-placeholder text-center font-medium text-[#7a7275] sm:h-[220px]">
              [{a.label}]
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Postcard() {
  return (
    <section id="contact" className={`flex justify-center pb-36 pt-20 lg:pt-44 ${wrap}`}>
      <div className="relative grid w-full max-w-[980px] -rotate-1 gap-10 border-[3px] border-ink bg-white px-6 py-10 shadow-[0_28px_44px_-22px_rgba(35,31,32,0.45)] sm:px-12 sm:py-14 md:grid-cols-2 lg:gap-12 lg:px-[72px] lg:py-16">
        <div className="flex flex-col gap-[18px] border-ink md:border-r-2 md:border-dashed md:pr-10">
          <p className="m-0 font-hand text-[32px] text-accent-dark">a postcard for you</p>
          <h2 className="m-0 text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-[52px]">
            Got a role or a project?
          </h2>
          <p className="m-0 text-lg leading-relaxed text-muted sm:text-[19px]">Email works best. I reply within <span className="whitespace-nowrap">1–2 days</span>.</p>
        </div>
        <div className="flex flex-col justify-between gap-7">
          <div className="flex h-[130px] w-[110px] items-center justify-center self-end border-[3px] border-dashed border-ink bg-paper">
            <Image src="/oyen.svg" alt="" width={86} height={52} />
          </div>
          <p className="m-0 break-all border-b-2 border-ink pb-2 font-hand text-3xl sm:text-4xl">to: {site.email}</p>
          <Link href="/contact" className="btn-comic btn-primary self-start px-7 py-4 text-xl lg:text-[22px]">
            Send a message →
          </Link>
        </div>
      </div>
    </section>
  );
}
