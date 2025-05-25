import Image from "next/image";
import Intro from "./components/intro";
import HomeSection from "./components/homeSection";
import Footer from "./components/footer";

export default function Home() {
  return (
    
      <main className="lg:px-[170px] md:px-[100px] sm:px-[80px] px-[50px]" >
        <Intro />
        <HomeSection />
        <Footer />
      </main>
  );
}
