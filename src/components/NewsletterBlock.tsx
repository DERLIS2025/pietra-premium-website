import { whatsappLinks } from '@/lib/whatsapp';

export function NewsletterBlock() {
  return (
    <section className="mx-auto mt-10 max-w-7xl px-4">
      <div className="rounded-3xl border border-pietra-sand/40 bg-pietra-ivory p-6 sm:p-7">
        <h2 className="text-2xl font-bold text-pietra-black">
          ¿Querés ideas para tu proyecto?
        </h2>
        <p className="mt-2 max-w-3xl text-pietra-black/75">
          Te orientamos por WhatsApp con materiales recomendados para tu cocina,
          baño o quincho.
        </p>
        <a
          className="mt-4 inline-block rounded-full bg-pietra-green px-5 py-2.5 text-sm font-semibold text-white"
          href={whatsappLinks.general}
        >
          Hablar con un asesor
        </a>
      </div>
    </section>
  );
}
