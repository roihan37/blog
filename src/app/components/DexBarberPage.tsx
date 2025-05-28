import Image from "@/node_modules/next/image";
import DexBarberHome from "../public/dexbarber-homepage.jpg"
import LandingPage from "../public/landing_page.png"
import TransactionPage from "../public/transaction_side.png"
import Workflow from "../public/workflow.png"
import { barberStyle } from "../style/barberStyle";

export default async function DexBarberPage() {

    return (
        <div>
            <div className="bg-[#1A1A1A] px-[300px] py-[115px]">
                <h1 className="text-[#FFFFFF] font-serif text-[48px] font-bold ">DEX BARBER – A Fullstack Mobile App Created During My Hacktiv8 Bootcamp Journey</h1>
                <div className="grid grid-cols-2 gap-[90px] mt-[55px]">
                    <div>
                        <h4 className={`${barberStyle.h4} text-[#E6FEA1]`}>Role</h4>
                        <p className={`${barberStyle.p} text-[#FFFFFF]`}>Fullstack Developer Implemented Real-Time Chat and User Tracking</p>
                    </div>
                    <div>
                        <h4 className={`${barberStyle.h4} text-[#E6FEA1]`}>Timeline</h4>
                        <p className={`${barberStyle.p} text-[#FFFFFF]`}>Just One Week, 2023</p>
                    </div>
                    <div>
                        <h4 className={`${barberStyle.h4} text-[#E6FEA1]`}>Product & Platform</h4>
                        <p className={`${barberStyle.p} text-[#FFFFFF]`}>A mobile app that allows users to book barbers to come to their location, featuring real-time chat and live tracking</p>
                    </div>
                    <div>
                        <h4 className={`${barberStyle.h4} text-[#E6FEA1]`}> ,</h4>
                        <p className={`${barberStyle.p} text-[#FFFFFF]`}>The UI/UX still needs improvement, but we successfully implemented real-time chat and live tracking.</p>
                    </div>
                </div>
            </div>

            <div className="bg-white px-[300px] py-[115px]">
                <div className="flex flex-col items-center gap-[25px]">
                    <h3 className={`${barberStyle.h3} text-[#8CBB03]`}>PROJECT BRIEF</h3>
                    <h2 className={`${barberStyle.h2}`}>The idea came from a personal frustration wanting to get a haircut, but feeling too lazy to wait in line or leave the house.</h2>
                    <div className="flex flex-row mt-[25px] gap-[110px]">
                        <div className={`${barberStyle.p} max-w-[500px]`}>

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

                            <Image alt="dexbarber home page" src={DexBarberHome} className="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#FCFFF5] px-[300px] pt-[115px] ">
                <div>
                    <div className="flex flex-col items-center gap-[15px] mb-[75px]">
                        <h3 className={`${barberStyle.h3} text-[#8CBB03]`}>CHALLENGES</h3>
                        <h2 className={barberStyle.h2}>Time Was Our Biggest Enemy</h2>
                    </div>
                    <div className="flex flex-col gap-[25px]">
                        <div>
                            <h4 className={`${barberStyle.h4} text-[#77A000] mb-[10px]`}>At first, we were confident</h4>
                            <p className={`${barberStyle.p} mb-[25px]`}>Our team had skilled members and ambitious ideas  with advanced, feature-rich plans. But as we got deeper into development, we realized we had aimed too high for the limited time we had. <br></br>
                                <br></br>Too many features quickly became overwhelming. We had to rethink our priorities and adapt fast.
                            </p>
                            <div className="flex flex-row gap-5 items-center">
                                <div className="h-26 w-[5px] bg-gray-300 mx-auto" />
                                <div className="flex flex-col gap-5">
                                    <p className="font-serif font-bold text-[24px]">"The key is not to prioritize what's on your schedule, but to schedule your priorities."
                                    </p>
                                    <p className={barberStyle.p}>— Stephen Covey</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 className={`${barberStyle.h4} text-[#77A000] mb-[10px]`}>The app's visuals took longer </h4>
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

            <div className="bg-white px-[300px] py-[115px]">
                <div>
                    <div className="flex flex-col items-center gap-[15px] mb-[75px]">
                        <h3 className={`${barberStyle.h3} text-[#8CBB03]`}>SOLUTION</h3>
                        <h2 className={barberStyle.h2}>How We Tackled It</h2>
                    </div>
                    <div className="flex flex-row gap-[130px]">
                        <div className="w-max-[335px]">
                            <h4 className={`${barberStyle.h4} text-[#77A000] mb-[15px] `}>Strategic Team Division</h4>
                            <p className={`${barberStyle.p} `}>To manage our limited time, we divided tasks based on expertise backend, mobile app (React Native), frontend CMS, and API integration. This allowed us to work in parallel and stay efficient.</p>
                        </div>
                        <div className="w-max-[335px]">
                            <h4 className={`${barberStyle.h4} text-[#77A000] mb-[15px]`}>Using Clear Mockups</h4>
                            <p className={barberStyle.p}>We created quick sketches and mockups to align on the app’s purpose, flow, and features even without formal UI/UX design.</p>
                        </div>
                    </div>
                </div>
            </div>
                <div className="bg-[#1A1A1A] px-[300px] py-[115px]">
                    <div className="flex flex-col items-center gap-[15px] mb-[50px]">
                        <h3 className={`${barberStyle.h3} text-[#E6FEA1]`}>CHALLENGES</h3>
                        <h2 className={`${barberStyle.h2} text-white`}>Time Was Our Biggest Enemy</h2>
                    </div>
                    <Image alt="dexbarber workflow page" src={Workflow} className="mb-[50px]" />
                    <p className="text-[#E6FEA1] text-[15px]">*System Components meaning: Applications, APIs, and external services that form the core structure of the system</p>
                </div>
        </div>
    );
}