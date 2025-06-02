

import { client } from "../../sanity/lib/client";
import { Post } from "../type/typePost";

const options = { next: { revalidate: 30 } };

export async function getAllposts(){
    const POSTS_QUERY = `*[
        _type == "post"
        && defined(slug.current)
      ]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, mainImage, description, link }`;
      // eslint-disable-next-line
    const posts = await client.fetch<Post[]>(POSTS_QUERY, {}, options);
    return posts
}

export async function getPost(params:any) {
  const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;
  // eslint-disable-next-line
  const post = await client.fetch<Post>(POST_QUERY, await params, options);
  return post

}