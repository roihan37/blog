'use client';
import React from "react";
import { motion } from "framer-motion"
import Image from "next/image";
import photoRoihan from "../public/roihan.jpeg"
import { Icon } from './icon';


export default function Footer(): React.JSX.Element {
    return (
        <div className="flex flex-row justify-between py-25 text-3xl">
            <div className="flex flex-row gap-7">
                <h1 className="text-gray-400">Say hi</h1>
                <h1>pro.roihan@gmail.com</h1>
            </div>
            <div className="flex flex-row gap-5">
                <Icon name="github" width={30} height={30} color="--c-crimson-blue-500" />
                <Icon name="linkedin" width={30} height={30}  color="--c-crimson-blue-500" />
                <Icon name="instagram" width={30} height={30}  color="--c-crimson-blue-500" />
                <Icon name="mail" width={30} height={30}  color="--c-crimson-blue-500" />
            </div>
        </div>
    )

}