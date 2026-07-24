import { access, readFile } from "node:fs/promises";
import { constants } from "node:fs";
import path from "node:path";

const root = process.cwd();
const requiredFiles = [
  "app/page.tsx",
  "app/about/page.tsx",
  "app/products/page.tsx",
  "app/founder/page.tsx",
  "app/contact/page.tsx",
  "app/privacy/page.tsx",
  "app/cookies/page.tsx",
  "app/terms/page.tsx",
  "app/not-found.tsx",
  "app/robots.ts",
  "app/sitemap.ts",
  "app/api/contact/route.ts",
  "public/kavora-logo.png",
  "public/omar-elmohr.webp",
  "public/og.webp",
];

for (const file of requiredFiles) {
  await access(path.join(root, file), constants.R_OK);
}

const layout = await readFile(path.join(root, "app/layout.tsx"), "utf8");
const shell = await readFile(path.join(root, "app/site-shell.tsx"), "utf8");

if (!layout.includes("application/ld+json")) {
  throw new Error("Organization structured data is missing");
}

if (!shell.includes('href="/terms"')) {
  throw new Error("Terms page is not linked from the site shell");
}

console.log(`Smoke test passed: ${requiredFiles.length} required files and core metadata verified.`);
