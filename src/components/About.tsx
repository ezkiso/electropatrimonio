// Reseña de la cuadrilla
export default function About() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold sm:text-4xl">Sobre Nosotros</h2>
        <p className="mt-6 leading-relaxed text-brand-dark/75">
          Somos una cuadrilla de tres electricistas certificados por la SEC que trabaja de forma cercana con cada
          cliente. Conocemos las necesidades de las viviendas y los pequeños comercios de nuestra zona, y ponemos
          nuestra experiencia local al servicio de instalaciones seguras, bien hechas y bien documentadas.
        </p>
        <p className="mt-4 leading-relaxed text-brand-dark/75">
          Al ser un equipo pequeño, te atendemos directamente: sin intermediarios, con trato transparente y
          presupuestos claros.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-brand-green-light p-5">
            <div className="text-3xl font-extrabold text-brand-green">3</div>
            <div className="mt-1 text-xs text-brand-dark/70">Electricistas certificados</div>
          </div>
          <div className="rounded-2xl bg-white p-5 shadow-soft">
            <div className="text-3xl font-extrabold text-brand-green">SEC</div>
            <div className="mt-1 text-xs text-brand-dark/70">Certificación vigente</div>
          </div>
          <div className="rounded-2xl bg-brand-red-light p-5">
            <div className="text-3xl font-extrabold text-brand-red">100%</div>
            <div className="mt-1 text-xs text-brand-dark/70">Trato directo</div>
          </div>
        </div>
      </div>
    </section>
  );
}
