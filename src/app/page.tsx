
import Intro from "./components/intro";
import HomeSection from "./components/homeSection";
import Footer from "./components/footer";
import Header from "./components/header";
import { getAllposts } from "./hook/fetchPosts";

export default async function Home() {
  const posts = await getAllposts()
  // console.log(posts,"PAGE");
  
  return (
      <main className="xl:px-[170px] lg:px-[100px] md:px-[100px] sm:px-[80px] px-[50px] bg-white dark:bg-zinc-900 dark:border-1 border-zinc-800 shadow-md" >
        <Header />
        <Intro />
        <HomeSection posts={posts} />
        <Footer />
      </main>
  );
}
