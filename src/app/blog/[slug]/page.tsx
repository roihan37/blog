import { urlFor } from "../../../sanity/lib/image";
import { PortableTextRenderer } from "../../components/PortableTextRenderer";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Image from "@/node_modules/next/image";
import photoRoihan from "../../public/roihan.jpeg";
import { getPost } from "../../hook/fetchPosts";
import Link from "@/node_modules/next/link";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const post = await getPost(params)
  // const post = await client.fetch<SanityDocument>(POST_QUERY, await params, options);
  const postImageUrl = post?.mainImage ? urlFor(post.mainImage).width(550).height(310).url() : null;

  return (
    <div>
      <main className="container mx-auto min-h-screen max-w-3xl xl:px-1 px-[20px] flex flex-col gap-4">
        <div className="mb-8">
          <Header />
        </div>
        <h1 className="md:text-[42px] text-[36px] md:leading-13 leading-11 dark:text-[#D4D4D4] font-bold ">{post.title}</h1>
        <div className=" flex flex-row items-center gap-5 text-[15px] font-light">
          <Image
                  src={photoRoihan}
                  alt="Roihan portrait"
                  width={192}
                  height={192}
                  quality={95}
                  priority={true}
                  className="h-[32px] w-[32px] rounded-full object-cover  shadow-xl"
              />
              <Link href={'/'} className="cursor-pointer dark:text-[#D4D4D4] hover:underline">Roihan Salsabila</Link>
              <p className="opacity-50 dark:text-[#D4D4D4]">6 days ago</p>
        </div>
        <hr className="mb-8 border-t border-gray-300 my-4" />
        <div className="flex flex-col items-center gap-3">
          {postImageUrl && (
            <img
              src={postImageUrl}
              alt={post.title}
              className="aspect-video  w-full"
              width="550"
              height="310"
            />
          )}
          <p className="opacity-75 dark:text-[#D4D4D4] ">{post.mainImage.alt}</p>
        </div>
        <div className="prose mt-8">
          {Array.isArray(post.body) && <PortableTextRenderer value={post.body} />}
        </div>
        <Footer />
      </main>
    </div>
  );

}