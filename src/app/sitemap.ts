import type { MetadataRoute } from "next";
import { readdirSync } from "node:fs";
import { join } from "node:path";

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://medicollect.nl"
).replace(/\/$/, "");

const APP_DIR = join(process.cwd(), "src", "app");

// Walk the app directory and collect every static route that has a page.tsx.
// New pages (blog posts, branches, ...) are picked up automatically on each
// build, so the sitemap never needs manual maintenance.
function collectRoutes(dir: string, base = ""): string[] {
  const routes: string[] = [];
  let entries;
  try {
    entries = readdirSync(dir, { withFileTypes: true });
  } catch {
    return routes;
  }

  if (entries.some((e) => e.isFile() && /^page\.(tsx|ts|jsx|js|mdx)$/.test(e.name))) {
    routes.push(base === "" ? "/" : base);
  }

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const name = entry.name;
    // Skip dynamic routes, route groups, private folders and the api dir.
    if (name.startsWith("[") || name.startsWith("(") || name.startsWith("_") || name === "api") {
      continue;
    }
    routes.push(...collectRoutes(join(dir, name), `${base}/${name}`));
  }

  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return collectRoutes(APP_DIR)
    .sort()
    .map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: now,
      changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "/" ? 1 : path.startsWith("/blog/") || path.startsWith("/branche/") ? 0.6 : 0.7,
    }));
}
