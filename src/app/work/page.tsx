import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/content/projects";
import { WorkList } from "@/components/WorkList";
import { PadlockIcon } from "@/components/Scrapbook";

export const metadata: Metadata = {
  title: "Work — Kama Kassim",
  description: "Websites Kama Kassim designed, developed, or both.",
};

const wrap = "px-5 sm:px-10 lg:pl-60 lg:pr-48";

export default function WorkPage() {
  return (
    <>
      <section className={`flex flex-col gap-5 pb-12 pt-10 lg:pt-[72px] ${wrap}`}>
        <p className="m-0 -rotate-[1.5deg] self-start font-hand text-3xl text-accent-dark sm:text-[34px]">pulled from the filing cabinet</p>
        <h1 className="m-0 text-5xl font-extrabold leading-[0.98] tracking-[-0.03em] sm:text-7xl lg:text-[88px]">All my work</h1>
        <p className="m-0 max-w-[620px] text-lg leading-relaxed text-muted sm:text-[21px]">
          Websites I designed, developed, or both. Each one has a short case study: the brief, the design decisions, how I
          built it, and a link to the live site.
        </p>
        <p className="m-0 max-w-[620px] text-[17px] font-semibold leading-relaxed">
          <PadlockIcon className="mr-2 inline-block h-[18px] w-4 -translate-y-0.5 text-accent-dark" />
          Most case studies are password protected. One password opens them all: [where to get it, e.g. it&apos;s in my CV],
          or{" "}
          <Link href="/contact" className="font-bold">
            ask me for it
          </Link>
          .
        </p>
      </section>

      <section className={wrap}>
        <WorkList projects={projects} />
      </section>

      <section className={`pb-32 pt-10 ${wrap}`}>
        <div className="flex -rotate-[0.5deg] flex-col gap-6 rounded-[14px] border-[2.5px] border-dashed border-ink bg-white px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-9">
          <div className="flex flex-col gap-1.5">
            <p className="m-0 font-hand text-3xl text-accent-dark">older pages</p>
            <p className="m-0 text-xl font-semibold">School projects, awards and video work from 2021–2022 live in the archive.</p>
          </div>
          <Link href="/archive" className="btn-comic btn-secondary shrink-0 px-6 py-3.5 text-[19px]">
            Open the archive →
          </Link>
        </div>
      </section>
    </>
  );
}
