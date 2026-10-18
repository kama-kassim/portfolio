import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Let's talk — Kama's Sketchbook",
  description: "Hiring, a project, or a question? Send Kama a note. She replies within 1–2 days.",
};

export default function ContactPage() {
  return (
    <section className="flex flex-col gap-10 px-5 pb-28 pt-10 sm:px-10 lg:pl-40 lg:pr-24 lg:pt-14">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
        <div className="flex flex-col gap-3.5">
          <p className="m-0 -rotate-[1.5deg] self-start font-hand text-3xl text-accent-dark">write me a postcard</p>
          <h1 className="m-0 text-6xl font-extrabold leading-[0.92] tracking-[-0.035em] sm:text-7xl lg:text-[92px]">Let&apos;s talk.</h1>
          <p className="m-0 max-w-[560px] text-xl leading-relaxed">
            Hiring, a project, or a question about something I built. Send a note and I&apos;ll reply within{" "}
            <span className="whitespace-nowrap">1–2 days</span>.
          </p>
        </div>
        <p className="m-0 mb-1.5 text-base font-semibold text-muted">
          Prefer email?{" "}
          <a href={`mailto:${site.email}`} className="font-bold">
            {site.email}
          </a>
        </p>
      </div>
      <ContactForm />
    </section>
  );
}
