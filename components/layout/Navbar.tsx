"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";
import { navigation } from "@/constants/navigation";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur shadow-sm"
          : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">

          <Link href="/" className="text-3xl font-bold">
            DS <span className="text-orange-500">Infotech</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">

            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-slate-700 transition hover:text-orange-500"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="#contact"
              className="rounded-xl bg-orange-500 px-5 py-3 text-white transition hover:bg-orange-600"
            >
              Request Training
            </Link>

          </nav>

          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>

        </div>

        {mobileOpen && (
          <div className="border-t bg-white lg:hidden">

            <div className="flex flex-col py-6">

              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-4 py-3 hover:bg-slate-100"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="#contact"
                className="mx-4 mt-4 rounded-xl bg-orange-500 px-4 py-3 text-center text-white"
                onClick={() => setMobileOpen(false)}
              >
                Request Training
              </Link>

            </div>

          </div>
        )}

      </Container>
    </header>
  );
}