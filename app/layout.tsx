import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://markajrenting.ch"),
  title: {
    default: "Markaj Renting SA",
    template: "%s | Markaj Renting SA",
  },
  description:
    "Plâtrerie, peinture, faux-plafonds, isolation et rénovation à Fribourg, Lausanne, Genève et en Suisse romande. Entreprise familiale à Fribourg.",
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
    <html lang="fr-CH" className={`${playfair.variable} ${sourceSans.variable}`}>
      <body className="min-h-screen font-body antialiased">{children}</body>
    </html>
  );
}
