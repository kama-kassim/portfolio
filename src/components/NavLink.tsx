"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/** Nav link that gets a highlighter underline on the current section. */
export function NavLink({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  const pathname = usePathname();
  const current = pathname === href || pathname.startsWith(`${href}/`);
  return (
    <Link
      href={href}
      aria-current={current ? "page" : undefined}
      className={`no-underline ${
        current ? "bg-[linear-gradient(transparent_62%,var(--color-tape)_62%,var(--color-tape)_92%,transparent_92%)] px-1 font-extrabold" : ""
      } ${className}`}
    >
      {children}
    </Link>
  );
}
