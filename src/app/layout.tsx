

import type { Metadata } from "next";
import { Public_Sans, Noto_Serif } from "next/font/google";
import Header from "./components/header";
import ThemeProviderClient from "./components/ThemeProviderClient";
import "./globals.css";

const fontSans = Public_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontSerif = Noto_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
});



// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Roihan Salsabila",
  description: "Roihan is a Software Engineer and Fullstack Developer",
  icons: {
    icon: '/favicon-redbg-circle.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 


  return (
    <html lang="en" >
      <body
        className={`${fontSans.variable} ${fontSerif.variable} `}
      >
        <div >
          <ThemeProviderClient>{children}</ThemeProviderClient>
        </div>
      </body>
    </html>
  );
}
