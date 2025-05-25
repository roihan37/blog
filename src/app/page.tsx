import Image from "next/image";
import Intro from "./components/intro";
import HomeSection from "./components/homeSection";
import Footer from "./components/footer";

export default function Home() {
  return (
    
      <main className="px-[170px]" >
        <Intro />
        <HomeSection />
        <Footer />
      </main>
  );
}
