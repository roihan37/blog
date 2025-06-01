'use client';
import React from "react";
import { motion } from "framer-motion"
import { usePathname } from "@/node_modules/next/navigation";
import Link from "@/node_modules/next/link";


export default function Header(): React.JSX.Element {
    const pathname = usePathname();
    const isDexBarberRoute = pathname.startsWith("/blog/dex-barber");
    const isBlogRoute = pathname.startsWith("/blog") && !isDexBarberRoute;
    const justBlogRoute = pathname.startsWith("/blog") 
    return (
        <header>
            <motion.div className=" text-gray-800  relative z-10 text-[13px] pt-[25px] flex justify-between"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >
                <Link href={'/'} className={`flex flex-col justify-start ${isDexBarberRoute ? `text-zinc-300` : ``}`}>
                    <h1 className="font-semibold text-[20px] dark:text-zinc-300">Let's learn</h1>
                    <p className=" font-light dark:text-zinc-400">with Roihan Salsabila</p>
                    <p className=" font-light dark:text-zinc-400">{justBlogRoute?'← Back to Home' : ""}</p>
                </Link>
                <div className="flex justify-end gap-[25px] items-center">
                    {
                        isBlogRoute || isDexBarberRoute ? <>
                            <Link href={'/blog'}>
                                <p className={`text-[15px] ${isDexBarberRoute ? `text-zinc-300` : ``} hover:underline`}>Blog</p>
                            </Link>
                        </>
                            : ''
                    }

                    <Link href={'/portfolio'} className={`bg-metallic  rounded-full  px-[15px] py-[7px] flex gap-[10px] justify-center items-center`}>
                        {
                            isBlogRoute
                                ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                                </svg>
                                : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                        }


                        <p className="text-5">{isBlogRoute ? "Subscribe" : "Show Portofolio"}</p>
                    </Link>


                </div>
            </motion.div>
        </header>
    )

}