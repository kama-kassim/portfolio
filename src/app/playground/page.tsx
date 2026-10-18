import type { Metadata } from "next";
import Link from "next/link";
import { Pinboard, type Artwork } from "@/components/Pinboard";

export const metadata: Metadata = {
  title: "Playground — Kama Kassim",
  description: "Anime-style characters, fan art and sketches Kama draws for fun.",
};

// TODO: add your drawings to public/art/ and fill in titles, mediums and tags.
const art: Artwork[] = [
  { title: "[title]", medium: "[medium]", tag: "Characters", h: 440, r: -2, favourite: true },
  { title: "[title]", medium: "[medium]", tag: "Fan art", h: 313, r: 1.5 },
  { title: "[title]", medium: "[medium]", tag: "Sketches", h: 300, r: -1 },
  { title: "[title]", medium: "[medium]", tag: "Characters", h: 220, r: 2 },
  { title: "[title]", medium: "[medium]", tag: "Sketches", h: 160, r: -1.5 },
  { title: "[title]", medium: "[medium]", tag: "Fan art", h: 226, r: 1 },
  { title: "[title]", medium: "[medium]", tag: "Characters", h: 360, r: -2 },
  { title: "[title]", medium: "[medium]", tag: "Fan art", h: 393, r: 1.5 },
];

const wrap = "px-5 sm:px-10 lg:pl-60 lg:pr-48";

export default function PlaygroundPage() {
  return (
    <>
      <section className={`flex flex-col gap-5 pb-12 pt-10 lg:pt-[72px] ${wrap}`}>
        <p className="m-0 -rotate-[1.5deg] self-start font-hand text-3xl text-accent-dark sm:text-[34px]">pinned to the wall</p>
        <h1 className="m-0 text-5xl font-extrabold leading-[0.98] tracking-[-0.03em] sm:text-7xl lg:text-[88px]">Playground</h1>
        <p className="m-0 max-w-[640px] text-lg leading-relaxed text-muted sm:text-[21px]">
          Anime-style characters, fan art and sketches I draw for fun. Nothing here is client work, it&apos;s just me playing.
        </p>
      </section>

      <section className={`pb-16 pt-2 ${wrap}`}>
        <Pinboard art={art} />
      </section>

      <section className={`pb-32 ${wrap}`}>
        <div className="flex flex-col gap-6 rounded-[14px] border-[3px] border-ink bg-white px-6 py-8 shadow-[0_22px_34px_-22px_rgba(35,31,32,0.45)] sm:px-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-1.5">
            <h2 className="m-0 text-3xl font-extrabold tracking-tight sm:text-4xl">Back to the serious stuff?</h2>
            <p className="m-0 text-lg text-muted">My client websites and case studies live on the Work page.</p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-4">
            <Link href="/work" className="btn-comic btn-secondary px-6 py-3.5 text-lg">
              See my work
            </Link>
            <Link href="/contact" className="btn-comic btn-primary px-6 py-3.5 text-lg">
              Let&apos;s talk →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
