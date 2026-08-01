import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Technologies from "@/components/home/Technologies";
import TrustSection from "@/components/home/TrustSection";
import PracticeAreas from "@/components/home/PracticeAreas";
import Solutions from "@/components/home/Solutions";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <TrustSection />

        <Technologies />

        <PracticeAreas />

        <Solutions />
      </main>
    </>
  );
}