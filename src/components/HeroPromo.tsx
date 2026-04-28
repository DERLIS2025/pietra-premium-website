import { whatsappLinks } from '@/lib/whatsapp';

export function HeroPromo() {
  return (
    <section className="mx-auto mt-4 grid max-w-7xl gap-4 px-4 md:grid-cols-2">
      <div className="flex flex-col justify-center rounded-3xl bg-pietra-ivory p-8 shadow-premium">
        <span className="mb-4 inline-block w-fit rounded-full bg-pietra-sand/50 px-3 py-1 text-xs font-medium text-pietra-black">
          Diseñando espacios únicos desde 2008
        </span>
        <h1 className="text-3xl font-bold text-pietra-black md:text-5xl">Mesadas premium a medida para cocinas, baños y quinchos</h1>
        <p className="mt-4 text-pietra-black/80">
          Mármol, granito, cuarzo y superficies especiales con asesoría, fabricación e instalación profesional en Paraguay.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a className="rounded-full bg-pietra-green px-5 py-3 font-semibold text-white" href={whatsappLinks.quote}>Cotizar por WhatsApp</a>
          <a className="rounded-full border border-pietra-black px-5 py-3 font-semibold text-pietra-black" href="/materiales">Ver materiales</a>
        </div>
      </div>
      <div className="min-h-[360px] rounded-3xl bg-gradient-to-br from-pietra-green via-pietra-sand to-pietra-black" style={{ backgroundImage: "linear-gradient(rgba(26,26,26,0.15),rgba(26,26,26,0.35)),url('/banners/hero-cocina.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
    </section>
  );
}
