import Navbar from "@/components/layout/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="pt-20">

        <section className="flex h-screen items-center justify-center">

          <div className="text-center">

            <h1 className="text-6xl font-bold">
              Enterprise Cloud,
              <br />
              DevOps & AI Learning
            </h1>

            <p className="mt-8 text-xl text-slate-600">
              Enterprise Learning. Real Skills. Real Impact.
            </p>

          </div>

        </section>

      </main>
    </>
  );
}