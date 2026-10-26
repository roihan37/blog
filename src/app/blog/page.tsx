import { pageMetadata } from "../lib/seo";

import BlogPage from "../components/BlogPage";
import { getAllposts } from "../hook/fetchPosts";


export const metadata = pageMetadata("DevSolve Blog — Web Development Tutorials", "Practical tutorials and developer notes on React, Next.js, JavaScript, TypeScript and mobile development by Roihan Salsabila.", "/blog");

export default async function IndexPage() {
const posts = await getAllposts()


  return (
   <BlogPage posts={posts} />
  );
}