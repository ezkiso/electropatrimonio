import type { Metadata } from "next";
import { EB_Garamond, Oswald } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { defaultSocialImage, siteUrl } from "@/lib/seo";
import "./globals.css";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

// Metadatos SEO
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ELECTROPATRIMONIO | Electricistas certificados por la SEC",
    template: "%s | ELECTROPATRIMONIO",
  },
  description:
    "Servicios eléctricos domiciliarios de baja tensión: alumbrado, calefacción, fuerza motriz y mantenimiento. Electricistas certificados por la SEC en Chile.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "ELECTROPATRIMONIO | Electricistas certificados por la SEC",
    description:
      "Servicios eléctricos domiciliarios de baja tensión: alumbrado, calefacción, fuerza motriz y mantenimiento. Electricistas certificados por la SEC en Chile.",
    siteName: "ELECTROPATRIMONIO",
    locale: "es_CL",
    type: "website",
    images: [defaultSocialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "ELECTROPATRIMONIO | Electricistas certificados por la SEC",
    description:
      "Servicios eléctricos domiciliarios de baja tensión: alumbrado, calefacción, fuerza motriz y mantenimiento. Electricistas certificados por la SEC en Chile.",
    images: [defaultSocialImage],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-CL">
      <body className={`${ebGaramond.variable} ${oswald.variable} font-sans`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
