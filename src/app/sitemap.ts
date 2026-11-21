import type { MetadataRoute } from "next";
import { site } from "@/content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/contato`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${site.url}/links`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${site.url}/vsl`, changeFrequency: "monthly", priority: 0.8 },
  ];
}
