"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Container from "@/components/ui/Container";

const stats = [
  {
    number: 5000,
    suffix: "+",
    title: "Professionals Trained",
  },
  {
    number: 200,
    suffix: "+",
    title: "Corporate Trainings",
  },
  {
    number: 25,
    suffix: "+",
    title: "Enterprise Courses",
  },
  {
    number: 98,
    suffix: "%",
    title: "Client Satisfaction",
  },
];

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="bg-white py-24"
    >
      <Container>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat) => (

            <div
              key={stat.title}
              className="rounded-2xl bg-slate-50 p-10 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="text-5xl font-bold text-orange-500">

                {inView && (
                  <CountUp
                    end={stat.number}
                    duration={2}
                  />
                )}

                {stat.suffix}

              </div>

              <p className="mt-4 text-slate-600">

                {stat.title}

              </p>

            </div>

          ))}

        </div>

      </Container>
    </section>
  );
}