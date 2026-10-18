import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/content/projects";
import { isUnlocked } from "@/lib/caseLock";
import { CaseStudy } from "@/components/CaseStudy";
import { PasswordGate } from "@/components/PasswordGate";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  return { title: p ? `${p.name} — Kama Kassim` : "Not found", robots: p?.locked ? { index: false } : undefined };
}

export default function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  // The cookie check needs the request, so this part streams in after the shell.
  return (
    <Suspense fallback={<p className="px-5 py-40 text-center font-hand text-3xl text-muted">opening the case file…</p>}>
      <CaseOrGate params={params} />
    </Suspense>
  );
}

async function CaseOrGate({ params }: { params: PageProps<"/work/[slug]">["params"] }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  // Locked case studies only render on the server after the password cookie checks out,
  // so their content is never sent to visitors without the password.
  if (p.locked && !(await isUnlocked())) return <PasswordGate slug={p.slug} />;

  const next = projects[(projects.indexOf(p) + 1) % projects.length];
  return <CaseStudy p={p} next={next} />;
}
