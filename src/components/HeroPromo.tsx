import { whatsappLinks } from '@/lib/whatsapp';

const highlights = [
  'Asesoría profesional en minutos',
  'Recomendación por uso real del espacio',
  'Fabricación e instalación a medida',
];

export function HeroPromo() {
  return (
    <section className="mx-auto mt-5 grid max-w-7xl gap-4 px-4 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="rounded-3xl border border-pietra-sand/30 bg-pietra-ivory p-6 md:p-8">
        <span className="inline-block rounded-full bg-white px-3 py-1 text-xs font-semibold text-pietra-green">
          Diseño premium para espacios reales
        </span>

        <h1 className="mt-4 text-3xl font-bold leading-tight text-pietra-black md:text-5xl">
          Mesadas premium a medida para cocinas, baños y quinchos
        </h1>

        <p className="mt-4 max-w-xl text-pietra-black/80">
          Elegí el material ideal para transformar tu espacio con asesoría
          profesional y trabajos a medida.
        </p>

        <ul className="mt-5 space-y-1.5 text-sm text-pietra-black/75">
          {highlights.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            className="rounded-full bg-pietra-green px-5 py-2.5 text-sm font-semibold text-white"
            href={whatsappLinks.quote}
          >
            Cotizar por WhatsApp
          </a>

          <a
            className="rounded-full border border-pietra-black/60 px-5 py-2.5 text-sm font-semibold text-pietra-black"
            href="/materiales"
          >
            Ver materiales
          </a>
        </div>
      </div>

      <div
        className="min-h-[280px] rounded-3xl border border-pietra-sand/35"
        style={{
          backgroundImage:
            "linear-gradient(130deg, rgba(26,26,26,0.3), rgba(26,26,26,0.08)), url('/banners/hero-cocina.jpg')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      />
    </section>
  );
}