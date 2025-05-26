'use client';
import React from "react";
import photoRoihan from "../public/roihan.jpeg"
import { Icon } from './icon';


export default function Footer(): React.JSX.Element {
    return (
        <div className="flex dark:text-zinc-200 sm:flex-row md:flex-col lg:flex-col xl:flex-row flex-col justify-between py-25 md:text-3xl sm:text-[15px] md:items-center sm:items-center gap-3 md:gap-5 text-gray-600 ">
            <div className="flex flex-row md:gap-3 sm:gap-2 gap-3">
                <h1 className="text-gray-400">Say hi</h1>
                <h1>pro.roihan@gmail.com</h1>
            </div>
            <div className="flex flex-row md:gap-5 sm:gap-3 gap-3">
                <Icon name="github" width={30} height={30} color="--c-crimson-blue-500" className="w-5 h-5 sm:w-4 sm:h-4 md:w-7 md:h-7 lg:w-10 lg:h-10"/>
                <Icon name="linkedin" width={30} height={30}  color="--c-crimson-blue-500" className="w-5 h-5 sm:w-4 sm:h-4 md:w-7 md:h-7 lg:w-10 lg:h-10"/>
                <Icon name="instagram" width={30} height={30}  color="--c-crimson-blue-500" className="w-5 h-5 sm:w-4 sm:h-4 md:w-7 md:h-7 lg:w-10 lg:h-10"/>
                <Icon name="mail" width={30} height={30}  color="--c-crimson-blue-500" className="w-5 h-5 sm:w-4 sm:h-4 md:w-7 md:h-7 lg:w-10 lg:h-10"/>
            </div>
        </div>
    )

}