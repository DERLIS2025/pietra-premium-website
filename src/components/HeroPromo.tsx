import { whatsappLinks } from '@/lib/whatsapp';

const promos = [
  'Asesoría profesional en minutos',
  'Recomendación por uso real del espacio',
  'Fabricación e instalación a medida',
];

export function HeroPromo() {
  return (
    <section className="mx-auto mt-4 grid max-w-7xl gap-4 px-4 lg:grid-cols-[1.25fr_0.75fr]">
      <div className="rounded-3xl border border-pietra-sand/30 bg-pietra-ivory p-6 shadow-premium md:p-8">
        <span className="inline-block rounded-full bg-pietra-sand/55 px-3 py-1 text-xs font-semibold text-pietra-black">
          Diseñando espacios únicos desde 2008
        </span>

        <h1 className="mt-4 text-3xl font-bold leading-tight text-pietra-black md:text-5xl">
          Mesadas premium a medida para cocinas, baños y quinchos
        </h1>

        <p className="mt-4 max-w-2xl text-pietra-black/80">
          Elegí el material ideal para transformar tu espacio con asesoría profesional y trabajos a medida.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            className="rounded-full bg-pietra-green px-6 py-3 font-semibold text-white"
            href={whatsappLinks.quote}
          >
            Cotizar por WhatsApp
          </a>

          <a
            className="rounded-full border border-pietra-black/60 px-6 py-3 font-semibold text-pietra-black"
            href="/materiales"
          >
            Ver materiales
          </a>
        </div>

        <div className="mt-6 grid gap-2 sm:grid-cols-3">
          {promos.map((promo) => (
            <div
              key={promo}
              className="rounded-xl border border-pietra-sand/40 bg-white px-3 py-2 text-xs font-medium text-pietra-black"
            >
              {promo}
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-4">
        <div
          className="min-h-[260px] rounded-3xl border border-pietra-sand/35"
          style={{
            backgroundImage:
              "linear-gradient(120deg, rgba(26,26,26,0.35), rgba(26,26,26,0.08)), radial-gradient(circle at 75% 20%, rgba(255,255,255,0.2), transparent 45%), url('/banners/hero-cocina.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <div className="rounded-2xl border border-pietra-sand/35 bg-white p-5 text-pietra-black shadow-sm">
          <p className="text-xs uppercase tracking-[0.16em] text-pietra-green">
            Asesoría express
          </p>

          <h3 className="mt-2 text-xl font-semibold">
            Enviá tus medidas y recibí propuesta por WhatsApp
          </h3>

          <a
            className="mt-3 inline-block text-sm font-semibold text-pietra-green"
            href={whatsappLinks.general}
          >
            Enviar medidas →
          </a>
        </div>
      </div>
    </section>
  );
}
