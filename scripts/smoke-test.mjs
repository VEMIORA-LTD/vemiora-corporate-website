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
const contactPage = await readFile(path.join(root, "app/contact/page.tsx"), "utf8");
const contactForm = await readFile(path.join(root, "app/contact/contact-form.tsx"), "utf8");
const contactApi = await readFile(path.join(root, "app/api/contact/route.ts"), "utf8");

if (!layout.includes("application/ld+json")) {
  throw new Error("Organization structured data is missing");
}

if (!shell.includes('href="/terms"')) {
  throw new Error("Terms page is not linked from the site shell");
}

if (!contactPage.includes('id="project-enquiry"') || !contactPage.includes("UK-registered technology company")) {
  throw new Error("Contact landing-page CTA or trust content is missing");
}

for (const field of ["companyWebsite", "budget", "contactMethod", "phone"]) {
  if (!contactForm.includes(`name="${field}"`) || !contactApi.includes(`body.${field}`)) {
    throw new Error(`Contact field is not wired end-to-end: ${field}`);
  }
}

if (!contactForm.includes("result?.error")) {
  throw new Error("Contact form does not surface API errors");
}

for (const campaignField of ["utmSource", "utmMedium", "utmCampaign", "landingPage"]) {
  if (!contactForm.includes(campaignField) || !contactApi.includes(`body.${campaignField}`)) {
    throw new Error(`Campaign attribution is not wired end-to-end: ${campaignField}`);
  }
}

console.log(`Smoke test passed: ${requiredFiles.length} required files and core metadata verified.`);
