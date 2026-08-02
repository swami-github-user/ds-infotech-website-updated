import Container from "@/components/ui/Container";

const trustItems = [
  {
    title: "AWS Certified Trainers",
    description: "Learn directly from experienced professionals with extensive real-world AWS implementation experience.",
  },
  {
    title: "Standard AWS Learning Paths",
    description: "Structured programs aligned with AWS certification objectives and industry best practices.",
  },
  {
    title: "Hands-on Labs",
    description: "Real Practice every concept using guided labs and enterprise-style projects on AWS. Projects & Use Cases",
  },
  {
    title: "Certification Preparation",
    description: "Focused mentoring, mock exams and guidance to confidently clear AWS certification exams.",
  },
  {
    title: "Corporate Training",
    description: "Instructor-led programs tailored for enterprise teams, partners and technology organizations.",
  },
  {
    title: "Career Focused Learning",
    description: "Build practical cloud and DevOps skills that prepare you for interviews and real projects.",
  },
];

export default function TrustSection() {
  return (
    <section
      id="about"
      className="bg-white py-24"
    >
      <Container>
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            ABOUT DS INFOTECH
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Why Organizations Choose DS Infotech
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            DS Infotech is a specialized AWS training company helping students, working professionals and enterprise teams build real-world cloud expertise. 
            Our instructor-led programs combine official AWS learning paths, hands-on labs, certification preparation and enterprise use cases to deliver practical skills that employers value.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {trustItems.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-4 text-base leading-7 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}