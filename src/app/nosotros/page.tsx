import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Quiénes somos",
  description:
    "Conoce a ELECTROPATRIMONIO: una cuadrilla cercana de electricistas certificados por la SEC, especializada en instalaciones domiciliarias de baja tensión.",
  path: "/nosotros",
});

export default function AboutPage() {
  return (
    <main className="pt-20">
      <div className="bg-brand-red-light px-4 pb-8 pt-14 text-center sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-red">Quiénes somos</p>
        <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Una cuadrilla cercana y certificada</h1>
      </div>
      <About />
      <WhyUs />
    </main>
  );
}
