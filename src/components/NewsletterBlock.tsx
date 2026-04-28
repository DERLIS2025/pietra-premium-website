export function NewsletterBlock() {
  return (
    <section className="mx-auto mt-12 max-w-7xl px-4">
      <div className="rounded-3xl border border-pietra-sand/40 bg-pietra-ivory p-8">
        <h2 className="text-2xl font-bold text-pietra-black">Recibí ideas para tu cocina, baño o quincho</h2>
        <p className="mt-2 text-pietra-black/75">Dejanos tu email o WhatsApp y te enviamos inspiración y tips de materiales premium.</p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <input className="w-full rounded-full border border-pietra-sand/60 px-4 py-3" placeholder="Tu email o número de WhatsApp" />
          <button className="rounded-full bg-pietra-green px-6 py-3 font-semibold text-white">Quiero recibir ideas</button>
        </div>
      </div>
    </section>
  );
}
