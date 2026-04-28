import { whatsappLinks } from '@/lib/whatsapp';

export function PromoBanner() {
  return (
    <section className="mx-auto mt-10 max-w-7xl px-4">
      <div
        className="grid gap-4 rounded-3xl bg-pietra-black p-6 text-pietra-ivory md:grid-cols-[1.3fr_0.7fr] md:p-8"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(26,26,26,0.92), rgba(26,26,26,0.7)), url('/banners/promo-mesadas.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-pietra-sand">
            Proyecto destacado del mes
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Mesadas de cocina y baño con materiales reales y asesoría sin costo
          </h2>

          <p className="mt-3 max-w-2xl text-pietra-ivory/85">
            Enviá medidas por WhatsApp y recibí una recomendación personalizada
            para granito, mármol, cuarzo o neolith según tu proyecto.
          </p>

          <a
            className="mt-5 inline-block rounded-full bg-pietra-green px-5 py-3 font-semibold text-white"
            href={whatsappLinks.quote}
          >
            Cotizar por WhatsApp
          </a>
        </div>

        <div className="rounded-2xl border border-pietra-sand/30 bg-pietra-ivory/10 p-4 backdrop-blur-sm">
          <h3 className="font-semibold text-pietra-sand">
            Semana de asesoría premium
          </h3>

          <p className="mt-2 text-sm text-pietra-ivory/85">
            Enviá foto de cocina, baño o quincho y te proponemos combinaciones de
            materiales con enfoque comercial y arquitectónico.
          </p>

          <a
            className="mt-4 inline-block text-sm font-semibold text-white"
            href={whatsappLinks.general}
          >
            Enviar medidas →
          </a>
        </div>
      </div>
    </section>
  );
}
