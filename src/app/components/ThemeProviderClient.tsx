"use client";

import { usePathname } from "@/node_modules/next/navigation";
import React from "react";
import { useDarkMode } from "../hook/isDark"; // sesuaikan path

export default function ThemeProviderClient({ children }: { children: React.ReactNode }) {
  const isDark = useDarkMode();
  const pathname = usePathname();
  const isDexBarberRoute = pathname.startsWith("/blog/dex-barber");
  const isBlogRoute = pathname.startsWith("/blog") && !isDexBarberRoute;
  const bgClass = isBlogRoute? "bg-zinc-50 dark:bg-black xl:px-[165px] lg:px-[50px] md:px-[100px] sm:px-[80px] px-[50px] relative" 
  : isDexBarberRoute? ``
  :`${isDark ? "bg-zinc-900" : "bg-metallic"} xl:px-[165px] lg:px-[80px] md:px-[80px] sm:px-[80px] px-[50px] relative`

  console.log(isDexBarberRoute, isBlogRoute);
  
  return (
    <div className={`${bgClass}`}>
      {children}
    </div>
  );
}