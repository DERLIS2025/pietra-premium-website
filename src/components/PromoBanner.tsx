import { whatsappLinks } from '@/lib/whatsapp';

export function PromoBanner() {
  return (
    <section className="mx-auto mt-10 max-w-7xl px-4">
      <div className="rounded-3xl bg-pietra-black p-8 text-pietra-ivory">
        <p className="text-sm uppercase tracking-[0.2em] text-pietra-sand">Proyecto destacado del mes</p>
        <h2 className="mt-2 text-3xl font-bold">Isla de cocina escultórica en cuarzo Calacatta</h2>
        <p className="mt-3 max-w-2xl text-pietra-ivory/85">Diseño minimalista con terminaciones premium, integración de bacha y alzada en una sola pieza para un resultado impecable.</p>
        <a className="mt-5 inline-block rounded-full bg-pietra-green px-5 py-3 font-semibold text-white" href={whatsappLinks.project('Isla de cocina escultórica')}>
          Quiero asesoría por WhatsApp
        </a>
      </div>
    </section>
  );
}
