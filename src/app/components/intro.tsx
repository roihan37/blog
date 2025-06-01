'use client';
import Image from "next/image";
import { useDarkMode } from "../hook/isDark";
import photoRoihan from "../public/roihan.jpeg";
import { Icon } from './icon';

export default function Intro(): React.JSX.Element {
    
    const isDark = useDarkMode()
    
    return (
        <div className="my-[105px] relative z-10 gap-[5px] text-gray-800">
            <Image
                src={photoRoihan}
                alt="Ricardo portrait"
                width={192}
                height={192}
                quality={95}
                priority={true}
                className="h-[95px] w-[95px] rounded-full object-cover border-[0.35rem] bg-metallic shadow-xl"
            />
            <div className="md:text-[64px] sm:text-[40px] text-[40px] md:max-w-[628px] sm:w-full max-w-[400px]">
                <p className={`font-semibold ${isDark ? "text-gradient-soft" : "text-gray-900"} font-sans md:leading-[70px] sm:leading-[50px] leading-11 mt-[15px]`}>
                    Software engineer and tech enthusiast.
                </p>
            </div>
            <div className="text-[16px] lg:max-w-[600px] md:max-w-[600px] sm:max-w-[380px] max-w-[380px] mt-[10px]">
                <p className="font-sans text-left leading-[30px] ml-[5px] opacity-75 dark:text-zinc-300">
                    Hi, I'm Roihan 👋 I write practical tutorials (short & long) for developers who love building with Next.js, React, JavaScript, and Go.
                </p>
            </div>
            <div className="flex dark:text-zinc-100 flex-row mt-[20px] ml-[5px] opacity-65 gap-[20px]">
                
                <Icon name="github" width={24} height={24} color="--c-crimson-blue-500" />
                <Icon name="linkedin" width={24} height={24} color="--c-crimson-blue-500" />
                <Icon name="instagram" width={24} height={24} color="--c-crimson-blue-500" />
                <Icon name="mail" width={24} height={24} color="--c-crimson-blue-500" className="hover:animate-spin" />
            </div>
           
            
        </div>
    );
}
