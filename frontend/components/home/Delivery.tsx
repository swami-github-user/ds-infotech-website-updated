import {
  MonitorPlay,
  FlaskConical,
  CalendarClock,
  ClipboardList,
  BookOpen,
  SlidersHorizontal,
} from "lucide-react";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const deliveryItems = [
  {
    icon: MonitorPlay,
    title: "Virtual Instructor-led",
    description:
      "Live sessions on Microsoft Teams, Zoom, Webex or your own platform, built around screen-shared demos and real-time Q&A.",
  },
  {
    icon: FlaskConical,
    title: "Lab-first Learning",
    description:
      "Around 60% of each program is hands-on. Labs run in client-provided AWS accounts or sandbox accounts with budget alerts and cleanup steps.",
  },
  {
    icon: CalendarClock,
    title: "Flexible Scheduling",
    description:
      "Full-day, half-day or split sessions across weekdays or weekends, with slots that suit India, UK, Europe and US time zones.",
  },
  {
    icon: ClipboardList,
    title: "Assessments & Reporting",
    description:
      "Pre- and post-training assessments, daily feedback and a completion report for your L&D team or end client.",
  },
  {
    icon: BookOpen,
    title: "Original Courseware",
    description:
      "Slides, lab guides and trainer notes developed in-house, available under your brand for delivery partnerships.",
  },
  {
    icon: SlidersHorizontal,
    title: "Tailored to Your Stack",
    description:
      "Outlines are adjusted to the audience's level and the services your teams actually use, not delivered as a fixed script.",
  },
];

export default function Delivery() {
  return (
    <section id="delivery" className="bg-white py-24">
      <Container>
        <SectionTitle
          eyebrow="HOW WE DELIVER"
          title="Built for Enterprise Teams and Training Partners"
          description="A predictable delivery model that L&D teams and training companies can plan around."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {deliveryItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-8 transition duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-xl"
              >
                <Icon className="text-orange-500" size={36} />

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
