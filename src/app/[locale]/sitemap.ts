import type { MetadataRoute } from "next";

export default function sitemap({
  params,
}: {
  params: { locale: string };
}): MetadataRoute.Sitemap {
  const baseUrl = "https://ephostech.id";
  const { locale } = params;

  const routes = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/gallery",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}/${locale}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}