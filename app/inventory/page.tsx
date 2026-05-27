export default function InventoryPage() {
  const placeholders = [
    {
      title: "Road Performance Build",
      details: "Carbon road bike • Electronic shifting • Race-ready inspection",
    },
    {
      title: "Endurance Road Build",
      details: "All-day geometry • Premium components • Long-mile comfort",
    },
    {
      title: "Gravel / All-Road Build",
      details: "Wide tire clearance • Adventure-ready • Fully serviced",
    },
  ];

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-500">
          Apex Inventory
        </p>

        <h1 className="mt-4 text-5xl font-black tracking-tight md:text-7xl">
          Available Builds
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
          Apex Precision Cycles is currently sourcing, inspecting, tuning, and
          preparing premium road and gravel bicycles. Inventory listings will be
          added here as bikes complete the Apex service and verification process.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {placeholders.map((bike) => (
            <div
              key={bike.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20"
            >
              <div className="flex h-64 items-center justify-center rounded-2xl border border-dashed border-white/20 bg-neutral-900 text-center text-neutral-500">
                Bike Photos Coming Soon
              </div>

              <h2 className="mt-6 text-2xl font-black">{bike.title}</h2>

              <p className="mt-3 text-neutral-300">{bike.details}</p>

              <p className="mt-5 text-sm font-semibold uppercase tracking-widest text-red-500">
                Coming Soon
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
