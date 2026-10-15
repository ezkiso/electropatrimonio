import { ShieldCheck, Clock, Wrench } from "lucide-react";

// Tarjetas de valor
const items = [
  {
    icon: ShieldCheck,
    title: "Certificación SEC",
    text: "Electricistas certificados que trabajan bajo la normativa vigente, con documentación técnica en regla.",
    color: "text-brand-red bg-brand-red-light",
  },
  {
    icon: Clock,
    title: "Puntualidad",
    text: "Respetamos los horarios y plazos acordados. Tu tiempo es tan importante como tu seguridad.",
    color: "text-brand-green bg-brand-green-light",
  },
  {
    icon: Wrench,
    title: "Trabajo Limpio",
    text: "Dejamos el lugar ordenado y limpio. Instalaciones prolijas, bien canalizadas y fáciles de mantener.",
    color: "text-brand-red bg-brand-red-light",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-brand-red-light py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">¿Por qué elegirnos?</h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map(({ icon: Icon, title, text, color }) => (
            <article key={title} className="rounded-2xl border border-brand-red/10 bg-white p-8 text-center shadow-soft">
              <div className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full ${color}`}>
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-lg font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-dark/70">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
