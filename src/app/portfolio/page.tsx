
"use client";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "../../components/icon";
import { motion } from "framer-motion";
import { skillsData } from "../lib/data";
import { portfolioProjects } from "../lib/projects";
import { FiArrowUpRight, FiAward } from "react-icons/fi";
import { certifications } from "../lib/certifications";
import React from "react";
import Footer from "../components/footer";
import ContactForm from "../components/ContactForm";

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
        <>
            <div className="bg-white shadow-md dark:bg-zinc-900 dark:border-1 border-zinc-800 ">
                <div className="page-content portfolio-content flex justify-end pt-5 ">
                    <Link href={'/'} aria-label="Back to home" className="min-h-11 items-center flex flex-row bg-black dark:text-black dark:bg-zinc-200 dark:hover:bg-zinc-700 text-white py-2 px-4 gap-3 rounded-full ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>


                    </Link>
                </div>
                <div className="page-content portfolio-content  py-12 sm:py-16 lg:py-[87px]   ">
                    <div className="grid lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-10 lg:gap-5 xl:gap-[129px] items-start">
                        <div>
                            <div className="font-bold text-[35px] sm:text-[40px] leading-10 sm:leading-12 dark:text-zinc-100">
                                <h1>I&apos;m Roihan Salsabila, a problem-solver based in Indonesia</h1>
                            </div>
                            <div className="mt-8 opacity-75 dark:text-zinc-100">
                                Software Engineer from Indonesia specializing in full-stack JavaScript development using <span className="font-bold">React, Next.js, Node.js, and TypeScript</span>. I started learning JavaScript on my own and enhanced my skills through an intensive Hacktiv8 bootcamp.
                                <br></br> <br></br>I enjoy building scalable web applications with clean, maintainable code and have experience working with <span className="font-bold">REST APIs, GraphQL</span>, and databases like <span className="font-bold">PostgreSQL and MongoDB</span>. I’m eager to grow as a developer and contribute to impactful projects.
                            </div>
                            <Link href={'/CV_Roihan Salsabila_V0.3.pdf'} className="mt-8 flex flex-row bg-black dark:bg-zinc-800 dark:hover:bg-zinc-700 text-white p-3 gap-3 rounded-full w-45">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                <p>
                                    Download CV
                                </p>
                            </Link>
                        </div>
                        <div>
                            <Image src={'/roihan3.png'}  width={500} height={500} alt={"roihan"} className="w-full h-auto max-w-[400px] aspect-square object-cover rounded-xl" />
                            {/* <div className="md:w-[300px]  lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] w-full max-w-[400px] aspect-square bg-zinc-100"></div> */}
                            <div className="flex flex-col gap-3 mt-5 dark:text-zinc-300">
                                <Link href={'https://github.com/roihan37'} className="flex min-h-11 flex-row gap-3 items-center hover:dark:text-zinc-50">
                                    <Icon name="github" width={24} height={24} color="--c-crimson-blue-500" />
                                    <p>Follow in GitHub</p>
                                </Link>
                                <Link href={'https://www.linkedin.com/in/roihan-salsabila/'} className="flex min-h-11 flex-row gap-3 items-center hover:dark:text-zinc-50">
                                    <Icon name="linkedin" width={24} height={24} color="--c-crimson-blue-500" />
                                    <p>Follow in Linkedin</p>
                                </Link>
                                <Link href={'mailto:pro.roihan@gmail.com'} className="flex min-h-11 flex-row gap-3 items-center hover:dark:text-zinc-50">
                                    <Icon name="mail" width={24} height={24} color="--c-crimson-blue-500" />
                                    <p>pro.roihan@gmail.com</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="page-content portfolio-content py-12 sm:py-16 lg:py-[87px]  ">
                    <div className="max-w-[362px]">
                        <div className="font-bold dark:text-zinc-100 text-[35px] sm:text-[40px] leading-10 sm:leading-12 ">
                            <h2>Bringing Ideas to Life Through Code</h2>
                        </div>
                        <div className="mt-3 opacity-75 max-w-[456px] dark:text-zinc-100">
                            Here are some of the web and mobile applications I’ve built, each focused on solving problems and delivering value.
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 dark:text-zinc-200 gap-5 lg:gap-1 mt-13">
                        {portfolioProjects.map((project) => (
                            <article key={project.name} className="text-black text-[15px] flex flex-col min-w-0 w-full rounded-xl dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:text-zinc-100 bg-zinc-100 p-5 gap-3">
                                <div className="flex flex-wrap items-center justify-between gap-3">
                                    <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white shadow-sm dark:bg-zinc-800" aria-hidden="true">
                                        {project.image ? (
                                            <Image src={project.image} alt="" width={44} height={44} className="size-11 rounded-full object-cover" />
                                        ) : (
                                            <project.icon size={22} />
                                        )}
                                    </div>
                                    {project.inProgress && (
                                        <span className="rounded-full border border-zinc-300 px-3 py-1 text-xs font-medium dark:border-zinc-600">
                                            In Progress
                                        </span>
                                    )}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">{project.name}</h3>
                                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{project.subtitle}</p>
                                    {project.date && <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">{project.date}</p>}
                                </div>
                                <p className="font-light leading-relaxed">{project.description}</p>
                                <div className="mt-auto pt-2">
                                    <p className="text-xs font-medium text-zinc-600 dark:text-zinc-400">Tech stack</p>
                                    <ul className="mt-2 flex flex-wrap gap-2" aria-label={`${project.name} technologies`}>
                                        {project.technologies.map((technology) => (
                                            <li key={technology} className="rounded-md bg-white px-2 py-1 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                                                {technology}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex flex-wrap gap-x-5 gap-y-1">
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex min-h-11 items-center gap-2 rounded text-sm text-zinc-600 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 dark:text-zinc-300" aria-label={`View ${project.name} on GitHub (opens in a new tab)`}>
                                            View on GitHub
                                            <FiArrowUpRight size={16} aria-hidden="true" />
                                        </a>
                                    )}
                                    {project.story && (
                                        <Link href={project.story} className="mt-3 inline-flex min-h-11 items-center gap-2 rounded text-sm text-zinc-600 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 dark:text-zinc-300">
                                            Read the Story
                                            <FiArrowUpRight size={16} aria-hidden="true" />
                                        </Link>
                                    )}
                                    {project.demo && (
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex min-h-11 items-center gap-2 rounded text-sm text-zinc-600 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 dark:text-zinc-300" aria-label={`View ${project.name} live demo (opens in a new tab)`}>
                                            View Live Demo
                                            <FiArrowUpRight size={16} aria-hidden="true" />
                                        </a>
                                    )}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                <div className="page-content portfolio-content py-12 sm:py-16 lg:py-[87px] dark:text-zinc-100 ">
                    <div className="font-bold text-[35px] sm:text-[40px] leading-10 sm:leading-12 ">
                        <h2>Tech Stack & Capabilities</h2>
                    </div>
                    <div className="mt-3 opacity-75 max-w-[500px]">
                        I build web and mobile applications with JavaScript, TypeScript, and Python — combining front-end development, back-end systems, cloud tools, and testing to solve real user problems.
                    </div>
                    <div className="mt-10 space-y-8 text-zinc-800 dark:text-zinc-100">
                        {skillsData.map((group) => (
                            <section key={group.title} aria-labelledby={`skills-${group.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                                <h3 id={`skills-${group.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className="text-lg font-semibold mb-3">
                                    {group.title}
                                </h3>
                                <ul className="skills-grid">
                                    {group.skills.map((skill, index) => (
                                        <motion.li
                                            className="bg-zinc-100 dark:bg-zinc-800 rounded-lg min-w-0 px-3 lg:px-5 py-3 flex items-center gap-2 lg:gap-3 text-sm sm:text-base dark:text-white/80"
                                            key={skill.name}
                                            variants={fadeInAnimationVariants}
                                            initial="initial"
                                            whileInView="animate"
                                            viewport={{ once: true }}
                                            custom={index}
                                        >
                                            {skill.logo ? (
                                                <Image src={skill.logo} alt="" width={24} height={24} className="shrink-0" loading="lazy" />
                                            ) : skill.icon ? (
                                                <skill.icon aria-hidden="true" size={24} className="shrink-0 text-zinc-700 dark:text-zinc-200" />
                                            ) : (
                                                <span aria-hidden="true" className="flex size-6 shrink-0 items-center justify-center rounded bg-zinc-200 text-[9px] font-bold text-zinc-700 dark:bg-zinc-700 dark:text-zinc-200">
                                                    {skill.initials}
                                                </span>
                                            )}
                                            <span className="min-w-0 break-words">{skill.name}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </section>
                        ))}
                    </div>
                </div>

                <div className="page-content portfolio-content py-12 sm:py-16 lg:py-[87px] dark:text-zinc-100 ">
                    <div className="font-bold text-[35px] sm:text-[40px] leading-10 sm:leading-12 ">
                        <h2>Hands-On Industry <br></br> Experience</h2>
                    </div>
                    <div className="mt-3 opacity-75 max-w-[493px]">
                        Each role has strengthened not just my technical skills, but also my mindset — focusing on building value-driven software, collaborating effectively, and adapting in fast-paced environments.
                    </div>
                    <div className="py-10 sm:py-15 lg:pl-2">
                        <div className="ml-[3px] -mb-[25px] h-8 w-[3px] bg-zinc-950/10 dark:bg-white/10 rounded-t">
                        </div>

                        <div className="flex items-start max-w-full">
                            <div className="relative shrink-0 self-stretch">
                                <div className="w-[9px] h-[9px] mt-[26.5px] rounded-full bg-zinc-600 dark:bg-white/90 relative">
                                    <div className="bg-zinc-500  dark:bg-white/90 animate-ping w-[9px] h-[9px] rounded-full absolute">
                                    </div>

                                </div>
                                <div className="ml-[3px] w-[3px] bg-zinc-950/10 dark:bg-white/10 h-full">
                                </div>

                            </div>

                            <div className="min-w-0 flex-1 break-words pl-3 group hover:bg-zinc-50 dark:hover:bg-zinc-800 border-[1px] border-white dark:border-zinc-900 dark:hover:border-zinc-800 inline hover:border-zinc-200 p-3 sm:p-5 ml-3 sm:ml-5 mb-5 rounded-2xl">
                                <p className="text-sm mb-1 text-zinc-950/70 group-hover:text-zinc-950/90 dark:text-white/90 dark:group-hover:text-zinc-300  font-semibold">June - October 2023</p>
                                <div className="cursor-pointer inline-block mb-2" >
                                    <h3 className="text-zinc-800 dark:text-zinc-100 text-lg sm:text-xl cursor-pointer">
                                        <span className="relative z-20 hover:text-zinc-800 dark:hover:text-zinc-300 hover:underline tracking-tight font-semibold">Remote Full Stack Developer - PT Okta Prima Mulya</span>
                                    </h3>
                                </div>
                                <p className="text-sm text-zinc-950/70 dark:text-zinc-400">
                                    Worked as a Full Stack Developer to build a web marketplace using Node.js, MongoDB, TypeScript, and React and Nextjs; developed core features like product management, payment integration (Stripe/PayPal), real-time chat with Socket.io, responsive UI with Tailwind/Material UI, and implemented JWT-based auth with unit testing.</p>
                            </div>





                        </div>
                        <div className="flex items-start max-w-full">
                            <div className="relative shrink-0 self-stretch">
                                <div className="w-[9px] h-[9px] mt-[26.5px] rounded-full bg-zinc-600 dark:bg-white/90 relative">
                                    <div className="bg-zinc-500  dark:bg-white/90 animate-ping w-[9px] h-[9px] rounded-full absolute">
                                    </div>

                                </div>
                                <div className="ml-[3px] w-[3px] bg-zinc-950/10 dark:bg-white/10 h-full">
                                </div>

                            </div>

                            <div className="min-w-0 flex-1 break-words pl-3 group hover:bg-zinc-50 dark:hover:bg-zinc-800 border-[1px] border-white dark:border-zinc-900 dark:hover:border-zinc-800 inline hover:border-zinc-200 p-3 sm:p-5 ml-3 sm:ml-5 mb-5 rounded-2xl">
                                <p className="text-sm mb-1 text-zinc-950/70 group-hover:text-zinc-950/90 dark:text-white/90 dark:group-hover:text-zinc-300  font-semibold">April - Agust 2023</p>
                                <div className="cursor-pointer inline-block mb-2" >
                                    <h3 className="text-zinc-800 dark:text-zinc-100 text-lg sm:text-xl cursor-pointer">
                                        <span className="relative z-20 hover:text-zinc-800 dark:hover:text-zinc-300 hover:underline tracking-tight font-semibold">Remote Internship as Web Developer - CV Arta Grow Persada</span>
                                    </h3>
                                </div>
                                <p className="text-sm text-zinc-950/70 dark:text-zinc-400">
                                    Completed a remote internship as a Web Developer, developing UI with HTML, CSS, JavaScript, and React, implementing key website features (contact form, blog, product catalog), and creating a detailed SRS document for a new project.</p>
                            </div>





                        </div>

                        <div className="flex items-start max-w-full">
                            <div className="relative shrink-0 self-stretch">
                                <div className="w-[9px] h-[9px] mt-[26.5px] rounded-full bg-zinc-600 dark:bg-white/90 relative">
                                    <div className="bg-zinc-500  dark:bg-white/90 animate-ping w-[9px] h-[9px] rounded-full absolute">
                                    </div>

                                </div>
                                <div className="ml-[3px] w-[3px] bg-zinc-950/10 dark:bg-white/10 h-full">
                                </div>

                            </div>

                            <div className="min-w-0 flex-1 break-words pl-3 group hover:bg-zinc-50 dark:hover:bg-zinc-800 border-[1px] border-white dark:border-zinc-900 dark:hover:border-zinc-800 inline hover:border-zinc-200 p-3 sm:p-5 ml-3 sm:ml-5 mb-5 rounded-2xl">
                                <p className="text-sm mb-1 text-zinc-950/70 group-hover:text-zinc-950/90 dark:text-white/90 dark:group-hover:text-zinc-300  font-semibold">November - March 2022</p>
                                <div className="cursor-pointer inline-block mb-2" >
                                    <h3 className="text-zinc-800 dark:text-zinc-100 text-lg sm:text-xl cursor-pointer">
                                        <span className="relative z-20 hover:text-zinc-800 dark:hover:text-zinc-300 hover:underline tracking-tight font-semibold">Graduated bootcamp Full Stack JavaScript Immersive Program - Hacktiv8</span>
                                    </h3>
                                </div>
                                <p className="text-sm text-zinc-950/70 dark:text-zinc-400">
                                    Graduated from the Full Stack JavaScript Immersive Program at Hacktiv8 after 4 months of intensive training, where I gained hands-on experience in both frontend and backend development using modern technologies. Shortly after graduating, I secured a position as a Full Stack Developer and began applying the skills I learned in real-world projects.</p>
                            </div>

                        </div>




                    </div>
                </div>

                <section aria-labelledby="certifications-title" className="page-content portfolio-content py-12 sm:py-16 lg:py-[87px] dark:text-zinc-100">
                    <h2 id="certifications-title" className="font-bold text-[35px] sm:text-[40px] leading-10 sm:leading-12">
                        Certifications
                    </h2>
                    <p className="mt-3 max-w-[500px] text-zinc-600 dark:text-zinc-300">
                        Continuous learning in web development, AI, and cloud technologies to build better software.
                    </p>
                    <ul className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-4">
                        {certifications.map((certification) => (
                            <li key={certification.title} className="flex min-w-0 items-start gap-4 rounded-xl bg-zinc-100 p-5 dark:bg-zinc-800">
                                <span aria-hidden="true" className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-zinc-700 shadow-sm dark:bg-zinc-700 dark:text-zinc-200">
                                    <FiAward size={22} />
                                </span>
                                <div className="min-w-0">
                                    <h3 className="break-words text-base font-semibold leading-relaxed">{certification.title}</h3>
                                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{certification.issuer}</p>
                                    <time dateTime={certification.dateTime} className="mt-2 block text-xs text-zinc-500 dark:text-zinc-400">{certification.date}</time>
                                    <a href={certification.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${certification.title} certificate (opens in a new tab)`} className="mt-2 inline-flex min-h-11 items-center gap-2 rounded text-sm text-zinc-600 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 dark:text-zinc-300">
                                        View Certificate
                                        <FiArrowUpRight size={16} aria-hidden="true" />
                                    </a>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>

                <div className="page-content portfolio-content py-12 sm:py-16 lg:py-[87px] dark:text-zinc-100  ">
                    <div className="font-bold text-[35px] sm:text-[40px] leading-10 sm:leading-12 ">
                        <h2>Contact Me</h2>
                    </div>
                    <div className="mt-3 opacity-75 ">
                        Please contact me directly at{" "}
                        <Link className="underline" href="mailto:pro.roihan@gmail.com">
                            pro.roihan@gmail.com
                        </Link>{" "}
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
                        <ContactForm />
                    </motion.section>
                </div>

                <div className="page-content portfolio-content  ">
                    <Footer />
                </div>
            </div>
        </>
    );
}
