'use client';
import Link from "@/node_modules/next/link";
import Image from "next/image";
import { useDarkMode } from "../hook/isDark";
import photoRoihan from "../public/roihan.jpeg";
import { Icon } from './icon';

export default function Intro(): React.JSX.Element {

    const isDark = useDarkMode()

    return (
        <div className="my-[105px] relative z-10 gap-[5px] text-zinc-800">
            <Image
                src={'/roihan3.png'}
                alt="Ricardo portrait"
                width={192}
                height={192}
                quality={95}
                priority={true}
                className={`h-[95px] w-[95px] rounded-full object-cover border-[0.35rem] ${isDark ? 'bg-metallic' : ''}  shadow-xl`}
            />
            <div className="md:text-[60px] sm:text-[45px] text-[35px] md:max-w-[628px] sm:w-full ">
                <p className={`font-semibold ${isDark ? "text-gradient-soft" : "text-zinc-900"} font-sans md:leading-[70px] sm:leading-[50px] leading-11 mt-[15px]`}>
                    Software engineer<br></br>and tech enthusiast.
                </p>
            </div>
            <div className="text-[16px] lg:max-w-[600px] md:max-w-[550px] sm:max-w-[530px] max-w-[530px] mt-[10px]">
                <p className="font-sans text-left leading-[30px] ml-[5px] opacity-75 dark:text-zinc-300">
                    Hi, I'm Roihan 👋 I write practical tutorials (short & long) for developers who love building with Next.js, React, JavaScript, and Typescript.
                </p>
            </div>
            <div className="flex dark:text-zinc-400 text-zinc-500  flex-row mt-[20px] ml-[5px]  gap-[20px]">
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
        </div>
    );
}
