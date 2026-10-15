import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Services from "@/components/Services";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Servicios eléctricos domiciliarios",
  description:
    "Instalaciones de alumbrado, calefacción, fuerza motriz y mantenimiento eléctrico domiciliario, dentro del alcance de la certificación SEC.",
  path: "/servicios",
});

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <div className="bg-brand-red-light px-4 pb-8 pt-14 text-center sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-red">Servicios eléctricos</p>
        <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Soluciones para tu hogar</h1>
      </div>
      <Services />
      <div className="border-t-4 border-brand-red bg-brand-dark px-4 py-12 text-center text-white sm:px-6">
        <p className="text-xl">¿Necesitas ayuda con una instalación?</p>
        <Link
          href="/contacto"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-orange px-6 py-3 font-semibold text-brand-dark transition hover:brightness-95"
        >
          Cuéntanos tu proyecto <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </main>
  );
}
