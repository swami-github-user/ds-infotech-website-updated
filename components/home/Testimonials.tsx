"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { testimonials } from "@/constants/testimonials";

export default function Testimonials() {
  return (
    <section className="py-28 bg-white">
      <Container>
        <SectionTitle
          eyebrow="TESTIMONIALS"
          title="What Our Clients Say"
          description="Organizations trust DS Infotech to deliver practical enterprise learning experiences that create measurable business impact."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-xl"
            >
              <div className="mb-6 flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-orange-500 text-orange-500"
                  />
                ))}
              </div>

              <p className="leading-8 text-slate-600 italic">
                "{testimonial.quote}"
              </p>

              <div className="mt-8 flex items-center gap-4">

                <div>
                  <h4 className="font-semibold text-slate-900">
                    {testimonial.name}
                  </h4>

                  <p className="text-sm text-slate-500">
                    {testimonial.designation}
                  </p>

                  <p className="text-sm font-medium text-orange-500">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}