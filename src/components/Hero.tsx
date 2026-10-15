import { Zap } from "lucide-react";
import Link from "next/link";
import LogoMark from "@/components/LogoMark";

// Sección principal (portada)
export default function Hero() {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-brand-green-light to-white pt-28 pb-20 sm:pt-32 sm:pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-brand-green shadow-soft">
            <Zap className="h-4 w-4" />
            Cuadrilla certificada por la SEC
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Soluciones Eléctricas <span className="text-brand-green">Seguras y Certificadas</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-dark/70 sm:text-lg lg:mx-0">
            Somos ELECTROPATRIMONIO, una cuadrilla de electricistas certificados por la SEC, especializada en
            instalaciones domiciliarias de baja tensión.
          </p>

          </div>

          <div className="relative mx-auto flex w-full max-w-sm items-center justify-center">
            <div className="absolute inset-8 rounded-full bg-brand-orange/10 blur-3xl" aria-hidden="true" />
            <div className="relative rounded-[2rem] border border-brand-green/10 bg-white p-4 shadow-soft sm:p-8">
              <LogoMark
                alt="Emblema de ELECTROPATRIMONIO, instalaciones eléctricas domiciliarias"
                className="mx-auto h-44 w-44 shadow-lg ring-4 ring-white sm:h-64 sm:w-64"
              />
              <p className="mt-5 text-center text-sm font-semibold text-brand-dark">
                ELECTRO<span className="text-brand-orange">PATRIMONIO</span>
              </p>
              <p className="mt-1 text-center text-xs font-medium tracking-wide text-brand-dark/60">
                SEGURIDAD · CONFIANZA · CERTIFICACIÓN SEC
              </p>
            </div>
          </div>
        </div>

        <div
          aria-label="Espacio reservado para el carrusel de imágenes de proyectos"
          className="relative mx-auto mt-10 flex aspect-[4/3] w-full max-w-5xl items-center justify-center overflow-hidden rounded-3xl border border-brand-green/15 bg-brand-green-light shadow-soft sm:mt-12 sm:aspect-[16/7]"
        >
          <div className="absolute inset-2 rounded-2xl border border-dashed border-brand-green/25 sm:inset-3" aria-hidden="true" />
          <div className="relative px-4 text-center sm:px-6">
            <p className="font-heading text-xl font-semibold uppercase tracking-wide text-brand-green/70 sm:text-3xl sm:tracking-wider">
              Carrusel de proyectos
            </p>
            <p className="mt-2 text-sm text-brand-dark/60 sm:text-lg">
              Aquí podrás mostrar imágenes de tus trabajos
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/servicios"
            className="w-full rounded-full border border-brand-green/25 bg-white px-8 py-3 text-sm font-semibold shadow-soft transition hover:bg-brand-green-light sm:w-auto"
          >
            Ver Servicios
          </Link>
          <Link
            href="/contacto"
            className="w-full rounded-full bg-brand-orange px-8 py-3 text-sm font-semibold text-brand-dark shadow-soft transition hover:brightness-95 sm:w-auto"
          >
            Cotizar Ahora
          </Link>
        </div>
      </div>
    </section>
  );
}
