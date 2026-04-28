import Link from 'next/link';
import type { Material } from '@/data/materials';
import { whatsappLinks } from '@/lib/whatsapp';

type Props = {
  material: Material;
};

export function ProductCard({ material }: Props) {
  return (
    <article className="group rounded-2xl border border-pietra-sand/35 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:shadow-premium">
      <div className="relative">
        <button
          aria-label="Agregar a favoritos"
          className="absolute right-3 top-3 z-10 rounded-full bg-white/90 px-2 py-1 text-sm shadow"
        >
          ♡
        </button>

        <div
          className="h-52 rounded-xl bg-gradient-to-br from-pietra-green to-pietra-sand"
          style={{
            backgroundImage: `linear-gradient(130deg, rgba(26,26,26,0.35), rgba(26,26,26,0.08)), radial-gradient(circle at 20% 20%, rgba(255,255,255,0.24), transparent 48%), url('${material.image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      <div className="mt-3 flex items-center justify-between gap-2">
        <span className="rounded-full bg-pietra-ivory px-3 py-1 text-xs font-semibold text-pietra-green">
          {material.badge}
        </span>

        <span className="text-xs font-semibold uppercase tracking-wide text-pietra-black/60">
          {material.category}
        </span>
      </div>

      <h3 className="mt-2 text-lg font-semibold text-pietra-black">
        {material.name}
      </h3>

      <p className="mt-1 text-sm font-semibold text-pietra-green">
        Desde Gs. consultar
      </p>

      <ul className="mt-3 grid gap-1 text-sm text-pietra-black/75">
        {material.benefits.slice(0, 3).map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>

      <div className="mt-4 grid gap-2">
        <a
          className="rounded-full bg-pietra-green px-4 py-2 text-center text-sm font-semibold text-white"
          href={whatsappLinks.materials(material.name)}
        >
          Consultar por WhatsApp
        </a>

        <Link
          className="rounded-full border border-pietra-black px-4 py-2 text-center text-sm font-semibold"
          href={`/materiales/${material.slug}`}
        >
          Ver detalles
        </Link>
      </div>
    </article>
  );
}