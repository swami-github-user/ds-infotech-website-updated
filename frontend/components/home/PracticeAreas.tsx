import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FeatureCard from "@/components/ui/FeatureCard";
import { practiceAreas } from "@/constants/practiceAreas";

export default function PracticeAreas() {
  return (
    <section
      id="practice-areas"
      className="bg-white py-24"
    >
      <Container>

        <SectionTitle
          eyebrow="PRACTICE AREAS"
          title="Enterprise Capabilities We Enable"
          description="Focused learning paths aligned to modern enterprise technology initiatives."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {practiceAreas.map((area) => {
            const Icon = area.icon;

            return (
              <FeatureCard
                key={area.title}
                icon={<Icon size={42} />}
                title={area.title}
                description={area.description}
                badges={area.badges}
              />
            );
          })}

        </div>

      </Container>
    </section>
  );
}