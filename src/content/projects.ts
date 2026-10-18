import type { Role } from "./home";

export type Project = {
  slug: string;
  name: string;
  role: Role;
  /** One line shown on the Work page. Keep stack names out of locked projects. */
  summary: string;
  /** Locked case studies need the shared password. Kickwon is the public one. */
  locked: boolean;
  /** Only shown inside the case study (after unlocking). */
  stack: string[];
  year?: string; // TODO per project
  liveUrl?: string; // TODO per project
  image?: string; // e.g. "/work/steel-arch.jpg" in public/work/
};

export const projects: Project[] = [
  {
    slug: "steel-arch-awards",
    name: "Steel Arch Awards",
    role: "Developed",
    summary: "A headless awards site. I turned the UI/UX team's designs into the live site the client edits themselves.",
    locked: true,
    stack: ["Next.js", "Storyblok", "Headless CMS"],
  },
  {
    slug: "calaqisya",
    name: "Calaqisya",
    role: "Developed",
    summary: "Custom store pages and sections with adjustable blocks, plus confetti and a custom cursor.",
    locked: true,
    stack: ["Shopify", "Liquid"],
  },
  {
    slug: "merpati-card",
    name: "Merpati Card",
    role: "Designed + developed",
    summary: "Designed it, coded it, and shipped it myself.",
    locked: true,
    stack: ["Custom code", "GitHub", "Vercel"],
  },
  {
    slug: "kickwon",
    name: "Kickwon",
    role: "Designed + developed",
    summary: "Designed the site, then built it in WordPress with WP Canai.",
    locked: false,
    stack: ["WordPress", "WP Canai", "Claude Design"],
  },
  {
    slug: "aura-crown",
    name: "Aura Crown",
    role: "Designed + developed",
    summary: "Designed the site, then built it in WordPress.",
    locked: true,
    stack: ["WordPress", "WP Canai", "Claude Design"],
  },
  {
    slug: "open-academy",
    name: "Open Academy",
    role: "Developed",
    summary: "Built the site with custom post types and custom features.",
    locked: true,
    stack: ["WordPress", "Elementor Pro", "JetEngine", "Fluent Snippets"],
  },
  {
    slug: "stepper-visioncare",
    name: "Stepper Visioncare",
    role: "Developed",
    summary: "Built the site with custom post types and custom pages.",
    locked: true,
    stack: ["WordPress", "Elementor Pro", "JetEngine", "Fluent Snippets"],
  },
  {
    slug: "pacs",
    name: "PACS",
    role: "Developed",
    summary: "Adjusted custom post types and built custom features.",
    locked: true,
    stack: ["WordPress", "Elementor Pro", "JetEngine", "Fluent Snippets"],
  },
  {
    slug: "openminds-uob",
    name: "Openminds × UOB Digital Integration",
    role: "Developed",
    summary: "Built the site from an existing design.",
    locked: true,
    stack: ["WordPress", "WP Canai", "Tailwind"],
  },
  {
    slug: "boss-7-engineering",
    name: "Boss 7 Engineering",
    role: "Developed",
    summary: "Built the company website.",
    locked: true,
    stack: ["WordPress", "Elementor Pro"],
  },
  {
    slug: "baizigui",
    name: "Baizigui",
    role: "Developed",
    summary: "Built the online store pages, with some custom code.",
    locked: true,
    stack: ["Shopify", "GemPages", "Custom code"],
  },
  {
    slug: "jolicare",
    name: "Jolicare",
    role: "Developed",
    summary: "Built the online store pages.",
    locked: true,
    stack: ["Shopify", "PageFly"],
  },
  {
    slug: "eight-society",
    name: "Eight Society",
    role: "Designed",
    summary: "Website design.",
    locked: true,
    stack: ["Claude Design"],
  },
  {
    slug: "kitsucoat",
    name: "KitsuCoat",
    role: "Designed",
    summary: "Website design.",
    locked: true,
    stack: ["Claude Design", "Figma"],
  },
  {
    slug: "nak-makan-apa-ni",
    name: "Nak Makan Apa Ni",
    role: "Designed",
    summary: "Website design, coming soon.",
    locked: true,
    stack: ["Claude Design"],
  },
  {
    slug: "bsafe",
    name: "BSafe",
    role: "Designed",
    summary: "Website design.",
    locked: true,
    stack: ["Claude Design"],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
