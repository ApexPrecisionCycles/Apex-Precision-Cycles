"use client";

import React from "react";
import { motion } from "framer-motion";
import { Wrench, ShieldCheck, Gauge, Bike, Sparkles, CheckCircle2 } from "lucide-react";

const serviceTiers = [
  {
    name: "Apex Essential Tune",
    price: "Starting at $95",
    description: "Routine maintenance for a crisp, safe, ride-ready machine.",
    ideal: "Regular riders, seasonal refreshes, and pre-event checks.",
    items: [
      "Brake adjustment",
      "Derailleur adjustment",
      "Torque inspection",
      "Tire pressure + inspection",
      "Bolt safety check",
      "Chain lubrication",
      "Minor wheel true",
      "Safety inspection",
      "Test ride",
    ],
  },
  {
    name: "Apex Performance Tune",
    price: "Starting at $185",
    description: "A deeper service for riders who want silence, precision, and confidence under load.",
    ideal: "High-mileage road, gravel, and endurance bikes.",
    items: [
      "Everything in Essential Tune",
      "Full drivetrain deep cleaning",
      "Brake rotor cleaning",
      "Headset inspection",
      "Bottom bracket inspection",
      "Hub inspection",
      "Cable/housing inspection",
      "Tubeless sealant inspection",
      "Full bike wash/detail",
      "Precision drivetrain tuning",
    ],
    featured: true,
  },
  {
    name: "Apex Complete Overhaul",
    price: "Starting at $450",
    description: "The full reset. Stripped, inspected, cleaned, serviced, rebuilt, and verified.",
    ideal: "Premium bike restoration, neglected bikes, and serious pre-season prep.",
    items: [
      "Complete drivetrain removal + cleaning",
      "Full bearing inspection/service",
      "Headset overhaul",
      "Bottom bracket overhaul",
      "Hub service",
      "Brake bleed",
      "Full cable/hose inspection",
      "Full torque verification",
      "Wheel inspection + true",
      "Deep detail cleaning",
      "Complete rebuild + test ride",
    ],
  },
];

const addOns = [
  "Tubeless setup",
  "Brake bleed",
  "Wheel truing",
  "Bar tape installation",
  "Di2 / AXS setup",
  "Power meter installation",
  "Cassette + chain replacement",
  "Bike build assembly",
  "Fit adjustment consultation",
  "Race prep detailing",
];

export default function ApexServicesPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.24),transparent_35%),linear-gradient(to_bottom,rgba(10,10,10,0.15),rgba(10,10,10,1))]" />
<div
  className="absolute inset-0 bg-cover bg-center opacity-30"
  style={{ backgroundImage: "url('/images/hero-bike.png')" }}
/>

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-400/30 bg-red-500/10 px-4 py-2 text-sm text-red-200">
              <Sparkles className="h-4 w-4" />
              Performance-focused bicycle service
            </div>
            <h1 className="text-5xl font-black tracking-tight md:text-7xl">
              Sharpen the <span className="text-red-500">Blade</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-neutral-200 md:text-xl">
              Your bike should feel precise, responsive, silent, and confidence-inspiring every time you ride. Apex Precision Cycles offers service packages designed to keep your machine operating at its absolute best — from routine tune-ups to complete drivetrain and bearing overhauls.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="#services" className="rounded-2xl bg-red-600 px-6 py-3 text-center font-semibold shadow-lg shadow-red-900/30 transition hover:bg-red-500">
                View Service Packages
              </a>
              <a href="#contact" className="rounded-2xl border border-white/20 px-6 py-3 text-center font-semibold text-white/90 transition hover:bg-white/10">
                Schedule Service
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-neutral-900/70 px-6 py-6">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 text-sm font-semibold uppercase tracking-widest text-neutral-300 md:grid-cols-5">
          <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-red-500" /> Inspected</div>
          <div className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-red-500" /> Cleaned</div>
          <div className="flex items-center gap-2"><Gauge className="h-4 w-4 text-red-500" /> Tuned</div>
          <div className="flex items-center gap-2"><Wrench className="h-4 w-4 text-red-500" /> Verified</div>
          <div className="flex items-center gap-2"><Bike className="h-4 w-4 text-red-500" /> Ride-Ready</div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-500">Service Menu</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Choose your edge.</h2>
          <p className="mt-4 text-neutral-300">
            Whether your bike needs a quick refresh or a complete mechanical reset, every Apex service is built around precision, safety, and performance.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {serviceTiers.map((tier) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`relative rounded-3xl border p-6 shadow-2xl ${tier.featured ? "border-red-500/70 bg-red-950/20 shadow-red-950/30" : "border-white/10 bg-white/[0.04] shadow-black/20"}`}
            >
              {tier.featured && (
                <div className="absolute right-5 top-5 rounded-full bg-red-600 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <h3 className="pr-28 text-2xl font-black">{tier.name}</h3>
              <p className="mt-2 text-xl font-bold text-red-400">{tier.price}</p>
              <p className="mt-4 text-neutral-300">{tier.description}</p>
              <div className="mt-5 rounded-2xl bg-black/30 p-4 text-sm text-neutral-300">
                <span className="font-bold text-white">Ideal for:</span> {tier.ideal}
              </div>
              <ul className="mt-6 space-y-3 text-sm text-neutral-200">
                {tier.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-neutral-900 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-500">Precision Add-Ons</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">Dial in the details.</h2>
            <p className="mt-4 text-neutral-300">
              Add targeted service work to any package, or schedule these individually when your bike needs specific attention.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {addOns.map((addOn) => (
              <div key={addOn} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm font-semibold text-neutral-200">
                {addOn}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-neutral-900 to-black p-8 md:p-12">
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-500">The Apex Standard</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Precision matters.</h2>
              <p className="mt-5 text-lg leading-8 text-neutral-300">
                At Apex Precision Cycles, service is more than maintenance — it is refinement. Every adjustment, torque check, and drivetrain detail is performed with the belief that a properly prepared bicycle transforms the entire riding experience.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h3 className="text-2xl font-black">Ready to sharpen your ride?</h3>
              <p className="mt-3 text-neutral-300">Contact Apex to schedule service, request a quote, or discuss what your bike needs before the next big ride.</p>
              <a href="mailto:admin@apexprecisioncycles.com" className="mt-6 inline-flex w-full justify-center rounded-2xl bg-red-600 px-6 py-3 font-semibold shadow-lg shadow-red-900/30 transition hover:bg-red-500">
                Schedule Service
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
