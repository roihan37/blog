import type { MetadataRoute } from "next";
import { client } from "../sanity/lib/client";
import { absoluteUrl, articlePath } from "./lib/seo";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch every published post; the homepage query intentionally shows only twelve.
  const posts = await client.fetch<{ slug: string; updatedAt: string }[]>(
    `*[_type == "post" && defined(slug.current) && !(slug.current in ["dex-barber"]) && !(_id in path("drafts.**"))]{"slug": slug.current, "updatedAt": _updatedAt}`,
    {}, { next: { revalidate: 3600 } },
  );
  return [
    ...["/", "/portfolio", "/blog", "/blog/dex-barber"].map(path => ({ url: absoluteUrl(path) })),
    ...posts.map(post => ({ url: absoluteUrl(articlePath(post.slug)), lastModified: post.updatedAt })),
  ];
}
