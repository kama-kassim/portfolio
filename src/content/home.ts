export type Role = "Developed" | "Designed + developed" | "Designed";

// Homepage "Recent pages": slugs from src/content/projects.ts
export const featuredSlugs = ["steel-arch-awards", "calaqisya", "merpati-card", "kickwon", "aura-crown"];

type StickerKind = "design" | "both" | "code";
// Matches the Skills section of the CV
export const stickers: { label: string; kind: StickerKind; r: number }[] = [
  { label: "UI/UX design", kind: "design", r: -3 },
  { label: "Wireframes & prototypes", kind: "design", r: 2 },
  { label: "Figma", kind: "design", r: -1 },
  { label: "Framer", kind: "design", r: 2.5 },
  { label: "Photoshop", kind: "design", r: -1.5 },
  { label: "Claude Design", kind: "design", r: 1 },
  { label: "Design → code", kind: "both", r: 2 },
  { label: "Responsive layouts", kind: "both", r: -2 },
  { label: "JavaScript animation", kind: "both", r: 1 },
  { label: "Reusable components", kind: "both", r: -3 },
  { label: "Cross-device QA", kind: "both", r: 1.5 },
  { label: "HTML, CSS & JS", kind: "code", r: 3 },
  { label: "TypeScript", kind: "code", r: -1 },
  { label: "Next.js", kind: "code", r: 2 },
  { label: "Nuxt.js", kind: "code", r: -1.5 },
  { label: "Tailwind", kind: "code", r: 1 },
  { label: "Storyblok", kind: "code", r: -3 },
  { label: "WordPress · JetEngine", kind: "code", r: -2 },
  { label: "Shopify Liquid", kind: "code", r: 1 },
  { label: "Git · CI/CD · Vercel", kind: "code", r: 2 },
  { label: "GTM · GA4", kind: "code", r: -1 },
];
