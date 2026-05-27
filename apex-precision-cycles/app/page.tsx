import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-24">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-red-500">Apex Precision Cycles</p>
        <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
          Precision-built performance bikes.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300 md:text-xl">
          Premium road and gravel bicycles, carefully sourced, restored, tuned, and prepared for riders who demand confidence from the first pedal stroke.
        </p>
        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <Link href="/services" className="rounded-2xl bg-red-600 px-6 py-3 text-center font-semibold shadow-lg shadow-red-900/30 transition hover:bg-red-500">
            View Services
          </Link>
          <a href="mailto:admin@apexprecisioncycles.com" className="rounded-2xl border border-white/20 px-6 py-3 text-center font-semibold text-white/90 transition hover:bg-white/10">
            Contact Apex
          </a>
        </div>
      </section>
    </main>
  );
}
