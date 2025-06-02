'use client';
import Link from "next/link";
import React from "react";
import { Icon } from '../../components/icon';


export default function Footer(): React.JSX.Element {

    return (
        <div className="flex dark:text-zinc-200 sm:flex-row md:flex-col  lg:flex-col xl:flex-row flex-col justify-between pt-35 pb-15 md:items-center sm:items-center gap-5 md:gap-5 text-gray-600 ">
            <div className="flex  xl:items-start flex-col lg:items-center" >
                <div className="flex  flex-row md:gap-3 sm:gap-2 gap-3 mb-5 md:text-3xl sm:text-[15px]">
                    {/* <h1 className="text-gray-400">Say hi</h1> */}
                    <h1><span className="text-gray-400 mr-2">Say hi  </span>pro.roihan@gmail.com</h1>
                </div>
                <div>
                    <p className="opacity-75 md:text-center text-[15px]">Built with Next.js, Tailwind and Vercel</p>
                </div>
            </div>
            <div>
                <div className="flex  dark:text-zinc-400 text-zinc-500 flex-row md:gap-5 sm:gap-3 gap-3 md:text-3xl sm:text-[15px] mb-5">
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