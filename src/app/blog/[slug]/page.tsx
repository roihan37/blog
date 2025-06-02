import { PortableTextRenderer } from "../../components/PortableTextRenderer";
import { urlFor } from "../../../sanity/lib/image";
import { getPost } from "../../hook/fetchPosts";
import { formatDistanceToNow } from 'date-fns';
import Image from "next/image";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Link from "next/link";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const post = await getPost(params)
  // const post = await client.fetch<SanityDocument>(POST_QUERY, await params, options);
  const postImageUrl = post?.mainImage ? urlFor(post.mainImage).width(1100).height(620).quality(80).url() : null;
  const relativeDate = formatDistanceToNow(new Date(post.publishedAt), { addSuffix: true });


  return (
    <div>
      <main className="container mx-auto min-h-screen max-w-3xl xl:px-1 px-[20px] flex flex-col gap-4">
        <div className="mb-8">
          <Header />
        </div>
        <h1 className="md:text-[42px] text-[36px] md:leading-13 leading-11 dark:text-[#D4D4D4] font-bold ">{post.title}</h1>
        <div className=" flex flex-row items-center gap-5 text-[15px] font-light">
          <Image
                  src={'/roihan3.png'}
                  alt="Roihan portrait"
                  width={192}
                  height={192}
                  quality={95}
                  priority={true}
                  className="h-[32px] w-[32px] rounded-full object-cover  shadow-xl"
              />
              <Link href={'/'} className="cursor-pointer dark:text-[#D4D4D4] hover:underline">Roihan Salsabila</Link>
              <p className="opacity-50 dark:text-[#D4D4D4]">{relativeDate}</p>
        </div>
        <hr className="mb-8 border-t border-gray-300 my-4" />
        <div className="flex flex-col items-center gap-3">
          {postImageUrl && (
            // eslint-disable-next-line
            <img
            src={postImageUrl}
            alt={post.title}
            className="aspect-video w-full object-cover"
            width={1100}
            height={620}
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