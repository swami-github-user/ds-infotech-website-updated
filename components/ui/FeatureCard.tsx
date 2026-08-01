import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  badges?: string[];
  href?: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  badges = [],
  href = "#",
}: FeatureCardProps) {
  return (
    <a
      href={href}
      className="group block rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-2xl"
    >
      <div className="mb-6 text-orange-500 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>

      <h3 className="text-2xl font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {description}
      </p>

      {badges.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {badges.map((badge) => (
            <span
              key={badge}
              className="rounded-full bg-orange-50 px-3 py-1 text-sm font-medium text-orange-600"
            >
              {badge}
            </span>
          ))}
        </div>
      )}

      <div className="mt-8 flex items-center font-semibold text-orange-500">
        Learn More

        <ArrowRight
          className="ml-2 transition-transform duration-300 group-hover:translate-x-2"
          size={18}
        />
      </div>
    </a>
  );
}