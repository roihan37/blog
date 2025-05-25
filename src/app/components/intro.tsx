'use client';
import React from "react";
import { motion } from "framer-motion"
import Image from "next/image";
import photoRoihan from "../public/roihan.jpeg"
import { Icon } from './icon';


export default function Intro(): React.JSX.Element {
    return (
        <div className=" my-[105px] relative z-10 gap-[5px] text-[#041148] ">
       
            <Image
                src={photoRoihan}
                alt="Ricardo portrait"
                width="192"
                height="192"
                quality="95"
                priority={true}
                className="h-[95px] w-[95px] rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
            <div className="text-[64px] w-[628px]">
                <p className="font-semibold font-sans leading-[70px]">Software engineer and tech enthusiast.</p>
            </div>
            <div className="text-[16px] w-[600px] mt-[10px]">
                <p className=" font-sans text-left leading-[30px] ml-[5px]">Hi, I'm Roihan 👋 I write practical tutorials (short & long) for developers who love building with Next.js, React, Laravel, JavaScript, Rust, and Go.</p>
            </div>
            <div className="flex flex-row mt-[20px] ml-[5px] gap-[20px]">
                <Icon name="github" width={24} height={24} color="--c-crimson-blue-500" />
                <Icon name="linkedin" width={24} height={24} color="--c-crimson-blue-500" />
                <Icon name="instagram" width={24} height={24} color="--c-crimson-blue-500" />
                <Icon name="mail" width={24} height={24} color="--c-crimson-blue-500" />
            </div>
        </div>
    )

}