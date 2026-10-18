import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { featuredSlugs, stickers } from "@/content/home";
import { getProject, type Project } from "@/content/projects";
import { site } from "@/content/site";
import { Placeholder, Tape } from "@/components/Scrapbook";
import { PolaroidRow } from "@/components/PolaroidRow";
import { SnapScroll } from "@/components/SnapScroll";

const wrap = "px-5 sm:px-10 lg:pl-40 lg:pr-24";

export default function Home() {
  return (
    <>
      <SnapScroll />
      <Hero />
      <Overview />
      <RecentPages />
      <Skills />
      <Postcard />
    </>
  );
}

function Hero() {
  return (
    // Fills the first screen: viewport height minus the ~109px header (svh stays stable on phones)
    <section
      id="top"
      className={`relative flex min-h-[calc(100svh-109px)] snap-start scroll-mt-[200px] flex-col items-center justify-center pb-10 pt-36 text-center sm:pt-44 lg:py-[min(150px,14svh)] px-5 sm:px-10 lg:px-24`}
    >
      <div className="relative flex max-w-[980px] -rotate-1 flex-col items-center gap-5 rounded-md border-[3px] border-ink bg-white px-6 pb-10 pt-12 shadow-[0_18px_30px_-18px_rgba(35,31,32,0.35)] sm:px-12 lg:gap-[min(22px,1.8svh)] lg:px-[72px] lg:pb-[min(48px,4svh)] lg:pt-[min(56px,4.5svh)]">
        {/* Oyen hangs off the card's top edge, so the card itself sits in the middle of the screen */}
        <div className="absolute bottom-full left-1/2 z-10 -mb-6 w-56 -translate-x-1/2 rotate-1 sm:w-72 lg:-mb-9 lg:w-[min(380px,32svh)]">
          <Image
            src="/oyen.svg"
            alt="Oyen, a doodled cat face, peeking over the headline"
            width={380}
            height={224}
            priority
            className="h-auto w-full"
          />
          <p className="absolute left-[118%] top-[-6px] m-0 hidden w-48 rotate-[4deg] text-left font-hand text-[24px] leading-[1.1] lg:block">
            I am allergic to cats,
            <br />
            But they so cute!
          </p>
          <svg
            className="absolute left-[89%] top-[13%] hidden xl:block"
            style={{ transform: "rotate(139deg) scaleX(-0.95)" }}
            width="180"
            height="110"
            viewBox="0 0 180 110"
            aria-hidden="true"
          >
            <path d="M165 25 C130 8 60 18 22 75" stroke="var(--color-accent)" strokeWidth="4" fill="none" strokeLinecap="round" />
            <path d="M40 68 L22 75 L23 56" stroke="var(--color-accent)" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <Tape className="-left-7 top-4 w-28 lg:w-[130px]" r={-32} />
        <Tape className="-right-7 top-4 w-28 lg:w-[130px]" r={32} />
        <p className="m-0 font-hand text-2xl text-accent-dark sm:text-3xl lg:text-[min(36px,4svh)]">
          hi, I&apos;m Kama Kassim, a front-end developer
        </p>
        <h1 className="m-0 text-5xl font-extrabold leading-[0.98] tracking-[-0.03em] sm:text-7xl lg:text-[min(92px,9svh)]">
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
        <p className="m-0 max-w-[640px] text-lg leading-relaxed text-muted [text-wrap:balance] sm:text-[22px] lg:text-[min(22px,2.6svh)]">
          I make websites look right and work right. Design and code, from the same pair of hands.
        </p>
        <div className="mt-2 flex flex-col gap-4 sm:flex-row">
          <Link href="/work" className="btn-comic btn-primary px-7 py-4 text-xl lg:py-[min(16px,1.8svh)] lg:text-[min(22px,2.6svh)]">
            Flip through my work
          </Link>
          <a href={site.cv} className="btn-comic btn-secondary px-7 py-4 text-xl lg:py-[min(16px,1.8svh)] lg:text-[min(22px,2.6svh)]">
            Grab my CV
          </a>
        </div>
        <p className="mt-1.5 flex items-center gap-2.5 text-base font-medium text-muted">
          <span className="h-2.5 w-2.5 rounded-full border-2 border-ink bg-green-600" />
          Open to front-end roles · based in Malaysia
        </p>
      </div>

    </section>
  );
}

const highlight = "bg-[linear-gradient(transparent_55%,var(--color-tape)_55%,var(--color-tape)_92%,transparent_92%)]";

function Overview() {
  return (
    <section id="about" className={`grid snap-center items-center gap-16 pb-24 pt-32 lg:pt-40 lg:grid-cols-[400px_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[500px_minmax(0,1fr)] xl:gap-16 ${wrap}`}>
      <div className="relative mx-auto w-full max-w-[500px] pb-16 lg:mx-0">
        <figure
          className="relative m-0 w-[88%] max-w-[440px] border-2 border-ink bg-white px-4 pb-[52px] pt-4 shadow-[0_16px_24px_-16px_rgba(35,31,32,0.4)]"
          style={{ rotate: "-4deg" }}
        >
          <Tape className="left-1/2 -top-4 w-[120px] -translate-x-1/2" r={-3} />
          <Placeholder label="your workspace" bare className="aspect-[4/3]" />
          <figcaption className="absolute bottom-3 left-5 font-hand text-[26px]">my workspace</figcaption>
        </figure>
        <p
          className="absolute bottom-0 right-0 z-10 m-0 flex h-[150px] w-[180px] items-center border-2 border-ink bg-[#fff3c4] p-4 font-hand text-[22px] leading-[1.15] shadow-[0_14px_20px_-14px_rgba(35,31,32,0.45)] sm:h-[170px] sm:w-[200px] sm:p-[18px] sm:text-[25px]"
          style={{ rotate: "7deg" }}
        >
          fun fact: allergic to cats. Oyen is drawn, so he&apos;s safe.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="m-0 text-4xl font-extrabold tracking-[-0.03em] sm:text-6xl">Who am I?</h2>
        <p className="m-0 max-w-[640px] font-hand text-[30px] leading-[1.35] sm:text-[38px]">
          I trained as a software engineer, then found out I liked picking the fonts too. Since 2024 I&apos;ve designed and
          built websites in Next.js, Nuxt.js, Storyblok, WordPress and Shopify, and fussed over each one until it{" "}
          <span className={highlight}>feels right on a phone</span>.
        </p>
        <Link href="/about" className="self-start text-lg font-extrabold">
          More about me →
        </Link>
      </div>
    </section>
  );
}

function RecentPages() {
  const recent = featuredSlugs.map((slug) => getProject(slug)).filter((p): p is Project => !!p);
  const heading = (
    <div className={`flex flex-wrap items-baseline gap-x-5 gap-y-2 ${wrap}`}>
      <h2 className="m-0 text-4xl font-extrabold tracking-[-0.03em] sm:text-6xl">Recent pages</h2>
      <Link href="/work" className="text-lg font-extrabold sm:ml-auto">
        See all work →
      </Link>
    </div>
  );
  return <PolaroidRow projects={recent} heading={heading} />;
}

const stickerStyle = {
  design: "bg-white",
  both: "bg-accent text-white [text-shadow:2px_2px_0_var(--color-ink)]",
  code: "bg-ink text-paper",
};

function Skills() {
  return (
    <section id="skills" className={`flex snap-start flex-col gap-8 pb-28 pt-14 ${wrap}`}>
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

function Postcard() {
  return (
    <section id="contact" className={`flex snap-start justify-center pb-36 pt-20 lg:pt-44 ${wrap}`}>
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
