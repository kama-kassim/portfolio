"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";
import { Placeholder, Tape } from "./Scrapbook";

export type Artwork = {
  title: string;
  medium: string;
  tag: "Characters" | "Fan art" | "Sketches";
  h: number; // placeholder height, so the wall looks staggered
  r: number;
  image?: string; // e.g. "/art/kitsune.jpg" in public/art/
  favourite?: boolean;
};

const tags = ["All", "Characters", "Fan art", "Sketches"] as const;

export function Pinboard({ art }: { art: Artwork[] }) {
  const [tag, setTag] = useState<(typeof tags)[number]>("All");
  const shown = art.filter((a) => tag === "All" || a.tag === tag);
  return (
    <>
      <div role="group" aria-label="Filter the playground" className="flex flex-wrap gap-x-3 gap-y-3.5 pb-12">
        {tags.map((t, i) => (
          <button
            key={t}
            type="button"
            aria-pressed={t === tag}
            onClick={() => setTag(t)}
            className={`min-h-11 cursor-pointer rounded-full border-[2.5px] border-ink px-[18px] py-2.5 text-[17px] font-bold ${
              t === tag ? "bg-accent text-white [text-shadow:2px_2px_0_var(--color-ink)] shadow-[4px_4px_0_var(--color-ink)]" : "bg-white"
            }`}
            style={{ rotate: `${[-2, 1.5, -1, 2][i]}deg` }}
          >
            {t}
          </button>
        ))}
      </div>
      {/* CSS columns give the staggered pinboard */}
      <div className="columns-1 gap-9 sm:columns-2 lg:columns-3" aria-live="polite">
        {shown.map((a, i) => (
          <figure
            key={`${a.title}-${i}`}
            className="polaroid relative mb-8 break-inside-avoid border-2 border-ink bg-white px-3.5 pb-10 pt-3.5 shadow-[0_16px_24px_-16px_rgba(35,31,32,0.4)]"
            style={{ "--r": `${a.r}deg` } as CSSProperties}
          >
            <Tape className="left-1/2 -top-3.5 h-[26px] w-[90px] -translate-x-1/2" r={a.r > 0 ? -3 : 3} />
            {a.image ? (
              <Image src={a.image} alt={a.title} width={800} height={a.h * 2} className="h-auto w-full" />
            ) : (
              <Placeholder label={a.favourite ? "favourite artwork" : "artwork"} bare style={{ height: a.h }} />
            )}
            <figcaption className="absolute bottom-2 left-4 font-hand text-[22px] text-muted">
              {a.favourite ? `${a.title}, my favourite` : `${a.title} · ${a.medium}`}
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}
