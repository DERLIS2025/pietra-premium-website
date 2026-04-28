const testimonials = [
  { name: 'Ana R.', text: 'La asesoría fue impecable. La mesada quedó mejor que el render.' },
  { name: 'Estudio Forma', text: 'Excelente terminación y tiempos de instalación muy prolijos.' },
  { name: 'Carlos M.', text: 'Cotizamos por WhatsApp y en días ya teníamos el proyecto instalado.' },
];

export function Testimonials() {
  return (
    <section className="mx-auto mt-12 max-w-7xl px-4">
      <h2 className="text-2xl font-bold text-pietra-black">Lo que dicen nuestros clientes</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {testimonials.map((item) => (
          <blockquote key={item.name} className="rounded-2xl border border-pietra-sand/40 bg-white p-5">
            <p className="text-pietra-black/80">“{item.text}”</p>
            <footer className="mt-3 font-semibold text-pietra-green">{item.name}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
