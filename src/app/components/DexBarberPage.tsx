import TransactionLayout from "../public/transaction_layout.png"
import DexBarberHome from "../public/dexbarber-homepage.jpg"
import TransactionPage from "../public/transaction_side.png"
import LandingPage from "../public/landing_page.png"
import { barberStyle } from "../style/barberStyle"
import ChatLayout from "../public/chat_layout.png"
import LayoutPage from "../public/layout_page.png"
import PetaLayout from "../public/peta_layout.png"
import Flowchart from "../public/flowchart.png"
import Image from "@/node_modules/next/image"
import Workflow from "../public/workflow.png"
import Testing from "../public/testing.png"
import Header from "./header"
import Link from "@/node_modules/next/link"

export default async function DexBarberPage() {

    return (
        <div>
            <div className={`bg-[#1A1A1A] ${barberStyle.px} pb-[115px]`}>
                <Header />
                <h1 className="text-[#FFFFFF] pt-[50px] font-serif text-[24px] md:text-[48px] font-bold ">DEX BARBER – A Fullstack Mobile App Created During My Hacktiv8 Bootcamp Journey</h1>
                <div className="grid grid-cols-2 gap-x-9 gap-y-10 md:gap-[70px] lg:gap-[90px] mt-[55px]">
                    <div>
                        <h4 className={`${barberStyle.h4} font-serif text-[#E6FEA1]`}>Role</h4>
                        <p className={`${barberStyle.p} mt-[15px] text-[#FFFFFF]`}>Fullstack Developer Implemented Real-Time Chat and User Tracking</p>
                    </div>
                    <div>
                        <h4 className={`${barberStyle.h4} font-serif text-[#E6FEA1]`}>Timeline</h4>
                        <p className={`${barberStyle.p} mt-[15px] text-[#FFFFFF]`}>Just One Week, 2023</p>
                    </div>
                    <div>
                        <h4 className={`${barberStyle.h4} font-serif text-[#E6FEA1]`}>Product & Platform</h4>
                        <p className={`${barberStyle.p} mt-[15px] text-[#FFFFFF]`}>A mobile app that allows users to book barbers to come to their location, featuring real-time chat and live tracking</p>
                    </div>
                    <div>
                        <Link href={`https://github.com/BarberDelivery`} className={`group bg-metallic max-w-[150px] rounded-full  px-[15px] py-[7px] flex gap-[10px] justify-center items-center`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 group-hover:animate-spin">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                            </svg>
                            <p className="text-5 ">github.com</p>
                        </Link>
                        <p className={`${barberStyle.p} text-[#FFFFFF] mt-[38px] sm:mt-[10px]`}>The UI/UX still needs improvement, but we successfully implemented real-time chat and live tracking.</p>
                    </div>
                </div>
            </div>

            <div className={`bg-white ${barberStyle.px} py-[115px]`}>
                <div className="flex flex-col  items-center gap-[25px]">
                    <h3 className={`${barberStyle.h3} text-[#8CBB03]`}>PROJECT BRIEF</h3>
                    <h2 className={`${barberStyle.h2}`}>The idea came from a personal frustration wanting to get a haircut, but feeling too lazy to wait in line or leave the house.</h2>
                    <div className="flex flex-col sm:flex-row mt-[25px] gap-[110px] xl:gap-[110px] sm:gap-5 md:gap-5">
                        <div className={`${barberStyle.p} md:max-w-[370px] sm:max-w-[350px] lg:max-w-[500px]`}>

                            <p >Getting a haircut should be simple—but for many men, it’s not. The hassle of going out, waiting in line, and finding a skilled barber can make them delay it for days, even weeks.
                                <br /><br />
                                That’s where DEX BARBER comes in.
                                <br /><br />
                            </p>
                            <p >Our goal was to solve a real, everyday problem:</p>
                            <ul className="list-disc ml-6 mt-2 space-y-1">
                                <li><span className="font-bold italic">Accessibility</span>  – Making haircut services available without leaving the house.</li>
                                <li><span className="font-bold italic">Visibility</span> – Giving talented barbers more exposure to clients nearby.</li>
                                <li><span className="font-bold italic">Standardization</span> – Offering a cleaner, more elegant grooming experience through consistent service quality.</li>
                            </ul>
                        </div>
                        <div>
                            <Image alt="dexbarber home page" src={DexBarberHome} className="w-[281px]" />
                        </div>
                    </div>
                </div>
            </div>

            <div className={`bg-[#FCFFF5] ${barberStyle.px} pt-[115px]`}>
                <div>
                    <div className="flex flex-col items-center gap-[15px] mb-[75px]">
                        <h3 className={`${barberStyle.h3} text-[#8CBB03]`}>CHALLENGES</h3>
                        <h2 className={barberStyle.h2}>Time Was Our Biggest Enemy</h2>
                    </div>
                    <div className="flex flex-col gap-[25px]">
                        <div>
                            <h4 className={`${barberStyle.h4} font-serif text-[#77A000] mb-[10px]`}>At first, we were confident</h4>
                            <p className={`${barberStyle.p} mb-[25px]`}>Our team had skilled members and ambitious ideas  with advanced, feature-rich plans. But as we got deeper into development, we realized we had aimed too high for the limited time we had. <br></br>
                                <br></br>Too many features quickly became overwhelming. We had to rethink our priorities and adapt fast.
                            </p>
                            <div className="flex flex-row gap-5 items-center">
                                <div className="h-26 w-[5px] bg-gray-300 mx-auto" />
                                <div className="flex flex-col gap-5">
                                    <p className="font-serif font-bold text-[16px] md:text-[24px]">"The key is not to prioritize what's on your schedule, but to schedule your priorities."
                                    </p>
                                    <p className={barberStyle.p}>— Stephen Covey</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 className={`${barberStyle.h4} font-serif text-[#77A000] mb-[10px]`}>The app's visuals took longer </h4>
                            <p className={barberStyle.p}>Due to the tight deadline, we skipped formal design stages and went straight into implementation using React Native  a decision made to save time, though it came with trade-offs.
                            </p>
                        </div>
                        <div className="flex items-center justify-center mt-[85px]">

                            <div className="flex flex-row gap-2">
                                <Image alt="dexbarber landing page" src={LandingPage} className="" />
                                <Image alt="dexbarber transaction page" src={TransactionPage} className="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`bg-white ${barberStyle.px} py-[115px]`}>
                <div>
                    <div className="flex flex-col items-center gap-[15px] mb-[55px]">
                        <h3 className={`${barberStyle.h3} text-[#8CBB03]`}>SOLUTION</h3>
                        <h2 className={barberStyle.h2}>How We Tackled It</h2>
                    </div>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-12  md:gap-[90px] lg:gap-[130px]">
                        <div className="w-max-[335px]">
                            <h4 className={`${barberStyle.h4} font-serif text-[#77A000] mb-[15px] `}>Strategic Team Division</h4>
                            <p className={`${barberStyle.p} `}>To manage our limited time, we divided tasks based on expertise backend, mobile app (React Native), frontend CMS, and API integration. This allowed us to work in parallel and stay efficient.</p>
                        </div>
                        <div className="w-max-[335px]">
                            <h4 className={`${barberStyle.h4} font-serif text-[#77A000] mb-[15px]`}>Using Clear Mockups</h4>
                            <p className={barberStyle.p}>We created quick sketches and mockups to align on the app’s purpose, flow, and features even without formal UI/UX design.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`bg-[#1A1A1A] ${barberStyle.px} py-[115px]`}>
                <div className="flex flex-col items-center gap-[15px] mb-[50px]">
                    <h3 className={`${barberStyle.h3} text-[#E6FEA1]`}>CHALLENGES</h3>
                    <h2 className={`${barberStyle.h2} text-white`}>Time Was Our Biggest Enemy</h2>
                </div>
                <Image alt="dexbarber workflow page" src={Workflow} className="mb-[50px]" />
                <p className="text-[#E6FEA1] text-[15px]">*System Components meaning: Applications, APIs, and external services that form the core structure of the system</p>
            </div>

            <div className={`${barberStyle.px} py-[115px]`}>
                <div className="flex flex-col items-center gap-[15px] mb-[50px]">
                    <h3 className={`${barberStyle.h3} text-[#8CBB03]`}>PROJECT TIMELINE & PROCESS</h3>
                    <h2 className={`${barberStyle.h2} text-black`}>We went through several processes to ensure we are solving the right problem and not wasting resources and time.</h2>
                </div>

                {/* LIST */}
                <div className="ml-[3px] -mb-[25px] h-8 w-[3px] bg-slate-950/10 rounded-t">
                </div>
                <div className="flex items-top max-w-full">
                    <div className="relative">
                        <div className="w-[9px] h-[9px] mt-[19px] rounded-full bg-gray-600  relative">


                        </div>
                        <div className="ml-[3px] w-[3px] bg-slate-950/10 h-full">
                        </div>

                    </div>

                    <div className="pl-3 group  p-3 ml-5  rounded-2xl">
                        <p className="text-sm mb-1 text-slate-950/70 group-hover:text-slate-950/90   font-semibold">February 28, 2023</p>
                        <div className=" inline-block mb-2" >
                            <h3 className="text-slate-800  text-lg sm:text-xl ">
                                <span className="relative z-20 hover:text-slate-800   tracking-tight font-semibold">Brainstorming idea, making mockup and scheme diagram</span>
                            </h3>
                        </div>
                        <p className="text-sm text-slate-950/70 ">
                            We start by identifying the problem and sketching out a model. Creating diagrams before coding begins.</p>
                    </div>
                </div>

                <div className="flex items-top max-w-full">
                    <div className="relative">
                        <div className="w-[9px] h-[9px] mt-[19px] rounded-full bg-gray-600  relative">


                        </div>
                        <div className="ml-[3px] w-[3px] bg-slate-950/10 h-full">
                        </div>

                    </div>

                    <div className="pl-3 group  p-3 ml-5  rounded-2xl">
                        <p className="text-sm mb-1 text-slate-950/70 group-hover:text-slate-950/90   font-semibold">March 1, 2023</p>
                        <div className=" inline-block mb-2" >
                            <h3 className="text-slate-800  text-lg sm:text-xl ">
                                <span className="relative z-20 hover:text-slate-800   tracking-tight font-semibold">Sprinting Backend Setup and Started Layouting</span>
                            </h3>
                        </div>
                        <p className="text-sm text-slate-950/70 ">
                            We divided the tasks based on each member's expertise: backend, mobile frontend, CMS, and API integration to move quickly and efficiently.</p>
                    </div>
                </div>

                <div className="flex items-top max-w-full">
                    <div className="relative">
                        <div className="w-[9px] h-[9px] mt-[19px] rounded-full bg-gray-600  relative">


                        </div>
                        <div className="ml-[3px] w-[3px] bg-slate-950/10 h-full">
                        </div>

                    </div>

                    <div className="pl-3 group  p-3 ml-5  rounded-2xl">
                        <p className="text-sm mb-1 text-slate-950/70 group-hover:text-slate-950/90   font-semibold">March 4, 2023</p>
                        <div className=" inline-block mb-2" >
                            <h3 className="text-slate-800  text-lg sm:text-xl ">
                                <span className="relative z-20 hover:text-slate-800   tracking-tight font-semibold">Exploring Third Party API</span>
                            </h3>
                        </div>
                        <p className="text-sm text-slate-950/70 ">
                            We explored the APIs for key features in the existing documentation, features used for real-time chat, map tracking, payments (Xendit), and image uploads (Cloudinary).</p>
                    </div>

                </div>

                <div className="flex items-top max-w-full">
                    <div className="relative">
                        <div className="w-[9px] h-[9px] mt-[19px] rounded-full bg-gray-600  relative">


                        </div>
                        <div className="ml-[3px] w-[3px] bg-slate-950/10 h-full">
                        </div>

                    </div>
                    <div className="pl-3 group  p-3 ml-5  rounded-2xl">
                        <p className="text-sm mb-1 text-slate-950/70 group-hover:text-slate-950/90   font-semibold">March 6, 2023</p>
                        <div className=" inline-block mb-2" >
                            <h3 className="text-slate-800  text-lg sm:text-xl ">
                                <span className="relative z-20 hover:text-slate-800   tracking-tight font-semibold">Wiring Code for Backend and Frontend</span>
                            </h3>
                        </div>
                        <p className="text-sm text-slate-950/70 ">
                            All parts were wired together syncing APIs, backend logic, and frontend components into one system.</p>
                    </div>
                </div>

                <div className="flex items-top max-w-full">
                    <div className="relative">
                        <div className="w-[9px] h-[9px] mt-[19px] rounded-full bg-gray-600  relative">


                        </div>
                        <div className="ml-[3px] w-[3px] bg-slate-950/10 h-full">
                        </div>

                    </div>
                    <div className="pl-3 group  p-3 ml-5  rounded-2xl">
                        <p className="text-sm mb-1 text-slate-950/70 group-hover:text-slate-950/90   font-semibold">March 8, 2023</p>
                        <div className=" inline-block mb-2" >
                            <h3 className="text-slate-800  text-lg sm:text-xl ">
                                <span className="relative z-20 hover:text-slate-800   tracking-tight font-semibold">Debugging Code</span>
                            </h3>
                        </div>
                        <p className="text-sm text-slate-950/70 ">
                            We fixed bugs, ran unit tests, and ensured the core features ran smoothly before final deployment.</p>
                    </div>
                </div>

            </div>

            <div className={`${barberStyle.px} py-[115px] bg-[#EFF3F6]`}>
                <div className="flex flex-col items-center gap-[15px] mb-[50px]">
                    <h3 className={`${barberStyle.h3} text-[#8CBB03]`}>MY HANDLE</h3>
                    <h2 className={`${barberStyle.h2} text-black`}>User Tracking Experience</h2>
                </div>
                <div className="flex flex-col gap-[35px]">
                    <p className={`${barberStyle.p}`}>As part of the team, I was assigned to explore and implement key third-party APIs — specifically focusing on real-time chat and user location tracking. For user location tracking, several components were required, including React Native Geolocation and Cloud Firestore for real-time data storage and updates.
                        <br></br>
                        <br></br>
                        Today, I’d like to share my experience setting up the user tracking feature. If you're looking to implement a similar solution, this guide is for you.
                    </p>
                    <div>
                        <h4 className={`${barberStyle.h4} font-sans mb-[15px]`}>Why Use Firebase for User Location Tracking</h4>
                        <p className={`${barberStyle.p}`}>The main reasons why to choose firestore as a database :</p>
                        <ol className={`list-decimal pl-6 space-y-2 text-base text-gray-800 ${barberStyle.p}`}>
                            <li>
                                <strong>Real-Time Data Sync</strong> – Instantly reflects changes across clients without manual refresh.
                            </li>
                            <li>
                                <strong>Flexible Data Structure</strong> – Uses a NoSQL document model that’s easy to adapt to changing needs.
                            </li>
                            <li>
                                <strong>Scalable Architecture</strong> – Handles growing data and users with minimal setup.
                            </li>
                        </ol>
                    </div>
                    <div>
                        <h4 className={`${barberStyle.h4} font-sans mb-[20px]`}>Flowchart: What Happens Behind the Scenes</h4>
                        <Image alt="dexbarber Flowchart page" src={Flowchart} className="mb-[20px]" />
                        <ul className={`list-decimal pl-6 space-y-2 text-base text-gray-800 mb-[25px] ${barberStyle.p}`}>
                            <li>
                                First, the app asks for location permissions.
                            </li>
                            <li>
                                Then, it continuously tracks the barber’s live location and updates it to Firebase. Meanwhile, the customer’s location is fetched once at the beginning.
                            </li>
                            <li>
                                Both points are then displayed on the map, connected by a route via MapViewDirections.
                            </li>
                            <li>
                                To get accurate distance data, the app uses the Google Distance Matrix API.
                            </li>
                            <li>
                                Finally, when the barber gets close enough (less than 30 meters), the app automatically navigates back — signaling that the barber has arrived.
                            </li>
                        </ul>
                        <p className={`${barberStyle.p}`}>🔗 For a more technical guide on setting up and retrieving user location in React Native, click here.</p>
                    </div>
                </div>
            </div>

            <div className={`${barberStyle.px} py-[115px] bg-[#1A1A1A]`}>
                <div className="flex flex-col items-center gap-[15px] mb-[50px]">
                    <h3 className={`${barberStyle.h3} text-[#E6FEA1]`}>PROJECT RESULT</h3>
                    <h2 className={`${barberStyle.h2} text-white`}>With a tight deadline, we prioritized core features — and this is what we delivered.</h2>
                </div>
                <div >
                    <div className="flex flex-row gap-2 md:gap-[25px] ">
                        <Image alt="dexbarber peta page" src={PetaLayout} className="" />
                        <Image alt="dexbarber layout page" src={LayoutPage} className="" />
                        <Image alt="dexbarber transaction page" src={TransactionLayout} className="" />
                        <Image alt="dexbarber chat page" src={ChatLayout} className="" />
                    </div>
                    <h4 className={`${barberStyle.h4} font-serif text-[#E6FEA1] mt-[25px]`}>Not Perfect, But Everything Works</h4>
                    <p className={`${barberStyle.p} text-white mt-[15px]`}>I know the UI/UX is far from perfect, but all core features are up and running smoothly. These include user location tracking, real-time chat, upload photo and payment integration. It may not be perfect visually, but it works — and that’s a solid foundation.</p>
                </div>
                <div className="mt-[50px]">
                    <Image alt="dexbarber testing" src={Testing} className="" />
                    <h4 className={`${barberStyle.h4} font-serif text-[#E6FEA1] mt-[25px]`}>Solid Test Coverage: 91.1%</h4>
                    <p className={`${barberStyle.p} text-white mt-[15px]`}>With a total of 113 test cases and a 91.1% test coverage, we ensured that most critical paths in our application are well-tested</p>
                </div>
                <div className="flex flex-col items-center gap-[15px] mt-[50px]">
                    <h3 className={`${barberStyle.h3} text-[#E6FEA1]`}>FINAL QUOTE</h3>
                    <h2 className={`${barberStyle.h2} text-white`}>From a Simple <span className="text-[#E6FEA1]">Daily Frustration</span> to a Real Product It <span className="text-[#E6FEA1]">Pushed Us, Taught Us,</span> and Proved <span className="text-[#E6FEA1]">the Power</span> of a Small Team.</h2>
                </div>
            </div>

            <div className={`${barberStyle.px} py-[115px] bg-[#EFF3F6]`}>
                <div className="flex flex-col">
                    <h3 className={`${barberStyle.h3} text-[#8CBB03] text-center`}>LESSONS LEARNED</h3>
                    <div>
                        <h4 className={`${barberStyle.h4} font-serif text-[#1A1A1A] mt-[35px]`}>Focus on What Matters, Not on Doing Everything</h4>
                        <p className={`${barberStyle.p} mt-[15px]`}>At first, we were too ambitious. We wanted to build everything — chat, tracking, CMS, payment — all at once. But as the deadline got closer, we realized that it’s not about having the most features, but about delivering the right ones. This taught us how to prioritize and focus on what’s essential.</p>
                    </div>
                    <div>
                        <h4 className={`${barberStyle.h4} font-serif text-[#1A1A1A] mt-[35px]`}>We Learned the Most When Things Went Wrong</h4>
                        <p className={`${barberStyle.p} mt-[15px]`}>From integration errors to rushed designs and last-minute changes, we ran into all kinds of issues. But those moments were also our biggest teachers. We learned to debug better, communicate more, and adapt quickly. In the end, this project wasn’t just about building an app — it was about growing through every challenge.</p>
                    </div>
                </div>
            </div>

            <div className={`${barberStyle.px} py-[115px] bg-[#1A1A1A]`}>
                <div className="flex flex-col items-center gap-[15px] mb-[50px]">
                    <h3 className={`${barberStyle.h3} text-[#E6FEA1]`}>THANKS FOR READING!</h3>
                    <h2 className={`${barberStyle.h2} text-white`}>Check out my other projects:</h2>
                </div>
            </div>
        </div>
    );
}