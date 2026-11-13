"use client";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { framework } from "@/constants/framework";
import { motion } from "framer-motion";

export default function LearningFramework() {
  return (
    <section className="py-28 bg-white">
      <Container>
        <SectionTitle
          eyebrow="HOW AN ENGAGEMENT RUNS"
          title="From Requirement to Results"
          description="A clear, repeatable process so you know what to expect before, during and after every program."
        />

        <div className="relative mt-20 max-w-6xl mx-auto">
          {/* Center Timeline */}
          <div className="absolute left-7 top-0 bottom-0 w-1 -translate-x-1/2 bg-orange-200 md:left-1/2"></div>

          <div className="space-y-10 md:space-y-16">
            {framework.map((step, index) => {
              const Icon = step.icon;
              const isLeft = index % 2 === 0;

              const Card = (
                <motion.div
                  initial={{
                    opacity: 0,
                    x: isLeft ? -40 : 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.4,
                  }}
                  whileHover={{
                    scale: 1.02,
                    y: -6,
                  }}
                className="w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-2xl"
                >
                  <span className="text-sm font-semibold uppercase tracking-wider text-orange-500">
                    STEP {index + 1}
                  </span>

                  <h3 className="mt-2 text-2xl font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-3 leading-8 text-slate-600">
                    {step.description}
                  </p>
                </motion.div>
              );

              const Dot = (
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-white shadow-xl"
                >
                  <Icon size={26} />
                </motion.div>
              );

              return (
                <div
                  key={index}
                  className="grid grid-cols-[3.5rem_1fr] items-center gap-4 md:grid-cols-[1fr_6rem_1fr] md:gap-0"
                >
                  <div className="col-start-1 row-start-1 flex justify-center md:col-start-2">
                    {Dot}
                  </div>

                  <div
                    className={`relative z-10 col-start-2 row-start-1 flex ${
                      isLeft
                        ? "md:col-start-1 md:justify-end"
                        : "md:col-start-3 md:justify-start"
                    }`}
                  >
                    {Card}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}