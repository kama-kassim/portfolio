import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { Placeholder, Tape } from "@/components/Scrapbook";

export const metadata: Metadata = {
  title: "About — Kama Kassim",
  description: "Kama Kassim, front-end developer in Malaysia who designs and builds websites.",
};

const wrap = "px-5 sm:px-10 lg:pl-60 lg:pr-48";

// TODO: fill in dates, roles and companies
const timeline = [
  { when: "[20XX] — now", title: "[Your current role]", where: "[Company]", text: "Building client websites in WordPress (Elementor Pro, JetEngine), Shopify (Liquid) and Next.js + Storyblok." },
  { when: "[20XX] — [20XX]", title: "[Previous role, or freelance]", where: "[Company]", text: "[One line on what you did there.]" },
  { when: "2022", title: "Gold award, MTE 2022", where: "Competition", text: "Video project for the STEM@Home module." },
  { when: "2021", title: "Gold award, IRIA 2021", where: "Competition", text: "[One line on the project.]" },
  { when: "[20XX]", title: "[Degree], Software Engineering", where: "[University]", text: "[Anything worth mentioning: final-year project, focus area.]" },
];

const build = ["Next.js", "Tailwind", "HTML & CSS", "WordPress", "Elementor Pro", "JetEngine", "Shopify Liquid", "Storyblok", "GitHub · Vercel"];
const design = ["Claude Design", "Figma", "Photoshop", "Illustration"];

export default function AboutPage() {
  return (
    <>
      <section className={`grid items-center gap-12 pb-24 pt-10 lg:grid-cols-12 lg:pt-[72px] ${wrap}`}>
        <div className="relative flex justify-center lg:col-span-5">
          <figure className="relative m-0 w-full max-w-[340px] rotate-[2.5deg] border-2 border-ink bg-white px-4 pb-[52px] pt-4 shadow-[0_16px_24px_-16px_rgba(35,31,32,0.4)]">
            <Tape className="left-1/2 -top-4 w-[120px] -translate-x-1/2" r={-3} />
            <Placeholder label="your photo" className="h-[380px]" />
            <figcaption className="absolute bottom-3 left-5 font-hand text-[26px]">that&apos;s me, hi</figcaption>
            <Image src="/oyen.svg" alt="" width={150} height={88} className="absolute -right-4 bottom-[-28px] w-28 -rotate-[8deg] sm:-right-12 sm:w-[150px]" />
          </figure>
        </div>
        <div className="flex flex-col gap-[22px] lg:col-span-7">
          <p className="m-0 -rotate-[1.5deg] self-start font-hand text-3xl text-accent-dark sm:text-[34px]">the person behind the pages</p>
          <h1 className="m-0 text-5xl font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-7xl lg:text-[88px]">About me</h1>
          <p className="m-0 max-w-[620px] text-xl leading-[1.7] sm:text-[21px]">
            I&apos;m Kama Kassim, a front-end developer in Malaysia with a Software Engineering background. I build websites in
            WordPress, Shopify and Next.js, and I design a lot of them too.
          </p>
          <p className="m-0 max-w-[620px] text-[19px] leading-[1.7] text-muted">
            I&apos;ve shipped 12 live sites so far, from custom Shopify sections to a headless Next.js build with Storyblok.
          </p>
          <div className="mt-1.5 flex flex-wrap gap-4">
            <a href={site.cv} className="btn-comic btn-primary px-6 py-3.5 text-lg">
              Download CV ↓
            </a>
            <Link href="/work" className="btn-comic btn-secondary px-6 py-3.5 text-lg">
              See my work
            </Link>
          </div>
        </div>
      </section>

      <section className={`flex flex-col gap-10 pb-24 ${wrap}`}>
        <h2 className="m-0 flex flex-wrap items-baseline gap-x-4 text-4xl font-extrabold tracking-[-0.03em] sm:text-5xl">
          Where I&apos;ve been
          <span className="font-hand text-[28px] font-bold tracking-normal text-accent-dark">the short timeline</span>
        </h2>
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="relative lg:col-span-8">
            <div aria-hidden="true" className="absolute bottom-2.5 left-2 top-2.5 border-l-[2.5px] border-dashed border-ink sm:left-[202px]" />
            <ol className="relative m-0 list-none p-0">
              {timeline.map((t, i) => (
                <li key={i} className={`grid gap-1 sm:grid-cols-[170px_minmax(0,1fr)] sm:gap-8 ${i < timeline.length - 1 ? "pb-11" : ""}`}>
                  <span className="pl-9 pt-1 text-base font-bold text-faint sm:pl-0">{t.when}</span>
                  <div className="relative flex flex-col gap-1.5 pl-9">
                    <span className="absolute -left-0 top-1.5 h-4 w-4 rounded-full border-[2.5px] border-ink bg-accent sm:-left-2" />
                    <span className="text-2xl font-extrabold tracking-tight">{t.title}</span>
                    <span className="text-base font-semibold text-muted">{t.where}</span>
                    <span className="text-[17px] leading-relaxed text-muted">{t.text}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <aside aria-label="Fun facts" className="flex flex-col gap-6 pt-1 lg:col-span-4">
            <p className="m-0 -rotate-2 font-hand text-3xl text-accent-dark">fun fact ↓</p>
            <div className="flex h-[260px] w-[260px] -rotate-[16deg] items-center self-start border-2 border-ink bg-[#fff3c4] p-[26px] font-hand text-[28px] leading-[1.15] shadow-[0_14px_20px_-14px_rgba(35,31,32,0.45)] max-lg:ml-6">
              I&apos;m allergic to cats. Oyen is drawn, so he&apos;s safe.
            </div>
            <div className="ml-12 flex h-[260px] w-[260px] rotate-[8deg] items-center self-start border-2 border-ink bg-[#ffe2cc] p-[26px] font-hand text-[28px] leading-[1.15] shadow-[0_14px_20px_-14px_rgba(35,31,32,0.45)]">
              I draw anime-style characters in my free time.
            </div>
          </aside>
        </div>
      </section>

      <section className={`grid gap-12 pb-24 md:grid-cols-2 ${wrap}`}>
        {[
          { title: "What I build with", items: build, dark: true },
          { title: "What I design with", items: design, dark: false },
        ].map((g) => (
          <div key={g.title} className="flex flex-col gap-[18px]">
            <h3 className="m-0 text-[28px] font-extrabold">{g.title}</h3>
            <ul className="m-0 flex list-none flex-wrap gap-2.5 p-0">
              {g.items.map((s) => (
                <li key={s} className={`rounded-full border-2 border-ink px-4 py-2 text-base font-bold ${g.dark ? "bg-ink text-paper" : "bg-white"}`}>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className={`pb-32 ${wrap}`}>
        <div className="flex flex-col gap-6 rounded-[14px] border-[3px] border-ink bg-white px-6 py-8 shadow-[0_22px_34px_-22px_rgba(35,31,32,0.45)] sm:px-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-1.5">
            <h2 className="m-0 text-3xl font-extrabold tracking-tight sm:text-4xl">Want the short version?</h2>
            <p className="m-0 text-lg text-muted">
              My CV has everything on one page. Or just say hi, I reply within <span className="whitespace-nowrap">1–2 days</span>.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-4">
            <a href={site.cv} className="btn-comic btn-secondary px-6 py-3.5 text-lg">
              Download CV ↓
            </a>
            <Link href="/contact" className="btn-comic btn-primary px-6 py-3.5 text-lg">
              Let&apos;s talk →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
