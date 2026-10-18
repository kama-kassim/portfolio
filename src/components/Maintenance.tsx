import Image from "next/image";
import { site } from "@/content/site";

/** Caution tape strip that runs edge to edge behind the note, its words scrolling like a ticker. */
function CautionTape({ className, reverse = false }: { className: string; reverse?: boolean }) {
  // Two identical halves, so sliding the track by -50% loops seamlessly
  const half = Array.from({ length: 10 }, (_, i) => (
    <span key={i} className="px-4">
      WORK IN PROGRESS ·
    </span>
  ));
  return (
    <div
      aria-hidden="true"
      className={`absolute -inset-x-48 flex h-12 items-center overflow-hidden whitespace-nowrap border-y border-ink bg-[#fff3c4] text-lg font-extrabold tracking-[2px] shadow-[0_6px_3px_-2px_rgba(35,31,32,0.35)] sm:h-16 sm:text-2xl [&:hover_.ticker]:[animation-play-state:paused] ${className}`}
    >
      <div className={`ticker flex shrink-0 ${reverse ? "ticker-reverse" : ""}`}>
        {half}
        {half}
      </div>
    </div>
  );
}

/** Shown on every route while MAINTENANCE_MODE=true ("Be back soon" page). */
export function Maintenance() {
  return (
    // Desktop: exactly one screen tall, sizes scale with screen height so nothing scrolls
    <main id="main" className="relative flex min-h-svh flex-col overflow-hidden lg:h-svh">
      <div className="relative flex flex-1 items-center justify-center px-5 pb-32 pt-32 sm:px-10 sm:pb-16 sm:pt-32 lg:pb-[min(64px,6svh)] lg:pt-[min(160px,15svh)]">
        {/* extra top and bottom tapes fill the taller phone screen only */}
        <CautionTape className="reveal-tape top-[6%] rotate-[3deg] sm:hidden" reverse />
        <CautionTape className="reveal-tape top-[30%] -rotate-6 [animation-delay:100ms]" />
        <CautionTape className="reveal-tape top-[64%] rotate-[4deg] [animation-delay:200ms]" reverse />
        <CautionTape className="reveal-tape top-[88%] -rotate-2 [animation-delay:300ms] sm:hidden" />

        {/* group: hovering the note lifts it and makes Oyen peek higher */}
        {/* width follows screen height like the text does, so the note keeps the same wide shape on every desktop */}
        <div className="group relative z-10 w-full max-w-[720px] lg:max-w-[min(900px,100svh)]">
          <Image
            src="/oyen.svg"
            alt="Oyen, a doodled cat, peeking over the note"
            width={300}
            height={177}
            priority
            className="reveal-peek absolute bottom-full left-1/2 z-10 -mb-6 h-auto w-48 -translate-x-1/2 transition-[translate,rotate] duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-3 group-hover:-rotate-3 motion-reduce:transition-none sm:-mb-8 sm:w-[300px] lg:w-[min(300px,30svh)]"
          />
          <div className="reveal-card flex -rotate-1 flex-col items-center gap-5 rounded-md border-[3px] border-ink bg-white px-6 pb-10 pt-12 text-center shadow-[0_18px_30px_-18px_rgba(35,31,32,0.35)] transition-[rotate,translate,box-shadow] duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:rotate-0 group-hover:-translate-y-1.5 group-hover:shadow-[0_28px_40px_-20px_rgba(35,31,32,0.45)] motion-reduce:transition-none sm:px-14 sm:pb-12 sm:pt-14 lg:gap-[min(20px,2svh)] lg:pb-[min(48px,4.5svh)] lg:pt-[min(56px,6svh)]">
            <p className="reveal-up m-0 font-hand text-2xl text-accent-dark sm:text-[34px] lg:text-[min(38px,4.4svh)]">new site in progress</p>
            <h1 className="reveal-up m-0 text-5xl font-extrabold leading-none tracking-[-0.03em] sm:text-[76px] lg:text-[min(88px,10svh)]">Be back soon.</h1>
            <p className="reveal-up m-0 max-w-[560px] text-xl leading-relaxed text-muted [text-wrap:balance] sm:text-2xl lg:text-[min(26px,3svh)]">
              Hello there! I&apos;m Kama Kassim, a front-end web developer with a UI/UX focus. My portfolio is getting
              rebuilt. In the meantime, feel free to email me away!
            </p>
            <div className="reveal-up mt-2 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
              <a href={`mailto:${site.email}`} className="btn-comic btn-primary px-7 py-4 text-xl lg:py-[min(18px,2svh)] lg:text-[min(22px,2.6svh)]">
                Email me
              </a>
              <a href={site.linkedin} target="_blank" rel="noreferrer" className="btn-comic btn-secondary px-7 py-4 text-xl lg:py-[min(18px,2svh)] lg:text-[min(22px,2.6svh)]">
                LinkedIn
              </a>
            </div>
            <p className="reveal-up m-0 text-base font-medium text-muted lg:text-[min(17px,2svh)]">Case studies available on request</p>
          </div>
        </div>
      </div>
    </main>
  );
}
