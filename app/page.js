import Footer from "@/components/Footer";
import GameCard from "@/components/GameCard";
import Header from "@/components/Header";
import MainContent from "@/components/MainContent";
import Team from "@/components/Team";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <MainContent />
      <section className="bg-[#131B26] flex items-center justify-center py-15">
        <GameCard />
      </section>
      <Team />
      <Footer />
    </div>
  );
}
