import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Technologies from "@/components/home/Technologies";
import TrustSection from "@/components/home/TrustSection";
import Solutions from "@/components/home/Solutions";
import LearningFramework from "@/components/home/LearningFramework";
import Delivery from "@/components/home/Delivery";
import Engagements from "@/components/home/Engagements";
import Contact from "@/components/home/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Solutions />

        <Delivery />

        <Engagements />

        <LearningFramework />

        <TrustSection />

        <Technologies />

        <Contact />

        <Footer />
      </main>
    </>
  );
}