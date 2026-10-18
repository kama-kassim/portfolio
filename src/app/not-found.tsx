import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center gap-6 px-5 pb-32 pt-16 text-center sm:px-10">
      <Image src="/oyen.svg" alt="Oyen the cat" width={260} height={153} className="-rotate-6" />
      <p className="m-0 font-hand text-3xl text-accent-dark">this page wandered off</p>
      <h1 className="m-0 text-6xl font-extrabold tracking-[-0.035em] sm:text-8xl">404</h1>
      <p className="m-0 max-w-md text-xl leading-relaxed text-muted">
        Oyen looked everywhere, but this page isn&apos;t in the sketchbook.
      </p>
      <div className="mt-2 flex flex-wrap justify-center gap-4">
        <Link href="/" className="btn-comic btn-primary px-6 py-3.5 text-lg">
          Back home
        </Link>
        <Link href="/work" className="btn-comic btn-secondary px-6 py-3.5 text-lg">
          See my work
        </Link>
      </div>
    </section>
  );
}
