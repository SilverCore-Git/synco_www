import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Self-hosted: next/font/google crashes Bun at the end of `next build`.
const interTight = localFont({
  src: "../fonts/InterTight-latin.woff2",
  weight: "100 900",
  variable: "--font-inter-tight",
});

export const metadata: Metadata = {
  title: "Synco",
  description:
    "La collaboration d'équipe sans compromis sur la sécurité.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={interTight.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
