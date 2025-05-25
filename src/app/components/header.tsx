'use client';
import React from "react";
import { motion } from "framer-motion"


export default function Header(): React.JSX.Element {
    return (
        <header>
            <motion.div className=" relative z-10 px-[170px] text-[13px] pt-[25px] flex justify-between"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >
                <div className="  px-[15px] py-[5px] flex flex-col justify-start">
                    <h1 className="font-semibold text-[20px]">Let's learn</h1>
                    <p className=" text-[#041148] font-light">with Roihan Salsabila</p>
                </div>
                <div className="flex justify-end gap-[25px] items-center">
                    <div >
                       
                    </div>
                    <div className="bg-[#041148] rounded-full border-[#041148] border-2 px-[15px] py-[5px] flex gap-[10px] justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-white size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>

                        <p className=" text-white">Show Portofolio</p>
                    </div>
                </div>
            </motion.div>
        </header>
    )

}