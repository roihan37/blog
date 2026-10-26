

import type { Metadata } from "next";
import { siteUrl, siteName, siteDescription, defaultImage } from "./lib/seo";
import { Public_Sans, Noto_Serif } from "next/font/google";
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
  metadataBase: new URL(siteUrl),
  title: { default: "Roihan Salsabila | Software Engineer & Full-stack Developer", template: "%s | Roihan Salsabila" },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  openGraph: { type: "website", siteName, locale: "en_US", title: siteName, description: siteDescription, images: [defaultImage] },
  twitter: { card: "summary_large_image", title: siteName, description: siteDescription, images: [defaultImage] },
  icons: { icon: "/favicon-redbg-circle.ico" },
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
