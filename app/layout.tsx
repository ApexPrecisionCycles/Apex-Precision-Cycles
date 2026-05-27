import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apex Precision Cycles",
  description:
    "Premium road and gravel bicycles, precision service, and performance-focused bicycle preparation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/75 backdrop-blur-xl">
          <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4">
            <a href="/" className="shrink-0">
              <div className="text-lg font-black uppercase tracking-[0.22em] text-white">
                Apex
              </div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.32em] text-red-500">
                Precision Cycles
              </div>
            </a>

            <div className="flex flex-wrap items-center justify-center gap-3 text-[11px] font-semibold uppercase tracking-widest text-neutral-300 sm:gap-5 sm:text-xs lg:gap-8 lg:text-sm">
              <a href="/" className="transition hover:text-red-500">
                Home
              </a>
              <a href="/services" className="transition hover:text-red-500">
                Services
              </a>
              <a href="/inventory" className="transition hover:text-red-500">
                Inventory
              </a>
              <a
                href="/contact"
                className="transition hover:text-red-500"
              >
                Contact
              </a>
            </div>

            <a
              href="/contact"
              className="hidden rounded-2xl bg-red-600 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-red-950/30 transition hover:bg-red-500 sm:inline-flex"
            >
              Schedule Service
            </a>
          </nav>
        </header>

        <div className="pt-[112px] sm:pt-[88px]">{children}</div>
      </body>
    </html>
  );
}
