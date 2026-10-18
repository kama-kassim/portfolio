import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/content/projects";
import { WorkList } from "@/components/WorkList";
import { PadlockIcon } from "@/components/Scrapbook";

export const metadata: Metadata = {
  title: "Work — Kama's Sketchbook",
  description: "Websites Kama Kassim designed, developed, or both.",
};

const wrap = "px-5 sm:px-10 lg:pl-40 lg:pr-24";

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
          Client case studies are password protected, and one password opens them all.{" "}
          <Link href="/contact" className="font-bold">
            Ask me for it
          </Link>
          .
        </p>
      </section>

      <section className={`pb-24 ${wrap}`}>
        <WorkList projects={projects} />
      </section>
    </>
  );
}
