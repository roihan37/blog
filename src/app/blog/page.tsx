
import BlogPage from "../components/BlogPage";
import { getAllposts } from "../hook/fetchPosts";


export default async function IndexPage() {
const posts = await getAllposts()


  return (
   <BlogPage posts={posts} />
  );
}