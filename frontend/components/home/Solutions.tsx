import Container from "@/components/ui/Container";
import FeatureCard from "@/components/ui/FeatureCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { solutions } from "@/constants/solutions";

export default function Solutions() {
  return (
    <section
      id="training-programs"
      className="bg-slate-50 py-24"
    >
      <Container>

        <SectionTitle
          eyebrow="AWS TRAINING PROGRAMS"
          title="AWS Certification & Professional Training Programs"
          description="Comprehensive AWS learning paths designed for beginners, professionals and enterprise teams. Every course includes instructor-led training, hands-on labs, real-world projects and certification guidance."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
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