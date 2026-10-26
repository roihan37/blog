"use client";

import { usePathname } from "next/navigation";
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

  if(isBlogRoute){
    bgClass = "bg-zinc-100 dark:bg-black site-frame relative"
    
  }
  else if(isDexBarberRoute){
    bgClass = ''
  }
  else if(isBlogSlugRoute){    
    bgClass = 'dark:bg-[#191919] bg-[#FFFFFF]'
  } else{
    bgClass = `${isDark ? "bg-black" : "bg-zinc-100"} site-frame relative`
  }
  
  
  
  return (
    <div className={`${bgClass}`}>
      {children}
    </div>
  );
}