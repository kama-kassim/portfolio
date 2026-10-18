import Link from "next/link";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="flex flex-col gap-5 border-t-2 border-ink bg-paper px-5 py-9 text-base sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:pl-40 lg:pr-24">
      <p className="m-0 font-medium">
        Kama Kassim · designed &amp; built in Next.js ·{" "}
        <a href={site.github} target="_blank" rel="noreferrer">
          View source
        </a>
      </p>
      <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 font-semibold">
        <Link href="/work">Work</Link>
        <Link href="/playground">Playground</Link>
        <Link href="/about">About</Link>
        <a href={site.cv}>CV</a>
      </nav>
      <div className="flex gap-5 font-semibold">
        <a href={site.githubProfile} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={site.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={`mailto:${site.email}`}>Email</a>
      </div>
    </footer>
  );
}
