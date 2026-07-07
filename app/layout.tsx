import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Markaj Renting SA",
    template: "%s | Markaj Renting SA",
  },
  description:
    "Plâtrerie, peinture, faux-plafonds, isolation et rénovation en Suisse romande. Entreprise familiale à Fribourg.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A2B5E",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-CH" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen font-body antialiased">{children}</body>
    </html>
  );
}
