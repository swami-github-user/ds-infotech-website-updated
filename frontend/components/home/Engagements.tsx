import { Handshake, Building, PenTool, Check } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const engagements = [
  {
    icon: Handshake,
    title: "Delivery Partnerships",
    audience: "For training companies",
    points: [
      "We deliver batches for your clients under your brand",
      "Per-day or per-batch commercials",
      "Confidentiality and non-solicitation by default",
      "Pilot batch available for new partners",
    ],
  },
  {
    icon: Building,
    title: "Corporate Programs",
    audience: "For enterprise L&D teams",
    points: [
      "End-to-end programs from skill-gap discussion to report",
      "Single workshops or multi-batch upskilling tracks",
      "Labs aligned to your AWS environment",
      "Progress tracking for every participant",
    ],
  },
  {
    icon: PenTool,
    title: "Content Development",
    audience: "For training teams and platforms",
    points: [
      "Course outlines, slide decks and trainer guides",
      "Step-by-step lab guides with tested solutions",
      "Assessments and capstone projects",
      "White-label delivery in your template",
    ],
  },
];

export default function Engagements() {
  return (
    <section id="engagements" className="bg-slate-50 py-24">
      <Container>
        <SectionTitle
          eyebrow="ENGAGEMENT MODELS"
          title="Ways to Work With Us"
          description="Choose the model that fits your organization. All engagements start with a short requirement discussion and a written proposal."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {engagements.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex flex-col rounded-3xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-2xl"
              >
                <Icon className="text-orange-500" size={40} />

                <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-orange-500">
                  {item.audience}
                </p>

                <h3 className="mt-2 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <ul className="mt-6 flex-1 space-y-3">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3 text-slate-600">
                      <Check
                        className="mt-1 shrink-0 text-orange-500"
                        size={18}
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-8 rounded-xl border border-orange-500 py-3 text-center font-semibold text-orange-600 transition hover:bg-orange-500 hover:text-white"
                >
                  Discuss This Model
                </a>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
