import Link from "next/link";
import { Suspense } from "react";
import { NavLink } from "./NavLink";
import { MobileMenu } from "./MobileMenu";

const links = [
  { href: "/work", label: "Work" },
  { href: "/playground", label: "Playground" },
  { href: "/about", label: "About" },
];

/** `live` links read the URL to highlight the current page, so they stream in under Suspense. */
function Links({ live, className = "" }: { live: boolean; className?: string }) {
  return links.map((l) =>
    live ? (
      <NavLink key={l.href} href={l.href} className={className}>
        {l.label}
      </NavLink>
    ) : (
      <Link key={l.href} href={l.href} className={`no-underline ${className}`}>
        {l.label}
      </Link>
    ),
  );
}

function Talk({ className }: { className: string }) {
  return (
    <Link href="/contact" className={`btn-comic btn-primary ${className}`}>
      Let&apos;s talk →
    </Link>
  );
}

const panel =
  "absolute right-0 top-full z-20 mt-3 flex w-52 flex-col gap-1 rounded-xl border-[3px] border-ink bg-white p-3 text-lg font-semibold shadow-[5px_5px_0_var(--color-ink)]";
const item = "rounded-md px-3 py-2 hover:bg-paper";
const summary =
  "btn-comic btn-secondary min-h-11 cursor-pointer list-none rounded-[10px] px-4 py-2 text-base [&::-webkit-details-marker]:hidden";

export function SiteHeader() {
  return (
    <header className="relative flex items-center justify-between gap-4 px-5 py-5 sm:px-10 lg:py-7 lg:pl-40 lg:pr-24">
      <Link href="/" className="font-hand text-3xl no-underline lg:text-4xl">
        Kama&apos;s Sketchbook
      </Link>

      <nav aria-label="Main" className="hidden items-center gap-9 text-lg font-semibold md:flex">
        <Suspense fallback={<Links live={false} />}>
          <Links live />
        </Suspense>
        <Talk className="rounded-[10px] px-5 py-2.5 text-lg" />
      </nav>

      {/* Phone nav: a disclosure that closes after navigating */}
      <Suspense
        fallback={
          <details className="relative md:hidden">
            <summary className={summary}>Menu</summary>
          </details>
        }
      >
        <MobileMenu summaryClass={summary}>
          <nav aria-label="Main" className={panel}>
            <Links live className={item} />
            <Talk className="mt-2 px-4 py-2.5 text-base" />
          </nav>
        </MobileMenu>
      </Suspense>
    </header>
  );
}
