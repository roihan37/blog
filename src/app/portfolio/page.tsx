
"use client";
import magurameweb from "../public/magurameWeb.png";
import dexbarber from "../public/dexbarber.png";
import Image from "@/node_modules/next/image";
import magurame from "../public/magurame.png";
import theflix from "../public/theflix.png";
import Link from "@/node_modules/next/link";
import { Icon } from "../components/icon";
import { motion } from "framer-motion";
import { skillsData } from "../lib/data";
import React from "react";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};


export default function IndexPage() {
    return (
        <div className="bg-gray-100">
            <div className="px-[85px] py-[87px] border-1 ">
                <div className="flex flex-row gap-[49px]">
                    <div>
                        <div className="font-bold text-[40px] leading-12">
                            <h1>I’m Roihan Salsabila, a problem-solver based in  Indonesia</h1>
                        </div>
                        <div className="mt-8 opacity-75">
                            Software Engineer from Indonesia specializing in full-stack JavaScript development using <span className="font-bold">React, Next.js, Node.js, and TypeScript</span>. I started learning JavaScript on my own and enhanced my skills through an intensive Hacktiv8 bootcamp.
                            <br></br> <br></br>I enjoy building scalable web applications with clean, maintainable code and have experience working with <span className="font-bold">REST APIs, GraphQL</span>, and databases like <span className="font-bold">PostgreSQL and MongoDB</span>. I’m eager to grow as a developer and contribute to impactful projects.
                        </div>
                        <div className="mt-8 flex flex-row bg-black text-white p-3 gap-3 rounded-full w-45">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <p>
                                Download CV
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="w-[400px] h-[400px] bg-gray-200"></div>
                        <div className="flex flex-col gap-3 mt-5">
                            <div className="flex flex-row gap-3 items-center">
                                <Icon name="github" width={24} height={24} color="--c-crimson-blue-500" />
                                <p>Follow in GitHub</p>
                            </div>
                            <div className="flex flex-row gap-3 items-center">
                                <Icon name="linkedin" width={24} height={24} color="--c-crimson-blue-500" />
                                <p>Follow in Linkedin</p>
                            </div>
                            <div className="flex flex-row gap-3 items-center">
                                <Icon name="mail" width={24} height={24} color="--c-crimson-blue-500" />
                                <p>pro.roihan@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-[85px] py-[87px] border-l border-r border-b">
                <div className="max-w-[455px]">
                    <div className="font-bold text-[40px] leading-12 ">
                        <h1>Work I’ve done to make a meaningful impact.</h1>
                    </div>
                    <div className="mt-3 opacity-75 max-w-[350px]">
                        I’ve worked on a range of projects, primarily for companies and local business. These are the ones I’m proudest to have developed.
                    </div>
                </div>
                <div className="grid lg:grid-cols-2 grid-cols-1 dark:text-zinc-200 gap-[25px] mt-13">
                    {/* Cards */}
                    <div className="text-black text-[15px] flex flex-col max-w-[455px]  bg-gray-200 p-5 gap-[10px]">
                        <Image
                            src={dexbarber}
                            alt="Ricardo portrait"
                            width={150}
                            height={150}
                            quality={95}
                            priority={true}
                            className="h-[45px] w-[45px] rounded-full object-cover border-[0.40rem] shadow-md"
                        />
                        <h1 className="font-semibold">Barber Dex</h1>
                        <p className="font-light">An on-demand mobile app for home haircut services</p>
                        <p className="font-light text-[12px] opacity-75">Tech Stack; React Native, React, Redux, Native Paper, Express.js, PostgreSQL, Sequelize, MongoDB, Firestore, Cloudinary, Geomap API, 3rd Party API, Stream.io</p>
                        <div className="flex flex-row gap-5 mt-2">
                            <Link href={`https://github.com/BarberDelivery`} className="cursor-pointer hover:underline flex gap-2 flex-row items-center rounded-full opacity-55 text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                                </svg>
                                <p>View on GitHub</p>
                            </Link>
                            <Link href={'/blog/dex-barber'} className="cursor-pointer hover:underline flex gap-2 mt-1 flex-row items-center rounded-full opacity-55 text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                                </svg>

                                <p>Read the Story</p>
                            </Link>
                        </div>
                    </div>

                    <div className="text-black text-[15px] flex flex-col max-w-[455px]  bg-gray-200 p-5 gap-[10px]">
                        <Image
                            src={magurame}
                            alt="Ricardo portrait"
                            width={150}
                            height={150}
                            quality={95}
                            priority={true}
                            className="h-[45px] w-[45px] rounded-full object-cover border-[0.40rem] shadow-md"
                        />
                        <h1 className="font-semibold">Magurameudon App Mobile Clone</h1>
                        <p className="font-light">A mobile application to display Restaurant Magurameudon</p>
                        <p className="font-light text-[12px] opacity-75">Tech Stack; Express JS, PostgreSQL, React Native, Redux, React JS, Apollo Server, AWS, Apollo Server, Mongo DB, NativeWind, Expo, Supabase.</p>
                        <div className="mt-2">
                            <Link href={`https://github.com/roihan37/Magurameudon-Mobile-App-Clone`} className="cursor-pointer hover:underline flex gap-2 flex-row items-center rounded-full opacity-55 text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                                </svg>
                                <p>View on GitHub</p>
                            </Link>

                        </div>
                    </div>

                    <div className="text-black text-[15px] flex flex-col max-w-[455px]  bg-gray-200 p-5 gap-[10px]">
                        <Image
                            src={magurameweb}
                            alt="Ricardo portrait"
                            width={150}
                            height={150}
                            quality={95}
                            priority={true}
                            className="h-[45px] w-[45px] rounded-full object-cover border-[0.40rem] shadow-md"
                        />
                        <h1 className="font-semibold">Magurameudon Clone Website and Admin Side</h1>
                        <p className="font-light">A Web clone Restaurant Magurameudon and admin side.</p>
                        <p className="font-light text-[12px] opacity-75">Tech stack: Express JS, PostgreSQL, React, Redux, AWS, Tailwind Css, Supabase, Firebase, AWS.</p>
                        <div className="mt-2">
                            <Link href={`https://github.com/roihan37/Magurameudon-Web-Clone`} className="cursor-pointer hover:underline flex gap-2 flex-row items-center rounded-full opacity-55 text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                                </svg>
                                <p>View on GitHub</p>
                            </Link>

                        </div>

                    </div>

                    <div className="text-black text-[15px] flex flex-col max-w-[455px]  bg-gray-200 p-5 gap-[10px]">
                        <Image
                            src={theflix}
                            alt="Ricardo portrait"
                            width={150}
                            height={150}
                            quality={95}
                            priority={true}
                            className="h-[45px] w-[45px] rounded-full object-cover border-[0.40rem] shadow-md"
                        />
                        <h1 className="font-semibold">The Flix</h1>
                        <p className="font-light">A web movies list and IMDB.</p>
                        <p className="font-light text-[12px] opacity-75">Tech stack: Express JS, PostgreSQL, Vue Js, Pinia, 3rd party API for server-side, Boostrap,Supabase, Firebase, Railway.</p>
                        <div className="mt-2">
                            <Link href={`https://github.com/roihan37/p2-iproject-client`} className="cursor-pointer hover:underline flex gap-2 flex-row items-center rounded-full opacity-55 text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                                </svg>
                                <p>View on GitHub</p>
                            </Link>

                        </div>

                    </div>
                </div>




            </div>

            <div className="px-[85px] py-[87px] border-l border-r border-b">
                <div className="font-bold text-[40px] leading-12 ">
                    <h1>Skills</h1>
                </div>
                <div className="mt-3 opacity-75 max-w-[350px]">
                        I’ve worked on a range of projects, primarily for companies and local business. These are the ones I’m proudest to have developed.
                    </div>
                <div>
                    <div className="grid grid-cols-3 gap-3 text-lg text-gray-800 mt-10">
                        <div>
                            <h2 className="font-bold mb-3">Language</h2>
                         {skillsData.language.map((skill, index) => (
                            <motion.div
                                className="bg-gray-200 borderBlack rounded-sm px-5 py-3 dark:text-white/80 mt-2"
                                key={index}
                                variants={fadeInAnimationVariants}
                                initial="initial"
                                whileInView="animate"
                                viewport={{
                                    once: true,
                                }}
                                custom={index}
                            >
                               
                                {skill}
                            </motion.div>
                        ))} 
                        </div>

                        <div>
                            <h2 className="font-bold mb-3">Front End</h2>
                         {skillsData.frontend.map((skill, index) => (
                            <motion.div
                                className="bg-gray-200 borderBlack rounded-sm px-5 py-3 dark:text-white/80 mt-2"
                                key={index}
                                variants={fadeInAnimationVariants}
                                initial="initial"
                                whileInView="animate"
                                viewport={{
                                    once: true,
                                }}
                                custom={index}
                            >
                                {skill}
                            </motion.div>
                        ))} 
                        </div>

                        <div>
                            <h2 className="font-bold mb-3">Back End</h2>
                         {skillsData.backend.map((skill, index) => (
                            <motion.div
                                className="bg-gray-200 borderBlack rounded-sm px-5 py-3 dark:text-white/80 mt-2"
                                key={index}
                                variants={fadeInAnimationVariants}
                                initial="initial"
                                whileInView="animate"
                                viewport={{
                                    once: true,
                                }}
                                custom={index}
                            >
                                {skill}
                            </motion.div>
                        ))} 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}