

import { cache } from "react";
import { client } from "../../sanity/lib/client";
import { Post } from "../type/typePost";

const options = { next: { revalidate: 30 } };

export async function getAllposts(){
    const POSTS_QUERY = `*[
        _type == "post"
        && defined(slug.current)
      ]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, mainImage, description, link }`;
    const posts = await client.fetch<Post[]>(POSTS_QUERY, {}, options);
    return posts
}

const fetchPost = cache(async (slug: string) => {
  const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;
  const post = await client.fetch<Post | null>(POST_QUERY, { slug }, options);
  return post

});

export async function getPost(params: Promise<{ slug: string }>) {
  return fetchPost((await params).slug);
}
