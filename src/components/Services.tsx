import { CheckCircle2, MapPin } from "lucide-react";

// Trabajos permitidos dentro del alcance de la certificación
const trabajos = [
  "Cableado, canalización y tendido eléctrico domiciliario.",
  "Instalación de tableros de distribución, automáticos y diferenciales.",
  "Montaje de enchufes, interruptores y puntos de iluminación.",
  "Reparación y mantenimiento de fallas en baja tensión.",
  "Confección de documentación técnica (Declaraciones Simples o TE1 según Pliegos Técnicos RIC).",
];

export default function Services() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Nuestros Servicios</h2>
          <p className="mt-4 text-brand-dark/70">
            Trabajamos dentro de los límites que establece nuestra certificación SEC, para que tu instalación sea
            segura y esté en regla.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Alumbrado */}
          <article className="rounded-2xl border border-brand-green/15 bg-brand-green-light p-6 shadow-soft sm:p-8">
            <div className="text-3xl">🏠</div>
            <h3 className="mt-4 text-xl font-bold">Instalaciones de Alumbrado</h3>
            <p className="mt-3 text-sm leading-relaxed text-brand-dark/70">
              Baja tensión, <strong>máximo 10 kW</strong> de potencia total instalada, sin alimentadores. Dirigido a
              viviendas unifamiliares y departamentos de baja altura.
            </p>
          </article>

          {/* Calefacción y fuerza motriz */}
          <article className="rounded-2xl border border-brand-green/15 bg-white p-6 shadow-soft sm:p-8">
            <div className="text-3xl">🔥</div>
            <h3 className="mt-4 text-xl font-bold">Calefacción y Fuerza Motriz</h3>
            <p className="mt-3 text-sm leading-relaxed text-brand-dark/70">
              Baja tensión, <strong>máximo 5 kW</strong> de potencia total instalada, sin alimentadores.
            </p>
          </article>

          {/* Trabajos permitidos */}
          <article className="rounded-2xl border border-brand-red/15 bg-brand-red-light p-6 shadow-soft sm:p-8 md:col-span-2">
            <div className="text-3xl">🛠️</div>
            <h3 className="mt-4 text-xl font-bold">Trabajos Permitidos</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {trabajos.map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm text-brand-dark/80">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        {/* Ámbito de aplicación */}
        <div className="mt-6 flex items-start gap-3 rounded-2xl bg-brand-green-light p-5 sm:p-6">
          <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" />
          <p className="text-sm leading-relaxed text-brand-dark/80">
            <strong>Ámbito de aplicación:</strong> casas unifamiliares, departamentos, ampliaciones residenciales y
            locales comerciales menores.
          </p>
        </div>
      </div>
    </section>
  );
}
