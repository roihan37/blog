"use client";

import { usePathname } from "@/node_modules/next/navigation";
import React from "react";
import { useDarkMode } from "../hook/isDark"; // sesuaikan path

export default function ThemeProviderClient({ children }: { children: React.ReactNode }) {
  const isDark = useDarkMode();
  const pathname = usePathname();
  const isDexBarberRoute = pathname.startsWith("/blog/dex-barber");
  const segments = pathname.split("/").filter(Boolean); 
  const isBlogSlugRoute = segments[0] === "blog" && segments.length === 2 && segments[1] !== "dex-barber";
  const isBlogRoute = pathname.startsWith("/blog") && !isDexBarberRoute && !isBlogSlugRoute;
  let bgClass;
  // let bgClass = isBlogRoute? "bg-zinc-100 dark:bg-black xl:px-[165px] md:px-15 lg:px-[80px] sm:px-8 relative" 
  // : isDexBarberRoute? ``
  // :`${isDark ? "bg-black" : "bg-zinc-100"} xl:px-[165px] md:px-15 lg:px-[80px]  sm:px-8 relative`

  if(isBlogRoute){
    bgClass = "bg-zinc-100 dark:bg-black xl:px-[165px] md:px-15 lg:px-[80px] sm:px-8 relative"
    console.log('masuk isBlogRoute');
  }
  else if(isDexBarberRoute){
    bgClass = ''
  }
  else if(isBlogSlugRoute){
    console.log('masuk isBlogSlugRoute');
    
    bgClass = 'bg-[#191919]'
  } else{
    bgClass = `${isDark ? "bg-black" : "bg-zinc-100"} xl:px-[165px] md:px-15 lg:px-[80px]  sm:px-8 relative`
  }
  
  console.log(bgClass);
  
  return (
    <div className={`${bgClass}`}>
      {children}
    </div>
  );
}