import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Technologies from "@/components/home/Technologies";
import Stats from "@/components/home/Stats";
import TrustSection from "@/components/home/TrustSection";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Stats />

        <TrustSection />

        <Technologies />
      </main>
    </>
  );
}