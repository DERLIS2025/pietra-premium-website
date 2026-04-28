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
      <div className="mt-4 grid gap-3 md:grid-cols-4">
        {steps.map((step, idx) => (
          <article key={step} className="rounded-2xl border border-pietra-sand/40 bg-pietra-ivory p-4">
            <span className="text-sm font-semibold text-pietra-green">Paso {idx + 1}</span>
            <p className="mt-2 font-medium text-pietra-black">{step}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
