import Link from "next/link";

interface Props {
  href: string;
  children: React.ReactNode;
}

export default function Button({
  href,
  children,
}: Props) {
  return (
    <Link
      href={href}
      className="rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
    >
      {children}
    </Link>
  );
}