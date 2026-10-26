import { absoluteUrl, pageMetadata, person, serializeJsonLd, siteName } from "./lib/seo";

import Intro from "./components/intro";
import HomeSection from "./components/homeSection";
import Footer from "./components/footer";
import Header from "./components/header";
import { getAllposts } from "./hook/fetchPosts";

export const metadata = pageMetadata("Roihan Salsabila | Software Engineer & Full-stack Developer", "Roihan Salsabila is a software engineer in Indonesia building full-stack web and mobile applications. Explore projects and practical React, Next.js and TypeScript tutorials.", "/");

export default async function Home() {
  const posts = await getAllposts()
  // console.log(posts,"PAGE");
  
  return (
      <main className="page-content bg-white dark:bg-zinc-950 dark:border-1 border-zinc-800 shadow-md" >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd({ "@context": "https://schema.org", "@graph": [person, { "@type": "WebSite", "@id": absoluteUrl("/#website"), url: absoluteUrl("/"), name: siteName, inLanguage: "en", publisher: { "@id": person["@id"] } }] }) }} />
        <Header />
        <Intro />
        <HomeSection posts={posts} />
        <Footer />
      </main>
  );
}
