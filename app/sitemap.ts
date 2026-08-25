import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://jmtechlab.do";

  return [
    {
      url: baseUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/projects/suarez-ai-audit`,
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/projects/qaforge-ai`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects/qa-sentinel`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects/zero-trust-api`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
