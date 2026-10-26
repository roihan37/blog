'use client';
import { formattedDate } from "../hook/formatedDate";
import React from "react";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { portfolioProjects } from "../lib/projects";
import Link from "next/link";
import { Post } from "../type/typePost";
import ContactForm from "./ContactForm";

const featuredDescriptions: Record<string, string> = {
    "HelpDesk Mini": "A multi-tenant helpdesk with ticket management and real-time messaging.",
    SIAKAD: "An academic management system for courses, attendance, grades, and payments.",
};

const featuredProjects = portfolioProjects.filter((project) => project.name in featuredDescriptions);

export default function HomeSection({ posts }: { posts: Post[] }) {
    
    return (
        <>
            <div className="text-[16px]  text-zinc-800">
                <div className="my-[35px] flex flex-col gap-[20px] ">

                    <h2 className="md:text-[44px] dark:text-zinc-200 sm:text-[36px] text-[31px] font-semibold">
                        Project
                    </h2>

                    <div className="max-w-[410px] xl:max-w-full">
                        <div className="flex items-start lg:items-center gap-4 lg:gap-5">
                            <div className="shrink-0 ml-[3px]  h-10 w-[3px] bg-zinc-950/10 dark:bg-white/10 rounded-t"></div>
                            <div className="dark:text-zinc-200">
                                <p className="opacity-75 ">I build projects to learn new things and to help others. Follow my journey build in public <br></br>
                                </p>
                                <Link href={'/portfolio'} className="cursor-pointer hover:underline" >
                                  <p>👉 See more here.</p>  
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 lg:gap-[5px] ">
                        {featuredProjects.map((project) => (
                            <article key={project.name} className="min-w-0 text-black dark:text-zinc-300 text-[15px] flex flex-col w-full rounded-[10px] hover:bg-zinc-100 dark:hover:bg-zinc-800 p-5 gap-3 transition-colors">
                                <div className="flex items-center justify-between gap-3">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
                                        <project.icon className="h-5 w-5" aria-hidden="true" />
                                    </div>
                                    {project.inProgress && (
                                        <span className="rounded-full border border-zinc-300 px-2.5 py-1 text-xs dark:border-zinc-700">In Progress</span>
                                    )}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-base">{project.name}</h3>
                                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{project.subtitle}</p>
                                </div>
                                <p className="font-light leading-relaxed">{featuredDescriptions[project.name]}</p>
                                <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} on GitHub (opens in a new tab)`} className="inline-flex items-center gap-2 rounded-sm hover:underline focus-visible:outline-2 focus-visible:outline-offset-4">
                                            <FiGithub aria-hidden="true" />
                                            View on GitHub
                                        </a>
                                    )}
                                    {project.demo && (
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} live demo (opens in a new tab)`} className="inline-flex items-center gap-2 rounded-sm hover:underline focus-visible:outline-2 focus-visible:outline-offset-4">
                                            <FiArrowUpRight aria-hidden="true" />
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </article>
                        ))}

                    </div>
                </div>
                {/* List Blog */}
                <div className="py-10 sm:py-15 lg:pl-2">
                    <h2 className="md:text-[44px] dark:text-zinc-200 sm:text-[36px] text-[31px] font-semibold">
                        Writing
                    </h2>
                    <div className="ml-[3px] -mb-[25px] h-8 w-[3px] bg-zinc-950/10 dark:bg-white/10 rounded-t">
                    </div>
                    {
                        posts.slice(0, 11).map((post, index) => {
                            return (
                                <div key={post._id} className="flex items-start max-w-full">
                                    <div className="relative shrink-0 self-stretch">
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

                                    <Link href={`/blog/${post.slug.current}`} className="min-w-0 flex-1 break-words pl-3 group hover:bg-zinc-50  border-[1px] border-white dark:border-zinc-900 dark:hover:border-zinc-800 dark:hover:bg-zinc-800 inline hover:border-zinc-200 p-3 sm:p-5 ml-3 sm:ml-5 mb-5 rounded-2xl">
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

                    <div className="flex items-start max-w-full">
                        <div className="relative shrink-0 self-stretch">
                            <div className="w-[9px] h-[9px] mt-[26.5px] rounded-full bg-zinc-600 dark:bg-white/90 relative">

                            </div>
                            <div className="ml-[3px] w-[3px] bg-zinc-950/10 dark:bg-white/10 h-full">
                            </div>

                        </div>

                        <Link href={`/blog/dex-barber`} className="min-w-0 flex-1 break-words pl-3 group hover:bg-zinc-50  border-[1px] border-white dark:border-zinc-900 dark:hover:border-zinc-800 dark:hover:bg-zinc-800 inline hover:border-zinc-200 p-3 sm:p-5 ml-3 sm:ml-5 mb-5 rounded-2xl">
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
                    <ContactForm compact />
                </div>

            </div>
        </>
    )
}
