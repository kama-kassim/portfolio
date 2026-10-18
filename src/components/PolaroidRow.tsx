"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import type { Project } from "@/content/projects";
import { PadlockIcon, Placeholder, RoleTag } from "./Scrapbook";

/**
 * Recent projects as a row of big polaroids.
 * Desktop: the section pins and scrolling down slides the row sideways.
 * Phones and reduced motion: a normal swipeable row with arrow buttons.
 */
export function PolaroidRow({ projects, heading }: { projects: Project[]; heading: ReactNode }) {
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    const wide = window.matchMedia("(min-width: 1024px)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPinned(wide.matches && !reduce.matches);
    update();
    wide.addEventListener("change", update);
    reduce.addEventListener("change", update);
    return () => {
      wide.removeEventListener("change", update);
      reduce.removeEventListener("change", update);
    };
  }, []);

  return pinned ? (
    <PinnedRow projects={projects} heading={heading} />
  ) : (
    <SwipeRow projects={projects} heading={heading} />
  );
}

function PinnedRow({ projects, heading }: { projects: Project[]; heading: ReactNode }) {
  const outer = useRef<HTMLElement>(null);
  const track = useRef<HTMLUListElement>(null);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const measure = () => setDistance(Math.max(0, el.scrollWidth - window.innerWidth));
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  useEffect(() => {
    let frame = 0;
    const move = () => {
      frame = 0;
      const box = outer.current;
      const el = track.current;
      if (!box || !el || !distance) return;
      const progress = Math.min(1, Math.max(0, -box.getBoundingClientRect().top / distance));
      el.style.transform = `translate3d(${-progress * distance}px, 0, 0)`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(move);
    };
    move();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [distance]);

  // Tabbing to a card that's off to the side: scroll the page so the row slides it into view
  const reveal = (li: HTMLElement) => {
    const box = outer.current;
    const el = track.current;
    if (!box || !el) return;
    if (el.parentElement) el.parentElement.scrollLeft = 0;
    const firstLeft = (el.firstElementChild as HTMLElement).offsetLeft;
    const shift = Math.min(distance, Math.max(0, li.offsetLeft - firstLeft));
    window.scrollTo({ top: window.scrollY + box.getBoundingClientRect().top + shift, behavior: "auto" });
  };

  return (
    <section id="work" ref={outer} className="relative snap-start" style={{ height: `calc(100svh + ${distance}px)` }}>
      <div className="sticky top-0 flex h-svh flex-col justify-center gap-6 overflow-hidden">
        {heading}
        <ul ref={track} aria-label="Recent projects" className="m-0 flex w-max list-none gap-10 pb-6 pl-40 pr-24 pt-4 will-change-transform">
          {projects.map((p, i) => (
            <li key={p.slug} className="w-[calc((100vw-240px)*3/7)] shrink-0" onFocus={(e) => reveal(e.currentTarget)}>
              <PolaroidCard p={p} i={i} />
            </li>
          ))}
        </ul>
        <p className="m-0 pl-40 font-hand text-2xl text-faint">keep scrolling, they slide →</p>
      </div>
    </section>
  );
}

function SwipeRow({ projects, heading }: { projects: Project[]; heading: ReactNode }) {
  const track = useRef<HTMLUListElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector("li");
    const step = card ? card.getBoundingClientRect().width + 40 : el.clientWidth * 0.8;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * step, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <section id="work" className="flex snap-start flex-col gap-6 pb-24 pt-16">
      {heading}
      <ul
        ref={track}
        aria-label="Recent projects"
        className="m-0 flex list-none snap-x snap-mandatory gap-10 overflow-x-auto scroll-pl-5 px-5 pb-10 pt-6 [scrollbar-width:none] sm:scroll-pl-10 sm:px-10 lg:scroll-pl-40 lg:pl-40 lg:pr-24 [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((p, i) => (
          <li key={p.slug} className="w-[85vw] shrink-0 snap-start sm:w-[70vw] lg:w-[calc((100vw-240px)*3/7)]">
            <PolaroidCard p={p} i={i} />
          </li>
        ))}
      </ul>
      <div className="flex justify-end gap-3 px-5 sm:px-10 lg:pr-24">
        <button type="button" onClick={() => scroll(-1)} aria-label="Previous projects" className="btn-comic btn-secondary h-12 w-12 cursor-pointer text-xl">
          ←
        </button>
        <button type="button" onClick={() => scroll(1)} aria-label="Next projects" className="btn-comic btn-secondary h-12 w-12 cursor-pointer text-xl">
          →
        </button>
      </div>
    </section>
  );
}

function PolaroidCard({ p, i }: { p: Project; i: number }) {
  return (
    <Link
      href={`/work/${p.slug}`}
      aria-label={`${p.name}: view case study${p.locked ? " (password protected)" : ""}`}
      className="polaroid block border-2 border-ink bg-white p-4 pb-0 no-underline shadow-[0_16px_24px_-16px_rgba(35,31,32,0.4)] hover:text-ink"
      style={{ "--r": `${i % 2 ? 0.8 : -0.8}deg` } as CSSProperties}
    >
      {p.image ? (
        <Image src={p.image} alt="" width={1440} height={900} className="aspect-[16/10] w-full object-cover object-top" />
      ) : (
        <Placeholder label={`${p.name} screenshot`} bare className="aspect-[16/10]" />
      )}
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 px-1 pb-5 pt-4">
        <span className="font-hand text-3xl leading-none sm:text-[34px]">{p.name}</span>
        <span className="flex items-center gap-4">
          <RoleTag role={p.role} />
          <span className="inline-flex items-center gap-1.5 text-[15px] font-bold">
            View
            {p.locked ? <PadlockIcon className="h-4 w-3.5 text-accent-dark" /> : <span aria-hidden="true">→</span>}
          </span>
        </span>
      </div>
    </Link>
  );
}
