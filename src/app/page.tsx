import Hero from "@/components/Hero";
import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Users, MessageCircle } from "lucide-react";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Electricistas certificados por la SEC",
  description:
    "Soluciones eléctricas domiciliarias de baja tensión, instalaciones y mantenimiento. Conoce nuestros servicios y solicita una cotización.",
  path: "/",
});

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="bg-brand-red-light py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-red">ELECTROPATRIMONIO</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Todo lo que necesitas, en un solo lugar</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <PageCard href="/servicios" icon={<BriefcaseBusiness className="h-6 w-6" />} title="Servicios" description="Conoce nuestros trabajos eléctricos y su alcance." />
            <PageCard href="/nosotros" icon={<Users className="h-6 w-6" />} title="Nosotros" description="Descubre quiénes somos y cómo trabajamos." />
            <PageCard href="/contacto" icon={<MessageCircle className="h-6 w-6" />} title="Contacto" description="Conversemos sobre tu proyecto y su cotización." />
          </div>
        </div>
      </section>
    </main>
  );
}

function PageCard({
  href,
  icon,
  title,
  description,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-brand-red/15 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-brand-red/40"
    >
      <span className="inline-flex rounded-xl bg-brand-red-light p-3 text-brand-red">{icon}</span>
      <h3 className="mt-4 text-xl font-bold">{title}</h3>
      <p className="mt-2 text-brand-dark/70">{description}</p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-red">
        Ver más <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
