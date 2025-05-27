
import { type SanityDocument } from "next-sanity";
import { client } from "../../sanity/lib/client";
import BlogPage from "../components/BlogPage";


const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, mainImage, }`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
   
   <BlogPage posts={posts} />
  );
}