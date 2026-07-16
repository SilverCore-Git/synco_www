import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Synco | L'Avenir de la Collaboration Sécurisée",
  description: "Synco est un espace de travail tout-en-un alliant la fluidité de Slack et la puissance de Teams, avec une protection absolue des données (E2EE).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} antialiased bg-background bg-grid`}>{children}</body>
    </html>
  );
}
