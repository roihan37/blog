'use client';
import { formattedDate } from "../hook/formatedDate";
import React, { useEffect, useState } from "react";
import magurame from "../public/magurame.png";
import dexbarber from "../public/dexbarber.png";
import Image from "next/image";
import Link from "next/link";
import { Post } from "../type/typePost";

export default function HomeSection({ posts }: { posts: Post[] }) {
    
    return (
        <>
            <div className="text-[16px]  text-zinc-800">
                <div className="my-[35px] flex flex-col gap-[20px] ">

                    <h1 className="md:text-[44px] dark:text-zinc-200 sm:text-[36px] text-[31px] font-semibold">
                        Project
                    </h1>

                    <div className="max-w-[410px] xl:max-w-full">
                        <div className="flex flex-row items-center gap-5">
                            <div className="ml-[3px]  h-10 w-[3px] bg-zinc-950/10 dark:bg-white/10 rounded-t"></div>
                            <div className="dark:text-zinc-200">
                                <p className="opacity-75 ">I build projects to learn new things and to help others. Follow my journey build in public <br></br>
                                </p>
                                <Link href={'/portfolio'} className="cursor-pointer hover:underline" >
                                  <p>👉 See more here.</p>  
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 grid-cols-1  gap-[5px] ">
                        {/* Cards */}
                        <div className=" text-black dark:text-zinc-300 text-[15px]  flex flex-col w-full rounded-[10px] hover:bg-zinc-100 dark:hover:bg-zinc-800 p-5 gap-[10px]">
                            <Image
                                src={dexbarber}
                                alt="Ricardo portrait"
                                width={150}
                                height={150}
                                quality={95}
                                priority={true}
                                className="h-[45px] w-[45px] rounded-full object-cover border-[0.40rem] shadow-md"
                                
                            />
                            <h1 className="font-semibold">Barber Dex</h1>
                            <p className="font-light">An on-demand mobile app for home haircut services</p>
                            <div className="flex flex-row gap-4 items-center sm:flex-cols">
                                <Link href={`https://github.com/BarberDelivery`} className="cursor-pointer hover:underline flex gap-2 flex-row items-center rounded-full opacity-55 text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                                    </svg>
                                    <p>View on GitHub</p>
                                </Link>
                                <Link href={'/blog/dex-barber'} className="cursor-pointer hover:underline flex gap-2  flex-row items-center rounded-full opacity-55 text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                                    </svg>

                                    <p>Read the Story</p>
                                </Link>
                            </div>
                        </div>

                        <div className="text-black dark:text-zinc-300 text-[15px] flex flex-col w-full rounded-[10px] hover:bg-zinc-100 dark:hover:bg-zinc-800 p-5 gap-[10px]">
                            <Image
                                src={magurame}
                                alt="Ricardo portrait"
                                width={150}
                                height={150}
                                quality={95}
                                priority={true}
                                className="h-[45px] w-[45px] rounded-full object-cover border-[0.40rem] shadow-md"
                            />
                            <h1 className="font-semibold">Magurameudon App Mobile Clone</h1>
                            <p className="font-light">A mobile application to display Restaurant Magurameudon</p>
                            <div>
                                <Link href={`https://github.com/roihan37/Magurameudon-Mobile-App-Clone`} className="cursor-pointer hover:underline flex gap-2 flex-row items-center rounded-full opacity-55 text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                                    </svg>
                                    <p>View on GitHub</p>
                                </Link>

                            </div>
                        </div>
                       
                               

                    </div>
                </div>
                {/* List Blog */}
                <div className="py-15 pl-2">
                    <h1 className="md:text-[44px] dark:text-zinc-200 sm:text-[36px] text-[31px] font-semibold">
                        Writing
                    </h1>
                    <div className="ml-[3px] -mb-[25px] h-8 w-[3px] bg-zinc-950/10 dark:bg-white/10 rounded-t">
                    </div>
                    {
                        posts.slice(0, 11).map((post, index) => {
                            return (
                                <div key={post._id} className="flex items-top max-w-full">
                                    <div className="relative">
                                        <div className="w-[9px] h-[9px] mt-[26.5px] rounded-full bg-zinc-600 dark:bg-white/90 relative">
                                            {
                                                index === 0
                                                    ? <div className="bg-zinc-500  dark:bg-white/90 animate-ping w-[9px] h-[9px] rounded-full absolute">
                                                    </div>
                                                    : ''
                                            }
                                        </div>
                                        <div className="ml-[3px] w-[3px] bg-zinc-950/10 dark:bg-white/10 h-full">
                                        </div>

                                    </div>

                                    <Link href={`/blog/${post.slug.current}`} className="pl-3 group hover:bg-zinc-50  border-[1px] border-white dark:border-zinc-900 dark:hover:border-zinc-800 dark:hover:bg-zinc-800 inline hover:border-zinc-200 p-5 ml-5 mb-5 rounded-2xl">
                                        <p className="text-sm mb-1 text-zinc-950/70 group-hover:text-zinc-950/90 dark:text-white/90 dark:group-hover:text-zinc-300  font-semibold">{formattedDate(post.publishedAt ?? "")}</p>
                                        <div className="cursor-pointer inline-block mb-2" >
                                            <h3 className="text-zinc-800 dark:text-zinc-300 text-lg sm:text-xl cursor-pointer">
                                                <span className="relative z-20 hover:text-zinc-800 dark:hover:text-zinc-300 hover:underline tracking-tight font-semibold">{post.title}</span>
                                            </h3>
                                        </div>
                                        <p className="text-sm text-zinc-950/70 dark:text-zinc-400">
                                            {post.description}</p>
                                    </Link>

                                </div>
                            )
                        })
                    }

                    <div className="flex items-top max-w-full">
                        <div className="relative">
                            <div className="w-[9px] h-[9px] mt-[26.5px] rounded-full bg-zinc-600 dark:bg-white/90 relative">

                            </div>
                            <div className="ml-[3px] w-[3px] bg-zinc-950/10 dark:bg-white/10 h-full">
                            </div>

                        </div>

                        <Link href={`/blog/dex-barber`} className="pl-3 group hover:bg-zinc-50  border-[1px] border-white dark:border-zinc-900 dark:hover:border-zinc-800 dark:hover:bg-zinc-800 inline hover:border-zinc-200 p-5 ml-5 mb-5 rounded-2xl">
                            <p className="text-sm mb-1 text-zinc-950/70 group-hover:text-zinc-950/90 dark:text-white/90 dark:group-hover:text-zinc-300  font-semibold">May 15, 2025</p>
                            <div className="cursor-pointer inline-block mb-2" >
                                <h3 className="text-zinc-800 dark:text-zinc-300 text-lg sm:text-xl cursor-pointer">
                                    <span className="relative z-20 hover:text-zinc-800 dark:hover:text-zinc-300 hover:underline tracking-tight font-semibold">Dex Barber – A Fullstack Mobile App Created During My Hacktiv8 Bootcamp Journey</span>
                                </h3>
                            </div>
                            <p className="text-sm text-zinc-950/70 dark:text-zinc-400">
                                A mobile app that allows users to book barbers to come to their location, featuring real-time chat and live tracking</p>
                        </Link>

                    </div>
                    <div className="pt-6 mt-6">
                        <Link className="underline cursor-pointer inline-block dark:text-zinc-300 text-base" href="/blog">See all posts</Link>
                    </div>

                </div>
                {/* SEND EMAIL */}
                <div className="border-1 border-zinc-300 dark:border-zinc-700 dark:text-zinc-300 rounded-2xl p-5 my-10">
                    <div className="flex flex-row gap-2 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                        </svg>
                        <p className="dark:text-zinc-300">Send message</p>
                    </div>
                    <div className=" opacity-60 mb-5">
                        <p>Send me a message, whether for collaboration, inquiries, or just a chat!</p>
                    </div>
                    <div className="flex flex-row items-center gap-5">
                        <textarea placeholder="Your message..." className="p-2 border-zinc-200 dark:border-zinc-500 h-[50px] dark:bg-zinc-800 w-full rounded-md  border-[1px]"></textarea>
                        <button className="px-[15px]  rounded-md py-[10px] bg-zinc-900 dark:bg-zinc-300 dark:text-zinc-950 text-white">Send</button>
                    </div>
                </div>

            </div>
        </>
    )
}
