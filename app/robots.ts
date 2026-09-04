import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/dashboard/", "/api/"], // Melarang bot mengindeks area dashboard admin
    },
    sitemap: "https://masjid-walisongo.vercel.app/sitemap.xml",
  };
}
