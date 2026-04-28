const steps = [
  'Elegís el material',
  'Enviás medidas o foto por WhatsApp',
  'Recibís asesoría y presupuesto',
  'Coordinamos fabricación e instalación',
];

export function HowItWorks() {
  return (
    <section className="mx-auto mt-12 max-w-7xl px-4">
      <h2 className="text-2xl font-bold text-pietra-black">Cómo funciona</h2>
      <div className="-mx-4 mt-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-1 md:mx-0 md:grid md:grid-cols-4 md:gap-3 md:overflow-visible md:px-0">
        {steps.map((step, idx) => (
          <article
            className="w-[78%] shrink-0 snap-start rounded-2xl border border-pietra-sand/35 bg-white p-4 sm:w-[52%] md:w-auto"
            key={step}
          >
            <span className="text-sm font-semibold text-pietra-green">Paso {idx + 1}</span>
            <p className="mt-2 font-medium text-pietra-black">{step}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
