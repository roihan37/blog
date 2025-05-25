

import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import Header from "./components/header";
import "./globals.css";

const fontSans = Public_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Roihan Salsabila",
  description: "Roihan is a Software Engineer and Fullstack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.variable} bg-metallic lg:px-[165px] md:px-[100px] sm:px-[80px] px-[50px] relative`}
      >
        <div className="bg-white  shadow-md">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
