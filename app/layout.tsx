import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import Script from "next/script";
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
    "Markaj Renting SA, créée en 2018 à Fribourg, compte 20 collaborateurs. Plâtrerie, peinture, faux-plafonds, isolation, rénovation et façades en Suisse romande.",
  icons: {
    icon: [
      { url: "/brand/markaj-favicon.svg", type: "image/svg+xml" },
      { url: "/brand/markaj-favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/brand/markaj-apple-touch-icon.png", sizes: "180x180" }],
  },
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
      <body className="min-h-screen font-body antialiased">
        {/*
          Consent Mode v2, tout refusé. Aucune requête Google :
          le fichier gtag.js n'est inséré qu'après « Accepter ».
        */}
        <Script id="markaj-ga-consent" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('consent', 'default', {
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              analytics_storage: 'denied',
              functionality_storage: 'denied',
              personalization_storage: 'denied',
              security_storage: 'granted',
              wait_for_update: 500
            });
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
