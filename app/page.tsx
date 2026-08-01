import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Technologies from "@/components/home/Technologies";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Technologies />
      </main>
    </>
  );
}