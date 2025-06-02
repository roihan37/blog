'use client';
import Link from "@/node_modules/next/link"
import { urlFor } from "@/src/sanity/lib/image";
import { formattedDate } from "../hook/formatedDate";
import { useDarkMode } from "../hook/isDark"
import { Post } from "../type/typePost";
import Footer from "./footer"
import Header from "./header"
import { Icon } from "./icon"



export default function BlogPage({ posts }: { posts: Post[] }) {
    const isDark = useDarkMode()
      

    return (
        <div className="xl:px-[170px] lg:px-[100px] sm:px-8 px-[20px] bg-white dark:bg-zinc-950 dark:border-1 border-zinc-800 shadow-md ">
            <Header />
            <div className="my-[50px] relative z-10 gap-[5px] text-zinc-800">

                <div className="md:text-[55px] sm:text-[55px] text-[40px] md:max-w-[628px] sm:w-full max-w-[400px]">
                    <p className={`font-bold "text-zinc-800" dark:text-zinc-100 font-sans md:leading-[70px] sm:leading-[50px] leading-11 mt-[15px]`}>
                    DevSolve
                    </p>
                </div>
                <div className="text-[18px] lg:max-w-[500px] md:max-w-[500px] sm:max-w-[500px] max-w-[500px] mt-[10px]">
                    <p className="font-sans font-light text-left leading-[30px] ml-[5px]  dark:text-zinc-100">
                        Hi 🙋‍♂️, thanks for coming, I share anything that may help others, technologies I'm using and cool things I've made.
                    </p>
                </div>
                <div className="flex dark:text-zinc-400 text-zinc-500 flex-row mt-[20px] ml-[5px]  gap-[20px]">
                <Link href={'https://github.com/roihan37'}>
                    <Icon name="github" width={24} height={24} color="--c-crimson-blue-500" className="dark:hover:text-white hover:text-zinc-800" />
                </Link>
                <Link href={'https://www.linkedin.com/in/roihan-salsabila/'}>
                    <Icon name="linkedin" width={24} height={24} color="--c-crimson-blue-500" className="dark:hover:text-white hover:text-zinc-800" />
                </Link>
                <Link href={'https://www.instagram.com/roi2five'}>
                    <Icon name="instagram" width={24} height={24} color="--c-crimson-blue-500" className="dark:hover:text-white hover:text-zinc-800" />
                </Link>
                <Link href={'https://x.com/roymalik37'}>
                    <Icon name="twitter" width={24} height={24} color="--c-crimson-blue-500" className="dark:hover:text-white hover:text-zinc-800" />
                </Link>
                </div>
            </div>
            {/* CARD LIST */}
            <div className="grid sm:grid-cols-2  gap-8">
                {posts.map((post) => (
                    <Link
                        href={`/blog/${post.slug.current}`}
                        key={post._id}
                        className="max-w-[420px] sm:max-w-[420px] dark:border-1 border-zinc-700 h-full rounded-lg cursor-pointer flex flex-col overflow-hidden bg-white dark:bg-zinc-950 shadow-md "
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
                        <div className="flex flex-col p-[12px] gap-2 flex-1 dark:text-zinc-100 overflow-hidden">
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