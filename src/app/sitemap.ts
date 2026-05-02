import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ephostech.id";

  const locales = ["id", "en"];

  const routes = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/gallery",
    "/contact",
  ];

  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),

      // SEO upgrade
      changeFrequency: route === "" ? "daily" : "weekly",
      priority: route === "" ? 1 : 0.7,
    }))
  );
}