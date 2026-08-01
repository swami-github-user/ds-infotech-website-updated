import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { framework } from "@/constants/framework";

export default function LearningFramework() {
  return (
    <section className="py-28 bg-white">
      <Container>

        <SectionTitle
          eyebrow="OUR METHODOLOGY"
          title="The DS Infotech Learning Framework™"
          description="A structured enterprise learning methodology designed to transform technology teams through practical, measurable outcomes."
        />

        <div className="relative mt-20 max-w-4xl mx-auto">

          {/* Vertical Line */}

          <div className="absolute left-5 top-0 bottom-0 w-1 bg-orange-200"></div>

          <div className="space-y-14">

            {framework.map((step, index) => {

              const Icon = step.icon;

              return (

                <div
                  key={index}
                  className="relative flex items-start gap-8"
                >

                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg">

                    <Icon size={24} />

                  </div>

                  <div className="rounded-2xl border bg-white p-8 shadow-sm hover:shadow-xl transition w-full">

                    <span className="text-sm font-semibold uppercase tracking-wider text-orange-500">

                      Step {index + 1}

                    </span>

                    <h3 className="mt-2 text-2xl font-bold text-slate-900">

                      {step.title}

                    </h3>

                    <p className="mt-3 text-slate-600 leading-8">

                      {step.description}

                    </p>

                  </div>

                </div>

              );

            })}

          </div>

        </div>

      </Container>
    </section>
  );
}