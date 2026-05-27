import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apex Precision Cycles",
  description: "Premium bicycle service, restoration, and performance tuning.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
