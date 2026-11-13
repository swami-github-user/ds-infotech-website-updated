import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const trustItems = [
  {
    title: "Certified Practitioners",
    description: "Programs are led by practitioners with over a decade of experience and AWS Professional and Specialty certifications.",
  },
  {
    title: "Real Delivery Experience",
    description: "Proven delivery to enterprise engineering teams, in India and for international audiences.",
  },
  {
    title: "Hands-on by Design",
    description: "Every concept is backed by a guided lab, so participants leave with working skills rather than slides.",
  },
  {
    title: "Current Content",
    description: "Courseware is updated as AWS services change, with particular depth in Generative AI and agentic AI.",
  },
  {
    title: "Partner Friendly",
    description: "We work comfortably under a training partner's brand, process and quality standards.",
  },
  {
    title: "Clear Outcomes",
    description: "Assessments, feedback and a completion report make the impact of each program visible.",
  },
];

export default function TrustSection() {
  return (
    <section
      id="about"
      className="bg-white py-24"
    >
      <Container>
        <SectionTitle
          eyebrow="ABOUT DS INFOTECH"
          title="Why Organizations Choose DS Infotech"
          description="DS Infotech is a specialized technology training company focused on AWS, DevOps and Generative AI. We design and deliver practical, lab-driven programs for enterprise teams and for training companies that need dependable subject-matter experts."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {trustItems.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-8 transition duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-xl"
            >
              <h3 className="text-xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}