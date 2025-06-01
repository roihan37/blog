
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
import { sendEmail } from "../actions/sendEmail";
import toast from "react-hot-toast";
import Footer from "../components/footer";
// import { useSectionInView } from "../lib/hooks";

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
    // const { ref } = useSectionInView("Contact");
    return (
        <div className="bg-gray-100">
            <div className="px-[85px] py-[87px] border-l border-r ">
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

            <div className="px-[85px] py-[87px] border-l border-r ">
                <div className="max-w-[362px]">
                    <div className="font-bold text-[40px] leading-12 ">
                        <h1>Bringing Ideas to Life Through Code</h1>
                    </div>
                    <div className="mt-3 opacity-75 max-w-[456px]">
                    Here are some of the web and mobile applications I’ve built, each focused on solving problems and delivering value.
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

            <div className="px-[85px] py-[87px] border-l border-r ">
                <div className="font-bold text-[40px] leading-12 ">
                    <h1>Tech Stack & Capabilities</h1>
                </div>
                <div className="mt-3 opacity-75 max-w-[500px]">
                I specialize in full-stack JavaScript development using React, Next.js, Node.js, and MongoDB — with a strong focus on clean code, system design, and building features that solve real user problems.
                </div>
                <div>
                    <div className="grid grid-row-3 gap-3 text-lg text-gray-800 mt-10">
                        <h2 className="font-semibold ">Language</h2>
                        {/* Language */}
                        <div className="grid grid-cols-4 gap-2">
                            {skillsData.language.map((skill, index) => (
                                <motion.div
                                    className="bg-gray-200 borderBlack rounded-sm px-5 py-3 flex items-center gap-3 dark:text-white/80"
                                    key={index}
                                    variants={fadeInAnimationVariants}
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={{ once: true }}
                                    custom={index}
                                >
                                    <Image src={skill.logo} alt={skill.name} width={24} height={24} />
                                    <span>{skill.name}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Front End */}
                        <h2 className="font-semibold mt-5">Front End</h2>
                        <div className="grid grid-cols-4 gap-2">
                            {skillsData.frontend.map((skill, index) => (
                                <motion.div
                                    className="bg-gray-200 borderBlack rounded-sm px-5 py-3 flex items-center gap-3 dark:text-white/80"
                                    key={index}
                                    variants={fadeInAnimationVariants}
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={{ once: true }}
                                    custom={index}
                                >
                                    <Image src={skill.logo} alt={skill.name} width={24} height={24} loading="lazy" />
                                    <span>{skill.name}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Back End */}
                        <h2 className="font-semibold mt-5">Back End</h2>
                        <div className="grid grid-cols-4 gap-2">
                            {skillsData.backend.map((skill, index) => (
                                <motion.div
                                    className="bg-gray-200 borderBlack rounded-sm px-5 py-3 flex items-center gap-3 dark:text-white/80 "
                                    key={index}
                                    variants={fadeInAnimationVariants}
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={{ once: true }}
                                    custom={index}
                                >
                                    <Image src={skill.logo} alt={skill.name} width={24} height={24} loading="lazy" />
                                    <span>{skill.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-[85px] py-[87px] border-l border-r ">
                <div className="font-bold text-[40px] leading-12 ">
                    <h1>Hands-On Industry <br></br> Experience</h1>
                </div>
                <div className="mt-3 opacity-75 max-w-[493px]">
                Each role has strengthened not just my technical skills, but also my mindset — focusing on building value-driven software, collaborating effectively, and adapting in fast-paced environments.
                </div>
                <div className="py-15 pl-2">
                    <div className="ml-[3px] -mb-[25px] h-8 w-[3px] bg-slate-950/10 dark:bg-white/10 rounded-t">
                    </div>

                    <div className="flex items-top max-w-full">
                        <div className="relative">
                            <div className="w-[9px] h-[9px] mt-[26.5px] rounded-full bg-gray-600 dark:bg-white/90 relative">
                                <div className="bg-gray-500  dark:bg-white/90 animate-ping w-[9px] h-[9px] rounded-full absolute">
                                </div>

                            </div>
                            <div className="ml-[3px] w-[3px] bg-slate-950/10 dark:bg-white/10 h-full">
                            </div>

                        </div>

                        <div className="pl-3 group hover:bg-gray-50 dark:hover:bg-zinc-900 border-[1px] border-white dark:border-zinc-950 dark:hover:border-zinc-800 inline hover:border-gray-200 p-5 ml-5 mb-5 rounded-2xl">
                            <p className="text-sm mb-1 text-slate-950/70 group-hover:text-slate-950/90 dark:text-white/90 dark:group-hover:text-slate-300  font-semibold">November - March 2022</p>
                            <div className="cursor-pointer inline-block mb-2" >
                                <h3 className="text-slate-800 dark:text-slate-300 text-lg sm:text-xl cursor-pointer">
                                    <span className="relative z-20 hover:text-slate-800 dark:hover:text-slate-300 hover:underline tracking-tight font-semibold">Graduated bootcamp Full Stack JavaScript Immersive Program - Hacktiv8</span>
                                </h3>
                            </div>
                            <p className="text-sm text-slate-950/70 dark:text-slate-400">
                                Graduated from the Full Stack JavaScript Immersive Program at Hacktiv8 after 4 months of intensive training, where I gained hands-on experience in both frontend and backend development using modern technologies. Shortly after graduating, I secured a position as a Full Stack Developer and began applying the skills I learned in real-world projects.</p>
                        </div>

                    </div>


                    <div className="flex items-top max-w-full">
                        <div className="relative">
                            <div className="w-[9px] h-[9px] mt-[26.5px] rounded-full bg-gray-600 dark:bg-white/90 relative">
                                <div className="bg-gray-500  dark:bg-white/90 animate-ping w-[9px] h-[9px] rounded-full absolute">
                                </div>

                            </div>
                            <div className="ml-[3px] w-[3px] bg-slate-950/10 dark:bg-white/10 h-full">
                            </div>

                        </div>

                        <div className="pl-3 group hover:bg-gray-50 dark:hover:bg-zinc-900 border-[1px] border-white dark:border-zinc-950 dark:hover:border-zinc-800 inline hover:border-gray-200 p-5 ml-5 mb-5 rounded-2xl">
                            <p className="text-sm mb-1 text-slate-950/70 group-hover:text-slate-950/90 dark:text-white/90 dark:group-hover:text-slate-300  font-semibold">April - Agust 2023</p>
                            <div className="cursor-pointer inline-block mb-2" >
                                <h3 className="text-slate-800 dark:text-slate-300 text-lg sm:text-xl cursor-pointer">
                                    <span className="relative z-20 hover:text-slate-800 dark:hover:text-slate-300 hover:underline tracking-tight font-semibold">Remote Internship as Web Developer - CV Arta Grow Persada</span>
                                </h3>
                            </div>
                            <p className="text-sm text-slate-950/70 dark:text-slate-400">
                                Completed a remote internship as a Web Developer, developing UI with HTML, CSS, JavaScript, and React, implementing key website features (contact form, blog, product catalog), and creating a detailed SRS document for a new project.</p>
                        </div>





                    </div>

                    <div className="flex items-top max-w-full">
                        <div className="relative">
                            <div className="w-[9px] h-[9px] mt-[26.5px] rounded-full bg-gray-600 dark:bg-white/90 relative">
                                <div className="bg-gray-500  dark:bg-white/90 animate-ping w-[9px] h-[9px] rounded-full absolute">
                                </div>

                            </div>
                            <div className="ml-[3px] w-[3px] bg-slate-950/10 dark:bg-white/10 h-full">
                            </div>

                        </div>

                        <div className="pl-3 group hover:bg-gray-50 dark:hover:bg-zinc-900 border-[1px] border-white dark:border-zinc-950 dark:hover:border-zinc-800 inline hover:border-gray-200 p-5 ml-5 mb-5 rounded-2xl">
                            <p className="text-sm mb-1 text-slate-950/70 group-hover:text-slate-950/90 dark:text-white/90 dark:group-hover:text-slate-300  font-semibold">June - October 2023</p>
                            <div className="cursor-pointer inline-block mb-2" >
                                <h3 className="text-slate-800 dark:text-slate-300 text-lg sm:text-xl cursor-pointer">
                                    <span className="relative z-20 hover:text-slate-800 dark:hover:text-slate-300 hover:underline tracking-tight font-semibold">Remote Full Stack Developer - PT Okta Prima Mulya</span>
                                </h3>
                            </div>
                            <p className="text-sm text-slate-950/70 dark:text-slate-400">
                                Worked as a Full Stack Developer to build a web marketplace using Node.js, MongoDB, TypeScript, and React and Nextjs; developed core features like product management, payment integration (Stripe/PayPal), real-time chat with Socket.io, responsive UI with Tailwind/Material UI, and implemented JWT-based auth with unit testing.</p>
                        </div>





                    </div>


                </div>
            </div>

            <div className="px-[85px] py-[87px] border-l border-r ">
                <div className="font-bold text-[40px] leading-12 ">
                    <h1>Contact Me</h1>
                </div>
                <div className="mt-3 opacity-75 ">
                    Please contact me directly at{" "}
                    <a className="underline" href="mailto:example@gmail.com">
                        example@gmail.com
                    </a>{" "}
                    or through this form.
                </div>

                <motion.section
                    id="contact"
                    className=" w-[min(100%,38rem)] "
                    initial={{
                        opacity: 0,
                    }}
                    whileInView={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 1,
                    }}
                    viewport={{
                        once: true,
                    }}
                >
                    <form
                        className="mt-10 flex flex-col dark:text-black"
                        action={async (formData) => {
                            const { data, error } = await sendEmail(formData);

                            if (error) {
                                toast.error(error);
                                return;
                            }

                            toast.success("Email sent successfully!");
                        }}
                    >
                        <input
                            className="h-14 px-4 rounded-lg border-gray-400 border-1 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                            name="senderEmail"
                            type="email"
                            required
                            maxLength={500}
                            placeholder="Your email"
                        />
                        <textarea
                            className="h-52 my-3 rounded-lg border-gray-400 border-1 p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                            name="message"
                            placeholder="Your message"
                            required
                            maxLength={5000}
                        />
                        <div className="rounded-full max-w-[150px] text-gray-50 flex flex-row gap-2 p-3 justify-center bg-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                            </svg>

                            <p>Submit</p>
                        </div>
                    </form>
                </motion.section>
            </div>

            <div className="px-[85px] border-l border-r ">
                        <Footer />
            </div>
        </div>
    );
}