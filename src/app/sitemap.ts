import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE = "https://www.neurokinesiaim.com.ar";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE,                changeFrequency: "monthly", priority: 1,   lastModified: new Date() },
    { url: `${BASE}/servicios`, changeFrequency: "monthly", priority: 0.9, lastModified: new Date() },
    { url: `${BASE}/equipo`,    changeFrequency: "monthly", priority: 0.8, lastModified: new Date() },
    { url: `${BASE}/contacto`,  changeFrequency: "monthly", priority: 0.8, lastModified: new Date() },
    { url: `${BASE}/blog`,      changeFrequency: "weekly",  priority: 0.7, lastModified: new Date() },
  ];
}
