import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://id3tech.com/sitemap.xml",
    host: "https://id3tech.com",
  };
}
