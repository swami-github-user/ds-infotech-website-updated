"use client";
import "./Hero.css";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { motion } from "framer-motion";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white pt-24 lg:pt-28"
    >
      <Container>
        <div className="grid min-h-[85vh] items-center gap-6 py-10 lg:grid-cols-[0.95fr_1.05fr]">

          {/* Left Content */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
                Training Partner for Cloud, DevOps & Generative AI
            </span>

            <h1 className="mt-8 text-5xl font-bold leading-tight text-slate-900 lg:text-7xl">
                Hands-on
                <span className="block text-orange-500">
                    AWS & GenAI
                </span>
                Training for Enterprise Teams
            </h1>

            <p className="mt-14 max-w-2xl text-xl leading-8 text-slate-600">
              Lab-driven programs in Generative AI, DevOps, containers and
              cloud architecture on AWS, delivered for enterprise L&amp;D teams
              and training companies.

              <br /><br />

              Original courseware, tested labs and flexible virtual delivery,
              tailored to your audience and available under your brand.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">

                <Button href="#training-programs">
                    View Programs
                </Button>

                <Button href="#contact" variant="secondary">
                    Request a Proposal
                </Button>

            </div>

            <div className="mt-10 flex flex-wrap gap-4 text-sm font-medium text-slate-700">

                <div>✅ Virtual Instructor-led</div>

                <div>✅ Lab-first Programs</div>

                <div>✅ Original Courseware</div>

                <div>✅ White-label Ready</div>

            </div>

          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="hidden lg:flex items-center justify-end w-full pl-12"
          >

            <div className="hero-image w-full">
                <HeroVisual />
            </div>

          </motion.div>

        </div>
      </Container>
    </section>
  );
}