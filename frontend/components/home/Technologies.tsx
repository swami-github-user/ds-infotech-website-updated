import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { technologies } from "@/constants/technologies";

export default function Technologies() {
  return (
    <section
      id="technologies"
      className="py-24 bg-slate-50"
    >
      <Container>

        <SectionTitle
          eyebrow="TECHNOLOGIES"
          title="Technologies We Enable"
          description="Hands-on learning across the platforms and tools modern enterprises rely on."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

          {technologies.map((tech) => (

            <div
              key={tech.name}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-xl"
            >

              <h3 className="text-xl font-semibold">

                {tech.name}

              </h3>

              <p className="mt-3 text-slate-500">

                {tech.category}

              </p>

            </div>

          ))}

        </div>

      </Container>
    </section>
  );
}