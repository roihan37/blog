import type { Metadata } from "next";
import { absoluteUrl, articlePath, defaultImage, pageMetadata, person, serializeJsonLd, siteName } from "../../lib/seo";
import { PortableTextRenderer } from "../../components/PortableTextRenderer";
import { urlFor } from "../../../sanity/lib/image";
import { getPost } from "../../hook/fetchPosts";
import { formatDistanceToNow } from 'date-fns';
import Image from "next/image";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Link from "next/link";
import { notFound } from "next/navigation";

type PostPageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const post = await getPost(params);
  if (!post) notFound();
  const path = articlePath(post.slug.current);
  const description = post.description?.trim() || `Read ${post.title}, a development article by ${siteName}.`;
  const images = post.mainImage
    ? [{ url: urlFor(post.mainImage).width(1200).height(630).fit("crop").url(), width: 1200, height: 630, alt: post.mainImage.alt || post.title }]
    : [defaultImage];
  return {
    ...pageMetadata(post.title, description, path),
    openGraph: { type: "article", title: post.title, description, url: path, siteName, locale: "en_US", publishedTime: post.publishedAt, modifiedTime: post._updatedAt, authors: [absoluteUrl("/portfolio")], images },
    twitter: { card: "summary_large_image", title: post.title, description, images },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const post = await getPost(params)
  if (!post) notFound();

  const postImageUrl = post.mainImage ? urlFor(post.mainImage).width(1100).height(620).quality(80).url() : null;
  const relativeDate = formatDistanceToNow(new Date(post.publishedAt), { addSuffix: true });


  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd({
        "@context": "https://schema.org", "@type": "BlogPosting",
        headline: post.title, description: post.description,
        url: absoluteUrl(articlePath(post.slug.current)),
        mainEntityOfPage: absoluteUrl(articlePath(post.slug.current)),
        datePublished: post.publishedAt, dateModified: post._updatedAt || post.publishedAt,
        author: person, publisher: person, inLanguage: "en",
        image: postImageUrl || absoluteUrl("/opengraph-image"),
      }) }} />
      <main className="article-content min-h-screen flex flex-col gap-4">
        <div className="mb-8">
          <Header />
        </div>
        <h1 className="text-[clamp(1.875rem,4.5vw,2.625rem)] leading-tight break-words dark:text-[#D4D4D4] font-bold ">{post.title}</h1>
        <div className=" flex flex-wrap items-center gap-x-3 gap-y-2 text-[15px] font-light">
          <Image
                  src={'/roihan3.png'}
                  alt="Roihan portrait"
                  width={192}
                  height={192}
                  quality={95}
                  priority={true}
                  className="h-[32px] w-[32px] shrink-0 rounded-full object-cover  shadow-xl"
              />
              <Link href={'/'} className="cursor-pointer dark:text-[#D4D4D4] hover:underline">Roihan Salsabila</Link>
              <time dateTime={post.publishedAt} className="opacity-50 dark:text-[#D4D4D4]">{relativeDate}</time>
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
          <p className="opacity-75 dark:text-[#D4D4D4] ">{post.mainImage?.alt}</p>
        </div>
        <div className="article-body min-w-0 mt-4 sm:mt-8">
          {Array.isArray(post.body) && <PortableTextRenderer value={post.body} />}
        </div>
        <Footer />
      </main>
    </div>
  );

}
