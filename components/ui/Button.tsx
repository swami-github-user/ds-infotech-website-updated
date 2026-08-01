import Link from "next/link";

interface Props {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  href,
  children,
  variant = "primary",
}: Props) {
  const classes =
    variant === "primary"
      ? "rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600 transition"
      : "rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 hover:bg-slate-100 transition";

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}