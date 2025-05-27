'use client';
import Link from "@/node_modules/next/link"
import { urlFor } from "@/src/sanity/lib/image";
import { formattedDate } from "../hook/formatedDate";
import { useDarkMode } from "../hook/isDark"
import Footer from "./footer"
import Header from "./header"
import { Icon } from "./icon"

interface Post {
    _id: string;
    mainImage: {
        _type: string;
        asset: {
            [key: string]: any;
        };
    };
    publishedAt: string;
    slug: {
        _type: string;
        current: string;
    };
    title: string;
}

export default function BlogPage({ posts }: { posts: Post[] }) {
    const isDark = useDarkMode()
      

    return (
        <div className="lg:px-[170px] md:px-[100px] sm:px-[80px] px-[50px] bg-white dark:bg-zinc-950  ">
            <Header />
            <div className="my-[50px] relative z-10 gap-[5px] text-gray-800">

                <div className="md:text-[55px] sm:text-[40px] text-[40px] md:max-w-[628px] sm:w-full max-w-[400px]">
                    <p className={`font-bold ${isDark ? "text-gradient-soft" : "text-gray-800"} font-sans md:leading-[70px] sm:leading-[50px] leading-11 mt-[15px]`}>
                    DevSolve
                    </p>
                </div>
                <div className="text-[18px] lg:max-w-[500px] md:max-w-[500px] sm:max-w-[500px] max-w-[500px] mt-[10px]">
                    <p className="font-sans font-light text-left leading-[30px] ml-[5px] opacity-75 dark:text-zinc-300">
                        Hi 🙋‍♂️, thanks for coming, I share anything that may help others, technologies I'm using and cool things I've made.
                    </p>
                </div>
                <div className="flex dark:text-zinc-100 flex-row mt-[20px] ml-[5px] opacity-65 gap-[20px]">
                    <Icon name="github" width={24} height={24} color="--c-crimson-blue-500" />
                    <Icon name="linkedin" width={24} height={24} color="--c-crimson-blue-500" />
                    <Icon name="instagram" width={24} height={24} color="--c-crimson-blue-500" />
                    <Icon name="mail" width={24} height={24} color="--c-crimson-blue-500" />
                </div>
            </div>
            {/* CARD LIST */}
            <div className="grid grid-cols-2 gap-8">
                {posts.map((post) => (
                    <Link
                        href={`/blog/${post.slug.current}`}
                        key={post._id}
                        className="w-[360px] h-full rounded-lg cursor-pointer flex flex-col overflow-hidden bg-white shadow-md"
                    >
                        <img
                            src={
                                post?.mainImage
                                    ? urlFor(post.mainImage).width(550).height(310).url()
                                    : ""
                            }
                            alt={post.title}
                            className="w-full h-[185px] object-cover"
                        />
                        {/* headline */}
                        <div className="flex flex-col p-[12px] gap-2 flex-1 overflow-hidden">
                            <p className="text-[12px]">
                                {formattedDate(post.publishedAt ?? "")}
                            </p>
                            <h1 className="text-xl pb-[10px] font-semibold hover:underline">
                                {post.title}
                            </h1>
                        </div>
                    </Link>
                ))}
            </div>

            <Footer />
        </div>
    )
}