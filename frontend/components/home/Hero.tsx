"use client";
import "./Hero.css";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { motion } from "framer-motion";
import Image from "next/image";

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
                🚀 India's Premier AWS & DevOps Training Institute
            </span>

            <h1 className="mt-8 text-5xl font-bold leading-tight text-slate-900 lg:text-7xl">
                Master
                <span className="block text-orange-500">
                    AWS & DevOps
                </span>
                with Industry Experts
            </h1>

            <p className="mt-14 max-w-2xl text-xl leading-8 text-slate-600">
              Master AWS Cloud, DevOps and Generative AI through official AWS learning
              paths, immersive hands-on labs, certification-focused training and
              enterprise-grade projects.

              <br /><br />

              Whether you're a student, working professional or enterprise team,
              our programs help you build job-ready cloud skills, earn globally
              recognized AWS certifications and accelerate your career.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">

                <Button href="#training-programs">
                    Explore Courses
                </Button>

                <Button href="#contact" variant="secondary">
                    Book Free Career Guidance
                </Button>

            </div>

            <div className="mt-10 flex flex-wrap gap-4 text-sm font-medium text-slate-700">

                <div>✅ Official AWS Learning Paths</div>

                <div>✅ Hands-on Labs</div>

                <div>✅ Certification Preparation</div>

                <div>✅ Corporate Training</div>

            </div>

          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="hidden lg:flex items-center justify-end w-full pl-24"
          >

            <div className="hero-image w-full">
                <Image
                    src="/images/hero/hero-illustration.png"
                    alt="DS Infotech Enterprise Cloud DevOps AI"
                    width={1400}
                    height={1400}
                    priority
                    className="hero-illustration"
                />
            </div>

          </motion.div>

        </div>
      </Container>
    </section>
  );
}