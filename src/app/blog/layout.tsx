import { Public_Sans } from "next/font/google";


const fontSans = Public_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});


export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 


  return (
    <div >
      <div
        className={`${fontSans.variable}  `}
      >
          {children}
      </div>
    </div>
  );
}
