export default function ContactPage() {
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
              Contact Apex
            </p>

            <h1 className="mt-5 text-5xl font-black tracking-tight md:text-7xl">
              Let’s Talk Bikes.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-200 md:text-xl">
              Whether you need service, want to sell a bike, are looking for a
              premium build, or have questions about Apex Precision Cycles,
              reach out and tell us what you’re working with.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href="mailto:admin@apexprecisioncycles.com?subject=Apex%20Service%20Inquiry"
                className="rounded-2xl bg-red-600 px-6 py-3 text-center font-semibold shadow-lg shadow-red-900/30 transition hover:bg-red-500"
              >
                Email Apex
              </a>

              <a
                href="/services"
                className="rounded-2xl border border-white/20 px-6 py-3 text-center font-semibold text-white/90 transition hover:bg-white/10"
              >
                View Services
              </a>

              <a
                href="/sell-your-bike"
                className="rounded-2xl border border-red-500/50 bg-red-950/20 px-6 py-3 text-center font-semibold text-red-100 shadow-lg shadow-red-950/20 transition hover:bg-red-900/40"
              >
                Sell Your Bike
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-500">
              Get in Touch
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Start the conversation.
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-300">
              Apex is currently operating by appointment and online inquiry.
              Send a message with your bike details, service needs, or inventory
              questions and we’ll respond with next steps.
            </p>

            <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/20">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-500">
                Email
              </p>

              <a
                href="mailto:admin@apexprecisioncycles.com"
                className="mt-3 block text-2xl font-black text-white transition hover:text-red-500"
              >
                admin@apexprecisioncycles.com
              </a>

              <p className="mt-4 text-neutral-300">
                For the fastest response, include photos, bike details, service
                goals, or the reason for your inquiry.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-neutral-900 p-8 shadow-2xl shadow-black/20">
            <h2 className="text-3xl font-black">What should you include?</h2>

            <div className="mt-8 grid gap-6">
              <div className="rounded-3xl border border-white/10 bg-black/30 p-6">
                <h3 className="text-2xl font-black">For Service</h3>
                <ul className="mt-4 space-y-3 text-neutral-300">
                  <li>• Year, make, model, and size</li>
                  <li>• What service you’re looking for</li>
                  <li>• Any noises, shifting issues, braking issues, or damage</li>
                  <li>• Photos if something looks worn, broken, or unusual</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/30 p-6">
                <h3 className="text-2xl font-black">For Selling a Bike</h3>
                <ul className="mt-4 space-y-3 text-neutral-300">
                  <li>• Full-bike photos from both sides</li>
                  <li>• Year, make, model, and frame size</li>
                  <li>• Groupset, wheels, upgrades, and condition</li>
                  <li>• Your asking price or request for an Apex offer</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/30 p-6">
                <h3 className="text-2xl font-black">For Buying a Bike</h3>
                <ul className="mt-4 space-y-3 text-neutral-300">
                  <li>• Your height and approximate inseam</li>
                  <li>• Road, endurance, gravel, or all-road preference</li>
                  <li>• Budget range</li>
                  <li>• Riding goals, fit concerns, or must-have components</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-900 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-500">
              Apex Inquiry Paths
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Choose the right starting point.
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-300">
              Apex is built around precision service, premium pre-owned builds,
              and serious road and gravel riders. Start with the category that
              best fits what you need.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <a
              href="mailto:admin@apexprecisioncycles.com?subject=Apex%20Service%20Inquiry"
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/20 transition hover:border-red-500/60 hover:bg-red-950/20"
            >
              <h3 className="text-2xl font-black">Service Inquiry</h3>
              <p className="mt-4 leading-7 text-neutral-300">
                Tune-ups, drivetrain service, brake work, detailing, or full
                overhaul requests.
              </p>
              <p className="mt-6 text-sm font-bold uppercase tracking-widest text-red-500">
                Email Service Request
              </p>
            </a>

            <a
              href="mailto:admin@apexprecisioncycles.com?subject=Sell%20My%20Bike%20Inquiry"
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/20 transition hover:border-red-500/60 hover:bg-red-950/20"
            >
              <h3 className="text-2xl font-black">Sell Your Bike</h3>
              <p className="mt-4 leading-7 text-neutral-300">
                Submit a road, endurance, gravel, or premium performance bike
                for Apex review.
              </p>
              <p className="mt-6 text-sm font-bold uppercase tracking-widest text-red-500">
                Start Submission
              </p>
            </a>

            <a
              href="mailto:admin@apexprecisioncycles.com?subject=Apex%20Bike%20Search%20Inquiry"
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/20 transition hover:border-red-500/60 hover:bg-red-950/20"
            >
              <h3 className="text-2xl font-black">Find Me a Bike</h3>
              <p className="mt-4 leading-7 text-neutral-300">
                Looking for a specific style, size, or build? Tell Apex what
                you’re after.
              </p>
              <p className="mt-6 text-sm font-bold uppercase tracking-widest text-red-500">
                Request Help
              </p>
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-neutral-900 to-black p-8 md:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-500">
            By Appointment
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
            Precision work starts with the details.
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-300">
            Apex Precision Cycles is currently building its service and resale
            operation by appointment. Send your inquiry first so we can review
            the details and point you in the right direction.
          </p>

          <a
            href="mailto:admin@apexprecisioncycles.com"
            className="mt-8 inline-flex rounded-2xl bg-red-600 px-6 py-3 font-semibold shadow-lg shadow-red-900/30 transition hover:bg-red-500"
          >
            Contact Apex
          </a>
        </div>
      </section>
    </main>
  );
}
