'use client';
import Link from "next/link";
import React from "react";
import { Icon } from '../../components/icon';


export default function Footer(): React.JSX.Element {

    return (
        <div className="flex flex-col lg:items-center xl:flex-row dark:text-zinc-200 justify-between pt-16 sm:pt-24 lg:pt-35 pb-10 sm:pb-15 gap-8 lg:gap-5 text-gray-600 ">
            <div className="min-w-0 flex flex-col lg:items-center xl:items-start" >
                <div className="mb-4 lg:mb-5 text-base sm:text-xl break-words">
                    {/* <h1 className="text-gray-400">Say hi</h1> */}
                    <p><span className="text-gray-400 mr-2">Say hi  </span><a href="mailto:pro.roihan@gmail.com" className="inline-block py-2 lg:py-0">pro.roihan@gmail.com</a></p>
                </div>
                <div>
                    <p className="opacity-75 text-sm">Built with Next.js, Tailwind and Vercel</p>
                </div>
            </div>
            <div className="shrink-0">
                <div className="social-links flex flex-wrap dark:text-zinc-400 text-zinc-500 gap-3 lg:gap-5 mb-4 lg:mb-5">
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
                <div>
                    <p className="opacity-75 text-[15px]">©2025 All rights reserved.</p>
                </div>
            </div>
        </div>


    )

}