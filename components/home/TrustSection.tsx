import Container from "@/components/ui/Container";

const trustItems = [
  {
    title: "15+ Years",
    description: "Combined Enterprise Technology Experience",
  },
  {
    title: "AWS • DevOps • AI",
    description: "Specialized Learning Paths",
  },
  {
    title: "Hands-on Labs",
    description: "Real Enterprise Projects & Use Cases",
  },
  {
    title: "Corporate Ready",
    description: "Instructor-led Delivery for Teams",
  },
];

export default function TrustSection() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            WHY CHOOSE US
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Enterprise Learning Built by Practitioners
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Every program is designed and delivered by experienced cloud and
            DevOps professionals who work on real enterprise projects—not
            trainers who only teach theory.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-xl"
            >
              <h3 className="text-3xl font-bold text-orange-500">
                {item.title}
              </h3>

              <p className="mt-5 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}