import type { Metadata } from "next";

const configuredUrl = process.env.SITE_URL || "https://roihansalsabila.com";
export const siteUrl = new URL(configuredUrl.startsWith("http") ? configuredUrl : `https://${configuredUrl}`).origin;
export const siteName = "Roihan Salsabila";
export const siteDescription = "Software engineer and full-stack developer based in Indonesia. Explore React, Next.js and TypeScript projects, plus practical web development tutorials.";
export const absoluteUrl = (path: string) => new URL(path, `${siteUrl}/`).toString();
export const articlePath = (slug: string) => `/blog/${encodeURIComponent(slug)}`;
export const defaultImage = { url: "/opengraph-image", width: 1200, height: 630, alt: "Roihan Salsabila — Software Engineer & Full-stack Developer" };

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title, description, alternates: { canonical: path },
    openGraph: { type: "website", locale: "en_US", siteName, title, description, url: path, images: [defaultImage] },
    twitter: { card: "summary_large_image", title, description, images: [defaultImage] },
  };
}

export function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export const person = {
  "@type": "Person", "@id": absoluteUrl("/#person"), name: siteName,
  url: siteUrl, image: absoluteUrl("/roihan3.png"), jobTitle: "Software Engineer",
  sameAs: ["https://github.com/roihan37", "https://www.linkedin.com/in/roihan-salsabila/"],
};
