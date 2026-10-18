import type { Metadata } from "next";
import { Bricolage_Grotesque, Caveat } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  // optical size axis: big headings get the tighter display cut, like the design
  axes: ["opsz"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: "Kama Kassim — front-end developer who designs",
  description:
    "Portfolio of Kama Kassim, a front-end developer in Malaysia who designs and builds websites.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bricolage.variable} ${caveat.variable} antialiased`}>
      {/* suppressHydrationWarning: browser extensions (e.g. ColorZilla) add attributes to <body> */}
      <body suppressHydrationWarning className="relative flex min-h-screen flex-col overflow-x-clip font-sans">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-3 w-0.5 bg-accent/30 lg:left-[120px]"
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
