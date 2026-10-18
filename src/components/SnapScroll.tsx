"use client";

import { useEffect } from "react";

/** Turns on section snapping while this page is mounted. Sections taller than the screen still scroll freely inside. */
export function SnapScroll() {
  useEffect(() => {
    const html = document.documentElement;
    html.style.scrollSnapType = "y mandatory";
    return () => {
      html.style.scrollSnapType = "";
    };
  }, []);
  return null;
}
