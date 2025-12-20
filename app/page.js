import Fair from "@/components/Fair";
import FairLogos from "@/components/FairLogos";
import Footer from "@/components/Footer";
import GameCard from "@/components/GameCard";
import Header from "@/components/Header";
import MainContent from "@/components/MainContent";
import Searches from "@/components/Searches";
import Slider from "@/components/Slider";
import Team from "@/components/Team";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <MainContent />
      <section className="relative bg-gradient-to-br from-[#0B1623] to-[#050B14] flex flex-col gap-20 items-center justify-center py-15">
        <GameCard />
        <Fair />
        <FairLogos />
        <Searches />
        <Slider />
        <div className="absolute w-full h-[300px] bottom-0 bg-white z-0"></div>
      </section>
      <Team />
      <Footer />
    </div>
  );
}
