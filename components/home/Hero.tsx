"use client";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white"
    >
      <Container>
        <div className="grid min-h-[85vh] items-center gap-16 lg:grid-cols-2">

          {/* Left Content */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
              Technology Enablement Partner
            </span>

            <h1 className="mt-8 text-5xl font-bold leading-tight text-slate-900 lg:text-7xl">

              Enterprise Cloud

              <span className="block text-orange-500">

                DevOps & AI

              </span>

              Learning

            </h1>

            <p className="mt-8 max-w-xl text-xl leading-8 text-slate-600">

              Helping enterprises build future-ready teams through
              AWS Cloud, DevOps, AI & GenAI learning solutions.

            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <Button href="#contact">
                Request Training
              </Button>

              <Button href="#solutions" variant="secondary">
                Explore Solutions
              </Button>

            </div>

          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="hidden lg:flex justify-center"
          >

            <div className="flex h-[450px] w-[450px] items-center justify-center rounded-3xl bg-slate-100 shadow-xl">

              <span className="text-2xl text-slate-400">
                Hero Illustration
              </span>

            </div>

          </motion.div>

        </div>
      </Container>
    </section>
  );
}