import Image from "next/image";
import Intro from "./components/intro";
import HomeSection from "./components/homeSection";
import Footer from "./components/footer";
import Header from "./components/header";

export default function Home() {
  return (
    
      <main className="lg:px-[170px] md:px-[100px] sm:px-[80px] px-[50px] bg-white dark:bg-zinc-950  shadow-md" >
        <Header />
        <Intro />
        <HomeSection />
        <Footer />
      </main>
  );
}
