
import { type SanityDocument } from "next-sanity";
import { client } from "../../sanity/lib/client";

const options = { next: { revalidate: 30 } };

export async function getAllposts(){
    const POSTS_QUERY = `*[
        _type == "post"
        && defined(slug.current)
      ]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, mainImage, description, link }`;
    const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
    return posts
}

export async function getPost(params:any) {
  const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;
  const post = await client.fetch<SanityDocument>(POST_QUERY, await params, options);
  return post

}