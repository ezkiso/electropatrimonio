import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/servicios`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/nosotros`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/contacto`, changeFrequency: "monthly", priority: 0.6 },
  ];
}
