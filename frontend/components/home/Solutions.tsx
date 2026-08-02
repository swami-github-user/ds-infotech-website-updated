import Container from "@/components/ui/Container";
import FeatureCard from "@/components/ui/FeatureCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { solutions } from "@/constants/solutions";

export default function Solutions() {
  return (
    <section
      id="solutions"
      className="bg-slate-50 py-24"
    >
      <Container>

        <SectionTitle
          eyebrow="SOLUTIONS"
          title="Enterprise Learning Solutions"
          description="Programs designed to help organizations adopt modern technologies with confidence."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {solutions.map((solution) => {
            const Icon = solution.icon;

            return (
              <FeatureCard
                key={solution.title}
                icon={<Icon size={42} />}
                title={solution.title}
                description={solution.description}
                badges={solution.badges}
              />
            );
          })}
        </div>

      </Container>
    </section>
  );
}