"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { trustedBy } from "@/constants/trustedBy";

export default function TrustedBy() {
  return (
    <section className="bg-slate-50 py-28">
      <Container>
        <SectionTitle
          eyebrow="TECHNOLOGY ECOSYSTEM"
          title="Platforms We Specialize In"
          description="We deliver enterprise training across the world's leading Cloud, DevOps, AI and Infrastructure technologies."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustedBy.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -6,
                scale: 1.03,
              }}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-xl"
            >
              <div className="flex h-20 items-center justify-center">
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={70}
                  height={70}
                  className="object-contain"
                />
              </div>

              <h3 className="mt-6 text-center text-lg font-semibold text-slate-900">
                {item.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}