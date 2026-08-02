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
          eyebrow="OUR LEARNING JOURNEY"
          title="Your Success Framework™"
          description="A structured learning journey designed to take you from AWS fundamentals to professional certifications through instructor-led training, hands-on labs, real-world projects and exam readiness."
        />

        <div className="relative mt-20 max-w-6xl mx-auto">
          {/* Center Timeline */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-orange-200"></div>

          <div className="space-y-16">
            {framework.map((step, index) => {
              const Icon = step.icon;
              const isLeft = index % 2 === 0;

              const Card = (
                <motion.div
                  initial={{
                    opacity: 0,
                    x: isLeft ? -60 : 60,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                  }}
                  whileHover={{
                    scale: 1.02,
                    y: -6,
                  }}
                className="flex-1 max-w-xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-2xl"
                >
                  <span className="text-sm font-semibold uppercase tracking-wider text-orange-500">
                    AWS JOURNEY • STEP {index + 1}
                  </span>

                  <h3 className="mt-2 text-2xl font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-3 leading-8 text-slate-600">
                    {step.description}
                  </p>
                </motion.div>
              );

              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >
                  <div className="flex w-full items-center">
                    {isLeft ? (
                      <>
                        {Card}

                        <div className="relative flex w-24 justify-center">
                          <motion.div
                            whileHover={{
                              rotate: 360,
                            }}
                            transition={{
                              duration: 0.6,
                            }}
                            className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-white shadow-xl"
                          >
                            <Icon size={30} />
                          </motion.div>
                        </div>

                        <div className="flex-1"></div>
                      </>
                    ) : (
                      <>
                        <div className="flex-1"></div>

                        <div className="relative flex w-24 justify-center">
                          <motion.div
                            whileHover={{
                              rotate: 360,
                            }}
                            transition={{
                              duration: 0.6,
                            }}
                            className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-white shadow-xl"
                          >
                            <Icon size={26} />
                          </motion.div>
                        </div>

                        {Card}
                      </>
                    )}
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