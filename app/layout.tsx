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
        <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <a href="/" className="group">
              <div className="text-lg font-black uppercase tracking-[0.22em] text-white">
                Apex
              </div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.32em] text-red-500">
                Precision Cycles
              </div>
            </a>

            <div className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-widest text-neutral-300 md:flex">
              <a href="/" className="transition hover:text-red-500">
                Home
              </a>
              <a href="/services" className="transition hover:text-red-500">
                Services
              </a>
              <a href="/inventory" className="transition hover:text-red-500">
                Inventory
              </a>
              <a href="mailto:admin@apexprecisioncycles.com" className="transition hover:text-red-500">
                Contact
              </a>
            </div>

            <a
              href="mailto:admin@apexprecisioncycles.com"
              className="rounded-2xl bg-red-600 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-red-950/30 transition hover:bg-red-500"
            >
              Schedule Service
            </a>
          </nav>
        </header>

        <div className="pt-[76px]">{children}</div>
      </body>
    </html>
  );
}
