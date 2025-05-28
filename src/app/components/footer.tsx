'use client';
import React from "react";
import photoRoihan from "../public/roihan.jpeg"
import { Icon } from './icon';


export default function Footer(): React.JSX.Element {
    return (
        <div className="flex dark:text-zinc-200 sm:flex-row md:flex-col lg:flex-col xl:flex-row flex-col justify-between py-25 md:items-center sm:items-center gap-3 md:gap-5 text-gray-600 ">
            <div className="flex  xl:items-start flex-col lg:items-center" >
                <div className="flex flex-row md:gap-3 sm:gap-2 gap-3 mb-5 md:text-3xl sm:text-[15px]">
                    <h1 className="text-gray-400">Say hi</h1>
                    <h1>pro.roihan@gmail.com</h1>
                </div>
                <div>
                    <p className="opacity-75 text-[15px]">Built with Next.js, Tailwind and Vercel</p>
                </div>
            </div>
            <div>
                <div className="flex flex-row md:gap-5 sm:gap-3 gap-3 md:text-3xl sm:text-[15px] mb-5">
                    <Icon name="github" width={30} height={30} color="--c-crimson-blue-500"  />
                    <Icon name="linkedin" width={30} height={30}  color="--c-crimson-blue-500"  />
                    <Icon name="instagram" width={30} height={30}  color="--c-crimson-blue-500"  />
                    <Icon name="mail" width={30} height={30}  color="--c-crimson-blue-500"  />
                </div>
                <div>
                    <p className="opacity-75 text-[15px]">©2025 All rights reserved.</p>
                </div>
            </div>
        </div>
    )

}