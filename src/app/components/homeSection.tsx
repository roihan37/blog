// components/home.tsx
'use client';
import React, { useState } from "react";

export default function HomeSection(): React.JSX.Element {
    const [select, setSelect] = useState("Home")

    

    return (
        <>
            <div className="text-[16px]  text-gray-800">
               

                {/* List Project */}
                <div className="my-[35px] flex flex-col gap-[20px] ">
                    
                        <h1 className="md:text-[48px] dark:text-zinc-200 sm:text-[36px] text-[36px] font-semibold">
                            Project
                        </h1>
                    
                    <div className="max-w-[410px] xl:max-w-full">
                        <p className="opacity-75 dark:text-zinc-200 ">I build some projects to help me learn new things and also to help other. Follow my journey build in public here.
                        </p>
                    </div>
                    <div className="grid xl:grid-cols-2 grid-cols-1 dark:text-zinc-200 gap-[25px]">
                        {/* Cards */}
                        <div className=" flex flex-col gap-[10px]">
                            <div className=" max-w-[400px] h-[200px] rounded-[10px] bg-gray-400">

                            </div>
                            <div>
                                <p className="text-[20px] underline">pdfPintar</p>
                            </div>
                            <div className="opacity-75">
                                <p>A simple web app to chat with your PDF document.</p>
                            </div>
                        </div>
                        <div className=" flex flex-col gap-[10px]">
                            <div className=" max-w-[400px] h-[200px] rounded-[10px] bg-gray-400">

                            </div>
                            <div>
                                <p className="text-[20px] underline">pdfPintar</p>
                            </div>
                            <div>
                                <p className="opacity-75">A simple web app to chat with your PDF document.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* List Blog */}
                <div className="py-15 pl-2">
                <h1 className="md:text-[48px] dark:text-zinc-200 sm:text-[36px] text-[36px] font-semibold">
                            Writing
                        </h1>
                    <div className="ml-[3px] -mb-[25px] h-8 w-[3px] bg-slate-950/10 dark:bg-white/10 rounded-t">
                    </div>
                    <div className="flex items-top">
                        <div className="relative">
                            <div className="w-[9px] h-[9px] mt-[26.5px] rounded-full bg-gray-600 dark:bg-white/90 relative">
                                <div className="bg-gray-500  dark:bg-white/90 animate-ping w-[9px] h-[9px] rounded-full absolute">
                                </div>

                            </div>
                            <div className="ml-[3px] w-[3px] bg-slate-950/10 dark:bg-white/10 h-full">
                            </div>

                        </div>
                        <div className="pl-3 group hover:bg-gray-50 dark:hover:bg-zinc-900 border-[1px] border-white dark:border-zinc-950 dark:hover:border-zinc-800 inline hover:border-gray-200 p-5 ml-5 mb-5 rounded-2xl">
                            <p className="text-sm mb-1 text-slate-950/70 group-hover:text-slate-950/90 dark:text-white/90 dark:group-hover:text-slate-300  font-semibold">December 5, 2024</p>
                            <a className="cursor-pointer inline-block mb-2" href="/blog/setting-up-vince-analytics">
                                <h3 className="text-slate-800 dark:text-slate-300 text-lg sm:text-xl cursor-pointer">
                                    <span className="relative z-20 hover:text-slate-800 dark:hover:text-slate-300 hover:underline tracking-tight font-semibold">Setting Up Vince Analytics: A Self-Hosted Alternative to Google Analytics</span>
                                </h3>
                            </a>
                            <p className="text-sm text-slate-950/70 dark:text-slate-400">
                                Setting up Plausible Analytics feels like preparing for a wedding - you need multiple components (PostgreSQL, ClickHous...</p>
                        </div>

                    </div>
                    <div className="flex items-top">
                        <div className="relative">
                            <div className="w-[9px] h-[9px] mt-[26.5px] rounded-full bg-slate-600 dark:bg-white/90 relative">
                                <div className="bg-slate-900 dark:bg-white/90  w-[9px] h-[9px] rounded-full absolute">
                                </div>

                            </div>
                            <div className="ml-[3px] w-[3px] bg-slate-950/10 dark:bg-white/10 h-full">
                            </div>

                        </div>
                         <div className="pl-3 group hover:bg-gray-50 dark:hover:bg-zinc-900 border-[1px] border-white dark:border-zinc-950 dark:hover:border-zinc-800 inline hover:border-gray-200 p-5 ml-5 mb-5 rounded-2xl">
                            <p className="text-sm mb-1 text-slate-950/70 group-hover:text-slate-950/90 dark:text-white/90 dark:group-hover:text-slate-300  font-semibold">December 5, 2024</p>
                            <a className="cursor-pointer inline-block mb-2" href="/blog/setting-up-vince-analytics">
                                <h3 className="text-slate-800 dark:text-slate-300 text-lg sm:text-xl cursor-pointer">
                                    <span className="relative z-20 hover:text-slate-800 dark:hover:text-slate-300 hover:underline tracking-tight font-semibold">Setting Up Vince Analytics: A Self-Hosted Alternative to Google Analytics</span>
                                </h3>
                            </a>
                            <p className="text-sm text-slate-950/70 dark:text-slate-400">
                                Setting up Plausible Analytics feels like preparing for a wedding - you need multiple components (PostgreSQL, ClickHous...</p>
                        </div>

                    </div>
                    <div className="flex items-top">
                        <div className="relative">
                            <div className="w-[9px] h-[9px] mt-[26.5px] rounded-full bg-slate-600 dark:bg-white/90 relative">
                                <div className="bg-slate-900 dark:bg-white/90  w-[9px] h-[9px] rounded-full absolute">
                                </div>

                            </div>
                            <div className="ml-[3px] w-[3px] bg-slate-950/10 dark:bg-white/10 h-full">
                            </div>

                        </div>
                         <div className="pl-3 group hover:bg-gray-50 dark:hover:bg-zinc-900 border-[1px] border-white dark:border-zinc-950 dark:hover:border-zinc-800 inline hover:border-gray-200 p-5 ml-5 mb-5 rounded-2xl">
                            <p className="text-sm mb-1 text-slate-950/70 group-hover:text-slate-950/90 dark:text-white/90 dark:group-hover:text-slate-300  font-semibold">December 5, 2024</p>
                            <a className="cursor-pointer inline-block mb-2" href="/blog/setting-up-vince-analytics">
                                <h3 className="text-slate-800 dark:text-slate-300 text-lg sm:text-xl cursor-pointer">
                                    <span className="relative z-20 hover:text-slate-800 dark:hover:text-slate-300 hover:underline tracking-tight font-semibold">Setting Up Vince Analytics: A Self-Hosted Alternative to Google Analytics</span>
                                </h3>
                            </a>
                            <p className="text-sm text-slate-950/70 dark:text-slate-400">
                                Setting up Plausible Analytics feels like preparing for a wedding - you need multiple components (PostgreSQL, ClickHous...</p>
                        </div>

                    </div>
                    <div className="flex items-top">
                        <div className="relative">
                            <div className="w-[9px] h-[9px] mt-[26.5px] rounded-full bg-slate-600 dark:bg-white/90 relative">
                                <div className="bg-slate-900 dark:bg-white/90  w-[9px] h-[9px] rounded-full absolute">
                                </div>

                            </div>
                            <div className="ml-[3px] w-[3px] bg-slate-950/10 dark:bg-white/10 h-full">
                            </div>

                        </div>
                         <div className="pl-3 group hover:bg-gray-50 dark:hover:bg-zinc-900 border-[1px] border-white dark:border-zinc-950 dark:hover:border-zinc-800 inline hover:border-gray-200 p-5 ml-5 mb-5 rounded-2xl">
                            <p className="text-sm mb-1 text-slate-950/70 group-hover:text-slate-950/90 dark:text-white/90 dark:group-hover:text-slate-300  font-semibold">December 5, 2024</p>
                            <a className="cursor-pointer inline-block mb-2" href="/blog/setting-up-vince-analytics">
                                <h3 className="text-slate-800 dark:text-slate-300 text-lg sm:text-xl cursor-pointer">
                                    <span className="relative z-20 hover:text-slate-800 dark:hover:text-slate-300 hover:underline tracking-tight font-semibold">Setting Up Vince Analytics: A Self-Hosted Alternative to Google Analytics</span>
                                </h3>
                            </a>
                            <p className="text-sm text-slate-950/70 dark:text-slate-400">
                                Setting up Plausible Analytics feels like preparing for a wedding - you need multiple components (PostgreSQL, ClickHous...</p>
                        </div>

                    </div>
                    <div className="flex items-top">
                        <div className="relative">
                            <div className="w-[9px] h-[9px] mt-[26.5px] rounded-full bg-slate-600 dark:bg-white/90 relative">
                            </div>
                            <div className="ml-[3px] w-[3px] bg-slate-950/10 dark:bg-white/10 h-full">
                            </div>

                        </div>
                        <div className="pl-3 group hover:bg-gray-50 dark:hover:bg-zinc-900 border-[1px] border-white dark:border-zinc-950 dark:hover:border-zinc-800 inline hover:border-gray-200 p-5 ml-5 mb-5 rounded-2xl">
                            <p className="text-sm mb-1 text-slate-950/70 group-hover:text-slate-950/90 dark:text-white/90 dark:group-hover:text-slate-300 font-semibold">November 18, 2024</p>
                            <a className="cursor-pointer inline-block mb-2" href="/blog/how-to-use-laravel-pint-in-vscode">
                                <h3 className="text-slate-800 dark:text-slate-300 text-lg sm:text-xl cursor-pointer">
                                    <span className="relative z-20 hover:text-slate-800 dark:hover:text-slate-300 hover:underline tracking-tight font-semibold">How to use Laravel Pint in VSCode?</span>
                                </h3>
                            </a>
                            <p className="text-sm  text-slate-950/70 dark:text-slate-400">
                                Laravel Pint is an opinionated PHP code style fixer based on PHP-CS-Fixer. It helps maintain consistent code style acro...</p>
                        </div>

                    </div>
                    <div className="flex items-top">
                        <div className="relative">
                            <div className="w-[9px] h-[9px] mt-[26.5px] rounded-full bg-slate-600 dark:bg-white/90 relative">
                            </div>
                            <div className="ml-[3px] w-[3px] bg-slate-950/10 dark:bg-white/10 h-full">
                            </div>

                        </div>
                         <div className="pl-3 group hover:bg-gray-50 dark:hover:bg-zinc-900 border-[1px] border-white dark:border-zinc-950 dark:hover:border-zinc-800 inline hover:border-gray-200 p-5 ml-5 mb-5 rounded-2xl">
                            <p className="text-sm mb-1 text-slate-950/70 group-hover:text-slate-950/90 dark:text-white/90 dark:group-hover:text-slate-300 font-semibold">November 8, 2024</p>
                            <a className="cursor-pointer inline-block mb-2" href="/blog/how-to-hide-scrollbar-in-tailwindcss">
                                <h3 className="text-slate-800 dark:text-slate-300 text-lg sm:text-xl cursor-pointer">
                                    <span className="relative z-20 hover:text-slate-800 dark:hover:text-slate-300 hover:underline tracking-tight font-semibold">How to hide scrollbar in tailwindcss?</span>
                                </h3>
                            </a>
                            <p className="text-sm  text-slate-950/70 dark:text-slate-400">
                                There are multiple ways to customize scrollbars in Tailwindcss, we'll explore three approaches to handle scrollbars, ea...</p>
                        </div>

                    </div>

                    <div className="pt-6 mt-6">
                        <a className="underline cursor-pointer inline-block dark:text-slate-300 text-base" href="/blog">See all posts</a>
                    </div>

                </div>
                {/* SEND EMAIL */}
                <div className="border-[1px] border-gray-300 dark:border-zinc-300 dark:text-zinc-200 rounded-2xl p-5 my-10">
                    <div className="flex flex-row gap-2 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                        </svg>
                        <p>Send message</p>
                    </div>
                    <div className=" opacity-60 mb-5">
                        <p>Send me a message, whether for collaboration, inquiries, or just a chat!</p>
                    </div>
                    <div className="flex flex-row items-center gap-5">
                        <textarea className="border-gray-300 h-[50px] w-full rounded-md  border-[1px]"></textarea>
                        <button className="px-[15px] rounded-md py-[10px] bg-gray-950 dark:bg-zinc-200 dark:text-zinc-950 text-white">Send</button>
                    </div>
                </div>

            </div>
        </>
    )
}
