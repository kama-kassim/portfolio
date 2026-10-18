export type Role = "Developed" | "Designed + developed" | "Designed";

export type FeaturedProject = {
  slug: string;
  name: string;
  role: Role;
  summary?: string;
  locked: boolean;
  image?: string; // put screenshots in public/work/ and set e.g. "/work/steel-arch.jpg"
};

// Homepage "Recent pages". Stacks stay off the cards: they're shown inside unlocked case studies.
export const featured: FeaturedProject[] = [
  {
    slug: "steel-arch-awards",
    name: "Steel Arch Awards",
    role: "Developed",
    summary:
      "A headless awards site. I turned the UI/UX team's designs into the live site the client edits themselves.",
    locked: true,
  },
  { slug: "calaqisya", name: "Calaqisya", role: "Developed", locked: true },
  { slug: "merpati-card", name: "Merpati Card", role: "Designed + developed", locked: true },
];

export const process = [
  { title: "Sketch it", text: "Paper and Claude Design. Lots of rough options, fast.", done: true },
  { title: "Design it", text: "Type, colour, spacing and components, decided before code.", done: true },
  { title: "Build it", text: "Next.js, Tailwind, WordPress, Shopify Liquid or Storyblok.", done: true },
  { title: "Ship it", text: "GitHub to Vercel. The satisfying one.", done: false },
];

type StickerKind = "design" | "both" | "code";
export const stickers: { label: string; kind: StickerKind; r: number }[] = [
  { label: "UI design", kind: "design", r: -3 },
  { label: "Layout & type", kind: "design", r: 2 },
  { label: "Illustration", kind: "design", r: -1 },
  { label: "Figma", kind: "design", r: 2 },
  { label: "Photoshop", kind: "design", r: -1.5 },
  { label: "Claude Design", kind: "design", r: 1 },
  { label: "Design → code", kind: "both", r: 2 },
  { label: "Responsive layouts", kind: "both", r: -2 },
  { label: "Motion & micro-interactions", kind: "both", r: 1 },
  { label: "Reusable components", kind: "both", r: -3 },
  { label: "HTML & CSS", kind: "code", r: 3 },
  { label: "Tailwind", kind: "code", r: -1 },
  { label: "Next.js", kind: "code", r: 2 },
  { label: "WordPress · Elementor", kind: "code", r: -2 },
  { label: "JetEngine", kind: "code", r: -2 },
  { label: "Shopify Liquid", kind: "code", r: 1 },
  { label: "Storyblok", kind: "code", r: -3 },
  { label: "GitHub · Vercel", kind: "code", r: 2 },
];
