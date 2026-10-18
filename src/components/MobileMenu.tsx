"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/** Phone menu: a <details> disclosure that closes itself after navigating. */
export function MobileMenu({ children, summaryClass }: { children: React.ReactNode; summaryClass: string }) {
  const ref = useRef<HTMLDetailsElement>(null);
  const pathname = usePathname();
  useEffect(() => {
    if (ref.current) ref.current.open = false;
  }, [pathname]);

  return (
    <details ref={ref} className="relative md:hidden">
      <summary className={summaryClass}>Menu</summary>
      {children}
    </details>
  );
}
