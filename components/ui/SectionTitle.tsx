interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
}: Props) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">
          {eyebrow}
        </span>
      )}

      <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}