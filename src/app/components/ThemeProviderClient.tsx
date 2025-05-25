"use client";

import React from "react";
import { useDarkMode } from "../hook/isDark"; // sesuaikan path

export default function ThemeProviderClient({ children }: { children: React.ReactNode }) {
  const isDark = useDarkMode();

  return (
    <div className={`${isDark ? "bg-zinc-900" : "bg-metallic"}  lg:px-[165px] md:px-[100px] sm:px-[80px] px-[50px] relative`}>
      {children}
    </div>
  );
}