import type { MetadataRoute } from "next";

const routes = [
  "",
  "/services",
  "/products",
  "/about",
  "/founder",
  "/contact",
  "/privacy",
  "/cookies",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-22T00:00:00.000Z");

  return routes.map((route) => ({
    url: `https://vemiora.uk${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/contact" ? 0.8 : 0.7,
  }));
}
