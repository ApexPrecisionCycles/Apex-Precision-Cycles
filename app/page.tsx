export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section
        className="relative min-h-screen overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-bike.png')" }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-500">
              Apex Precision Cycles
            </p>

            <h1 className="mt-5 text-5xl font-black tracking-tight md:text-7xl">
              Precision-Built
              <br />
              Performance Bikes.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-200 md:text-xl">
              Premium road and gravel bicycles, carefully sourced, restored,
              tuned, and prepared for riders who demand confidence from the
              first pedal stroke.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="/inventory"
                className="rounded-2xl bg-red-600 px-6 py-3 text-center font-semibold shadow-lg shadow-red-900/30 transition hover:bg-red-500"
              >
                View Available Builds
              </a>

              <a
                href="/services"
                className="rounded-2xl border border-white/20 px-6 py-3 text-center font-semibold text-white/90 transition hover:bg-white/10"
              >
                Sharpen the Blade
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-neutral-900 px-6 py-6">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 text-sm font-semibold uppercase tracking-widest text-neutral-300 md:grid-cols-5">
          <div>Inspected</div>
          <div>Cleaned</div>
          <div>Tuned</div>
          <div>Verified</div>
          <div>Ride-Ready</div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-500">
            The Apex Standard
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
            Built for riders who notice the details.
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-300">
            Apex Precision Cycles exists for riders who believe a bike should
            feel fast, silent, responsive, and completely dialed. Every build
            and service is approached with obsessive attention to detail — from
            drivetrain precision to braking confidence to the final test ride.
          </p>
        </div>
      </section>
    </main>
  );
}
