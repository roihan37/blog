'use client';
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useDarkMode } from "../hook/isDark";


export default function Header(): React.JSX.Element {
    const pathname = usePathname();
    const isDexBarberRoute = pathname.startsWith("/blog/dex-barber");
    const isBlogRoute = pathname.startsWith("/blog") && !isDexBarberRoute;
    // const justBlogRoute = pathname.startsWith("/blog") 
    const isDark = useDarkMode()
    return (
        <header>
            <div className=" text-gray-800  relative z-10 text-[13px] pt-[25px] flex justify-between"
                
            >
                <Link href={'/'} className={`flex flex-col justify-start ${isDexBarberRoute ? `text-zinc-300` : ``}`}>
                    <h1 className="font-semibold text-[20px] dark:text-zinc-300">Let&apos;s learn</h1>
                    <p className=" font-light dark:text-zinc-400">with Roihan Salsabila</p>
                </Link>
                <div className="flex justify-end gap-5 sm:gap-[25px]  items-center">
                    {
                        isBlogRoute || isDexBarberRoute ? <>
                            <Link href={'/blog'}>
                                <p className={`text-[15px] dark:text-zinc-300 ${isDexBarberRoute ? `text-zinc-300 ` : ``} hover:underline`}>Blog</p>
                            </Link>
                        </>
                            : ''
                    }

                    <Link href={'/portfolio'} className={`group ${isDark ? 'bg-metallic' : 'bg-zinc-900 text-zinc-100'}   rounded-full px-[10px] py-[7px]  sm:px-[15px] sm:py-[7px] flex gap-[10px] justify-center items-center`}>
                        {
                            isBlogRoute || isDexBarberRoute
                                ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 ">
                                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                                </svg>
                                : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" size-6 group-hover:animate-spin">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                        }


                        <p className="text-5">{isBlogRoute || isDexBarberRoute ? "Subscribe" : "Show Portofolio"}</p>
                    </Link>


                </div>
            </div>
        </header>
    )

}