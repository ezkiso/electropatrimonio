import type { Metadata } from "next";
import { EB_Garamond, Oswald } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
  title: "ELECTROPATRIMONIO | Cuadrilla Eléctrica Certificada por la SEC",
  description:
    "Servicios eléctricos domiciliarios en baja tensión. Instalaciones de alumbrado, calefacción, fuerza motriz y mantenimiento. Certificados por la SEC en Chile.",
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
