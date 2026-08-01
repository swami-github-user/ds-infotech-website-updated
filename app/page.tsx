import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Technologies from "@/components/home/Technologies";
import TrustSection from "@/components/home/TrustSection";
import PracticeAreas from "@/components/home/PracticeAreas";
import Solutions from "@/components/home/Solutions";
import LearningFramework from "@/components/home/LearningFramework";
import TrustedBy from "@/components/home/TrustedBy";
import Testimonials from "@/components/home/Testimonials";
import Contact from "@/components/home/Contact";

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

        <LearningFramework />

        <TrustedBy />

        <Testimonials />

        <Contact />
      </main>
    </>
  );
}