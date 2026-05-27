export default function SellYourBikePage() {
  const bikeTypes = [
    "Carbon road bikes",
    "Endurance road bikes",
    "Gravel bikes",
    "Electronic shifting builds",
    "Disc brake performance bikes",
    "Premium aluminum road/gravel bikes",
  ];

  const processSteps = [
    {
      title: "Submit the Bike",
      text: "Complete the bike submission portal with photos, year, make, model, size, drivetrain, wheelset, condition, asking price, and any known issues.",
    },
    {
      title: "Apex Reviews It",
      text: "We evaluate whether the bike fits our inventory, resale standards, service process, and current market demand.",
    },
    {
      title: "Receive an Offer",
      text: "If the bike is a good fit, Apex will follow up with a purchase offer or a consignment-style discussion.",
    },
    {
      title: "Inspection + Finalization",
      text: "The bike is inspected in person before final purchase. Frame condition, mechanical issues, or missing details may affect the final offer.",
    },
  ];

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section
        className="relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-bike.png')" }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 md:py-36">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-500">
              Sell Your Bike
            </p>

            <h1 className="mt-5 text-5xl font-black tracking-tight md:text-7xl">
              Sell Your Bike to Apex.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-200 md:text-xl">
              Have a quality road, gravel, or endurance bike sitting unused?
              Apex Precision Cycles buys select performance bicycles and gives
              them the inspection, service, and presentation they deserve.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href="#bike-submission"
                className="rounded-2xl bg-red-600 px-6 py-3 text-center font-semibold shadow-lg shadow-red-900/30 transition hover:bg-red-500"
              >
                Start a Bike Submission
              </a>

              <a
                href="#what-we-buy"
                className="rounded-2xl border border-white/20 px-6 py-3 text-center font-semibold text-white/90 transition hover:bg-white/10"
              >
                What We Buy
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="what-we-buy" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-500">
              What Apex Looks For
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Performance bikes with real rider value.
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-300">
              Apex focuses on modern, serviceable bikes that can be restored,
              tuned, documented, and prepared for their next rider. We are
              especially interested in clean road, endurance, and gravel bikes
              from respected performance brands.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {bikeTypes.map((type) => (
              <div
                key={type}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-lg font-bold shadow-xl shadow-black/20"
              >
                {type}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-900 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-500">
              The Process
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Simple. Fair. No games.
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-300">
              Selling a high-end bike can be a pain. Apex makes the process
              straightforward by focusing on clean communication, realistic
              market value, and a proper in-person inspection.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-3xl border border-white/10 bg-black/30 p-6 shadow-xl shadow-black/20"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600 text-xl font-black">
                  {index + 1}
                </div>

                <h3 className="text-2xl font-black">{step.title}</h3>

                <p className="mt-4 leading-7 text-neutral-300">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="bike-submission"
        className="scroll-mt-32 bg-neutral-950 px-6 py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-500">
              Bike Submission Portal
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Submit your bike for Apex review.
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-300">
              Complete the form below and upload clear photos of your bike. Apex
              will review the submission and follow up if the bike fits our
              current inventory standards.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-neutral-900 to-black p-4 shadow-2xl shadow-black/40 md:p-6">
            <div className="mb-6 rounded-3xl border border-red-500/20 bg-red-950/20 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-500">
                Before You Submit
              </p>

              <p className="mt-3 leading-7 text-neutral-300">
                Clear photos help Apex evaluate your bike faster. Please include
                full-bike photos from both sides, drivetrain details, cockpit,
                wheels, and any blemishes or damage.
              </p>
            </div>

            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black p-2">
              <iframe
                src="https://tally.so/embed/eqYddE?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                width="100%"
                height="1500"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Sell Your Bike to Apex Form"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
            <h2 className="text-3xl font-black">Please Include</h2>

            <ul className="mt-6 space-y-3 text-neutral-300">
              <li>• Year, make, model, and size</li>
              <li>• Clear photos of the full bike from both sides</li>
              <li>• Close-ups of drivetrain, wheels, cockpit, and frame</li>
              <li>• Groupset, wheelset, and upgrades</li>
              <li>• Serial number photo if available</li>
              <li>• Known damage, crashes, creaks, or mechanical issues</li>
              <li>
                • Your asking price or whether you want Apex to make an offer
              </li>
            </ul>
          </div>

          <div className="rounded-[2rem] border border-red-500/30 bg-red-950/20 p-8">
            <h2 className="text-3xl font-black">Apex May Pass On</h2>

            <ul className="mt-6 space-y-3 text-neutral-300">
              <li>• Bikes with frame damage or questionable carbon repairs</li>
              <li>• Bikes with unclear ownership history</li>
              <li>• Heavily neglected bikes with poor resale economics</li>
              <li>• Low-value department store bikes</li>
              <li>• Bikes that do not fit the Apex road/gravel focus</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-neutral-900 to-black p-8 md:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-500">
            Ready to Submit?
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
            Tell us what you have.
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-300">
            Use the bike submission portal above to send your bike details and
            photos to Apex. If it fits our inventory standards, we will follow
            up with next steps.
          </p>

          <a
            href="#bike-submission"
            className="mt-8 inline-flex rounded-2xl bg-red-600 px-6 py-3 font-semibold shadow-lg shadow-red-900/30 transition hover:bg-red-500"
          >
            Start Submission
          </a>
        </div>
      </section>
    </main>
  );
}
