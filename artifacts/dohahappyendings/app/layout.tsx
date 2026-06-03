import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "DohaHappyEndings — Where Desire Meets Discretion",
  description:
    "Doha's premier luxury connection platform. Seamlessly connect pleasure givers and seekers with absolute privacy and class.",
  keywords: ["Doha", "connections", "luxury", "discreet", "premium"],
  openGraph: {
    title: "DohaHappyEndings",
    description: "Where Desire Meets Discretion",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-obsidian text-silver-light antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
