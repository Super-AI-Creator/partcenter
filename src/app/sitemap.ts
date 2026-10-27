import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

const paths = [
  "/",
  "/about",
  "/industries",
  "/software",
  "/hardware",
  "/civil",
  "/finance",
  "/collaboration",
  "/stories",
  "/projects",
  "/join",
  "/businesses",
  "/contact",
  "/faq",
  "/privacy",
  "/terms",
  "/disclaimers",
  "/sources",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: absoluteUrl(path),
    lastModified: new Date("2026-10-23"),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
